import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />

      <div className={styles.container}>
        {children}
      </div>

      <Footer />
    </>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Nextjs Tutorial',
  description: 'this project just created for learn next.js'
}