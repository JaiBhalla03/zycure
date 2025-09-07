"use client";
import SmallHeading from "@/app/components/utils/SmallHeading";
import { TeamCardData } from "@/app/constant";
import React from "react";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // ✅ cards appear one by one
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="px-4 md:px-20 py-5 md:py-10 flex flex-col items-start md:items-center gap-5 md:gap-10"
    >
      {/* Heading with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-start md:items-center"
      >
        <SmallHeading heading="MEET THE TEAM" />
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Our Team
        </h1>
      </motion.div>

      {/* Cards with stagger animation */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"
      >
        {TeamCardData.map((item, index) => (
          <motion.div key={index} variants={itemVariant}>
            <TeamCard
              reverse={item.reverse}
              name={item.name}
              designation={item.designation}
              desc={item.desc}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
