const express = require('express')
const router = express.Router()
const Seance = require('../models/Seance')
const auth = require('../middleware/auth')

// GET toutes les séances de l'user
router.get('/', auth, async (req, res) => {
  try {
    const seances = await Seance.find({ userId: req.user.id }).sort({ date: -1 })
    res.json(seances)
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

// POST nouvelle séance
router.post('/', auth, async (req, res) => {
  try {
    const { nom, emoji, duree, exercices } = req.body
    const seance = new Seance({
      userId: req.user.id,
      nom,
      emoji,
      duree,
      exercices
    })
    await seance.save()
    res.status(201).json(seance)
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

// DELETE une séance
router.delete('/:id', auth, async (req, res) => {
  try {
    await Seance.findByIdAndDelete(req.params.id)
    res.json({ message: 'Séance supprimée' })
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

module.exports = router