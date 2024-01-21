//모듈 불러오기
import React from "react";
import ReactDOM from "react-dom/client";

//유저정보 가저오기
import userData from "/src/data/userData.json";
import badgeData from "/src/data/badgeData.json";

//템플릿 불러오기
import {
  profileInfos,
  profileMenuTemplate,
  profileMenuUpperTemplate,
  // profileContentsTemplate,
  userTemperatureTemplate,
  profileSubContentsTemplate,
} from "/src/template.jsx";
import { ProfileContents } from "/src/ProfileContents.jsx";

// 프로필 템플릿
const profileTemplate = (userData) => {
  return (
    <div className="app">
      <div className="user--profile-menu">
        {profileMenuTemplate(userData)}
        {profileMenuUpperTemplate()}
        {profileInfos()}
      </div>
      {userTemperatureTemplate(userData.user_temperature)}
      <ProfileContents />
      {profileSubContentsTemplate(userData.user_nickname)}
    </div>
  );
};

ReactDOM.createRoot(document.querySelector("body")).render(
  profileTemplate(userData[0])
);
