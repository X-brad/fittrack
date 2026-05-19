const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Register
router.post('/register', async (req, res) => {
  try {
    const { nom, email, password } = req.body

    // Vérif si user existe déjà
    const userExiste = await User.findOne({ email })
    if (userExiste) {
      return res.status(400).json({ message: 'Email déjà utilisé' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Créer user
    const user = new User({ nom, email, password: hashedPassword })
    await user.save()

    // Créer token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.status(201).json({ token, user: { id: user._id, nom: user.nom, email: user.email } })

  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Vérif user
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' })
    }

    // Vérif password
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' })
    }

    // Créer token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({ token, user: { id: user._id, nom: user.nom, email: user.email } })

  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

module.exports = router