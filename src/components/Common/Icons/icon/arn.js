import React from 'react'

const SvgArn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="arn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="arn_svg__b" cx={16} cy={15} r={15} />
      <filter id="arn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="arn_svg__e"
        d="M11.76 13.102l4.282-7.538c.008-.014.024-.023.08 0l4.074 7.401a.976.976 0 0 0 .025 1.532l-3.763 6.788a1.008 1.008 0 0 0-.86-.006l-3.873-6.899a.971.971 0 0 0 .034-1.278zm-.41 1.534l3.888 6.925a.974.974 0 0 0-.18.356c-3.139-.752-5.089-1.217-5.852-1.396a9.556 9.556 0 0 1-.844-1.438l2.492-4.386a1.024 1.024 0 0 0 .496-.06zm-.539-1.883l-3.087-5.5C9.828 6.136 12.439 5.55 15.559 5.5l-4.162 7.326a1.008 1.008 0 0 0-.586-.073zm-.42.176a.977.977 0 0 0 .034 1.608l-2.29 4.03a9.464 9.464 0 0 1-.67-2.954l-.463-7.382a.889.889 0 0 1 .332-.748l3.058 5.446zm6.6 8.998a.974.974 0 0 0-.175-.355l3.818-6.887a1.018 1.018 0 0 0 .496-.024l2.474 4.494c-.21.432-.452.848-.724 1.245l-5.89 1.527zm-.741 1.2a.993.993 0 0 0 .747-.739l5.456-1.415a9.661 9.661 0 0 1-2.336 2.092l-3.623 2.314a.914.914 0 0 1-.244.11v-2.361zm-.454 0V25.5a.915.915 0 0 1-.29-.121l-3.623-2.314a9.664 9.664 0 0 1-2.246-1.982c.99.235 2.793.665 5.409 1.291.08.373.374.668.75.754zm5.37-10.334a1.011 1.011 0 0 0-.564-.028l-3.997-7.262c3.032.067 5.58.646 7.641 1.735l-3.08 5.555zm.383.241l3.09-5.572a.89.89 0 0 1 .36.769l-.463 7.383a9.465 9.465 0 0 1-.7 3.025l-2.314-4.203a.974.974 0 0 0 .027-1.402zM16 10.234a.55.55 0 0 0-.541.534v1.954L12.573 14.5l.309.667 2.577-.844v1.954l-.722.533v.533L16 16.987l1.263.355v-.533l-.722-.533v-1.954l2.533.89.353-.712-2.886-1.778v-1.954a.55.55 0 0 0-.54-.533z"
      />
      <filter id="arn_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#arn_svg__a)" xlinkHref="#arn_svg__b" />
      <use fill="#0092B5" fillRule="evenodd" xlinkHref="#arn_svg__b" />
      <use
        fill="url(#arn_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#arn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#arn_svg__d)" xlinkHref="#arn_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#arn_svg__e" />
    </g>
  </svg>
)

export default SvgArn
