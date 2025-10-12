// File path: server/src/models/Note.js
// REPLACE entire file with this

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true,
    enum: ['#FFE5E5', '#FFF4E5', '#E5F5FF', '#F0E5FF', '#E5FFE5', '#FFE5F5'],
    default: '#FFE5E5'
  },
  isPinned: {
    type: Boolean,
    default: false
  },
  createdByName: {
    type: String,
    default: 'Team Member'
  }
}, {
  timestamps: true
});

noteSchema.index({ isPinned: -1, createdAt: -1 });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;