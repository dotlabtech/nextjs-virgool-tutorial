import styles from '@/styles/NotFound.module.css'

import Link from 'next/link'
import Layout from '@/components/Layout'

const NotFound = () => {
  return (
    <Layout title='چیزی پیدا نشد'>
      <div className={styles.container}>
        <h1 className={styles.header}>
          چیزی که دنبالشی وجود نداره 😕
        </h1>
        <Link href="/">
          برگرد به صفحه اصلی
        </Link>
      </div>
    </Layout>
  )
}

export default NotFound