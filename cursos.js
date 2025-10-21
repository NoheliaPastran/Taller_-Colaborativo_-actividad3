// Importar Express
import express from "express";

// Importar las funciones del controlador de cursos
import {
  crearCurso,
  obtenerCursos,
  obtenerCursoPorId,
  actualizarCurso,
  eliminarCurso
} from "../controllers/cursoController.js";

// Crear enrutador
const router = express.Router();

/**
 * Rutas disponibles para la gestión de cursos
 */

// Crear un nuevo curso
// POST /api/cursos/crear
router.post("/crear", crearCurso);

// Obtener todos los cursos
// GET /api/cursos/
router.get("/", obtenerCursos);

// Obtener un curso específico por ID
// GET /api/cursos/:id
router.get("/:id", obtenerCursoPorId);

// Actualizar curso existente
// PUT /api/cursos/:id
router.put("/:id", actualizarCurso);

// Eliminar curso
// DELETE /api/cursos/:id
router.delete("/:id", eliminarCurso);

// Exportar las rutas
export default router;