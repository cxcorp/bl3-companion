import { ReactNode } from 'react'

type Mapper = (text: string, regionIndex: number) => ReactNode

export const mapRegions = (
  text: string,
  regions: readonly number[][],
  highlightedMapper: Mapper
) => {
  const content: ReactNode[] = []
  let nextUnhighlightedRegionStartingIndex = 0

  regions.forEach((region, i) => {
    const lastRegionNextIndex = region[1] + 1

    content.push(
      text.substring(nextUnhighlightedRegionStartingIndex, region[0])
    )
    content.push(
      highlightedMapper(text.substring(region[0], lastRegionNextIndex), i)
    )
    nextUnhighlightedRegionStartingIndex = lastRegionNextIndex
  })

  content.push(text.substring(nextUnhighlightedRegionStartingIndex))
  return content
}
