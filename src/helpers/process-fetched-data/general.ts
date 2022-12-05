import { mapLanguageIds } from "../data"

export function mapEntitiesLanguageIds<
  TTranslation extends { languageId: string },
  TEntity extends { translations: TTranslation[] }
>(entities: TEntity[]) {
  return entities.flatMap((e) => mapLanguageIds(e.translations))
}