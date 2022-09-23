import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const files = fs.readdirSync(path.join('posts'))

export function getPosts() {
  const posts = files.map(file => {
    const slug = file.replace('.md', '')

    const fileContents = fs.readFileSync(path.join('posts', file), 'utf-8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...data
    }
  })

  return posts
}

export function getPost(slug) {
  const fileContent = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')
  const { data, content } = matter(fileContent)
  return {
    slug,
    data,
    content
  }
}

export function getSlugs() {
  return files.map(file => {
    return {
      params: {
        slug: file.replace('.md', '')
      }
    }
  })
}