const router = require('express').Router();
const service = require('../services/undoService');

router.post('/', (req, res) => {
  if (!req.body.description) return res.sendStatus(400);
  res.status(201).json(service.push(req.body.description));
});

router.get('/peek', (req, res) => res.json(service.peek()));
router.delete('/', (req, res) => res.json(service.pop()));

module.exports = router;