import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__media}>
        <a href='https://github.com/EbrahimHeydari'>
          <Image src='/icons/github.svg' height={44} width={44} />
        </a>
        <a href='https://virgool.io/@EbrahimHeydari'>
          <Image src='/icons/virgool.svg' height={36} width={36} />
        </a>
      </div>
      <p className={styles.footer__copyright}>تمامی حقوق مادی و معنوی این وبسایت محفوظ است
        <span className={styles.footer__date}> {new Date().getFullYear()}&copy;</span>
      </p>
    </div>
  )
}

export default Footer