import icons from "/src/assets/icons/icons.jsx";
import style from "./UserProfile.module.css";

export const UserProfile = ({ userData }) => {
  let { id, user_nickname, user_year, user_photo } = userData;
  user_photo = `${
    import.meta.env.VITE_PB_API
  }api/files/users/${id}/${user_photo}`;
  return (
    <div className={style.profile_menu}>
      <figure>
        <div className={style.profile_picture_wrapper}>
          <img
            src={user_photo}
            className={style.profile_picture}
            alt={user_nickname + "님의 프로필 사진"}
          />
          <a href="/" className={style.profile_modify}>
            {icons.pencil}
          </a>
        </div>
        <figcaption>
          <p>
            {user_nickname}
            <span>{user_year}기</span>
          </p>
          <span className={style.answer}>답변 35 </span>
        </figcaption>
      </figure>
      <ul>
        <li>
          <a>
            {icons.QnA}
            <span>나의 Q&A</span>
          </a>
        </li>
        <li>
          <a href="/src/pages/UserPage/children_pages/profileCard/index.html">
            {icons.profile}
            <span>나의 프로필</span>
          </a>
        </li>
        <li>
          <a>
            {icons.alarmBell}
            <span>내 소식</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
