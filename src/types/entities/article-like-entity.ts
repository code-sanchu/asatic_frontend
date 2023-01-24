import { Expand, TupleToUnion } from "./utilities"

import { ImageFields } from "./entity-image"
import { RichText, TranslationField } from "./entity-translation"

import {
  EntityGlobalFields,
  PublishFields,
  SaveFields,
  EntityNameSubSet,
  ComponentFields,
  MediaFields,
  RelatedEntityFields,
  EntityNameTupleSubset,
  EntityNameToChildKeyTuple,
} from "./entity"
import { Translations } from "./entity-translation"
import { SummaryImageField } from "./entity-image"

type SectionTypes = "text" | "image" | "video"

type Section<TType extends SectionTypes> = ComponentFields<"id" | "index"> & {
  type: TType
}

export type TextSection = Section<"text"> & { text?: RichText }

export type ImageSection = Section<"image"> &
  MediaFields<"caption"> & {
    image: ImageFields<"aspect-ratio" | "id" | "y-position">
  }

export type VideoSection = Section<"video"> &
  MediaFields<"caption" | "youtubeId">

type ArticleLikeTranslationFields = TranslationField<"title"> & {
  body: (Expand<TextSection> | Expand<ImageSection> | Expand<VideoSection>)[]
  summary?: string
}

type ArticleLikeEntityName = EntityNameSubSet<"article" | "blog">

export type DbArticleLikeEntity<TEntityName extends ArticleLikeEntityName> =
  EntityGlobalFields<TEntityName> &
    RelatedEntityFields<ArticleLikeRelatedEntityUnion> &
    PublishFields &
    SaveFields &
    Translations<ArticleLikeTranslationFields> &
    SummaryImageField<"isToggleable">

export type ArticleLikeTranslation =
  Translations<ArticleLikeTranslationFields>["translations"][number]

export type ArticleLikeChildEntityFields =
  RelatedEntityFields<ArticleLikeRelatedEntityUnion>

export type ArticleLikeRelatedEntityTuple = EntityNameTupleSubset<
  "author" | "collection" | "subject" | "tag"
>

export type ArticleLikeRelatedEntityUnion =
  TupleToUnion<ArticleLikeRelatedEntityTuple>

export type ArticleLikeChildEntitiesKeysTuple =
  EntityNameToChildKeyTuple<ArticleLikeRelatedEntityTuple>

export type ArticleLikeSummaryType =
  | "default"
  | "collection"
  | "landing-user-section"
