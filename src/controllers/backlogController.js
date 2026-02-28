const router = require('express').Router();
const service = require('../services/backlogService');

router.post('/tasks', (req, res) => {
  if (!req.body.title) return res.sendStatus(400);
  res.status(201).json(service.createTask(req.body.title));
});

router.get('/tasks', (req, res) => {
  res.json(service.getAll());
});

router.get('/tasks/:id', (req, res) => {
  const t = service.getById(req.params.id);
  if (!t) return res.sendStatus(404);
  res.json(t);
});

router.delete('/tasks/:id', (req, res) => {
  if (!service.delete(req.params.id)) return res.sendStatus(404);
  res.sendStatus(204);
});

module.exports = router;