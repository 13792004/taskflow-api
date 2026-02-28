const service = require('../services/undoService');

exports.push = (req, res) => {
  const { action } = req.body;

  if (!action) {
    return res.status(400).json({ error: "action es requerido" });
  }

  res.status(201).json(service.push(action));
};

exports.peek = (req, res) => {
  const action = service.peek();

  if (!action) {
    return res.status(404).json({ error: "Pila vacía" });
  }

  res.status(200).json(action);
};

exports.pop = (req, res) => {
  const action = service.pop();

  if (!action) {
    return res.status(404).json({ error: "Pila vacía" });
  }

  res.status(200).json(action);
};