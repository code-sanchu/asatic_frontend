import {
  UnsanitizedFirestoreDocument,
  sanitiseNonSerializableDoc,
  sanitiseNonSerializableCollection,
} from "^helpers/firestore"
import {
  Author,
  FetchedArticle,
  FetchedSubject,
  Image,
  LandingCustomSectionComponent,
  Language,
  RecordedEventType,
  SanitisedArticle,
  SanitisedSubject,
  Tag,
  SanitisedBlog,
  FetchedRecordedEvent,
  SanitisedRecordedEvent,
  FetchedBlog,
  FetchedCollection,
  SanitisedCollection,
} from "^types/entities"
import { AboutPage } from "^types/entities/about"

import {
  fetchFirestoreDocument,
  fetchFirestoreCollection,
  fetchFirestoreDocuments,
  fetchFirestorePublishableCollection,
  fetchFirestorePublishableDocuments,
} from "./helpers"

// have to 'sanitise' data (handle firestore timestamps) before pass to Next component else get an error.

export const fetchArticle = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "articles",
    docId
  )) as UnsanitizedFirestoreDocument<FetchedArticle>

  const sanitised = sanitiseNonSerializableDoc(firestoreDoc) as SanitisedArticle

  return sanitised
}

export const fetchArticles = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  const firestoreDocs = (
    ids == "all"
      ? await fetchFirestorePublishableCollection("articles")
      : await fetchFirestorePublishableDocuments("articles", ids)
  ) as UnsanitizedFirestoreDocument<FetchedArticle>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedArticle[]

  return sanitised
}

export const fetchAuthor = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "authors",
    docId
  )) as Author

  return firestoreDoc
}

export const fetchAuthors = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  return (
    ids === "all"
      ? await fetchFirestoreCollection("authors")
      : await fetchFirestoreDocuments("authors", ids)
  ) as Author[]
}

export const fetchBlog = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "blogs",
    docId
  )) as UnsanitizedFirestoreDocument<FetchedBlog>

  const sanitised = sanitiseNonSerializableDoc(firestoreDoc) as SanitisedBlog

  return sanitised
}

export const fetchBlogs = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  const firestoreDocs = (
    ids === "all"
      ? await fetchFirestorePublishableCollection("blogs")
      : await fetchFirestorePublishableDocuments("blogs", ids)
  ) as UnsanitizedFirestoreDocument<FetchedBlog>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedBlog[]

  return sanitised
}

export const fetchCollection = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "collections",
    docId
  )) as UnsanitizedFirestoreDocument<FetchedCollection>

  const sanitised = sanitiseNonSerializableDoc(
    firestoreDoc
  ) as SanitisedCollection

  return sanitised
}
export const fetchCollections = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  const firestoreDocs = (
    ids === "all"
      ? await fetchFirestoreCollection("collections")
      : await fetchFirestoreDocuments("collections", ids)
  ) as UnsanitizedFirestoreDocument<FetchedCollection>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedCollection[]

  return sanitised
}

export const fetchImage = async (id: string) =>
  (await fetchFirestoreDocument("images", id)) as Image

export const fetchImages = async (ids: string[]) =>
  (await fetchFirestoreDocuments("images", ids)) as Image[]

export const fetchLanguages = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  return (
    ids === "all"
      ? await fetchFirestoreCollection("languages")
      : await fetchFirestoreDocuments("languages", ids)
  ) as Language[]
}

export const fetchLanding = async () =>
  (await fetchFirestoreCollection("landing")) as LandingCustomSectionComponent[]

export const fetchRecordedEvent = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "recordedEvents",
    docId
  )) as UnsanitizedFirestoreDocument<FetchedRecordedEvent>

  const sanitised = sanitiseNonSerializableDoc(
    firestoreDoc
  ) as SanitisedRecordedEvent

  return sanitised
}

export const fetchRecordedEvents = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  const firestoreDocs = (
    ids === "all"
      ? await fetchFirestorePublishableCollection("recordedEvents")
      : await fetchFirestorePublishableDocuments("recordedEvents", ids)
  ) as UnsanitizedFirestoreDocument<FetchedRecordedEvent>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedRecordedEvent[]

  return sanitised
}

export const fetchRecordedEventType = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "recordedEventTypes",
    docId
  )) as RecordedEventType

  return firestoreDoc
}

export const fetchRecordedEventTypes = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }
  return (
    ids === "all"
      ? await fetchFirestoreCollection("recordedEventTypes")
      : await fetchFirestoreDocuments("recordedEventTypes", ids)
  ) as RecordedEventType[]
}

export const fetchSubject = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "subjects",
    docId
  )) as UnsanitizedFirestoreDocument<FetchedSubject>

  const sanitised = sanitiseNonSerializableDoc(firestoreDoc) as SanitisedSubject

  return sanitised
}

export const fetchSubjects = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  const firestoreDocs = (
    ids === "all"
      ? await fetchFirestorePublishableCollection("subjects")
      : await fetchFirestorePublishableDocuments("subjects", ids)
  ) as UnsanitizedFirestoreDocument<FetchedSubject>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedSubject[]

  return sanitised
}

export const fetchTags = async (ids: string[] | "all") => {
  if (typeof ids === "object" && !ids.length) {
    return []
  }

  const firestoreDocs = (
    ids === "all"
      ? await fetchFirestoreCollection("tags")
      : await fetchFirestoreDocuments("tags", ids)
  ) as Tag[]

  return firestoreDocs
}

export const fetchAbout = async () => {
  const firestoreDocs = await fetchFirestoreCollection("about")

  return firestoreDocs[0] as AboutPage
}
