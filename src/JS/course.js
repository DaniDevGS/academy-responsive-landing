export default class Course {
    constructor(curso) {
        this.nombre = curso.nombre;
        this.imagen_curso = curso.imagen_curso;
        this.descripcion = curso.descripcion;
        this.duracion_curso = curso.duracion_curso;
        this.es_curso_destacado=curso.es_curso_destacado;
    }
}