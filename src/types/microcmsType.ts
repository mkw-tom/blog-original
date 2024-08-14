
interface BlogDataType {
  id: string,
  createdAt: string | undefined,
  updatedAt: string | undefined,
  publishedAt: string | undefined,
  revisedAt: string | undefined,
  title: string | undefined,
  content: string | undefined,
  eyecatch: {
    url: string | undefined,
    height: string | undefined,
    width: string | undefined
  },
  category: any | null
}