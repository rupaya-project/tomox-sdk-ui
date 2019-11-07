import React from 'react'

const SvgTrx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="trx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="trx_svg__b" cx={16} cy={15} r={15} />
      <filter id="trx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="trx_svg__e"
        d="M24.745 11.266c-.799-.567-1.654-1.172-2.49-1.772a.676.676 0 0 0-.06-.042 1.12 1.12 0 0 0-.328-.187l-.01-.005a3200.4 3200.4 0 0 1-6.709-1.654L9.164 6.129l-.157-.042c-.18-.051-.388-.108-.61-.08a.421.421 0 0 0-.17.066l-.056.047a.69.69 0 0 0-.157.253L8 6.411v.215l.01.033c1.26 3.585 2.554 7.222 3.802 10.741.961 2.71 1.96 5.516 2.934 8.272.06.187.231.31.444.328h.046a.519.519 0 0 0 .462-.258l3.66-5.413c.891-1.317 1.783-2.638 2.675-3.955l1.095-1.622c.6-.89 1.22-1.809 1.835-2.704l.032-.046v-.057c.014-.164.018-.501-.25-.68m-4.288 1.974c-.86.454-1.737.923-2.62 1.387l1.544-1.678c.642-.703 1.312-1.43 1.968-2.142l.014-.014c.055-.075.125-.145.199-.22.05-.051.106-.103.157-.164.342.24.688.483 1.021.722.24.173.485.347.735.52a257.207 257.207 0 0 0-3.018 1.589m-2.208-.225c-.661.726-1.345 1.471-2.024 2.207a1308.127 1308.127 0 0 0-3.965-4.855l-1.779-2.17-.004-.005c-.134-.154-.264-.323-.393-.482-.083-.108-.171-.211-.259-.319.536.14 1.077.272 1.608.398.467.113.952.23 1.428.352l8.045 1.982c-.892.966-1.789 1.945-2.657 2.892m-2.325 9.134c.051-.492.107-.998.153-1.495.042-.399.083-.806.125-1.195.064-.624.134-1.27.19-1.903l.013-.112c.046-.404.092-.82.12-1.238a1.38 1.38 0 0 1 .167-.08c.069-.032.138-.06.207-.102a611.674 611.674 0 0 1 3.207-1.697c1.068-.562 2.163-1.144 3.249-1.72a935.472 935.472 0 0 0-2.944 4.35c-.827 1.222-1.677 2.483-2.523 3.725-.332.497-.679 1.003-1.007 1.49-.37.544-.749 1.101-1.118 1.66.046-.563.101-1.13.161-1.683M9.484 8.496c-.06-.169-.126-.342-.181-.506 1.248 1.528 2.504 3.065 3.729 4.555.633.773 1.266 1.542 1.899 2.32.125.145.25.3.37.45.157.192.314.394.485.586-.056.482-.102.97-.153 1.438-.032.328-.064.657-.101.99v.004c-.014.21-.042.422-.065.628l-.106.933-.005.032c-.083.947-.185 1.903-.282 2.831-.041.384-.078.778-.12 1.172-.023-.07-.05-.141-.074-.207a21.05 21.05 0 0 1-.203-.576l-.495-1.392L9.483 8.496"
      />
      <filter id="trx_svg__d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#trx_svg__a)" xlinkHref="#trx_svg__b" />
      <use fill="#2A2A2A" fillRule="evenodd" xlinkHref="#trx_svg__b" />
      <use
        fill="url(#trx_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#trx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#trx_svg__d)" xlinkHref="#trx_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#trx_svg__e" />
    </g>
  </svg>
)

export default SvgTrx
