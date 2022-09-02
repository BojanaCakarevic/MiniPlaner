var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var users = {};

router.post('/login', (req, res) => {
  var user = req.body;
  if (users[user.username] && users[user.username] === user.password) {
    res.json({
      msg: 'Uspešno ste se ulogovali.',
      token: jwt.sign({ user: user.username }, 'SECRET')
    });
  } else {
    res.status(400).json({ msg: 'Nevažeće korisničko ime ili lozinka' });
  }
});

router.post('/register', (req, res) => {
  var user = req.body;
  if (users[user.username]) {
    res.status(400).json({ msg: 'Korisnik sa ovim imenom već postoji, molimo, ulogujte se.' });
  } else {
    users[user.username] = user.password;
    res.json({
      msg: 'Registracija uspešna! Ulogujte se.'
    });
  }
});

module.exports = router;
