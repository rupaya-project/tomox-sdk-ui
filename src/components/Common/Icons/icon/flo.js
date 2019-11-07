import React from 'react'

const SvgFlo = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="flo_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="flo_svg__b" cx={16} cy={15} r={15} />
      <filter id="flo_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="flo_svg__e"
        d="M15.98 19.297c-1.145 1.307-1.173 3.1.013 4.294 1.121-1.08 1.122-3.093-.013-4.294m.001-12.192c-2.705 3.128-2.603 6.826-.002 9.899 2.648-3.136 2.655-6.816.002-9.9m1.912 9.026c2.25-2.3 4.995-2.826 8.107-2.328-1.003 2.3-2.418 4.137-4.918 5.098.552-.433 1.055-.787 1.51-1.193.76-.677 1.298-1.497 1.567-2.482.085-.311-.025-.399-.311-.445-1.047-.168-2.03.052-2.969.48-1.58.72-2.867 1.829-4.074 3.034-.021.022-.03.054-.068.123 2.365.09 4.166 1.034 5.233 3.215-1.386.308-2.654.243-3.83-.513.886.272 1.77.47 2.74.01-.12-.2-.19-.434-.35-.565-.437-.357-.885-.718-1.38-.99-.765-.418-1.62-.614-2.566-.808 1.277 2.237.957 4.268-.604 6.234-.726-.915-1.234-1.872-1.373-3.002-.14-1.134.179-2.164.726-3.15-1.21-.194-3.821 1.207-4.225 2.287.937.474 1.851.258 2.792-.092-.676.696-2.625.981-3.896.562 1.055-2.15 2.847-3.097 5.265-3.187-.178-.18-.31-.319-.448-.452-1.006-.97-2.075-1.86-3.331-2.508-1.027-.53-2.104-.862-3.287-.685-.14.021-.279.055-.475.095.36 1.85 1.6 2.997 3.134 3.964C9.25 18.637 6.53 15.82 6 13.798c3.11-.504 5.87.048 8.11 2.399-1.853-4.127-.867-7.78 1.87-11.197 2.715 3.39 3.711 7.017 1.913 11.13"
      />
      <filter id="flo_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#flo_svg__a)" xlinkHref="#flo_svg__b" />
      <use fill="#2080A2" xlinkHref="#flo_svg__b" />
      <use
        fill="url(#flo_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#flo_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#flo_svg__d)" xlinkHref="#flo_svg__e" />
      <use fill="#FFF" xlinkHref="#flo_svg__e" />
    </g>
  </svg>
)

export default SvgFlo
