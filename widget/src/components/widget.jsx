import "./widget.css";
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
function bodyStyling() {
  document.body.style.backgroundColor = `#f4f6f8`;
}
bodyStyling();

const weatherData = {
  temperature: 10,
  yesterdayTemp: 13,
  atmosphereStatus: "sunny",
};
//오늘의 온도 ㅎ.ㅎ
const renderTemperature = (temperature) => {
  return <p>{temperature}°</p>;
};

//어제보다 몇도 높/낮아요!
const renderRelativeText = (yesterdayTemp, temperature) => {
  let relativeTemp = yesterdayTemp - temperature;
  if (relativeTemp > 0) {
    return <p>어제보다 {relativeTemp}° 낮아요</p>;
  }
  if (relativeTemp === 0) {
    return <p>어제와 같아요 </p>;
  } else {
    return <p>어제보다 {-relativeTemp}° 높아요</p>;
  }
};

// 날씨 아이콘 다 때려넣어 !!!!!
function RenderWeatherIcon(props) {
  let 대기상태 = props.대기상태;
  const weatherIcon = {
    rainy: (
      <svg
        width="50"
        height="45"
        viewBox="0 0 50 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_16_859)">
          <g filter="url(#filter1_i_16_859)">
            <path
              d="M40.0933 12.5011C40.1936 11.9318 40.2459 11.3463 40.2459 10.7486C40.2459 5.15749 35.6711 0.625 30.0279 0.625C25.8326 0.625 22.2279 3.12996 20.6542 6.71259C19.3794 5.62209 17.7251 4.96369 15.9174 4.96369C11.8865 4.96369 8.6188 8.23715 8.6188 12.2752C8.6188 12.5 8.62894 12.7225 8.64877 12.9422C6.70999 13.8831 5.375 15.8573 5.375 18.1404C5.375 21.3354 7.98914 23.9254 11.2138 23.9254H38.7862C42.0109 23.9254 44.625 21.3354 44.625 18.1404C44.625 15.3908 42.6887 13.0891 40.0933 12.5011Z"
              fill="url(#paint0_linear_16_859)"
            />
          </g>
        </g>
        <g filter="url(#filter2_di_16_859)">
          <path
            d="M15.9375 17.625C13.6265 20.6667 10.391 26.75 15.9375 26.75C21.484 26.75 18.2485 20.6667 15.9375 17.625Z"
            fill="#00BCFF"
          />
        </g>
        <g filter="url(#filter3_di_16_859)">
          <path
            d="M33.9375 17.625C31.6265 20.6667 28.391 26.75 33.9375 26.75C39.484 26.75 36.2485 20.6667 33.9375 17.625Z"
            fill="#00BCFF"
          />
        </g>
        <g filter="url(#filter4_di_16_859)">
          <path
            d="M25.3125 30.25C23.0015 33.2917 19.766 39.375 25.3125 39.375C30.859 39.375 27.6235 33.2917 25.3125 30.25Z"
            fill="#00BCFF"
          />
        </g>
        <g filter="url(#filter5_f_16_859)">
          <rect
            x="10"
            y="24.625"
            width="30"
            height="4.375"
            rx="2.1875"
            fill="#00BCFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_16_859"
            x="3.6875"
            y="-1.0625"
            width="42.625"
            height="26.6754"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.84375" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_16_859"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_16_859"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_i_16_859"
            x="5.375"
            y="0.625"
            width="39.25"
            height="23.9254"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.6875" />
            <feGaussianBlur stdDeviation="0.3125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_859"
            />
          </filter>
          <filter
            id="filter2_di_16_859"
            x="10.5"
            y="17.625"
            width="10.875"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.5" />
            <feGaussianBlur stdDeviation="1.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.283785 0 0 0 0 0.178889 0 0 0 0 0.933333 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_859"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_859"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_16_859"
            />
          </filter>
          <filter
            id="filter3_di_16_859"
            x="28.5"
            y="17.625"
            width="10.875"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.5" />
            <feGaussianBlur stdDeviation="1.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.283785 0 0 0 0 0.178889 0 0 0 0 0.933333 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_859"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_859"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_16_859"
            />
          </filter>
          <filter
            id="filter4_di_16_859"
            x="19.875"
            y="30.25"
            width="10.875"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.5" />
            <feGaussianBlur stdDeviation="1.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.283785 0 0 0 0 0.178889 0 0 0 0 0.933333 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_859"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_859"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_16_859"
            />
          </filter>
          <filter
            id="filter5_f_16_859"
            x="0.25"
            y="14.875"
            width="49.5"
            height="23.875"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.875"
              result="effect1_foregroundBlur_16_859"
            />
          </filter>
          <linearGradient
            id="paint0_linear_16_859"
            x1="7.87147"
            y1="21.845"
            x2="47.4682"
            y2="-7.76591"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.58" />
          </linearGradient>
        </defs>
      </svg>
    ),
    partlyCloudy: (
      <svg
        width="51"
        height="49"
        viewBox="0 0 51 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_16_839)">
          <rect
            x="10.4375"
            y="10.3125"
            width="30"
            height="28.25"
            rx="11.75"
            fill="#FFEF9A"
          />
        </g>
        <g filter="url(#filter1_i_16_839)">
          <path
            d="M38.4375 26.6875C38.4375 33.8672 32.6172 39.6875 25.4375 39.6875C18.2578 39.6875 12.4375 33.8672 12.4375 26.6875C12.4375 19.5078 18.2578 13.6875 25.4375 13.6875C32.6172 13.6875 38.4375 19.5078 38.4375 26.6875Z"
            fill="url(#paint0_linear_16_839)"
          />
        </g>
        <g filter="url(#filter2_b_16_839)">
          <g filter="url(#filter3_i_16_839)">
            <path
              d="M32.8532 33.3911C32.9436 32.878 32.9907 32.3503 32.9907 31.8116C32.9907 26.7725 28.8676 22.6875 23.7815 22.6875C20.0004 22.6875 16.7516 24.9452 15.3333 28.1741C14.1843 27.1913 12.6933 26.5978 11.0641 26.5978C7.43112 26.5978 4.48605 29.5481 4.48605 33.1875C4.48605 33.3902 4.49519 33.5907 4.51306 33.7887C2.76569 34.6367 1.5625 36.416 1.5625 38.4737C1.5625 41.3532 3.91856 43.6875 6.8249 43.6875H31.6751C34.5814 43.6875 36.9375 41.3532 36.9375 38.4737C36.9375 35.9955 35.1924 33.9211 32.8532 33.3911Z"
              fill="url(#paint1_linear_16_839)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_16_839"
            x="0.8125"
            y="0.6875"
            width="49.25"
            height="47.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.8125"
              result="effect1_foregroundBlur_16_839"
            />
          </filter>
          <filter
            id="filter1_i_16_839"
            x="12.4375"
            y="13.6875"
            width="26"
            height="26.625"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.625" />
            <feGaussianBlur stdDeviation="1.125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_839"
            />
          </filter>
          <filter
            id="filter2_b_16_839"
            x="-1.8125"
            y="19.3125"
            width="42.125"
            height="27.75"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.6875" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_16_839"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_16_839"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_i_16_839"
            x="1.5625"
            y="22.6875"
            width="35.375"
            height="22.25"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.375" />
            <feGaussianBlur stdDeviation="0.625" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_839"
            />
          </filter>
          <linearGradient
            id="paint0_linear_16_839"
            x1="23.4628"
            y1="33.7634"
            x2="34.159"
            y2="15.004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#FFEE94" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_16_839"
            x1="3.8125"
            y1="41.8125"
            x2="39.5"
            y2="15.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.58" />
          </linearGradient>
        </defs>
      </svg>
    ),
    lightning: (
      <svg
        width="52"
        height="41"
        viewBox="0 0 52 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_16_851)">
          <g filter="url(#filter1_i_16_851)">
            <path
              d="M41.0933 12.0011C41.1936 11.4318 41.2459 10.8463 41.2459 10.2486C41.2459 4.65749 36.6711 0.125 31.0279 0.125C26.8326 0.125 23.2279 2.62996 21.6542 6.21259C20.3794 5.12209 18.7251 4.46369 16.9174 4.46369C12.8865 4.46369 9.6188 7.73715 9.6188 11.7752C9.6188 12 9.62894 12.2225 9.64877 12.4422C7.70999 13.3831 6.375 15.3573 6.375 17.6404C6.375 20.8354 8.98914 23.4254 12.2138 23.4254H39.7862C43.0109 23.4254 45.625 20.8354 45.625 17.6404C45.625 14.8908 43.6887 12.5891 41.0933 12.0011Z"
              fill="url(#paint0_linear_16_851)"
            />
          </g>
        </g>
        <g filter="url(#filter2_i_16_851)">
          <path
            d="M29.4719 23.4375H23.2188L20.5 30.7482H25.3938L23.1281 39.875L31.375 27.9013H27.75L29.4719 23.4375Z"
            fill="url(#paint1_linear_16_851)"
          />
        </g>
        <g filter="url(#filter3_f_16_851)">
          <rect
            x="9.875"
            y="19.25"
            width="32.125"
            height="6.25"
            rx="3.125"
            fill="#FFED8D"
          />
        </g>
        <g filter="url(#filter4_di_16_851)">
          <path
            d="M33.7688 36.6969C32.7981 37.128 32.4192 37.4923 32.0719 38.3938C31.7953 37.5201 31.4553 37.1304 30.375 36.6969C31.4863 36.3349 31.7879 35.9157 32.0719 35C32.421 35.844 32.6366 36.3046 33.7688 36.6969Z"
            fill="url(#paint2_linear_16_851)"
          />
        </g>
        <g filter="url(#filter5_i_16_851)">
          <path
            d="M18.0188 27.1969C17.0481 27.628 16.6692 27.9923 16.3219 28.8938C16.0453 28.0201 15.7053 27.6304 14.625 27.1969C15.7363 26.8349 16.0379 26.4157 16.3219 25.5C16.671 26.344 16.8866 26.8046 18.0188 27.1969Z"
            fill="url(#paint3_linear_16_851)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_16_851"
            x="4.6875"
            y="-1.5625"
            width="42.625"
            height="26.6754"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.84375" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_16_851"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_16_851"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_i_16_851"
            x="6.375"
            y="0.125"
            width="39.25"
            height="23.9254"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.6875" />
            <feGaussianBlur stdDeviation="0.3125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_851"
            />
          </filter>
          <filter
            id="filter2_i_16_851"
            x="20.25"
            y="23.4375"
            width="11.125"
            height="16.4375"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-0.25" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_851"
            />
          </filter>
          <filter
            id="filter3_f_16_851"
            x="0.25"
            y="9.625"
            width="51.375"
            height="25.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.8125"
              result="effect1_foregroundBlur_16_851"
            />
          </filter>
          <filter
            id="filter4_di_16_851"
            x="29.2791"
            y="35"
            width="5.58569"
            height="5.86476"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.375" />
            <feGaussianBlur stdDeviation="0.547965" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.285052 0 0 0 0 0.179688 0 0 0 0 0.9375 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_16_851"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_16_851"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_16_851"
            />
          </filter>
          <filter
            id="filter5_i_16_851"
            x="14.625"
            y="25.5"
            width="3.39383"
            height="3.89383"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_851"
            />
          </filter>
          <linearGradient
            id="paint0_linear_16_851"
            x1="8.87147"
            y1="21.345"
            x2="48.4682"
            y2="-8.26591"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.58" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_16_851"
            x1="24.5934"
            y1="38.2917"
            x2="35.202"
            y2="23.6473"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#FFEE94" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_16_851"
            x1="31.581"
            y1="38.5528"
            x2="33.1782"
            y2="35.5541"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#FFEE94" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_16_851"
            x1="15.831"
            y1="29.0528"
            x2="17.4282"
            y2="26.0541"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#FFEE94" />
          </linearGradient>
        </defs>
      </svg>
    ),
    sunny: (
      <svg
        width="50"
        height="49"
        viewBox="0 0 50 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_16_845)">
          <path
            d="M42.7006 16.1018C42.746 15.8453 42.7696 15.5814 42.7696 15.3121C42.7696 12.7925 40.7008 10.75 38.1488 10.75C36.2515 10.75 34.6214 11.8788 33.9097 13.4933C33.3332 13.0019 32.5851 12.7052 31.7676 12.7052C29.9447 12.7052 28.4669 14.1803 28.4669 16C28.4669 16.1013 28.4715 16.2016 28.4805 16.3006C27.6037 16.7246 27 17.6142 27 18.6431C27 20.0829 28.1822 21.25 29.6405 21.25H42.1095C43.5678 21.25 44.75 20.0829 44.75 18.6431C44.75 17.404 43.8743 16.3668 42.7006 16.1018Z"
            fill="url(#paint0_linear_16_845)"
          />
        </g>
        <g filter="url(#filter1_f_16_845)">
          <rect
            x="10"
            y="10.25"
            width="30"
            height="28.25"
            rx="11.75"
            fill="#FFEF9A"
          />
        </g>
        <g filter="url(#filter2_i_16_845)">
          <path
            d="M38.25 24.375C38.25 31.7618 32.3178 37.75 25 37.75C17.6822 37.75 11.75 31.7618 11.75 24.375C11.75 16.9882 17.6822 11 25 11C32.3178 11 38.25 16.9882 38.25 24.375Z"
            fill="url(#paint1_linear_16_845)"
          />
        </g>
        <g filter="url(#filter3_i_16_845)">
          <path
            d="M22.9506 34.6018C22.996 34.3453 23.0196 34.0814 23.0196 33.8121C23.0196 31.2925 20.9508 29.25 18.3988 29.25C16.5015 29.25 14.8714 30.3788 14.1597 31.9933C13.5832 31.5019 12.8351 31.2052 12.0176 31.2052C10.1947 31.2052 8.71694 32.6803 8.71694 34.5C8.71694 34.6013 8.72152 34.7016 8.73049 34.8006C7.85372 35.2246 7.25 36.1142 7.25 37.1431C7.25 38.5829 8.43219 39.75 9.8905 39.75H22.3595C23.8178 39.75 25 38.5829 25 37.1431C25 35.904 24.1243 34.8668 22.9506 34.6018Z"
            fill="url(#paint2_linear_16_845)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_16_845"
            x="27"
            y="10.75"
            width="17.75"
            height="11.75"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.375" />
            <feGaussianBlur stdDeviation="0.625" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_845"
            />
          </filter>
          <filter
            id="filter1_f_16_845"
            x="0.375"
            y="0.625"
            width="49.25"
            height="47.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="4.8125"
              result="effect1_foregroundBlur_16_845"
            />
          </filter>
          <filter
            id="filter2_i_16_845"
            x="11.75"
            y="11"
            width="26.5"
            height="27.375"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.625" />
            <feGaussianBlur stdDeviation="1.125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_845"
            />
          </filter>
          <filter
            id="filter3_i_16_845"
            x="7.25"
            y="29.25"
            width="17.75"
            height="11.75"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.375" />
            <feGaussianBlur stdDeviation="0.625" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_845"
            />
          </filter>
          <linearGradient
            id="paint0_linear_16_845"
            x1="28.129"
            y1="20.3125"
            x2="45.9904"
            y2="6.90831"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.58" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_16_845"
            x1="22.9873"
            y1="31.6551"
            x2="34.0445"
            y2="12.4438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#FFEE94" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_16_845"
            x1="8.37898"
            y1="38.8125"
            x2="26.2404"
            y2="25.4083"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.58" />
          </linearGradient>
        </defs>
      </svg>
    ),
    fineDust: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 9.29512e-07 18 0L18 18V36Z"
          fill="url(#paint0_linear_16_601)"
        />
        <path
          d="M18 0C13.2261 -5.69281e-08 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 4.17347e-07 13.2261 0 18C-4.17347e-07 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36L18 18V0Z"
          fill="url(#paint1_linear_16_601)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_16_601"
            x1="18"
            y1="0"
            x2="18"
            y2="31.0909"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5E9EFD" />
            <stop offset="1" stopColor="#B1D0FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_16_601"
            x1="18"
            y1="0"
            x2="18"
            y2="30.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BBD6FF" />
            <stop offset="1" stopColor="#E9F2FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };
  return weatherIcon[대기상태];
}

function Widget(props) {
  let { temperature, yesterdayTemp, todayTemp, atmosphereStatus } =
    props.weatherData;
  return (
    <form className="widget">
      <div role="group">
        {renderTemperature(temperature)}
        {renderRelativeText(yesterdayTemp, temperature)}
      </div>
      <RenderWeatherIcon 대기상태={atmosphereStatus} />
    </form>
  );
}

createRoot(document.getElementById("root")).render(
  <Widget weatherData={weatherData} />
);
