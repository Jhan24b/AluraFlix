import './Panel.css';
import imgpanel from '../Files/fondoPrincipal.png'

function Panel(props) {
    return (
        <div>
            <div className='panel'>
                <img className='imgPanel' src={imgpanel} alt="Fondo Panel" />
                <div class="overlay-azul">
                </div>
            </div>
            <div className='contenidoPanel'>
                Hi
            </div>

        </div>
    )
}

export default Panel;