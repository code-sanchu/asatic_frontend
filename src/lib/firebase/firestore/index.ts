import { firestore_collection_key } from "^constants/firestoreCollections"
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
  LandingSection,
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
    firestore_collection_key.articles,
    docId
  )) as UnsanitizedFirestoreDocument<FetchedArticle>

  const sanitised = sanitiseNonSerializableDoc(firestoreDoc) as SanitisedArticle

  return sanitised
}

export const fetchArticles = async (ids?: string[]) => {
  const firestoreDocs = (
    ids
      ? await fetchFirestorePublishableDocuments("articles", ids)
      : await fetchFirestorePublishableCollection("articles")
  ) as UnsanitizedFirestoreDocument<FetchedArticle>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedArticle[]

  return sanitised
}

export const fetchAuthors = async (ids: string[]) =>
  (await fetchFirestoreDocuments("authors", ids)) as Author[]

export const fetchBlog = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    "blogs",
    docId
  )) as UnsanitizedFirestoreDocument<FetchedBlog>

  const sanitised = sanitiseNonSerializableDoc(firestoreDoc) as SanitisedBlog

  return sanitised
}

export const fetchBlogs = async (ids?: string[]) => {
  const firestoreDocs = (
    ids
      ? await fetchFirestorePublishableDocuments("blogs", ids)
      : await fetchFirestorePublishableCollection(
          firestore_collection_key.blogs
        )
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
export const fetchCollections = async (ids?: string[]) => {
  const firestoreDocs = (
    ids
      ? await fetchFirestoreDocuments("collections", ids)
      : await fetchFirestoreCollection("collections")
  ) as UnsanitizedFirestoreDocument<FetchedCollection>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedCollection[]

  return sanitised
}

export const fetchImages = async (ids: string[]) =>
  (await fetchFirestoreDocuments("images", ids)) as Image[]

export const fetchLanguages = async (ids: string[]) =>
  (await fetchFirestoreDocuments(
    firestore_collection_key.languages,
    ids
  )) as Language[]

export const fetchLanding = async () =>
  (await fetchFirestoreCollection("landing")) as LandingSection[]

export const fetchRecordedEvent = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    firestore_collection_key.recordedevents,
    docId
  )) as UnsanitizedFirestoreDocument<FetchedRecordedEvent>

  const sanitised = sanitiseNonSerializableDoc(
    firestoreDoc
  ) as SanitisedRecordedEvent

  return sanitised
}

export const fetchRecordedEvents = async (ids?: string[]) => {
  const firestoreDocs = (
    ids
      ? await fetchFirestorePublishableDocuments("recordedEvents", ids)
      : await fetchFirestorePublishableCollection("recordedEvents")
  ) as UnsanitizedFirestoreDocument<FetchedRecordedEvent>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedRecordedEvent[]

  return sanitised
}

export const fetchRecordedEventTypes = async () =>
  (await fetchFirestoreCollection("recordedEventTypes")) as RecordedEventType[]

export const fetchSubject = async (docId: string) => {
  const firestoreDoc = (await fetchFirestoreDocument(
    firestore_collection_key.articles,
    docId
  )) as UnsanitizedFirestoreDocument<FetchedSubject>

  const sanitised = sanitiseNonSerializableDoc(firestoreDoc) as SanitisedSubject

  return sanitised
}

export const fetchSubjects = async (ids?: string[]) => {
  const firestoreDocs = (
    ids
      ? await fetchFirestorePublishableDocuments("subjects", ids)
      : await fetchFirestorePublishableCollection("subjects")
  ) as UnsanitizedFirestoreDocument<FetchedSubject>[]

  const sanitised = sanitiseNonSerializableCollection(
    firestoreDocs
  ) as SanitisedSubject[]

  return sanitised
}

export const fetchTags = async (ids: string[]) =>
  (await fetchFirestoreDocuments("tags", ids)) as Tag[]
