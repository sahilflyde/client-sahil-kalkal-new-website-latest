"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./spacing";
import { Button } from "./button";
import Typography from "./Typography";

const TransformSection = ({
  // TEXT
  title = "Transform Your Hiring",
  subtitle = "",
  desc = "Your description goes here...",
  btnText = "Get Started",

  // WORD ARRAYS ✅
  titleWords = [],
  subtitleWords = [],
  descWords = [],
  btnTextWords = [],

  // VARIANTS
  titleVariant = "",
  subtitleVariant = "",
  descVariant = "",
  buttonTextVariant = "",

  // MEDIA
  btnIcon = "",
  bgImage = "",
  buttonLink = "#",
}) => {
  const bgVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <Container variant="section">
      <motion.section
        className="transform-section section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="transform-card"
          variants={bgVariants}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="transform-card-content"
            variants={textContainer}
          >
            {/* TITLE */}
            {title && (
              <motion.div variants={textItem}>
                <Typography
                  variant="h1"
                  overrideVariant={titleVariant}
                  words={titleWords}
                  className="cta-title"
                >
                  {title}
                </Typography>
              </motion.div>
            )}

            {/* SUBTITLE */}
            {subtitle && (
              <motion.div variants={textItem}>
                <Typography
                  variant="body-2"
                  overrideVariant={subtitleVariant}
                  words={subtitleWords}
                >
                  {subtitle}
                </Typography>
              </motion.div>
            )}

            {/* DESC */}
            {desc && (
              <motion.div variants={textItem}>
                <Typography
                  variant="body-3"
                  overrideVariant={descVariant}
                  words={descWords}
                  className="cta-desc"
                >
                  {desc}
                </Typography>
              </motion.div>
            )}

            {/* BUTTON */}
            <motion.div variants={textItem}>
              <Button
                variant="white"
                showIcon={true}
                iconPosition="right"
                className="btn"
                icon={
                  btnIcon ? (
                    <Image
                      src={btnIcon}
                      width={14}
                      height={12}
                      alt="arrow"
                      className="arrow-img"
                    />
                  ) : null
                }
                as={buttonLink ? "a" : "button"}
                href={buttonLink || undefined}
              >
                <Typography
                  variant="h4"
                  overrideVariant={buttonTextVariant}
                  words={btnTextWords}
                >
                  {btnText}
                </Typography>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </Container>
  );
};

export default TransformSection;
