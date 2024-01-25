import React, { useState } from "react";
import userData from "/src/data/userData.json";
import badgeData from "/src/data/badgeData.json";

const BadgeList = (user_badge) => {
  return (
    <div className="user--profile-badge-detail is-active">
      {user_badge.map((item) => (
        <figure key={badgeData[item].idx}>
          <img src={badgeData[item].badge_photo} />
          <figcaption>
            <p>{badgeData[item].badge_title}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
export default BadgeList