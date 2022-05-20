import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({children, pagina, guitarra}) => {

  return (

    <div>

        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio Web de Venta de Guitarras" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            
        </Head>

        <Header
          guitarra = {guitarra}
        />

        {children}

        <ToastContainer />

        <Footer />

    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout