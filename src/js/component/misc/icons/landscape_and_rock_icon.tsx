import React from "react"

type Props = {
    isActive: boolean,
}


const outlineStyleBase = {
    strokeWidth: 2,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeMiterlimit: 4,
    fillOpacity: 0,
    opacity: 1,
    stroke: "rgb(140,140,140)",
}


const outline = "m15.47 13.79-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zm-4.9-2.37L8.6 8.8C8.22 8.3 7.63 8 7 8H4c-1.1 0-2 .9-2 2v1.61l4 1.33 4.57-1.52zM6 19.05l-4-1.33V20c0 1.1.9 2 2 2h14c1.65 0 2.59-1.88 1.6-3.2l-2.57-3.42L6 19.05zm11-14.4V2.64c0-.95-.67-1.77-1.61-1.96L12.81.16c-.52-.1-1.06 0-1.5.3l-1.42.95C9.33 1.78 9 2.4 9 3.07v1.86c0 .67.33 1.29.89 1.66l1.23.82c.55.37 1.24.44 1.85.19l2.77-1.11C16.5 6.2 17 5.46 17 4.65zm.75 2.95-1 .8c-.47.38-.75.95-.75 1.56v1.08c0 .61.28 1.18.75 1.56l.8.64c.58.47 1.38.57 2.06.27l2.2-.98c.72-.32 1.19-1.04 1.19-1.83V9.6c0-.94-.65-1.75-1.57-1.95l-2-.44c-.59-.13-1.21.01-1.68.39z"

export const LandScapeAndRockIcon: React.FC<Props> = ({isActive}) => {
  const strokeColor = isActive ? "#2196f3" : "rgb(140,140,140)"
  const outlineStyle = { ...outlineStyleBase, stroke: strokeColor }
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="48" height="48" viewBox="0 0 24 24" xmlSpace="preserve">
    <g>
        <path style={outlineStyle} vectorEffect="non-scaling-stroke" transform=" translate(0, 0)" d={outline} strokeLinecap="round" />
    </g>
  </svg>
}
