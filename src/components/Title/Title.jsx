import { Link } from "react-router-dom"
import ComClass from "../../assets/ComponentesClase/ComClass"

 export 
//  function Title(param){
//   console.log(param)
//   return(
//     <div>
//       <h1>{ param.titulo }</h1>
//       <h2>{ param.subtitulo }</h2>
//     </div>
//   )
//  }


 function Title({titulo, subtitulo}){
  // console.log(`${titulo} ${subtitulo}`)
  return(
    <div>
      <h1>{ titulo }</h1>

      <ComClass/>


    </div>

  )
 }


  // function app(){
  //   let nombre = 'Francisco'

  //   function saludar(nombre) {
  //     console.log(`Hola ${nombre}`)
  //   }
  //   saludar(nombre)
  // }

  // app()



  export default Title