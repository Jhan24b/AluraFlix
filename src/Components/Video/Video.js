import "./Video.css";

const Video = (props)=>{
    const {id, link, img} = props.detalle;
    return (<section className="video" id={id}>
        <div className="encabezadoVideo">
            <a href={link}><img className="imgVideo" style={{borderColor: props.color, borderWidth: "5px"}} src={img} alt="imagen"/> </a>
        </div>
    </section>
    )
}

export default Video; 