import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const paginas = [
    {
      href: '/portfolios/bernardoPage',
      titulo: 'Bernardo',
      descricao: 'meu portfólio'
    },
    {
      href: '/portfolios/joaoPage',
      titulo: 'João',
      descricao: 'meu portfólio'
    },
    {
      href: '/portfolios/guedesPage',
      titulo: 'Guedes',
      descricao: 'meu portfólio'
    },
    {
      href: '/portfolios/ivanPage',
      titulo: 'Ivan',
      descricao: 'meu portfólio'
    },
    {
      href: '/portfolios/milenaPage',
      titulo: 'Milena',
      descricao: 'meu portfólio'
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>PortFólios</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PortFólios
        </h1>

        <p className={styles.description}>
          Veja o PortFólio de cada um dos intengrantes da equipe
        </p>

        <div className={styles.grid}>
          {paginas.map(pagina => {
              return (
                <a href={pagina.href} className={styles.card}>
                  <h2>{pagina.titulo} &rarr;</h2>
                  <p>{pagina.descricao}</p>
                </a>
              )
          })}
        </div>
      </main>
    </div>
  )
}
