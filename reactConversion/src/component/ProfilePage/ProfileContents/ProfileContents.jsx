import style from "./ProfileContents.module.css";
import { BadgeList, MannerList } from "/src/component/ProfilePage/index.js";

import icons from "/src/assets/icons/icons.jsx";

import { useState, useEffect } from "react";

export function ProfileContents({ userData }) {
  let { id: user_id } = userData;
  const API_ENDPOINT = `${
    import.meta.env.VITE_PB_API
  }api/collections/user_badge/records?filter=(user_id="${user_id}")`;
  const [badgeData, setBadgeData] = useState([]);
  const [showBadge, setShowBadge] = useState(false);
  const [manner, setManner] = useState(false);

  function getUsersBadge() {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setBadgeData(data.items))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    if (user_id) {
      getUsersBadge();
    }
  }, [user_id]);

  function handleShowMoreBadge() {
    const userProfileBadgeButton = document.querySelector(
      ".user--profile-badge-button"
    );
    const userProfileBadge = document.querySelector("#badgeList");
    if (!Array.from(userProfileBadgeButton.classList).includes("is-active")) {
      userProfileBadgeButton.classList.add("is-active");
      userProfileBadge.classList.add("is-active");
      setShowBadge(true);
    } else {
      userProfileBadgeButton.classList.remove("is-active");
      userProfileBadge.classList.remove("is-active");
      setShowBadge(false);
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
        <span>활동배지 {badgeData.length}개</span>
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
      {showBadge ? <BadgeList user_badge={badgeData} /> : null}
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
      {manner ? <MannerList user_id={user_id} /> : null}
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
