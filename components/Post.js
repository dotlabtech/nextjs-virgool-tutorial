import styles from '@/styles/Posts.module.css'
import Link from 'next/link'

const Post = ({ post }) => {
  return (
    <Link href={`posts/${post.slug}`}>
      <div className={styles.post}>
        <img
          src={post.cover}
          className={styles.post__image}
          alt='cover' />
        <div className={styles.post__content}>
          <div className={styles.post__header}>
            <span className={styles.post__date}>
              {new Date(post.date).toLocaleDateString('fa')}
            </span>
            <img
              src={post.author_image}
              className={styles.post__author__image}
              alt="author" />
          </div>
          <h3 className={styles.post__title}>{post.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Post