const router = require('express').Router();
const service = require('../services/queueService');

router.post('/', (req, res) => {
  if (!req.body.task) return res.sendStatus(400);
  res.status(201).json(service.enqueue(req.body.task));
});

router.get('/next', (req, res) => res.json(service.peek()));
router.delete('/', (req, res) => res.json(service.dequeue()));

module.exports = router;
