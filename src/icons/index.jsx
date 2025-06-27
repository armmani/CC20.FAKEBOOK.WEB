export function FakebookLogo(props) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {
              ".cls-3{fill:none;stroke:#2a5081;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
            }
          </style>
        </defs>
        <g data-name="Layer 6" id="Layer_6">
          <path
            d="M30.54 40.59v10.29c-2.67.13-5.38.19-7.63.1-7.26-.28-10.47 3.51-10.39-10.51s.67-25.53.67-25.53 1.55-2.16 10.94-2.22a51.72 51.72 0 002.41 19.85h-.4v5.94h3.08c.4.7.84 1.4 1.32 2.08z"
            fill="#9dcbf4"
          />
          <path
            d="M34 21.39s-7.09 1.38-8.57 7.47-5.73 2.84-6 9.09-7.25 3-6.72 9.33 15.78 3.36 15.78 3.36l2.25-.25-.19-11.31v-.88L27 38h-1.34l.72-4s-.72-1.63 1.47-1.38 2.65-1.37 2.7-5.24A7.59 7.59 0 0134 21.39z"
            fill="#389ad6"
          />
          <path
            className="cls-3"
            d="M30.54 51H17.22a4.64 4.64 0 01-4.63-4.62v-29.1a4.64 4.64 0 014.63-4.63H45.8M50.43 17.28v29.08A4.64 4.64 0 0145.8 51h-9"
          />
          <circle cx={50.48} cy={13.95} r={1} fill="#2a5081" />
          <path
            className="cls-3"
            d="M30.54 51V38.51h-4.4v-5.94h4.4v-5.73a6 6 0 016-6h6.23v5.65h-4.56A1.47 1.47 0 0036.74 28v4.54h6v6h-6V51"
          />
        </g>
      </g>
    </svg>
  );
}

export const FakebookTitle = (props) => {
  return (
    <svg
      width="400"
      height="50"
      viewBox="0 0 400 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#1877F2"
      >
        Fakebook CC20
      </text>
    </svg>
  );
 };
 