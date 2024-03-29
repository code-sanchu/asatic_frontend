import { removeArrDuplicates } from "^helpers/general"
import {
  SanitisedArticle,
  SanitisedBlog,
  SanitisedCollection,
  SanitisedRecordedEvent,
} from "^types/entities"
import { getArticleLikeDocumentImageIds } from "../article-like"

export function getAllCollectionImageIds(collection: SanitisedCollection) {
  const imageIds = [
    collection.bannerImage.imageId,
    collection.summaryImage.imageId,
  ].flatMap((imageId) => (imageId ? [imageId] : []))

  const unique = Array.from(new Set(imageIds).values())

  return unique
}

export function getCollectionSummaryText(collection: SanitisedCollection) {
  if (collection.summary?.length) {
    return collection.summary
  }
  if (collection.description?.length) {
    return collection.description
  }

  return null
}

export function getCollectionsUniqueImageIds(
  collections: SanitisedCollection[]
) {
  const uniqueImageIds = removeArrDuplicates(
    collections.flatMap((collection) =>
      collection.bannerImage.imageId ? [collection.bannerImage.imageId] : []
    )
  )

  return uniqueImageIds
}

export function getCollectionUniqueChildImageIds({
  articles,
  blogs,
  recordedEvents,
}: {
  articles: SanitisedArticle[]
  blogs: SanitisedBlog[]
  recordedEvents: SanitisedRecordedEvent[]
}) {
  const articleAndBlogImageIds = [...articles, ...blogs].flatMap(
    (articleLikeEntity) =>
      getArticleLikeDocumentImageIds(articleLikeEntity.translations)
  )
  const recordedEventImageIds = recordedEvents.flatMap((recordedEvent) =>
    recordedEvent.summaryImage.imageId
      ? [recordedEvent.summaryImage.imageId]
      : []
  )

  const unique = removeArrDuplicates([
    ...articleAndBlogImageIds,
    ...recordedEventImageIds,
  ])

  return unique
}
