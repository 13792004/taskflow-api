const service = require('../services/backlogService');

exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title es requerido" });
  }

  const task = service.createTask(title);
  res.status(201).json(task);
};

exports.getAll = (req, res) => {
  res.status(200).json(service.getAll());
};

exports.getById = (req, res) => {
  const task = service.getById(req.params.id);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.status(200).json(task);
};

exports.deleteTask = (req, res) => {
  const deleted = service.deleteTask(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.status(204).send();
};