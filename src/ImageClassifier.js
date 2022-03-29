/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

const ImageClassifier = () => {
  let net;
  const camera = React.useRef();
  const figures = React.useRef();
  const webcamElement = camera.current;

  const run = async () => {
    net = await mobilenet.load();

    const webcam = await tf.data.webcam(webcamElement, {
      resizeWidth: 220,
      resizeHeight: 227,
    });
    console.log("작동");
    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);

      // if (figures.current) {
      //   figures.current.innerText = `prediction : ${result[0].className} \n probability: ${result[0].probability}`;
      // }

      img.dispose();

      await tf.nextFrame();
    }
    console.log("종료");
  };

  React.useEffect(() => {
    run();
  });

  return (
    <>
      <div ref={figures}></div>
      <video
        autoPlay
        playsInline
        muted={true}
        ref={camera}
        width="450"
        height="300"
      />
    </>
  );
};

export default ImageClassifier;
