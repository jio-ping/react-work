import icons from "/src/assets/icons/icons.jsx";

export const UserProfile = ({ userData }) => {
  let { user_nickname, user_year, user_photo } = userData;
  return (
    <div className="user--profile-menu">
      <figure>
        <div className="user--profile-picture-wrapper">
          <img
            src={user_photo}
            className="user--profile-picture"
            alt={user_nickname + "님의 프로필 사진"}
          />
          <a href="/">{icons.pencil}</a>
        </div>
        <figcaption>
          <p>
            {user_nickname}
            <span>{user_year}기</span>
          </p>
          <span className="user--answer">답변 35 </span>
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
