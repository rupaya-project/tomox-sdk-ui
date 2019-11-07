import React from 'react'

const SvgNano = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="nano_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nano_svg__b" cx={16} cy={15} r={15} />
      <filter id="nano_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nano_svg__e"
        d="M24.95 10c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 0 0-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166a1.597 1.597 0 0 1 1.452 1.518c0 .89-.693 1.583-1.584 1.583-.89 0-1.583-.726-1.583-1.583 0-1.122-.363-1.55-1.583-1.55s-1.583.428-1.583 1.583v.099c-.033.791-.726 1.45-1.55 1.45-.89 0-1.584-.725-1.584-1.582 0-.825.627-1.485 1.419-1.55h.132c1.385 0 1.583-.297 1.583-1.55a1.584 1.584 0 0 1 3.166 0c0 1.253.198 1.582 1.583 1.582h.132zm-9.565 6.267a1.583 1.583 0 1 1 0-3.166 1.583 1.583 0 0 1 0 3.166z"
      />
      <filter id="nano_svg__d" width="115.9%" height="137.1%" x="-8%" y="-13.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#nano_svg__a)" xlinkHref="#nano_svg__b" />
      <use fill="#4A90E2" fillRule="evenodd" xlinkHref="#nano_svg__b" />
      <use
        fill="url(#nano_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nano_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nano_svg__d)" xlinkHref="#nano_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#nano_svg__e" />
    </g>
  </svg>
)

export default SvgNano
