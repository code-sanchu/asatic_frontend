import type { NextPage } from "next"

import { StaticData } from "^components/my-pages/collection-of-documents/recorded-events/staticData"
import PageContent from "^components/my-pages/collection-of-documents/recorded-events"

export { getStaticProps } from "^components/my-pages/collection-of-documents/recorded-events/staticData"

const RecordedEventsPage: NextPage<StaticData> = (staticData) => {
  return <PageContent {...staticData} />
}

export default RecordedEventsPage
