import style from "./NavBar.module.css";
// import { string } from "prop-types";
function NavBar() {
  return (
    <nav className={style.navigation}>
      <img
        src="/src/test_data/myprofile.jpg"
        alt="어쩌구님의 프로필"
        className={style.user_profile_photo}
      />
      <ul>
        <li>
          <a>
            <img src="../../../public/home.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../../public/message.svg" alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src="../../../public/setting.svg" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
/*NavBar.prototype = {

};*/

export default NavBar;
