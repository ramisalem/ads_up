type props = {
  showName?: boolean;
  width?: number;
  height?: number;
};
export default function ADSUPLogo() {
  //ADSUPLogo({ width: 204, height: 48 });

  return (
    <div className="flex flex-row flex-grow ltr:pl-6 rtl:pr-6   items-center leading-none ">
      <svg
        width="236"
        height="48"
        viewBox="0 0 236 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M137.838 41.0039C133.524 36.6487 130.861 30.6718 130.861 24.0463V1.48263C130.861 0.648649 131.504 0 132.33 0H108.554C107.728 0 107.085 0.648649 107.085 1.48263L107.039 14.5019C107.039 15.3359 107.682 15.9846 108.508 15.9846H120.534C121.635 15.9846 122.37 17.1429 121.865 18.1622L108.141 45.8687C107.636 46.8417 108.37 48.0463 109.472 48.0463H154.638C148.074 48 142.107 45.3127 137.838 41.0039Z"
          fill="#0047BB"
        />
        <path
          d="M23.7764 0C10.6489 0 0 10.749 0 24C0 37.251 10.6489 48 23.7764 48H46.084C46.9102 48 47.5528 47.3514 47.5528 46.5174V24C47.5528 10.749 36.9039 0 23.7764 0Z"
          fill="#0047BB"
        />
        <path
          d="M79.2705 0H56.963C56.1367 0 55.4941 0.648649 55.4941 1.48263V46.5174C55.4941 47.3514 56.1367 48 56.963 48H79.2705C92.398 48 103.047 37.251 103.047 24C103.093 10.749 92.4439 0 79.2705 0Z"
          fill="#0047BB"
        />
        <path
          d="M176.946 0H154.685L139.905 29.8378C139.4 30.8108 140.134 32.0154 141.236 32.0154H153.216C154.042 32.0154 154.685 32.6641 154.685 33.4981V48C167.812 48 178.461 37.251 178.461 24V1.48263C178.415 0.648649 177.773 0 176.946 0Z"
          fill="#C0DF16"
        />
        <path
          d="M153.169 32.0154H141.189C140.087 32.0154 139.353 30.8571 139.858 29.8378L153.582 2.08494L154.684 0H132.33C131.504 0 130.861 0.648649 130.861 1.48263V24C130.861 30.6255 133.524 36.6487 137.838 40.9575C142.153 45.2664 148.074 48 154.638 48H154.684V33.4981C154.684 32.6641 153.995 32.0154 153.169 32.0154Z"
          fill="#DF1995"
        />
        <path
          d="M218.118 0H187.869C187.043 0 186.4 0.648649 186.4 1.48263V46.5174C186.4 47.3514 187.043 48 187.869 48H208.708C209.534 48 210.177 47.3514 210.177 46.5174V33.4981C210.177 32.6641 210.819 32.0154 211.646 32.0154H218.072C226.839 32.0154 233.907 24.834 233.907 16.0309C233.999 7.18147 226.884 0 218.118 0Z"
          fill="#C0DF16"
        />
      </svg>
    </div>
  );
}
