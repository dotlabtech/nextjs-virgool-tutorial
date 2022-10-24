import Post from '@/components/Post'
import Layout from '@/components/Layout'
import styles from '@/styles/Posts.module.css'
import { getPosts } from '@/lib/posts'

const PostsPage = ({ posts }) => {
  return (
    <Layout>
      <div className={styles.posts}>
        {posts.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </Layout>
  )
}

export default PostsPage

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}


// export async function getServerSideProps() {
//   const posts = await fetch(`http://localhost:3000/api/posts`)
//     .then(res => res.json())

//   return {
//     props: {
//       posts
//     }
//   }
// }