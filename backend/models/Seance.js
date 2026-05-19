const mongoose = require('mongoose')

const SeanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  emoji: {
    type: String,
    default: '💪'
  },
  duree: {
    type: String,
    required: true
  },
  exercices: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Seance', SeanceSchema)