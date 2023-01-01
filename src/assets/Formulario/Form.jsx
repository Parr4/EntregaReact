import Title from "../../components/Title/Title"


export function Form(){
    return (
      <div>
      <Title titulo='titulo' subtitulo='Subtitulo'/>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <button type="submit">Enivar</button>
      </form>
      </div>
    )
  }

  export default Form