import style from "./BadgeList.module.css";
import { useEffect, useState } from "react";

export const BadgeList = ({ user_badge }) => {
  /* props : user가 가진 badgedata [{…}, {…}, {…}, {…}] */
  const 유저가_받은_뱃지인덱스 = [];
  user_badge.forEach((item) => 유저가_받은_뱃지인덱스.push(item.badge_idx));
  // console.log(유저가_받은_뱃지인덱스) [3,1,2,4]
  const [badgeDetail, setBadgeDetail] = useState([]);
  const API_ENDPOINT = `${
    import.meta.env.VITE_PB_API
  }api/collections/badges/records`;
  function getBadgeDetail() {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setBadgeDetail(data.items);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => getBadgeDetail(), [badgeDetail]);

  return (
    <div className={style.profile_badge_detail}>
      {badgeDetail.map((item) => {
        let { id, badge_idx, badge_title, badge_image } = item;
        badge_image = `${
          import.meta.env.VITE_PB_API
        }api/files/badges/${id}/${badge_image}`;
        if (유저가_받은_뱃지인덱스.includes(badge_idx)) {
          return (
            <figure key={badge_idx}>
              <img src={badge_image} />
              <figcaption>
                <p>{badge_title}</p>
              </figcaption>
            </figure>
          );
        }
      })}
    </div>
  );
};
