import './HomeView.css'

export const HomeView = ( props ) => {

   // console.log(props.titulo)
   // console.log(props.contenido)
    const {titulo, contenido} = props

    return (

        <div className="homeView">

            <h2>{titulo}</h2>
            <hr/>
            <p>{contenido}</p>

        </div>

    )

}