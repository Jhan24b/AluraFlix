import './App.css';

import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/formulario';
import Curso from './Components/Curso/Curso';
import portada from './Components/Files/VideoCard.png';
import FormularioCategoria from './Components/Formulario/formularioCategoria';

import { v4 as uuidv4 } from "uuid";
import { NextUIProvider } from "@nextui-org/react";
import Panel from './Components/Panel/Panel';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [mostrarCursos, actualizarMostrarCursos] = useState(true);
  const [mostrarNuevaCategoria, actualizarNuevaCategoria] = useState(false);
  const [cursos, actualizarCursos] = useState([{
    id: uuidv4(),
    titulo: "Back End",
    descripcion: "Todos los videos que estoy usando para estudiar Back End",
    brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#00C86F",
    colorSecundario: "#D9F7E9",
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }, {
    titulo: "Mobile",
    descripcion: "Contenido que vengo estudiando sobre React Native y Flutter",
    brief: "Formacion Back End en Alura Latam",
    colorPrimario: "#FFBA05",
    colorSecundario: "#e8f8ff",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }, {
    titulo: "Infraestructure",
    descripcion: "Todo sobre lo que estoy aprendiendo sobre Docker y mas",
    brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#9CD33B",
    colorSecundario: "#f0f8e2",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }, {
    titulo: "Data Science",
    descripcion: "Formacion innovacion y gestion de Alura Latam",
    brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#9CD33B",
    colorSecundario: "#fde7e8",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }, {
    titulo: "UIX Design",
    descripcion: "Herramientas y tecnicas de estudio sobre UX y Design", brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#DC6EBE",
    colorSecundario: "#fae9f5",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }, {
    titulo: "Digital Marketing",
    descripcion: "La forma de vender y monetizar mis ideas", brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#6B5BE2",
    colorSecundario: "#fff5d9",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }, {
    titulo: "Innovation and Managment",
    descripcion: "Como mantener al equipo feliz y mucho mas", brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#FF8C2A",
    colorSecundario: "#ffeedf",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: portada
      }
    ]
  }])
  const [videos, actualizarVideos] = useState(() => {
    let videosSecundarios = [...cursos];
    videosSecundarios[0].videos.shift();
    return (videosSecundarios);
  });

  //Crear Curso
  const crearCurso = (nuevoCurso) => {
    console.log(nuevoCurso);
    actualizarCursos([...cursos, { ...nuevoCurso, id: uuidv4() }])
  }

  //Eliminar a un curso
  const eliminarCurso = (id) => {
    console.log("Eliminando curso", id);
    const nuevosCursos = cursos.filter((curso) => curso.id !== id)
    actualizarColaboradores(nuevosCursos);
  }

  //Actualizar datos de un curso
  const actualizarCurso = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  // Registrar un nuevo video
  const registrarVideo = (video, nameCategoria) => {
    const cursoFiltrado = cursos.find((curso) => curso.titulo === nameCategoria);

    if (cursoFiltrado) {
      // Agregar el video al curso encontrado
      cursoFiltrado.videos.push(video);

      // Filtrar los cursos que no coinciden con el nombre de categoría
      const cursosSinAlterar = cursos.filter((curso) => curso.titulo !== nameCategoria);

      // Agregar el curso modificado a la lista de cursos
      const cursosActualizados = [...cursosSinAlterar, cursoFiltrado];

      // Actualizar el estado de cursos
      actualizarCursos(cursosActualizados);
    } else {
      console.log(`No se encontró ningún curso con el nombre de categoría: ${nameCategoria}`);
    }
    // let cursoFiltrado = {};
    // cursos.map((curso)=>{
    //   if(curso.titulo === nameCategoria){
    //     cursoFiltrado = curso;
    //   }
    // });
    // cursoFiltrado.videos.push(video);
    // let cursosSinAlterar = [];
    // cursos.map((curso)=>{
    //   if(curso.titulo !== nameCategoria){
    //     cursosSinAlterar.push(curso);
    //   }
    // });
    // cursosSinAlterar.push(cursoFiltrado);
    // actualizarCursos(cursosSinAlterar);
  }

  //Muestra el formulario para anadir un nuevo video
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
    actualizarMostrarCursos(!mostrarCursos);
  }

  // Muestra el formulario para agregar un nuevo curso
  const cambiarMostrarCategoria = () => {
    actualizarMostrar(!mostrarFormulario);
    actualizarNuevaCategoria(!mostrarNuevaCategoria);
  };

  return (
    <NextUIProvider>
      <Header cambiarMostrar={cambiarMostrar} />
      {mostrarCursos && <Panel cursos={cursos} />}
      {mostrarCursos && <div className='cursos'>
        {videos.map((curso) => {
          return (<Curso
            datos={curso}
            key={curso.id}
            videos={curso.videos}
          />)
        })}
      </div>}
      {mostrarFormulario &&
        <Formulario data={cursos.map((curso) => curso.titulo)}
          registrarVideo={registrarVideo}
          cambiarMostrarCategoria={cambiarMostrarCategoria}

        />}
      {mostrarNuevaCategoria &&
        <FormularioCategoria
          crearCurso={crearCurso}
          eliminarCurso={eliminarCurso}
          cursos={cursos.videos}
        />
      }
      <Footer />
    </NextUIProvider>
  );
}

export default App;
