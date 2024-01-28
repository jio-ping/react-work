import icons from "/src/assets/icons/icons.jsx";
import mannerData from "/src/data/mannerData.json";
import userMannerData from "/src/data/userMannerData.json";
import style from "./MannerList.module.css";
export function MannerList({ user_id }) {
  //{manner_id: 받은 개수}
  const manner_count = {};
  userMannerData.forEach((item) => {
    if (item.user_id === user_id) {
      if (manner_count[item.manner_id]) {
        manner_count[item.manner_id] += 1;
      } else {
        manner_count[item.manner_id] = 1;
      }
    }
  });
  return (
    <ul className={style.manner_wrapper}>
      {Object.entries(manner_count).map((item, index) => (
        <li key={index} className={style.manner_detail}>
          {icons.people}
          <span>{item[1]}</span>
          <p>{mannerData[item[0]].manner_title}</p>
        </li>
      ))}
    </ul>
  );
}
