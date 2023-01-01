const AddCartButton = ({productPassed}) => {

    function pressed(){
        console.log("apretado")
        console.log(`${productPassed.franquicia}`)
    }


    return(
        <button onClick={pressed}>
            Añadir Producto
            {/* {productPassed} */}
            

        </button>
    )
}

export default AddCartButton