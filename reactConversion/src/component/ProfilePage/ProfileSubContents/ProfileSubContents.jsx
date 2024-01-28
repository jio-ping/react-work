import style from "./ProfileSubContents.module.css";
export function ProfileSubContents({ userData }) {
  return (
    /*html */ <ul className={style.user_sub_contents}>
      <li>
        <a href="">보관질문</a>
      </li>
      <li>
        <a href="">설정</a>
      </li>
      <li>
        <a href="">지식 iN 공식 블로그</a>
      </li>
      <li>
        <a href="">서비스 정보</a>
      </li>
      <li>
        <a href="">공지사항</a>
      </li>
      <li>
        <button type="button" className="user--logout">
          <span>로그아웃</span>
        </button>
        <span className={style.logout_nickname}>{userData.user_nickname}</span>
      </li>
    </ul>
  );
}
