// components/LottiePlayer.tsx
"use client";

import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
const LottiePlayer = ({copied}: {copied: boolean}) => {
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default LottiePlayer;
