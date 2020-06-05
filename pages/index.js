import Head from 'next/head'
import image from './assets/firebase-sticker.jpg'
import Header from  './components/Header'
import style from "../style/index.less"
// styling(less, css, scss... ), images

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.main}>
          <h1 className="title">
            Welcome to My App
          </h1>
          <Header />
          <img src={image} />
        </div>
      </main>
    </div>
  )
}