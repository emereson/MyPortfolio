import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { VideoTexture } from "three";
import "./pagesStyle/home.css";

// Vertex Shader
const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

// Fragment Shader
const fragmentShader = `
    uniform sampler2D uTexture;
    varying vec2 vUv;
    
    void main() {
        vec4 textureColor = texture2D(uTexture, vec2(vUv.x, 0.5 + vUv.y / 2.0));
        vec4 textureWhite = texture2D(uTexture, vec2(vUv.x, vUv.y / 2.0));

        // Threshold to improve transparency handling
        float alphaThreshold = 0.8;
        if (textureWhite.x < alphaThreshold) {
            discard;  // Discard pixels that are below the threshold
        }
        
        // Apply transparency based on color or any other custom logic
        gl_FragColor = vec4(textureColor.xyz, textureWhite.x);
    }
`;

// Video Component
const VideoComponent = ({ video }) => {
  if (video === null) return null;

  const videoTexture = new VideoTexture(video);

  const uniforms = {
    uTexture: { value: videoTexture },
  };

  const { width, height } = useThree((state) => state.viewport);

  return (
    <mesh>
      <planeGeometry args={[width, height, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

// Transparent Video Component
const TransparentVideo = ({ filePath }) => {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const handleCanPlay = () => setIsVideoReady(true);

    const video = videoRef.current;
    if (video) {
      video.addEventListener("canplay", handleCanPlay);
      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, []);

  return (
    <div className="home_video">
      <video
        src={filePath}
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{ visibility: "hidden", pointerEvents: "none" }} // Disable pointer events
      />
      <Canvas gl={{ antialias: false }}>
        {isVideoReady && <VideoComponent video={videoRef.current} />}
      </Canvas>
    </div>
  );
};

// Main Home Component
const Home = () => {
  return (
    <main className="home_container" id="home">
      <img className="home_image1" src="./main2.webp" alt="" />
      <img className="home_image2" src="./main2.webp" alt="" />
      <TransparentVideo filePath="/file.mp4" />
      <section className="home_section">
        <h1>¡ HOLA !</h1>
        <h2>¡BIENVENIDO A MI PORTAFOLIO WEB!</h2>
      </section>
    </main>
  );
};

export default Home;
