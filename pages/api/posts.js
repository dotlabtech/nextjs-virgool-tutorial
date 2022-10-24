import { posts } from "@/server/data"

export default function handler(req, res) {
  res.status(200).json(posts)
}
