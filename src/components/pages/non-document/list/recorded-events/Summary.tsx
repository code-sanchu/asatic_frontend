/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import tw from "twin.macro"
import { PlayIcon } from "^components/Icons"

import { Authors_ } from "^components/pages/_containers"
import StorageImage from "^components/StorageImage"
import { routes } from "^constants/routes"
import { useSiteLanguageContext } from "^context/SiteLanguage"
import { findTranslationByLanguageId } from "^helpers/data"
import { determineChildTranslation } from "^helpers/document"
import { RecordedEventAsSummary } from "^helpers/process-fetched-data/recorded-event/process"
import { getYoutubeThumbnailFromId } from "^helpers/youtube"
import { $link } from "^styles/global"
import { StaticData } from "./staticData"

export const $authors = tw`flex gap-xs text-lg text-gray-600 mb-xxs`

// TODO: this is repeated from subject

const RecordedEvent = ({
  recordedEvent,
  sortLanguageId,
}: {
  recordedEvent: StaticData["recordedEvents"]["recordedEvents"][number]
  sortLanguageId: string | null
}) => {
  const { siteLanguage } = useSiteLanguageContext()

  const translation = determineChildTranslation(
    recordedEvent.translations,
    sortLanguageId || siteLanguage.id
  )

  const router = useRouter()
  const pathname = `${routes.recordedEvents}/${recordedEvent.id}`

  return (
    <div css={[tw`max-w-full max-h-full flex flex-col p-md`]}>
      <SummaryImage
        image={recordedEvent.summaryImage}
        youtubeId={recordedEvent.youtubeId}
      />
      <Type
        type={recordedEvent.recordedEventType}
        parentLanguageId={translation.languageId}
      />
      <Link
        href={{
          pathname,
          query: {
            ...router.query,
            documentLanguageId: translation.languageId,
          },
        }}
        passHref
      >
        <h3 css={[tw`text-xl mb-xxs`, $link]}>{translation.title}</h3>
      </Link>
      <Authors_
        authors={recordedEvent.authors}
        parentLanguageId={translation.languageId}
        styles={$authors}
      />
      <p
        css={[
          tw`mb-xs text-gray-800 font-sans-document font-light text-sm tracking-wider`,
        ]}
      >
        {recordedEvent.publishDate}
      </p>
    </div>
  )
}

export default RecordedEvent

const Type = ({
  type,
  parentLanguageId,
}: {
  type: RecordedEventAsSummary["recordedEventType"]
  parentLanguageId: string
}) => {
  if (!type) {
    return null
  }

  const translation = findTranslationByLanguageId(
    type.translations,
    parentLanguageId
  )

  if (!translation?.name) {
    return null
  }

  return (
    <h4 css={[tw`uppercase tracking-wider text-sm`]}>{translation.name}</h4>
  )
}

const PlayIconOverlay = () => (
  <span css={[tw`absolute text-5xl right-sm bottom-sm`]}>
    <PlayIcon weight="fill" color="rgba(229, 231, 235, 0.8)" />
  </span>
)

const ImageContainer = ({ children: image }: { children: ReactElement }) => (
  <div css={[tw`relative aspect-ratio[16 / 9] w-full mb-xs flex-grow`]}>
    {image}
    <PlayIconOverlay />
  </div>
)

const SummaryImage = ({
  image,
  youtubeId,
}: {
  image: RecordedEventAsSummary["summaryImage"]
  youtubeId: string
}) => {
  return (
    <ImageContainer>
      {image ? (
        <StorageImage
          image={image.storageImage}
          vertPosition={image.vertPosition}
        />
      ) : (
        <img
          css={[tw`absolute w-full h-full object-cover `]}
          src={getYoutubeThumbnailFromId(youtubeId)}
          style={{ objectPosition: `50% 50%` }}
          alt=""
        />
      )}
    </ImageContainer>
  )
}