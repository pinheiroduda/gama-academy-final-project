const mongoose = require('mongoose')

const CandidateSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: true },
    position: { type: String, unique: false, required: true },
    date: { type: Date, unique: false, required: true },
    gender: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    district: { type: String, unique: false, required: true },
    city: { type: String, unique: false, required: true },
    id: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Candidate', CandidateSchema)
