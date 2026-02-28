# TaskFlow API

API REST en memoria que implementa estructuras de datos:

* Lista Enlazada = Backlog de tareas
* Pila = Undo de acciones
* Cola = Processing Queue

## Tecnologías

Node.js + Express

## Ejecutar

npm install
node src/app.js

## Endpoints principales

POST /backlog/tasks = crear tarea
GET /backlog/tasks = listar tareas
DELETE /backlog/tasks/{id} = eliminar

POST /undo = registrar acción
GET /undo/peek = ver última acción

POST /queue = encolar tarea
GET /queue/next = ver siguiente

## Arquitectura

Controller = maneja HTTP
Service = lógica del sistema
Repository = estructuras en memoria
Model = entidades del sistema
