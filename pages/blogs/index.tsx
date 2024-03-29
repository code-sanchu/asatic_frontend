import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useLayoutEffect } from "react"

import { routes } from "^constants/routes"

import { StaticData } from "^components/my-pages/collection-of-documents/article-like/blogs/staticData"
import PageContent from "^components/my-pages/collection-of-documents/article-like/blogs"
export { getStaticProps } from "^components/my-pages/collection-of-documents/article-like/blogs/staticData"

const BlogsPage: NextPage<StaticData> = (staticData) => {
  const isBlog = staticData.pageData.articleLikeEntities.length

  const router = useRouter()

  useLayoutEffect(() => {
    if (isBlog) {
      return
    }

    router.push({ pathname: routes.articles, query: router.query })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBlog])

  return <PageContent {...staticData} />
}

export default BlogsPage
