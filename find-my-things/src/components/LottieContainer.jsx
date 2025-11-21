import React from "react";
import Lottie from "lottie-react";

export default function LottieContainer({ animationData, width = 300, height = 300, loop = true }) {
  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
