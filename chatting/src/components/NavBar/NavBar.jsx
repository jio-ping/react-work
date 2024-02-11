import style from "./NavBar.module.css";
// import { string } from "prop-types";
function NavBar({ userData }) {
  const { id, user_nickname, user_photo } = userData;
  const user_image = `${
    import.meta.env.VITE_PB_API
  }api/files/users/${id}/${user_photo}`;
  return (
    <nav className={style.navigation}>
      <img
        src={user_image}
        alt={`${user_nickname}의 프로필`}
        className={style.user_profile_photo}
      />
      <ul>
        <li>
          <a>
            <img src="/home.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/message.svg" alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src="/setting.svg" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
/*NavBar.prototype = {

};*/

export default NavBar;
