import "./boton.css";

const Boton = (props)=>{
    return <button className="boton" onClick={props.onClick}>
        {props.title}
    </button>
}

export default Boton;