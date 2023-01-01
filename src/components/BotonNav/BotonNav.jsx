export function BotonNav ({nombre}){
    return(
        <button onClick={() => console.log(`${nombre}`)}> { `${nombre}` }</button>
    )
}

