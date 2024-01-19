/* -------------------------------------------------------------------------- */
/*                                    유저페이지                                  */
/* -------------------------------------------------------------------------- */
//프로필메뉴
import React from "react";

//필요한 아이콘 불러오기
import icons from "/src/assets/icons/icons.jsx";
export const profileMenuTeamplate = (data) => {
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

//프로필 나의 QnA,나의프로필, 내소식
export function profileMenuUpperTemplate() {
  return (
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
  );
}

//프로필 받은 좋아요, 응답률
export function profileInfos() {
  return (
    <div className="user--profile-percents">
      <div className="user--profile-percent">
        {icons.heart}
        <div className="user--profile-evaluation">
          <p>
            받은 좋아요 <span>100%</span>
          </p>
          <span>11개 중 11명이 만족</span>
        </div>
      </div>
      <div className="user--profile-percent">
        {icons.speech}
        <div className="user--profile-evaluation">
          <p>
            응답률 <span> - %</span>
          </p>
          <span>표시될 만큼 충분히 채팅하지 않았어요</span>
        </div>
      </div>
    </div>
  );
}

// 프로필 컨텐츠 템플릿
export function profileContentsTemplate(data) {
  let { user_badge } = data;
  return (
    <ul className="user--profile-contents">
      <li className="user--profile-content user--profile-badge">
        <span>활동배지 {user_badge.length}개</span>
        <button
          tabIndex="0"
          type="button"
          className="user--profile-more-button user--profile-badge-button"
        >
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
      <li>
        <span>판매상품 0개</span>
        <button type="button">
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
      <li className="user--profile-content user--profile-manner">
        <span>받은 매너평가</span>
        <button
          type="button"
          className="user--profile-more-button user--profile-manner-button"
        >
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
      <li>
        <span>받은 거래 후기 0개</span>
        <button type="button">
          <span className="sr-only">더 보기</span>
          {icons.rightDirection}
        </button>
      </li>
    </ul>
  );
}
//프로필 기본 메뉴
export function profileSubContentsTemplate(nickname) {
  return (
    /*html */ <ul className="user--contents">
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
        <span className="user--logout-nickname">{nickname}</span>
      </li>
    </ul>
  );
}

// 열정온도
export function userTemperatureTemplate(userTemperature) {
  return (
    /* html */ <div className="user--profile-temperature">
      <label htmlFor="temperature">
        열정온도
        <a>{icons.information}</a>
      </label>
      <div className="user--temperature-progressbar-wrapper">
        <span className="user--default-temperture">
          첫 온도 36.5℃
          {icons.polygon}
        </span>
        <span className="user--temperture">
          {userTemperature}℃ {userTemperature < 36 ? "🙂" : "😎"}
        </span>
        <progress id="temperature" value={userTemperature} max="100">
          {userTemperature}℃
        </progress>
      </div>
    </div>
  );
}

//뱃지
//(li 요소(활동배지) 다음으로 넣을 div 템플릿)
export const badgeListTemplate = /*html */ `  
<div className = "user--profile-badge-detail is-active"><div>`;

//뱃지 각자 요소
export function badgeTemplate(imgSrc, badgeTitle) {
  return /* html */ `
        <figure>
          <img src="${imgSrc}" />
          <figcaption><p>${badgeTitle}</p></figcaption>
       </figure> `;
}

// 매너평가
export const mannerListTemplate = /*html */ `<div className = "user--profile-manner-wrapper "> </div>`;
export function mannerTemplate(count, manner_title) {
  return /* html */ `
      <div className = "user--profile-manner-detail">
          <img src=${people} alt="" />
          <span>${count}</span><p>${manner_title}</p> 
      </div>`;
}
