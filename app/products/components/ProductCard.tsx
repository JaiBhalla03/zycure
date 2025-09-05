"use client";
import React, { Suspense, useRef } from "react";
import { MoveUpRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import ModelViewer from "./ModelView";

interface ProductCardProps {
  num: string;
  heading: string;
  desc: string;
  route: string;
  modelUrl: string; // ✅ only .glb now
  style: string;
}

const MovingLights = () => {
  const dirLight = useRef<THREE.DirectionalLight>(null);
  const pointLight = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (dirLight.current) {
      dirLight.current.position.set(Math.sin(t) * 5, 4, Math.cos(t) * 5);
    }

    if (pointLight.current) {
      pointLight.current.position.set(Math.cos(t) * 3, 2 + Math.sin(t * 2), Math.sin(t) * 3);
    }
  });

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight ref={dirLight} intensity={4} color={"#ffffff"} />
      <pointLight ref={pointLight} intensity={1.5} color={"#ffd9b3"} distance={10} decay={2} />
    </>
  );
};

const ProductCard = ({ num, heading, desc, route, modelUrl, style }: ProductCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${style} px-4 py-5 md:py-10 rounded-sm my-4 md:my-10`}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 pb-4 md:p-4">
        <div className="text-xs text-gray-500">
          <i className="not-italic text-4xl font-semibold text-purple-800">{num}</i> /{" "}
          <i className="not-italic">05</i>
        </div>
        <h1 className="text-3xl font-semibold">{heading}</h1>
        <p className="text-xs">{desc}</p>
        <div className="flex gap-1 items-center group">
          <div className="h-10 flex justify-center items-center text-xs cursor-pointer duration-300 rounded-sm text-white bg-black p-2">
            Learn More
          </div>
          <div className="h-10 flex justify-center items-center cursor-pointer duration-300 rounded-sm text-white bg-black p-2">
            <MoveUpRight />
          </div>
        </div>
      </div>

      {/* Right Section → GLB Viewer */}
      <div className="relative w-full md:w-1/2 h-80">
        <Canvas camera={{ position: [0, 1.5, 4], fov: 35 }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <ModelViewer url={modelUrl} />
          </Suspense>
          <MovingLights /> {/* 🔥 Animated Lights */}
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default ProductCard;