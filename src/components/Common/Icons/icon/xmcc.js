import React from 'react'

const SvgXmcc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xmcc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="xmcc_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="xmcc_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#xmcc_svg__a)" xlinkHref="#xmcc_svg__b" />
        <use fill="#DD0632" xlinkHref="#xmcc_svg__b" />
        <use
          fill="url(#xmcc_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#xmcc_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M22.125 7h-4.73l-1.406 2.431L14.588 7H9.855L5 15.41l4.701 8.14 3.188-5.517L16 23.405l3.102-5.372 3.194 5.555L27 15.448 22.125 7zM9.695 20.332l-2.843-4.92 2.262-3.915 2.842 4.923-2.261 3.916v-.004zm.352-10.452l.75-1.303h2.834l1.425 2.469-2.167 3.757-2.842-4.923zm5.94 10.296l-2.165-3.76 2.167-3.755.968 1.672 1.201 2.083-2.169 3.755-.002.005zm.933-9.13l1.427-2.469h2.834l.759 1.303-2.86 4.923-2.16-3.757zm7.304 5.993l-1.919 3.328-2.281-3.96 2.842-4.912.766 1.32 1.516 2.624-.924 1.6z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default SvgXmcc
