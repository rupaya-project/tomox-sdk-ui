import React from 'react'

const SvgItc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="itc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="itc_svg__b" cx={16} cy={15} r={15} />
      <filter id="itc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="itc_svg__e"
        d="M24.248 18.35c.45.173.748.601.752 1.08a1.15 1.15 0 0 1-.568.993 1.17 1.17 0 0 1-1.15.02l-6.03 3.29A1.159 1.159 0 0 1 16.117 25a1.16 1.16 0 0 1-1.188-1.131l-2.94-1.683h-.067v-.035L8.824 20.38a1.154 1.154 0 0 1-.658.204 1.16 1.16 0 0 1-1.154-.993 1.154 1.154 0 0 1 .832-1.271v-6.616a1.157 1.157 0 0 1-.84-1.013c-.04-.478.221-.931.658-1.138a1.17 1.17 0 0 1 1.306.207l5.97-3.42A1.16 1.16 0 0 1 16.088 5a1.16 1.16 0 0 1 1.137 1.399l5.828 3.338c.213-.192.49-.298.779-.297a1.153 1.153 0 1 1 .416 2.233v6.678zm-4.118-2.605v5.683l2.672-1.457a1.16 1.16 0 0 1 .797-1.674v-6.57a1.16 1.16 0 0 1-.935-1.133c0-.106.015-.212.044-.315l-2.533-1.452v5.284h-.004l-.01.346-.143.067-.913.546.873.52.139.066.004.062.005.027h.004zm-4.04-8.436c-.332 0-.648-.14-.869-.387l-2.65 1.519v5.612l1.088.648 1.374-.808a1.025 1.025 0 0 1 1.012-1.217 1.025 1.025 0 0 1 1.016 1.177l1.419.844 1.052-.63V8.458l-2.614-1.497a1.157 1.157 0 0 1-.828.347zm.68 8.422l1.083-.652-1.088-.649a1.035 1.035 0 0 1-1.418.023l-1.07.621 1.065.635a1.035 1.035 0 0 1 1.428.022zm-7.528 4.147l2.68 1.536v-5.492l.005-.177.045-.045.224-.133.832-.488-.752-.444-.349-.178v-.213h-.004V8.809l-2.628 1.506c.155.6-.2 1.214-.8 1.385v6.624c.317.092.58.315.723.611.143.297.152.64.024.943zm6.848 2.793c.365 0 .708.17.926.462l2.47-1.35v-5.736l-1.006-.6-1.42.853c.01.05.014.1.014.15 0 .565-.46 1.022-1.03 1.022a1.025 1.025 0 0 1-1.01-1.203l-1.393-.826-1.074.626v5.714l2.525 1.447c.21-.348.589-.56.998-.559z"
      />
      <filter id="itc_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#itc_svg__a)" xlinkHref="#itc_svg__b" />
      <use fill="#102044" xlinkHref="#itc_svg__b" />
      <use
        fill="url(#itc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#itc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#itc_svg__d)" xlinkHref="#itc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#itc_svg__e" />
      </g>
    </g>
  </svg>
)

export default SvgItc
