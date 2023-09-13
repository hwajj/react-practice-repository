import React, { useEffect } from "react";
import { Map, MapMarker, Circle } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const mainPos = {
    lat: 37.50626,
    lng: 127.05805,
  };

  useEffect(() => {});
  return (
    <Map
      center={{
        lat: mainPos.lat,
        lng: mainPos.lng,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <MapMarker
        onClick={() => {
          console.log("map");
        }}
        position={{
          lat: mainPos.lat,
          lng: mainPos.lng,
        }}
      />
      <Circle
        onClick={() => {
          console.log("hihi");
        }}
        center={{
          lat: mainPos.lat,
          lng: mainPos.lng,
        }}
        radius={1}
        fillColor={"#4f4f4f"}
        strokeWeight={20}
      />
    </Map>
  );
};

export default KakaoMap;
