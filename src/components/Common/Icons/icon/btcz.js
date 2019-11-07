import React from 'react'

const SvgBtcz = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="btcz_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="btcz_svg__b" cx={16} cy={15} r={15} />
      <filter id="btcz_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="btcz_svg__e"
        d="M16 26C9.934 26 5 21.066 5 15S9.937 4 16 4s11 4.937 11 11c0 1.002-.136 2-.405 2.966a.888.888 0 0 1-1.71-.478c.225-.81.34-1.647.339-2.488 0-5.086-4.138-9.224-9.224-9.224S6.776 9.914 6.776 15s4.138 9.224 9.224 9.224c.952 0 1.899-.146 2.806-.435a.888.888 0 1 1 .538 1.692A10.97 10.97 0 0 1 16 26zm3.375-11.026c.38.318.636.778.768 1.379.086.346.08.709-.016 1.052a2.125 2.125 0 0 1-.494.85 3.14 3.14 0 0 1-.868.637c-.342.177-.423.234-.831.324l-.254.061a.296.296 0 0 0-.219.352l.15.672a.296.296 0 0 1-.226.353l-.677.15a.296.296 0 0 1-.353-.225l-.148-.667a.296.296 0 0 0-.353-.225l-1.833.406a.722.722 0 0 1-.86-.55l-1.65-7.459a.722.722 0 0 1 .55-.86l1.833-.406a.296.296 0 0 0 .225-.353l-.15-.672a.296.296 0 0 1 .227-.352l.677-.15a.296.296 0 0 1 .353.225l.148.668a.296.296 0 0 0 .353.224l.56-.122c.29-.068.593-.063.88.015.274.075.53.203.753.377a2.537 2.537 0 0 1 .894 1.434c.094.42.075.858-.054 1.27a2.06 2.06 0 0 1-.767 1.06c.506.024.99.21 1.382.532zm-5.43-1.597l.098.426a.722.722 0 0 0 .86.55l1.307-.29a.916.916 0 0 0 .55-.357c.141-.188.177-.44.107-.757-.065-.292-.192-.5-.38-.624a.767.767 0 0 0-.612-.114l-1.38.305a.722.722 0 0 0-.55.861zm3.909 3.767h.002a.951.951 0 0 0 .11-.745 1.089 1.089 0 0 0-.393-.647.764.764 0 0 0-.663-.156l-1.656.367a.722.722 0 0 0-.55.86l.116.527a.722.722 0 0 0 .861.55l1.569-.347a.916.916 0 0 0 .604-.409zm3.298 5.383l1.533-1.832a.277.277 0 0 0-.213-.455H21.44a.277.277 0 0 1-.278-.277v-.216c0-.153.124-.277.278-.277h2.358a.277.277 0 0 1 .277.277v.284a.277.277 0 0 1-.06.172l-1.467 1.842a.277.277 0 0 0 .217.45h1.051c.153 0 .278.124.278.277v.215a.277.277 0 0 1-.278.277h-2.452a.277.277 0 0 1-.277-.277v-.28a.28.28 0 0 1 .065-.18z"
      />
      <filter id="btcz_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#btcz_svg__a)" xlinkHref="#btcz_svg__b" />
      <use fill="#F8C24A" fillRule="evenodd" xlinkHref="#btcz_svg__b" />
      <use
        fill="url(#btcz_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#btcz_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#btcz_svg__d)" xlinkHref="#btcz_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#btcz_svg__e" />
    </g>
  </svg>
)

export default SvgBtcz
