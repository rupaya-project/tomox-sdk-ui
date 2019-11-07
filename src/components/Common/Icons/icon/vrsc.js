import React from 'react'

const SvgVrsc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vrsc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="vrsc_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="vrsc_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#vrsc_svg__a)" xlinkHref="#vrsc_svg__b" />
        <use fill="#FFB500" fillRule="evenodd" xlinkHref="#vrsc_svg__b" />
        <use
          fill="url(#vrsc_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#vrsc_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M26.906 13.65a11.003 11.003 0 0 0-2.549-5.787 10.871 10.871 0 0 0-3.541-2.74 10.967 10.967 0 0 0-5.876-1.06 10.985 10.985 0 0 0-8.822 6.13 11.012 11.012 0 0 0-.975 6.51 10.96 10.96 0 0 0 2.723 5.684c2.057 2.294 5.125 3.635 8.206 3.6A10.988 10.988 0 0 0 26.906 13.65zm-3.35-2.375a1.499 1.499 0 0 0-.129.224l-4.838 10.19c-.232.488-.465.98-.729 1.45-1.198-.01-2.397-.005-3.595-.005-1.91-3.93-3.81-7.866-5.724-11.792l-.12-.232c.031-.023.103-.063.134-.08.747-.93 1.502-1.856 2.254-2.787.093-.12.2-.236.308-.344.05.08.098.161.139.25.416.958.84 1.919 1.265 2.876.43 0 .859.009 1.292-.018.157.147.242.344.304.545.081-.205.112-.424.121-.648.139-1.283.161-2.58.3-3.863.022-.278.438-.278.474-.01.134 1.217.165 2.447.264 3.667.017.367.03.734.111 1.091.184-.241.126-.666.461-.764.277-.094.59.062.854-.103.362-.22.496-.648.724-.984.13-.219.43-.375.671-.25.242.094.344.353.47.559.143.237.272.5.505.657.206.09.438.103.662.098.451-1.02.916-2.034 1.377-3.05.805 1.011 1.565 2.053 2.37 3.064.12.054.143.143.076.26z" />
        <path d="M17.9 9.996c-.362.394-.491 1.029-1.033 1.23-.277.134-.612.022-.89.125-.24.474-.21 1.033-.393 1.525-.125.233-.5.116-.5-.139-.157-1.337-.17-2.687-.314-4.024-.152 1.203-.192 2.42-.38 3.613 0 .309-.487.358-.532.05-.094-.35-.116-.716-.29-1.043a30.713 30.713 0 0 0-.908 0c1.14 2.585 2.271 5.17 3.412 7.754 1.153-2.585 2.347-5.151 3.492-7.74l.004-.01c-.3-.035-.626-.066-.876-.254-.349-.29-.483-.756-.792-1.087z" />
      </g>
    </g>
  </svg>
)

export default SvgVrsc
