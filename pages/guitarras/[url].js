import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'
import { toast } from 'react-toastify'


const Producto = ({guitarra, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1)

    const{descripcion, imagen, nombre, precio, id } = guitarra[0]

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1){
            alert("Cantidad no válida");
        }

        //Agregarlo al Carrito
        const guitarraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad


        };
        agregarCarrito(guitarraSeleccionada)
        toast.success('Agregado al Carrito', {
            position: "bottom-center",
            autoClose: 2000
        })
    }

  return (
      <Layout
        pagina={`Guitarra ${nombre}`}
      >
        <div className={styles.guitarra}>

            <Image layout='responsive' width={160} height={350} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />

            <div className={styles.contenido}>

                <h3>{nombre}</h3>

                <p className={styles.descripcion}>{descripcion}</p>

                <p className={styles.precio}>${precio}</p>

                <form className={styles.formulario} onSubmit={handleSubmit}>

                    <label>Cantidad:</label>

                    <select
                        value={cantidad}
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al Carrito"
                    />

                </form>

            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    

    return {
        props: {
            guitarra

        }
    }
}

export default Producto