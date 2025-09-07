"use client";
import { useParams } from "next/navigation";
import { productCardData } from "../../constant";
import { notFound } from "next/navigation";
import SmallHeading from "@/app/components/utils/SmallHeading";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import ModelViewer from "../components/ModelView";
import { motion, Variants } from "framer-motion";

const MovingLights = () => {
  const dirLight = useRef<THREE.DirectionalLight>(null);
  const pointLight = useRef<THREE.PointLight>(null);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight ref={dirLight} intensity={4} color={"#ffffff"} />
      <pointLight
        ref={pointLight}
        intensity={1.5}
        color={"#ffd9b3"}
        distance={10}
        decay={2}
      />
    </>
  );
};

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
  }),
};

const ProductPage = () => {
  const { slug } = useParams();

  // find product by matching route last part
  const product = productCardData.find((p) => p.route.endsWith(slug as string));

  if (!product) return notFound();

  return (
    <div className="pt-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        custom={0}
        className="mb-6 text-center md:text-left"
      >
        <SmallHeading heading={product.heading} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          {product.name}
        </h1>
      </motion.div>

      {/* Model + Description */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        custom={1}
        className="flex flex-col md:flex-row items-center gap-8 mb-12"
      >
        <div className="relative w-full md:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96">
          <Canvas
            camera={{ position: [0, 1.5, 4], fov: 35 }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <ModelViewer url={product.modelUrl} />
            </Suspense>
            <MovingLights />
            <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
        </div>
        <div
          className={`text-gray-700 w-full md:w-1/2 ${product.style} p-4 sm:p-6 rounded-md text-base sm:text-lg leading-relaxed`}
        >
          {product.desc}
        </div>
      </motion.div>

      {/* Composition */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        custom={2}
        className={`mb-8 ${product.style} p-4 sm:p-6 rounded-md`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Composition</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
          {product.composition?.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </motion.div>

      {/* Uses */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        custom={3}
        className={`mb-8 ${product.style} p-4 sm:p-6 rounded-md`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Indications / Uses
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
          {product.uses?.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </motion.div>

      {/* Benefits */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        custom={4}
        className={`mb-8 ${product.style} p-4 sm:p-6 rounded-md`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
          {product.benefits?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProductPage;
