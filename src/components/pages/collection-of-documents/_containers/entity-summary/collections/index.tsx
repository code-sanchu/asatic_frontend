import { sortEntitiesByDate } from "^helpers/manipulateEntity"
import { CollectionAsSummary } from "^helpers/process-fetched-data/collection/process"

import { Swiper_ } from "^page-container"
import Summary from "./Summary"
import { $SwiperSectionLayout } from "../_presentation/$SwiperSectionLayout"
import { siteTranslations } from "^constants/siteTranslations"
import { useSiteLanguageContext } from "^context/SiteLanguage"

const Collections = ({
  collections,
}: {
  collections: CollectionAsSummary[] | null
}) => {
  const { siteLanguage } = useSiteLanguageContext()

  if (!collections?.length) {
    return null
  }

  const orderedCollections = sortEntitiesByDate(collections)

  return (
    <$SwiperSectionLayout
      swiper={
        <Swiper_
          slides={({ numSlidesPerView }) =>
            orderedCollections.map((collection, i) => (
              <Summary
                collection={collection}
                index={i}
                rightBorder={
                  orderedCollections.length < numSlidesPerView &&
                  i === orderedCollections.length - 1
                }
                key={collection.id}
              />
            ))
          }
        />
      }
      title={siteTranslations.collections[siteLanguage.id]}
      seeAllText={`More ${siteTranslations.collections[siteLanguage.id]}`}
    />
  )
}

export default Collections
