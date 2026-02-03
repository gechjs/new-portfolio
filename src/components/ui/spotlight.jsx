import * as React from "react"

export function Spotlight({ className, fill = "white" }) {
  return (
    <svg
      className={`absolute h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2832"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1928.71"
          cy="1416.38"
          rx="1928.71"
          ry="1416.38"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="3787.42"
          height="2832.76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_3987_23353"
          />
        </filter>
      </defs>
    </svg>
  )
}
