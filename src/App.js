import './App.css';

import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/formulario';
import Curso from './Components/Curso/Curso';
import fe1 from './Components/Files/VideoCard.png';
import fe2 from './Components/Files/fe-img2.png';
import fe3 from './Components/Files/fe-img3.png';
import fe4 from './Components/Files/fe-img4.png';
import be1 from './Components/Files/be-img1.png';
import be2 from './Components/Files/be-img2.png';
import be3 from './Components/Files/be-img3.png';
import ig1 from './Components/Files/ig-img1.png';
import ig2 from './Components/Files/ig-img2.png';
import ig3 from './Components/Files/ig-img3.png';
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
    titulo: "Front End",
    descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    brief: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    colorPrimario: "#6BD1FF",
    colorSecundario: "#6BD1FF",
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: fe1
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: fe2
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: fe3
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: fe4
      }
    ]
  },{
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
        img: be1
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: be2
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: be3
      }
    ]
  },{
    titulo: "Innovation and Managment",
    descripcion: "Como mantener al equipo feliz y mucho mas", brief: "Este challenge es una forma de mensaje",
    colorPrimario: "#FF8C2A",
    colorSecundario: "#ffeedf",
    id: uuidv4(),
    videos: [
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig1
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig2
      },{
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig3
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
        img: ig3
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig3
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
        img: ig3
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig3
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
        img: ig3
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig3
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
        img: ig3
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig3
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
        img: ig3
      },
      {
        id: uuidv4(),
        link: "www.youtube.com",
        img: ig3
      }
    ]
  }])
  const [videos, actualizarVideos] = useState(() => {
    let videosSecundarios = JSON.parse(JSON.stringify(cursos));
    videosSecundarios[0].videos.shift();
    return videosSecundarios;
  });

  //Crear Curso
  const crearCurso = (nuevoCurso) => {
    actualizarCursos([...cursos, { ...nuevoCurso, id: uuidv4() }]);
    actualizarVideos(() => {
      let videosSecundarios = JSON.parse(JSON.stringify(cursos));
      videosSecundarios[0].videos.shift();
      return videosSecundarios;
    });
  }

  //Eliminar a un curso
  const eliminarCurso = (id) => {
    const nuevosCursos = cursos.filter((curso) => curso.id !== id)
    actualizarVideos(() => {
      let videosSecundarios = JSON.parse(JSON.stringify(nuevosCursos));
      videosSecundarios[0].videos.shift();
      return videosSecundarios;
    });
    actualizarCursos(nuevosCursos);
  }

  //Actualizar datos de un curso
  const actualizaCurso = (modificado) => {
    const cursoActualizado = cursos.map((curso) => {
      if (curso.id === modificado.id) {
        curso = modificado;
      }
      return curso;
    });
    actualizarVideos(() => {
      let videosSecundarios = JSON.parse(JSON.stringify(cursoActualizado));
      videosSecundarios[0].videos.shift();
      return videosSecundarios;
    });
    actualizarCursos(cursoActualizado);

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
      actualizarVideos(() => {
        let videosSecundarios = JSON.parse(JSON.stringify(cursosActualizados));
        videosSecundarios[0].videos.shift();
        return videosSecundarios;
      });
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
            var = {curso.titulo !== videos[0].titulo}
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
          actualizaCurso ={actualizaCurso}
          eliminarCurso={eliminarCurso}
          cursos={cursos}
        />
      }
      <Footer />
    </NextUIProvider>
  );
}

export default App;
