import style from "./ProfileContents.module.css";
import { BadgeList, MannerList } from "/src/component/ProfilePage/index.js";

import icons from "/src/assets/icons/icons.jsx";

import { useState } from "react";

export function ProfileContents({ userData }) {
  let { user_badge, id } = userData;

  const [badge, setBadge] = useState(false);
  const [manner, setManner] = useState(false);

  function handleShowMoreBadge() {
    const userProfileBadgeButton = document.querySelector(
      ".user--profile-badge-button"
    );
    const userProfileBadge = document.querySelector("#badgeList");
    if (!Array.from(userProfileBadgeButton.classList).includes("is-active")) {
      userProfileBadgeButton.classList.add("is-active");
      userProfileBadge.classList.add("is-active");
      setBadge(true);
    } else {
      userProfileBadgeButton.classList.remove("is-active");
      userProfileBadge.classList.remove("is-active");
      setBadge(false);
    }
  }

  function handleShowMoreManner() {
    const userProfileMannerButton = document.querySelector(
      ".user--profile-manner-button"
    );
    const userProfileManner = document.querySelector("#mannerList");
    console.log(userProfileMannerButton);
    console.log(userProfileManner);
    if (!Array.from(userProfileMannerButton.classList).includes("is-active")) {
      userProfileManner.classList.add("is-active");
      userProfileMannerButton.classList.add("is-active");
      setManner(true);
    } else {
      userProfileManner.classList.remove("is-active");
      userProfileMannerButton.classList.remove("is-active");
      setManner(false);
    }
  }
  return (
    <ul className={style.profile_contents}>
      <li
        id="badgeList"
        className={`${style.profile_content} user--profile-badge`}
      >
        <span>활동배지 {user_badge.length}개</span>
        <button
          onClick={handleShowMoreBadge}
          tabIndex="0"
          type="button"
          className="user--profile-more-button user--profile-badge-button"
        >
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
      {badge ? <BadgeList user_badge={user_badge} /> : null}
      <li className={style.profile_content}>
        <span>판매상품 0개</span>
        <button type="button">
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
      <li id="mannerList" className={style.profile_content}>
        <span>받은 매너평가</span>
        <button
          onClick={handleShowMoreManner}
          type="button"
          className="user--profile-more-button user--profile-manner-button"
        >
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
      {manner ? <MannerList user_id={id} /> : null}
      <li className={style.profile_content}>
        <span>받은 거래 후기 0개</span>
        <button type="button">
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
    </ul>
  );
}
