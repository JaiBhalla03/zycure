"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface ModelViewerProps {
  url: string;
}

const ModelViewer = ({ url }: ModelViewerProps) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={3.2} />;
};

export default ModelViewer;
