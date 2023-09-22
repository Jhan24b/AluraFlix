import './Panel.css';
import Video from '../Video/Video';
import imgpanel from '../Files/fondoPrincipal.png'

function Panel(props) {
    return (
        <div>
            <div className='panel'>
                <img className='imgPanel' src={imgpanel} alt="Fondo Panel" />
                <div className="overlay-azul">
                    <div className='textoVideo'>
                        <div className="titulo--textoVideo" style={{ backgroundColor: props.cursos[0].colorPrimario }}>
                            {props.cursos[0].titulo}
                        </div>
                        <div className="resume--textoVideo">
                            {props.cursos[0].brief}
                        </div>
                    </div>
                    <Video detalle={props.cursos[0].videos[0]} key={props.cursos[0].videos[0].id} color={props.cursos[0].colorPrimario} className='video'/>
                </div>
            </div>
        </div>
    )
}

export default Panel;