import * as React from 'react';

import type { SVGProps } from 'react';

const SvgJira = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 50 15"
    {...props}>
    <path
      fill="#fff"
      d="M16.457 5.326h.56v2.843c0 .753-.33 1.273-1.102 1.273a1.99 1.99 0 0 1-.672-.107V8.79c.185.072.381.108.579.107.473 0 .636-.284.636-.691zm1.58-.219a.365.365 0 0 1 .277.102.353.353 0 0 1 .102.272.374.374 0 0 1-.747 0 .365.365 0 0 1 .101-.277.352.352 0 0 1 .273-.102zm-.273 1.195h.535v3.112h-.535zM19.107 6.301h.523v.548c.185-.368.495-.629 1.102-.592v.523c-.684-.07-1.102.137-1.102.796v1.839h-.523zM23.24 8.853c-.2.416-.573.623-1.052.623-.828 0-1.245-.703-1.245-1.619 0-.877.436-1.618 1.307-1.618.454 0 .803.205.99.61V6.3h.536v3.112h-.535zm-.91.125c.48 0 .91-.305.91-.996V7.73c0-.69-.392-.995-.85-.995-.603 0-.914.398-.914 1.12.003.75.302 1.123.856 1.123zm4.614.498c-.79 0-1.158-.156-1.475-.318v-.573c.38.2.97.342 1.505.342.616 0 .85-.242.85-.604s-.225-.554-1.003-.74c-.924-.224-1.332-.542-1.332-1.214 0-.636.485-1.108 1.438-1.108.591 0 .971.142 1.247.299v.566a2.512 2.512 0 0 0-1.273-.311c-.535 0-.853.186-.853.56 0 .336.262.504.983.684.865.218 1.351.496 1.351 1.233-.005.709-.427 1.188-1.442 1.188zm1.91-1.625c0-.933.548-1.616 1.482-1.616.934 0 1.468.678 1.468 1.616 0 .938-.541 1.627-1.468 1.627-.927 0-1.481-.693-1.481-1.627m.523 0c0 .591.293 1.127.959 1.127.665 0 .947-.536.947-1.127s-.287-1.111-.947-1.111c-.66 0-.956.52-.956 1.111zm3.79-1.55h.802v.496h-.802v2.616h-.523V6.797h-.506v-.495h.504v-.34c0-.579.323-.97.99-.97.122-.001.244.015.36.049v.495a1.769 1.769 0 0 0-.335-.031c-.33 0-.495.193-.495.473zm2.614 2.59c.113-.003.226-.018.336-.044v.516c-.118.034-.239.05-.361.05-.666 0-.99-.392-.99-.971V6.799h-.506v-.495h.504v-.663h.523v.66h.827v.496h-.827v1.638c.002.274.165.46.494.46zm.486-2.59h.591l.896 2.64.908-2.64h.51l.91 2.64.897-2.64h.59l-1.145 3.112h-.684l-.536-1.505-.283-.959-.283.959-.543 1.505h-.684zm7.747 2.552c-.2.416-.573.623-1.052.623-.827 0-1.244-.703-1.244-1.619 0-.877.435-1.618 1.307-1.618.454 0 .802.205.99.61V6.3h.536v3.112h-.536zm-.909.125c.48 0 .909-.305.909-.996V7.73c0-.69-.392-.995-.849-.995-.601.005-.914.4-.914 1.123 0 .747.3 1.12.854 1.12M45.357 6.301h.523v.548c.185-.368.495-.629 1.102-.592v.523c-.684-.07-1.102.137-1.102.796v1.839h-.523zM48.868 9.476c-1.164 0-1.675-.672-1.675-1.627 0-.94.523-1.616 1.47-1.616.957 0 1.338.666 1.338 1.616v.243h-2.27c.074.528.417.871 1.15.871.324 0 .644-.057.947-.168v.495c-.255.139-.648.186-.97.186zm-1.139-1.838h1.735c-.031-.58-.293-.91-.828-.91-.565-.002-.852.366-.907.906z"
    />
    <path
      fill="#2684FF"
      d="M13.826 6.83 6.996 0 .167 6.83a.574.574 0 0 0 0 .809l6.83 6.83 6.829-6.83a.574.574 0 0 0 0-.81m-6.83 2.542L4.858 7.233l2.138-2.139 2.14 2.14z"
    />
    <path
      fill="url(#jira_svg__a)"
      d="M6.995 5.108A3.601 3.601 0 0 1 6.98.031L2.285 4.696l2.547 2.547z"
    />
    <path
      fill="url(#jira_svg__b)"
      d="M9.142 7.228 6.997 9.372a3.602 3.602 0 0 1 0 5.095l4.69-4.69z"
    />
    <defs>
      <linearGradient
        id="jira_svg__a"
        x1={6.614}
        x2={3.627}
        y1={2.931}
        y2={5.918}
        gradientUnits="userSpaceOnUse">
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="jira_svg__b"
        x1={7.405}
        x2={10.386}
        y1={11.511}
        y2={8.53}
        gradientUnits="userSpaceOnUse">
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgJira;
