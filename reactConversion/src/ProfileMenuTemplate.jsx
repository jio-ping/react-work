import icons from "/src/assets/icons/icons.jsx";

export const profileMenuTemplate = (data) => {
  let { user_nickname, user_year, user_photo } = data;
  return (
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
  );
};
