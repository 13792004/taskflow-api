const service = require('../services/queueService');

exports.enqueue = (req, res) => {
  const { taskId } = req.body;

  if (!taskId) {
    return res.status(400).json({ error: "taskId es requerido" });
  }

  res.status(201).json(service.enqueue(taskId));
};

exports.next = (req, res) => {
  const next = service.next();

  if (!next) {
    return res.status(404).json({ error: "Cola vacía" });
  }

  res.status(200).json(next);
};

exports.dequeue = (req, res) => {
  const item = service.dequeue();

  if (!item) {
    return res.status(404).json({ error: "Cola vacía" });
  }

  res.status(200).json(item);
};