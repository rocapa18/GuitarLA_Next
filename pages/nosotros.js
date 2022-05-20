import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (

    <Layout
      pagina='Nosotros'
    >
      
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imágen sobre nosotros"/>


          <div>

            <p>Integer ac purus dignissim, dignissim magna id, tempor turpis. Suspendisse et nisl luctus, interdum ex non, mattis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet lacus ac orci faucibus, non sodales orci luctus. Mauris justo nisl, convallis eu odio non, commodo ultrices enim. Integer auctor ullamcorper orci, cursus tincidunt sem gravida in.</p>

            <p>Integer ac purus dignissim, dignissim magna id, tempor turpis. Suspendisse et nisl luctus, interdum ex non, mattis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet lacus ac orci faucibus, non sodales orci luctus. Mauris justo nisl, convallis eu odio non, commodo ultrices enim. Integer auctor ullamcorper orci, cursus tincidunt sem gravida in.</p>

          </div>
        </div>
      </main>

    </Layout>
  )
}

export default Nosotros