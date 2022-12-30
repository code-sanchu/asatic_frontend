import { processArticleLikeEntityForOwnPage } from "^helpers/process-fetched-data"
import {
  Author,
  Language,
  SanitisedCollection,
  SanitisedSubject,
  Tag,
} from "^types/entities"

export type StaticData = {
  article: ReturnType<typeof processArticleLikeEntityForOwnPage> & {
    subjects: SanitisedSubject[]
    languages: Language[]
    authors: Author[]
    collections: SanitisedCollection[]
    tags: Tag[]
  }
  header: {
    subjects: SanitisedSubject[]
  }
}
