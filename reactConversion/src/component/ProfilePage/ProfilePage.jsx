import {
  UserProfile,
  ProfileTemperature,
  ProfileContents,
  ProfileSubContents,
} from "./index.js";
import { useEffect, useState } from "react";
const randomUser = [
  "c2zrq8ifbpivaop",
  "oj6b2x4745dlesh",
  "ooiqb1ty4hjvm1j",
  "4lmqgsmlq9y2uvl",
];
const USERS_KEY = randomUser[~~(Math.random() * randomUser.length)];

const API_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}api/collections/users/records?filter=(id="${USERS_KEY}")`;

function Profile() {
  const [userData, setUserData] = useState({});
  function getUsersData() {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setUserData(data.items[0]))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const controller = new AbortController();
    getUsersData();
    return () => controller.abort();
  }, []);

  return (
    <>
      <UserProfile userData={userData} />
      <ProfileTemperature userData={userData} />
      <ProfileContents userData={userData} />
      <ProfileSubContents userData={userData} />
    </>
  );
}

export default Profile;
