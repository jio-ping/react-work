//유저정보 가저오기
import userData from "/src/data/userData.json";

import {
  UserProfile,
  ProfileTemperature,
  ProfileContents,
  ProfileSubContents,
} from "./index.js";

console.log(userData[0]);
function Profile() {
  return (
    <>
      <UserProfile userData={userData[0]} />
      <ProfileTemperature userData={userData[0]} />
      <ProfileContents userData={userData[0]} />
      <ProfileSubContents userData={userData[0]} />
    </>
  );
}

export default Profile;
