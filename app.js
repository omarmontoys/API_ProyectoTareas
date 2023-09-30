const express = require("express");
const app = express();
const port = process.env.port || 3000;
app.use(express.json()); //Habilitacion para recibir datos por medio de solicitud (insomnia)

let proyectos = [
	{
		id: 1,
		nombre: "Proyecto A",
		descripcion: "Descripción del Proyecto A",
		fecha_inicio: "2023-09-01",
		fecha_finalizacion: "2023-09-10",
	},
	{
		id: 2,
		nombre: "Proyecto B",
		descripcion: "Descripción del Proyecto B",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 3,
		nombre: "Proyecto C",
		descripcion: "Descripción del Proyecto C",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 4,
		nombre: "Proyecto D",
		descripcion: "Descripción del Proyecto D",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 5,
		nombre: "Proyecto E",
		descripcion: "Descripción del Proyecto E",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 6,
		nombre: "Proyecto F",
		descripcion: "Descripción del Proyecto F",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 7,
		nombre: "Proyecto G",
		descripcion: "Descripción del Proyecto G",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 8,
		nombre: "Proyecto H",
		descripcion: "Descripción del Proyecto H",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 9,
		nombre: "Proyecto I",
		descripcion: "Descripción del Proyecto I",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
	{
		id: 10,
		nombre: "Proyecto J",
		descripcion: "Descripción del Proyecto J",
		fecha_inicio: "2023-09-05",
		fecha_finalizacion: "2023-09-15",
	},
];

let tareas = [
	{
		id: 1,
		id_proyecto: 1,
		nombre: "Tarea 1",
		descripcion: "Descripción de la Tarea 1",
		fecha_asignacion: "2023-09-02",
		estado: "false",
	},
	{
		id: 2,
		id_proyecto: 1,
		nombre: "Tarea 2",
		descripcion: "Descripción de la Tarea 2",
		fecha_asignacion: "2023-09-03",
		estado: "true",
	},
	{
		id: 3,
		id_proyecto: 2,
		nombre: "Tarea 3",
		descripcion: "Descripción de la Tarea 3",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 4,
		id_proyecto: 3,
		nombre: "Tarea 4",
		descripcion: "Descripción de la Tarea 4",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 5,
		id_proyecto: 4,
		nombre: "Tarea 5",
		descripcion: "Descripción de la Tarea 5",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 6,
		id_proyecto: 5,
		nombre: "Tarea 6",
		descripcion: "Descripción de la Tarea 6",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 7,
		id_proyecto: 6,
		nombre: "Tarea 7",
		descripcion: "Descripción de la Tarea 7",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 8,
		id_proyecto: 7,
		nombre: "Tarea 8",
		descripcion: "Descripción de la Tarea 8",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 9,
		id_proyecto: 8,
		nombre: "Tarea 9",
		descripcion: "Descripción de la Tarea 9",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
	{
		id: 10,
		id_proyecto: 9,
		nombre: "Tarea 10",
		descripcion: "Descripción de la Tarea 10",
		fecha_asignacion: "2023-09-06",
		estado: "false",
	},
];

// Obtener la lista de todos las tareas (GET).
app.get("/social/v1/tareas/", (req, res) => {
	if (tareas.length > 0) {
		res.status(200).json({
			estado: 1,
			mensaje: "Existen tareas",
			tareas: tareas,
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontraron tareas",
		});
	}
});
// Obtener una tarea por su ID (GET).
app.get("/social/v1/tareas/:id", (req, res) => {
	const id = req.params.id;
	const tarea = tareas.find((tarea) => tarea.id == id);
	if (tarea) {
		res.status(200).json({
			estado: 1,
			mensaje: "Tarea Encontrada",
			tarea: tarea,
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontro la tarea",
		});
	}
});
// Agregar una nueva tarea por su ID (POST).
app.post("/social/v1/tareas", (req, res) => {
	const id = Math.round(Math.random() * 1000);
	const id_proyecto = Math.round(Math.random() * 1000);
	const estado = "false";
	const { nombre, descripcion, fecha } = req.body;
	if (nombre == undefined || descripcion == undefined) {
		res.status(404).json({
			estado: 0,
			mensaje: "BAD REQUEST",
		});
	} else {
		const tarea = {
			id: id,
			id_proyecto: id_proyecto,
			fecha: fecha,
			estado: estado,
			nombre: nombre,
			descripcion: descripcion,
		};
		const longInicial = tareas.length;
		tareas.push(tarea);
		if (tareas.length > longInicial) {
			res.status(201).json({
				estado: 1,
				mensaje: "Tarea Agregada",
				tarea: tarea,
			});
		} else {
			res.status(500).json({
				estado: 0,
				mensaje: "No se agrego correctamente",
			});
		}
	}
});
// Actualizar una tarea por su ID (PUT).
app.put("/social/v1/tareas/:id", (req, res) => {
	const id = req.params.id;
	const { nombre, descripcion, id_proyecto, fecha } = req.body;
	if (
		nombre === undefined ||
		descripcion === undefined ||
		fecha === undefined ||
		id_proyecto === undefined
	) {
		console.log(nombre, descripcion, id_proyecto, fecha);
		res.status(404).json({
			estado: 0,
			mensaje: "BAD REQUEST",
		});
	} else {
		const tarea = tareas.find((tarea) => tarea.id == id);
		if (tarea) {
			tarea.nombre = nombre;
			tarea.descripcion = descripcion;
			tarea.id_proyecto = id_proyecto;
			tarea.fecha = fecha;
			res.status(200).json({
				estado: 1,
				mensaje: "Tarea Actualizada",
				tarea: tarea,
			});
		} else {
			res.status(404).json({
				estado: 0,
				mensaje: "No se encontro la tarea",
			});
		}
	}
});
// Eliminar una tarea por su ID (DELETE).
app.delete("/social/v1/tareas/:id", (req, res) => {
	const id = req.params.id;
	const Eliminar = tareas.findIndex((tarea) => tarea.id == id);
	if (Eliminar != -1) {
		tareas.splice(Eliminar, 1);
		res.status(200).json({
			estado: 1,
			mensaje: "Tarea Eliminada",
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se Elimino",
		});
	}
});
// Obtener la lista de todos los proyectos (GET).
app.get("/social/v1/proyectos", (req, res) => {
	if (proyectos.length > 0) {
		res.status(200).json({
			estado: 1,
			mensaje: "Existen proyectos",
			proyectos: proyectos,
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontraron proyectos",
		});
	}
});
// Obtener un proyecto por su ID (GET).
app.get("/social/v1/proyectos/:id", (req, res) => {
	const id = req.params.id;
	const proyecto = proyectos.find((proyecto) => proyecto.id == id);
	if (proyecto) {
		res.status(200).json({
			estado: 1,
			mensaje: "Proyecto Encontrado",
			proyecto: proyecto,
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontro el proyecto",
		});
	}
});
// Agregar un proyecto tarea por su ID (POST).
app.post("/social/v1/proyectos", (req, res) => {
	const id = Math.round(Math.random() * 1000);
	const { nombre, descripcion, fecha_inicio, fecha_finalizacion } = req.body;
	if (
		nombre == undefined ||
		descripcion == undefined ||
		fecha_inicio == undefined ||
		fecha_finalizacion == undefined
	) {
		res.status(404).json({
			estado: 0,
			mensaje: "BAD REQUEST",
		});
	} else {
		const proyecto = {
			id: id,
			nombre: nombre,
			descripcion: descripcion,
			fecha_inicio: fecha_inicio,
			fecha_finalizacion: fecha_finalizacion,
		};
		const longInicial = proyectos.length;
		proyectos.push(proyecto);
		if (proyectos.length > longInicial) {
			res.status(201).json({
				estado: 1,
				mensaje: "Proyecto Agregado",
				proyecto: proyecto,
			});
		} else {
			res.status(500).json({
				estado: 0,
				mensaje: "No se agrego correctamente",
			});
		}
	}
});
// Actualizar un proyecto por su ID (PUT).
app.put("/social/v1/proyectos/:id", (req, res) => {
	const id = req.params.id;
	const { nombre, descripcion, fecha_inicio, fecha_finalizacion } = req.body;
	if (
		nombre === undefined ||
		descripcion === undefined ||
		fecha_inicio === undefined ||
		fecha_finalizacion === undefined
	) {
		res.status(404).json({
			estado: 0,
			mensaje: "BAD REQUEST",
		});
	} else {
		const proyecto = proyectos.find((proyectos) => proyectos.id == id);
		if (proyecto) {
			proyecto.nombre = nombre;
			proyecto.descripcion = descripcion;
			proyecto.fecha_inicio = fecha_inicio;
			proyecto.fecha_finalizacion = fecha_finalizacion;
			res.status(200).json({
				estado: 1,
				mensaje: "Proyecto Actualizado",
				proyecto: proyecto,
			});
		} else {
			res.status(404).json({
				estado: 0,
				mensaje: "No se encontro el proyecto",
			});
		}
	}
});
// Eliminar un proyecto por su ID (DELETE).
app.delete("/social/v1/proyectos/:id", (req, res) => {
	const id = req.params.id;
	const Eliminar = proyectos.findIndex((proyecto) => proyecto.id == id);
	if (Eliminar != -1) {
		proyectos.splice(Eliminar, 1);
		res.status(201).json({
			estado: 1,
			mensaje: "Proyecto Eliminado",
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se Elimino",
		});
	}
});
// Mostrar todas las tareas de un proyecto
app.get("/social/v1/proyecto/:idproyect/tareas", (req, res) => {
	const idproyect = req.params.idproyect;
	const proyecto = proyectos.findIndex(
		(proyectos) => proyectos.id == idproyect
	);
	const tarea = tareas.filter((tareas) => tareas.id_proyecto == idproyect);
	if (proyecto) {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontro el proyecto",
		});
	} else {
		if (tarea.length > 0) {
			res.status(200).json({
				estado: 1,
				mensaje: "Existen tareas",
				tareas: tarea,
			});
		} else {
			res.status(404).json({
				estado: 0,
				mensaje: "No se encontraron tareas",
			});
		}
	}
});
// Mostrar una tarea específica de un proyecto
app.get("/social/v1/proyecto/:idproyect/tareas/:idTareas", (req, res) => {
	const idproyect = req.params.idproyect;
	const proyecto = proyectos.findIndex(
		(proyectos) => proyectos.id == idproyect
	);

	if (proyecto) {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontro el proyecto",
		});
	} else {
		const id = req.params.idTareas;
		const tarea = tareas.filter(
			(tareas) => tareas.id == id,
			(tareas) => tareas.id_proyecto == idproyect
		);
		if (tarea.length > 0) {
			res.status(200).json({
				estado: 1,
				mensaje: "Existen tareas",
				tarea: tarea,
			});
		} else {
			res.status(404).json({
				estado: 0,
				mensaje: "No se encontraron tareas",
			});
		}
	}
});
// Mostrar tareas de un proyecto por estado (Use Query String para el estado)
app.get("/social/v1/proyecto/:idproyect/tareasEstado", (req, res) => {
	const idproyect = req.params.idproyect;
	const proyecto = proyectos.find((proyecto) => proyecto.id == idproyect);

	if (!proyecto) {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontro el proyecto",
		});
	} else {
		const estado = req.query.estado;

		if (estado !== undefined) {
			const tarea = tareas.filter(
				(tarea) => tarea.id_proyecto == idproyect && tarea.estado == estado
			);

			if (tarea.length > 0) {
				res.status(200).json({
					estado: 1,
					mensaje: "Existen tareas con ese estado",
					tareasEstado: tarea,
				});
			} else {
				res.status(404).json({
					estado: 0,
					mensaje: "No se encontraron tareas con ese estado",
				});
			}
		} else {
			res.status(400).json({
				estado: 0,
				mensaje: "Debe proporcionar un estado",
			});
		}
	}
});

