import React from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

function ImageClassifier() {
  let net;
  const camera = React.useRef();
  const figures = React.useRef();
  const webcomElement = camera.current;

  const run = async () => {
    net = await mobilenet.load();

    const webcam = await tf.data.webcam(webcomElement, {
      resizeWidth: 220,
      resizeHeight: 227,
    });

    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);

      if (figures.current) {
        figures.current.innerText = `prediction : ${result[0].className} \n probability: ${result[0].probability}`;
      }
      img.dispose();
      await tf.nextFrame();
    }
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
        width="900"
        height="600"
      />
    </>
  );
}

export default ImageClassifier;
// 정상독작
