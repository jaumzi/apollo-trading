
/** Uses
 * * index: indexar a página [Nota: você não precisa usar essa diretiva se a diretiva noindex não for usada, nesse caso o rastreador vai considerar a ausência de diretiva como instrução para indexar
 * * noindex: não indexar a página e não mostrar nas SERPs
 * * follow: seguir os links na página para descobrir outras páginas
 * * nofollow: não seguir os links da página
 * * none: um atalho para especificar noindex, nofollow
 * * all: um atalho para especificar index, follow
 * * noimageindex: não indexar as imagens na página
 * * noarchive: não mostrar uma versão em cache da página nas SERPs
 * * nocache: é o mesmo que noarchive, mas apenas para MSN
 * * nositelinkssearchbox: não mostrar uma caixa de pesquisa para o seu site nas SERPs
 * * nopagereadaloud: não permitir que os serviços de voz leiam sua página em voz alta
 * * notranslate: não mostrar traduções da página nas SERPs
 * * unavailable_after: especificar um tempo após o qual a página não deve ser indexada
 *
 * Mais informações em: https://developers.google.com/search/docs/advanced/crawling/special-tags?hl=pt-br
 */
export const META_ROBOTS = {
  INDEX: 'index',
  NO_INDEX: 'noindex' ,
  FOLLOW: 'follow',
  NO_FOLLOW: 'nofollow',
  NONE: 'none',
  ALL: 'all',
  NO_IMAGE_INDEX: 'noimageindex' ,
  NO_ARCHIVE: 'noarchive',
  NO_CACHE: 'nocache',
  NO_SITE_LINK_SEARCHBOX: 'nositelinkssearchbox',
  NO_PAGE_READ_A_LOUD: 'nopagereadaloud' ,
  NO_TRANSLATE: 'notranslate',
  UNAVAILABLE_AFTER: (time: number) => `unavailable_after: ${time}`,
}

/** Classificação etária
 * * 14 years: menos de 14 anos
 * * mature: adultos
 * * restricted: beneficio a todos
 * * general: todos
 */
export const META_RATING = {
  MAX_14_YEARS: '14 years',
  MIN_18_YEARS: 'mature',
  RESTRICTED: 'restricted',
  GENERAL: 'general',
}
/** Diustribuição
 * * IU: uso interno
 * * local
 * * global
 */
export const META_DISTRIBUITION = {
  INTERNAL_USE: 'IU',
  LOCAL: 'local',
  GLOBAL: 'global'
}
