export type Blog = {
  id: string
  body: string
  title: string
  content: string
  category: Category
  createdAt: string
}

export type Category = {
  id: string
  createdAt: string
  name: string
}
