export function mapIds<T extends { id: string }>(arr: T[]): string[] {
  return arr.map((a) => a.id)
}

export function mapLanguageIds<T extends { languageId: string }>(
  arr: T[]
): string[] {
  return arr.map((a) => a.languageId)
}

export function checkObjectHasField<T extends Record<string, unknown>>(obj: T) {
  const hasAKey = Object.keys(obj).length

  return Boolean(hasAKey)
}

export function findTranslation<TTranslation extends { languageId: string }>(
  translations: TTranslation[],
  languageId: string
) {
  return translations.find(
    (translation) => translation.languageId === languageId
  )
}

export function filterAndMapEntitiesById<TControlEntity extends { id: string }>(
  ids: string[],
  control: TControlEntity[]
): TControlEntity[] {
  return ids
    .filter((id) => mapIds(control).includes(id))
    .map((id) => control.find((controlEntity) => controlEntity.id === id))
    .flatMap((entity) => (entity ? [entity] : []))
}

export function findEntityById<TEntity extends { id: string }>(
  entities: TEntity[],
  findById: string
) {
  return entities.find((entity) => entity.id === findById)
}

export function findTranslationByLanguageId<
  TTranslation extends { languageId: string }
>(entities: TTranslation[], findById: string) {
  return entities.find((entity) => entity.languageId === findById)
}

/** filter arr1 items if arr2 includes them */
export function filterArr1ByArr2<
  TEntity extends string | Record<string, unknown> | number
>(arr1: TEntity[], arr2: TEntity[]) {
  return arr1.filter((arr1Item) => arr2.includes(arr1Item))
}
