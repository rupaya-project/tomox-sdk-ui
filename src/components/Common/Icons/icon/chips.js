import React from 'react'

const SvgChips = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="chips_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="chips_svg__b" cx={16} cy={15} r={15} />
      <filter id="chips_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="chips_svg__e"
        d="M13.548 24.408a295794.353 295794.353 0 0 0 2.536-3.277c.949.148 1.884.064 2.778-.324.323-.14.612-.358.916-.542.043-.026.083-.06.116-.085l3.072 3.038c-.255.17-.508.354-.777.512a9.368 9.368 0 0 1-3.379 1.17 10.47 10.47 0 0 1-2.122.08 11.919 11.919 0 0 1-3.14-.572zm-.966-.376a9.992 9.992 0 0 1-.996-.514 8.953 8.953 0 0 1-3.71-4.15 9.975 9.975 0 0 1-.787-2.86 12.322 12.322 0 0 1-.062-2.308c.123-1.975.724-3.79 1.935-5.387 1.118-1.474 2.586-2.483 4.323-3.13a9.661 9.661 0 0 1 2.565-.59c.663-.057 1.333-.114 1.996-.085.41.017.813.057 1.21.12a683038.835 683038.835 0 0 1-2.572 3.734 5.29 5.29 0 0 0-2.41.816c-1.33.844-2.126 2.06-2.5 3.56a7.241 7.241 0 0 0-.216 1.934c.009.342.038.677.089 1.004l-.308.447c-.248.36.057.836.498.778l.112-.014c.258.729.649 1.41 1.19 2.035.336.386.711.71 1.124.97l-1.445 3.491a.49.49 0 0 0-.036.15zm7.443-18.698a8.188 8.188 0 0 1 2.496 1.141c.138.094.264.205.396.308.025.019.051.036.083.058-.042.048-.066.08-.095.108-.911.898-1.824 1.793-2.732 2.694-.1.1-.163.116-.284.03a4.28 4.28 0 0 0-1.201-.596l1.283-3.375.034-.087a.488.488 0 0 0 .02-.281zm-3.704 10.948l-4.753.621L19.476 5.42l.044.02-3.055 8.031 5.575-.88-8.899 11.51-.043-.03 3.223-7.789z"
      />
      <filter id="chips_svg__d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#chips_svg__a)" xlinkHref="#chips_svg__b" />
        <use fill="#598182" fillRule="evenodd" xlinkHref="#chips_svg__b" />
        <use
          fill="url(#chips_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#chips_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#chips_svg__d)" xlinkHref="#chips_svg__e" />
      <use fill="#FFF" xlinkHref="#chips_svg__e" />
    </g>
  </svg>
)

export default SvgChips
