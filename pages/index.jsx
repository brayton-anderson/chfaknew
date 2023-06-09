import Head from 'next/head'
import Image from 'next/image'
import Styles from '../styles/Home.module.css'
import Script from 'next/script'
import Header from '../components/header'
import Footer from '../components/footer'
import Homer from '../components/homer'
import AboutUs from './about'

export default function Home() {
  return (
    <div className="container">
      <Head>
          <title>Children Homes Founders Association of Kenya</title>
          <link rel="shortcut icon" href="/assets/CHFAK1.jpg"/>
          <meta name="description" content="Generated by create next app" />
          <meta charset="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          
      </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
      
      
      <main className="main">
      <Header/>
        <Homer/>
        
        
      </main>
      <Footer/>

      
    </div>
  )
}
