import React, { FC } from 'react'
import { mapRegions } from '../highlight-utils'

export const HighlightedText: FC<{
  highlightComponent: React.ElementType
  text: string
  highlightClassName: string
  regions?: readonly number[][]
}> = ({ highlightComponent: Em, text, highlightClassName, regions = [] }) => {
  return (
    <>
      {mapRegions(text, regions, (text, i) => (
        <Em key={`${text}-${i}`} className={highlightClassName}>
          {text}
        </Em>
      ))}
    </>
  )
}

export default HighlightedText
