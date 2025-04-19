// // LottieWithGLBAndAudio.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import myAudio from "../assets/Untitled-hi-IN.mp3";

// // GLB Model Component
// const Model = ({ isPlaying }) => {
//   const { scene, animations } = useGLTF("/animation.glb");
//   const mixer = useRef(null);

//   useEffect(() => {
//     if (animations.length > 0) {
//       mixer.current = new THREE.AnimationMixer(scene);
//       animations.forEach((clip) => {
//         const action = mixer.current.clipAction(clip);
//         isPlaying ? action.play() : action.stop();
//       });
//     }

//     const animate = () => {
//       mixer.current?.update(0.02);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       mixer.current?.stopAllAction();
//     };
//   }, [isPlaying, animations, scene]);

//   // Rotate and Position Adjustment
//   useFrame(() => {
//     scene.rotation.y = Math.PI; // Rotate to face the camera
//     scene.position.set(0, -3, 0); // Adjust height and depth
//   });

//   return <primitive object={scene} scale={[5, 5, 5]} />;
// };

// const LottieWithGLBAndAudio = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(new Audio(myAudio));

//   const handlePlay = () => {
//     setIsPlaying(true);
//     audioRef.current.play();
//   };

//   const handleStop = () => {
//     setIsPlaying(false);
//     audioRef.current.pause();
//     audioRef.current.currentTime = 0; // Reset audio
//   };

//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <h2>GLB Animation with Audio (Always Visible)</h2>
//       <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
//         <ambientLight intensity={1} />
//         <directionalLight position={[10, 10, 10]} />
//         <Model isPlaying={isPlaying} />
//         <OrbitControls /> {/* Allow interactive rotation */}
//       </Canvas>
//       <button onClick={isPlaying ? handleStop : handlePlay}>
//         {isPlaying ? "Stop" : "Play"}
//       </button>
//     </div>
//   );
// };

// export default LottieWithGLBAndAudio;
// LottieWithGLBAndAudio.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import myAudio from "../assets/Untitled-hi-IN.mp3";

// // GLB Model Component
// const Model = ({ isDancing }) => {
//   const { scene, animations } = useGLTF("/animation.glb");
//   const mixer = useRef(null);

//   useEffect(() => {
//     if (animations.length > 0) {
//       mixer.current = new THREE.AnimationMixer(scene);
//       animations.forEach((clip) => {
//         const action = mixer.current.clipAction(clip);
//         isDancing ? action.play() : action.stop();
//       });
//     }

//     const animate = () => {
//       mixer.current?.update(0.02);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => mixer.current?.stopAllAction();
//   }, [isDancing, animations, scene]);

//   return <primitive object={scene} scale={1.5} />;
// };

// const LottieWithGLBAndAudio = () => {
//   const [isDancing, setIsDancing] = useState(false);
//   const [input, setInput] = useState("");
//   const audioRef = useRef(new Audio(myAudio));

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//     if (!isDancing) {
//       audioRef.current.play();
//       setIsDancing(true);
//       setTimeout(() => setIsDancing(false), 5000); // Stop dancing after 5 seconds
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Side: Login Form */}
//       <div className="w-1/2 flex items-center justify-center bg-gray-100">
//         <form className="p-8 bg-white shadow-lg rounded-lg max-w-sm w-full">
//           <h2 className="text-2xl font-semibold mb-6">Login</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Email:</label>
//             <input
//               type="email"
//               className="mt-1 p-2 w-full border rounded-lg"
//               placeholder="Enter your email"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Password:</label>
//             <input
//               type="password"
//               className="mt-1 p-2 w-full border rounded-lg"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </form>
//       </div>

//       {/* Right Side: 3D Cartoon Animation */}
//       <div className="w-1/2 flex items-center justify-center bg-black">
//         <Canvas>
//           <ambientLight intensity={1.5} />
//           <OrbitControls />
//           <Model isDancing={isDancing} />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default LottieWithGLBAndAudio;



// // DancingCartoonLogin.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import myAudio from "../assets/Untitled-hi-IN.mp3";

// // GLB Model Component
// const Model = () => {
//   const { scene, animations } = useGLTF("/animation.glb");
//   const mixer = useRef(null);

//   useEffect(() => {
//     if (animations.length > 0) {
//       mixer.current = new THREE.AnimationMixer(scene);
//       animations.forEach((clip) => {
//         const action = mixer.current.clipAction(clip);
//         action.play(); // Always keep the dance animation running
//       });
//     }

//     const animate = () => {
//       mixer.current?.update(0.02);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => mixer.current?.stopAllAction();
//   }, [animations, scene]);

//   return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
// };

// const DancingCartoonLogin = () => {
//   const [inputValue, setInputValue] = useState("");
//   const audioRef = useRef(new Audio(myAudio));

//   // Play audio when input changes
//   useEffect(() => {
//     if (inputValue.length > 0) {
//       audioRef.current.play();
//     }
//   }, [inputValue]);

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Left side - Login Form */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//         >
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       {/* Right side - Dancing Cartoon */}
//       <div style={{ flex: 1 }}>
//         <Canvas>
//           <ambientLight intensity={0.8} />
//           <OrbitControls />
//           <Model />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default DancingCartoonLogin;


// // DancingCartoonLogin.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import myAudio from "../assets/Untitled-hi-IN.mp3";

// // GLB Model Component
// const Model = () => {
//   const { scene, animations } = useGLTF("/animation.glb");
//   const mixer = useRef(null);

//   useEffect(() => {
//     if (animations.length > 0) {
//       mixer.current = new THREE.AnimationMixer(scene);
//       animations.forEach((clip) => {
//         const action = mixer.current.clipAction(clip);
//         action.play(); // Keep the dance animation running
//       });
//     }

//     const animate = () => {
//       mixer.current?.update(0.02);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => mixer.current?.stopAllAction();
//   }, [animations, scene]);

//   return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
// };

// const DancingCartoonLogin = () => {
//   const [inputValue, setInputValue] = useState("");
//   const audioRef = useRef(new Audio(myAudio));

//   // Play audio when input changes
//   useEffect(() => {
//     if (inputValue.length > 0) {
//       audioRef.current.play();
//     }
//   }, [inputValue]);

//   return (
//     <div style={{background:"green", display: "flex", height: "100vh" }}>
//       {/* Left side - Login Form */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//         >
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       {/* Right side - Dancing Cartoon */}
//       <div style={{ flex: 1 }}>
//         <Canvas>
//           <ambientLight intensity={0.8} />
//           <OrbitControls />
//           <Model />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default DancingCartoonLogin;


// DancingCartoonLogin.jsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Lottie from "react-lottie";
import animationData from "../../public/Animation - 1740473776378.json";
import myAudio from "../assets/Untitled-hi-IN.mp3";

// GLB Model Component
const Model = () => {
  const { scene, animations } = useGLTF("/67bd6c74a12f7ecaeb9ccf44.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play(); // Keep the dance animation running
      });
    }

    const animate = () => {
      mixer.current?.update(0.02);
      requestAnimationFrame(animate);
    };
    animate();

    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
};

const DancingCartoonLogin = () => {
  const [inputValue, setInputValue] = useState("");
  const audioRef = useRef(new Audio(myAudio));

  // Play audio when input changes
  useEffect(() => {
    if (inputValue.length > 0) {
      audioRef.current.play();
    }
  }, [inputValue]);

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left side - Login Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right side - Dancing Cartoon + Lottie Animation */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute" }}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <Canvas>
          <ambientLight intensity={0.8} />
          <OrbitControls />
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default DancingCartoonLogin;
