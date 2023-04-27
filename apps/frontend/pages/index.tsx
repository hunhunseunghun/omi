import Button from "common/button/Button";
import HeaderConnectBt from "common/headerConnectBt/HeaderConnectBt";
import NotificationBt from "common/notificationBt/NotificationBt";
import SearchBar from "common/searchBar/SearchBar";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Button></Button>Hello World
      <SearchBar></SearchBar>
      <NotificationBt></NotificationBt>
      <HeaderConnectBt></HeaderConnectBt>
    </div>
  );
};

export default IndexPage;
