import tw, { TwStyle } from "twin.macro"
import HtmlStrToJSX from "^components/HtmlStrToJSX"
import StorageImage from "^components/StorageImage"
import { Image } from "^types/entities"

export const $SummaryImage = ({
  image,
  styles,
  imagePriority,
}: {
  image: {
    vertPosition: number | undefined
    storageImage: Image
  } | null
  styles?: TwStyle
  imagePriority?: boolean
}) => {
  if (!image) {
    return null
  }

  return (
    <div css={[tw`relative aspect-ratio[16 / 9] w-full flex-grow`, styles]}>
      <StorageImage
        image={image.storageImage}
        vertPosition={image.vertPosition}
        priority={imagePriority}
      />
    </div>
  )
}

export const $SummaryText = ({
  htmlStr,
  languageId,
  maxCharacters,
  overflowHidden = true,
}: {
  htmlStr: string
  languageId: string
  maxCharacters: number
  overflowHidden?: boolean
}) => (
  <div
    css={[overflowHidden && tw`overflow-hidden`, tw`prose flex-shrink`]}
    className="custom-prose"
    style={{
      width: "auto",
      maxWidth: "100%",
    }}
  >
    <HtmlStrToJSX
      htmlStr={htmlStr}
      flattenContent={{ numChars: maxCharacters }}
      key={languageId}
    />
  </div>
)
