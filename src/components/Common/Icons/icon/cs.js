import React from 'react'

const SvgCs = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cs_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cs_svg__b" cx={16} cy={15} r={15} />
      <filter id="cs_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cs_svg__e"
        d="M16.931 8.625c2.453.181 3.643 1.645 3.643 1.91 0 .187-.045.595-.045.845 0 .167.06.434.18.8-.03.25-.195.376-.496.376-.45 0-.324-.505-.992-1.505-.72-1.077-1.448-1.303-2.294-1.35.017 2.296.08 8.616.085 10.79 2.255-.328 3.507-2.012 3.832-2.012.18 0 .406.14.406.47 0 .695-1.782 2.267-4.272 2.578C16.792 23.556 15.832 26 13.45 26c-1.127 0-2.074-.87-2.074-1.88 0-.658.496-.94.947-.94.45 0 .901.329.901.94 0 .407-.135.69-.405.846.27.188.54.282.811.282.902 0 1.58-1.632 1.696-3.73-2.628-.422-5.077-2.926-5.077-6.565 0-4.093 2.55-5.863 5.051-6.258.05-1.84 1.011-4.65 3.47-4.695 1.487 0 2.118 1.222 2.118 1.88 0 .658-.473.94-.946.94-.474 0-.947-.376-.947-.94 0-.376.15-.642.45-.799-.21-.188-.48-.282-.81-.282-1.251 0-1.644 2.638-1.705 3.826zm-1.587 11.788c-.004-2.434-.035-8.043-.043-10.62-2.308.567-3.067 3.313-3.067 5.16 0 2.928 1.384 4.939 3.11 5.46z"
      />
      <filter id="cs_svg__d" width="131.8%" height="115.9%" x="-15.9%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cs_svg__a)" xlinkHref="#cs_svg__b" />
      <use fill="#262626" xlinkHref="#cs_svg__b" />
      <use
        fill="url(#cs_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cs_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#cs_svg__d)" xlinkHref="#cs_svg__e" />
      <use fill="#FFF" xlinkHref="#cs_svg__e" />
    </g>
  </svg>
)

export default SvgCs
