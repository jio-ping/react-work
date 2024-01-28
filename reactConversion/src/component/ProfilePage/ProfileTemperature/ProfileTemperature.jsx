import icons from "/src/assets/icons/icons.jsx";
import style from "./ProfileTemperature.module.css";

export function ProfileTemperature({ userData }) {
  return (
    <div className={style.profile_temperature}>
      <label htmlFor="temperature">
        열정온도
        <a>{icons.information}</a>
      </label>
      <div className={style.temperature_progressbar_wrapper}>
        <span className={style.default_temperture}>
          첫 온도 36.5℃
          {icons.polygon}
        </span>
        <span className={style.user_temperture}>
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
