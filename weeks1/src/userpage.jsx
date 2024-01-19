//모듈 불러오기
import React from "react";
import ReactDOM from "react-dom/client";

//유저정보 가저오기
import data from "/src/data/userData.json";

//템플릿 불러오기
import {
  profileInfos,
  profileMenuTeamplate,
  profileMenuUpperTemplate,
  profileContentsTemplate,
  userTemperatureTemplate,
  profileSubContentsTemplate,
} from "/src/template.jsx";

const profileTemplate = (data) => {
  return (
    <div className="app">
      <div className="user--profile-menu">
        {profileMenuTeamplate(data)}
        {profileMenuUpperTemplate()}
        {profileInfos()}
      </div>
      {userTemperatureTemplate(data.user_temperature)}
      {profileContentsTemplate(data)}
      {profileSubContentsTemplate(data.user_nickname)}
    </div>
  );
};

ReactDOM.createRoot(document.querySelector("body")).render(
  profileTemplate(data[0])
);
