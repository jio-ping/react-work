import icons from "/src/assets/icons/icons.jsx";

import style from "./MannerList.module.css";
import { useEffect, useState } from "react";
export function MannerList({ user_id }) {
  const [mannerInfo, setMannerInfos] = useState([]);
  console.log(user_id);
  const API_ENDPOINT = `${
    import.meta.env.VITE_PB_API
  }api/collections/user_manner_join_view/records?filter=(user_id="${user_id}")`;
  function getUsersMannerInfos() {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setMannerInfos(data.items))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    if (user_id) {
      getUsersMannerInfos();
      console.log(mannerInfo);
    }
  }, [user_id]);

  return (
    <ul className={style.manner_wrapper}>
      {mannerInfo.map((item) => {
        let { manner_idx, manner_title, count_manner: manner_count } = item;
        return (
          <li key={manner_idx} className={style.manner_detail}>
            {icons.people}
            <span>{manner_count}</span>
            <p>{manner_title}</p>
          </li>
        );
      })}
    </ul>
  );
}
