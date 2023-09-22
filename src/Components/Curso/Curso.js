import Video from "../Video/Video";
import "./Curso.css";
const Curso = (props) => {
    const { colorPrimario, titulo, id, brief } = props.datos;
    const videos = props.videos
    return (
        <div className="categoria" id={id}>
            {(props.var) && <div className="cabecera">
                <div className="titulo--cabecera" style={{ backgroundColor: colorPrimario }}>
                    {titulo}
                </div>
                <div className="resume--cabecera">
                    {brief}
                </div>
            </div>}
            <div className="categoria--videos">
                {videos.map((video) => (
                    <Video detalle={video} key={video.id} color={colorPrimario} />
                ))}
            </div>
        </div>
    );
}

export default Curso;