const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('welcome to server!!');
});

module.exports = router;
