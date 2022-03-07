import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import animationData from "../../public/animations/loading.json";

const LoadingIndicator = ({ customMessage }) => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        loop: true,
        autoplay: true,
        animationData,
      });

      return () => anim.current?.destroy();
    }
  }, []);

  return(
    <>
      <div className="flex flex-col justify-center items-center">
        <div ref={animationContainer} style={{ width: 200, height: 200 }} />
        <p>{customMessage ? customMessage : 'Loading...'}</p>
      </div>
    </>
  )
}

export default LoadingIndicator;
