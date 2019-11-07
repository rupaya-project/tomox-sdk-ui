import React from 'react'

const SvgActn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="actn_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="actn_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="actn_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#actn_svg__a)" xlinkHref="#actn_svg__b" />
        <use fill="red" xlinkHref="#actn_svg__b" />
        <use
          fill="url(#actn_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#actn_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M5.372 20.319l4.893-8.908c.202-.372.539-.473.88-.27h.035a.645.645 0 0 0 .91-.27l3.437-5.264a2.63 2.63 0 0 1 .44-.607c.154.189.268.406.337.64l1.485 3.679c.336.844 1.146 1.452 1.99 1.452h.269c.433.015.844.197 1.148.506l1.078 1.146c.32.338.614.699.88 1.08l3.476 4.994c.13.198.254.4.37.607v.033a3.08 3.08 0 0 1-.506-.497l-4.69-4.866a4.686 4.686 0 0 1-.744-.98c-.374-.809-.845-1.148-1.586-1.113h-.944c-.572 0-.708-.1-.88-.675l-1.346-4.217c-.236-.845-.271-.845-.506 0l-.911 2.86c-.203.572-.27 1.518-.17 1.518.036 0 .271-.44.643-1.215.07-.158.16-.306.268-.44.086.323.132.654.137.988a5.702 5.702 0 0 1-.34.675l-.032.102c-.405.741-.405.776.033 1.485l.405.673c.153.207.279.434.371.675a4.987 4.987 0 0 1-.607.44l-2.092 1.35a2.75 2.75 0 0 1-1.214.336c-.744-.033-1.384.34-1.958 1.114l-.81 1.148c-.292.36-.62.687-.979.979l-.741.607a7.04 7.04 0 0 1-1.215.676l-.405.1c-.293.107-.6.174-.91.201-.139 0-.271 0-.271-.033.105-.246.23-.482.372-.708z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default SvgActn
