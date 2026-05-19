const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/seances', require('./routes/seances'))

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'FitTrack API fonctionne ! 💪' })
})

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connecté')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Serveur lancé sur le port ${process.env.PORT || 5000}`)
    })
  })
  .catch(err => console.log('❌ Erreur MongoDB:', err))