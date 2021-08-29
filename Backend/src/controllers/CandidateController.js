const Candidate = require('../models/Candidate')

module.exports = {
  async register(req, res) {
    const {
      name,
      position,
      date,
      gender,
      email,
      phone,
      cep,
      logradouro,
      district,
      city,
      id,
      cpf
    } = req.body

    const newCandidate = new Candidate()

    newCandidate.name = name
    newCandidate.position = position
    newCandidate.date = date
    newCandidate.gender = gender
    newCandidate.email = email
    newCandidate.phone = phone
    newCandidate.cep = cep
    newCandidate.logradouro = logradouro
    newCandidate.district = district
    newCandidate.city = city
    newCandidate.id = id
    newCandidate.cpf = cpf

    newCandidate.save((err, savedCandidate) => {
      if (err) {
        console.log(err)
        return res.status(500).send('erro!')
      }

      return res.status(200).send(savedCandidate)
    })
  }
}
