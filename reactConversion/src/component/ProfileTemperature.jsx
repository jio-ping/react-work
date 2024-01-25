import icons from "/src/assets/icons/icons.jsx";
//열정온도
export function ProfileTemperature({ userData }) {
  return (
    <div className="user--profile-temperature">
      <label htmlFor="temperature">
        열정온도
        <a>{icons.information}</a>
      </label>
      <div className="user--temperature-progressbar-wrapper">
        <span className="user--default-temperture">
          첫 온도 36.5℃
          {icons.polygon}
        </span>
        <span className="user--temperture">
          {userData.user_temperature}℃{" "}
          {userData.user_temperature < 36 ? "🙂" : "😎"}
        </span>
        <progress id="temperature" value={userData.user_temperature} max="100">
          {userData.user_temperature}℃
        </progress>
      </div>
    </div>
  );
}
