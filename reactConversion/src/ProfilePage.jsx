//유저정보 가저오기
import userData from "/src/data/userData.json";

import {
  UserProfile,
  ProfileTemperature,
  ProfileContents,
  ProfileSubContents,
  MannerList,
} from "./component/index.js";

const user = ~~(Math.random() * userData.length);

function Profile() {
  return (
    <>
      <UserProfile userData={userData[user]} />
      <ProfileTemperature userData={userData[user]} />
      <ProfileContents userData={userData[user]} />
      <ProfileSubContents userData={userData[user]} />
      <MannerList />
    </>
  );
}

export default Profile;
