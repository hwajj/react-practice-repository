import React, { useEffect } from "react";
import "@/scss/components/layout/MainLayout.scss";
import { Map } from "react-kakao-maps-sdk";
import KakaoMap from "@/scss/components/map/KakaoMap.jsx";
const MainLayout = ({ children }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={"main-layout"}>
      <div className={"title"}> 카카오 맵을 연습해보고싶다</div>
      <KakaoMap />
    </div>
  );
};

export default MainLayout;
