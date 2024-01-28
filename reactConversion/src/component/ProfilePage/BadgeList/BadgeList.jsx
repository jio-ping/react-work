import badgeData from "/src/data/badgeData.json";
import style from "./BadgeList.module.css";

export const BadgeList = ({ user_badge }) => {
  return (
    <div className={style.profile_badge_detail}>
      {user_badge.map((item) => (
        <figure key={badgeData[item].id}>
          <img src={badgeData[item].badge_photo} />
          <figcaption>
            <p>{badgeData[item].badge_title}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
