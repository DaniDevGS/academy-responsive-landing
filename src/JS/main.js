import Course from "./course.js";

const cursos_datos = [
    {
        nombre: "Curso de fundamentos en Python",
        imagen_curso: "https://skillicons.dev/icons?i=python",
        descripcion: "En este curso de cero a intermedio aprenderás sobre la sintaxis de Python y finalizarás aprendiendo Programación Orientada a Objetos.",
        duracion_curso: "70 horas",
        es_curso_destacado: true
    },
    {
        nombre: "Curso de fundamentos de desarrollo web",
        imagen_curso: "https://skillicons.dev/icons?i=html,css,js",
        descripcion: "En este curso de cero aprenderás a crear páginas web interactivas.",
        duracion_curso: "150 horas",
        es_curso_destacado: true
    },
    {
        nombre: "Curso de React de cero a experto",
        imagen_curso: "https://skillicons.dev/icons?i=react",
        descripcion: "En este curso de cero a avanzado aprenderás sobre aplicaciones web reactivas usando la libreria mas popular de la actualidad",
        duracion_curso: "95 horas",
        es_curso_destacado: true
    },

    {
        nombre: "Curso de desarrollo Backend con Django",
        imagen_curso: "https://skillicons.dev/icons?i=django",
        descripcion: "En este curso de Python avanzado aprenderas desarrollo Backend con Python.",
        duracion_curso: "60 horas",
        es_curso_destacado: false
    },
    {
        nombre: "Curso de Control de versiones con Git y GitHub",
        imagen_curso: "https://skillicons.dev/icons?i=git,github",
        descripcion: "En este aprenderas a usar herramientas de controles de versiones de una manera profesional.",
        duracion_curso: "30 horas",
        es_curso_destacado: false
    },
    {
        nombre: "Curso de desarrollo Backend con NestJS",
        imagen_curso: "https://skillicons.dev/icons?i=nestjs",
        descripcion: "En este curso aprendaras a construir APIs Rest usando JavaScript y el framework de NestJS.",
        duracion_curso: "50 horas",
        es_curso_destacado: false
    }
];

const listaCursos = cursos_datos.map(cursos_datos => new Course(cursos_datos));

function mostrarCursos(contenedorSelector, cursos) {
    const contenedor = document.querySelector(contenedorSelector);
    if (!contenedor) return;

    contenedor.innerHTML = cursos.map(curso => {
        return `
            <article class="hero-card">
                <div class="background-courses">
                    <img src="${curso.imagen_curso}" alt="${curso.nombre}" class="logo-courses">
                </div>
                <div class="hero-info">
                    <h3>${curso.nombre}</h3>
                    <p>${curso.descripcion}</p>
                    <span><strong>Duración: ${curso.duracion_curso}</strong></span>
                </div>
            </article>
        `;
    }).join('');
}

window.addEventListener("DOMContentLoaded", ()=> {
    const cursosDestacados = listaCursos.filter(curso => curso.es_curso_destacado);
    
    mostrarCursos('#featured-grid', cursosDestacados);
    mostrarCursos('#all-courses-grid', listaCursos);
})