import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <Link href='/'>
            <a>
              <Image src='/favicon.ico' width={32} height={32} />
            </a>
          </Link>
        </div>
        <div className={styles.header__links}>
          <Link href='/images'>
            گالری تصاویر
          </Link>
          <Link href='/posts'>
            پست ها
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header