// Mostrar todas las tareas de un proyecto paginadas (User Query String para especificar número de página y cuantos registros por página)
app.get("/socios/v1/proyectos/:id_proyecto/tareasPag", (req, res) => {
	const id_proyecto = req.params.id_proyecto;
	const pagina = req.query.pagina; // Obtener el número de página
	const cantidad = req.query.cantidad; // Obtener la cantidad de registros por página

	// Calcula índice inicial y final para la paginación
	const inicio = (pagina - 1) * cantidad;
	const fin = pagina * cantidad;

	const tareasProyecto = tareas.filter(
		(tarea) => tarea.id_proyecto == id_proyecto
	);

	if (tareasProyecto.length > 0) {
		const tareasPaginadas = tareasProyecto.slice(inicio, fin);

		res.status(200).json({
			estado: 1,
			mensaje: "Tareas del proyecto encontradas y paginadas",
			tareas: tareasPaginadas,
		});
	} else {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontraron tareas para el proyecto especificado",
		});
	}
});
// Mostrar tareas de un proyecto por fecha de inicio
app.get("/socios/v1/proyecto/fechaInicio/:fechaInicio/tareas", (req, res) => {
	const fechaInicio = req.params.fechaInicio;

	const proyecto = proyectos.find(
		(proyecto) => proyecto.fecha_inicio === fechaInicio
	);
	if (!proyecto) {
		res.status(404).json({
			estado: 0,
			mensaje: "No se encontró ningún proyecto con esa fecha de inicio",
		});
	} else {
		const idProyecto = proyecto.id;
		const tareasProyecto = tareas.filter(
			(tarea) => tarea.id_proyecto === idProyecto
		);
		res.status(200).json({
			estado: 1,
			mensaje: "Proyecto encontrado y tareas listadas",
			proyecto: proyecto,
			tareas: tareasProyecto,
		});
	}
});

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
