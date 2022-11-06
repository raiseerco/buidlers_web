import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import './globals.css';

export default function PageLayout({ children, title = 'Buidlers.Tech' }) {
  return (
    <>
      <Head className={styles.container}>
        <title>{title}</title>
        <meta name="description" content="Home of Buidlers.tech!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        {/* TODO */}
      </Head>

      <main>{children}</main>
    </>
  )
}
