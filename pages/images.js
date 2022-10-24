import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/Images.module.css'

import fs from 'fs'
import path from 'path'

const ImagesPage = ({ images }) => {
  return (
    <Layout title='گالری تصاویر'>
      <div className={styles.container}>
        {images.map((image, index) => (
          <div className={styles.image__wrapper} key={index}>
            <Image src={`/images/${image}`} width={300} height={160} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ImagesPage

export async function getStaticProps() {
  const images = fs.readdirSync(path.join('public/images'))

  return {
    props: {
      images
    }
  }
}