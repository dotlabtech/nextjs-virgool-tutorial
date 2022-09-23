import { getSlugs, getPost } from '../../lib/posts'
import { marked } from 'marked'

import styles from '../../styles/Post.module.css'
import Layout from '../../components/Layout'
import Link from 'next/link'

const PostPage = ({ title, content, date, description, author, author_image, cover }) => {
  return (
    <Layout description={description} title={title}>
      <div className={styles.post}>
        <Link href='/posts'>
          بازگشت
        </Link>

        <div className={styles.post__headline}>
          <div className={styles.post__author}>
            <img className={styles.post__author__image} src={author_image} alt="author" />

            <span className={styles.post__author__name}>{author}</span>
          </div>

          <span className={styles.post__date}>
            {new Date(date).toLocaleDateString('fa')}
          </span>
        </div>

        <h1 className={styles.post__title}>{title}</h1>

        <img src={cover} alt="cover" className={styles.post__cover} />

        <div className={styles.post__content} dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </Layout>
  )
}

export default PostPage

export async function getStaticPaths() {
  const paths = await getSlugs()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { content, data } = getPost(params.slug)

  return {
    props: {
      ...data,
      content,
    }
  }
}