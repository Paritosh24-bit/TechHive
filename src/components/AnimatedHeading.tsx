import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  light?: boolean;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  eyebrow,
  title,
  className = '',
  titleClassName = '',
  eyebrowClassName = '',
  light = false,
}) => {
  const words = title.split(' ');

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: eyebrow ? 0.4 : 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 40,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Eyebrow — fades and slides up */}
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`text-xs uppercase font-extrabold tracking-widest font-sans block ${
            light ? 'text-cyan-400' : 'text-[#2193b0]'
          } ${eyebrowClassName}`}
        >
          {eyebrow}
        </motion.span>
      )}

      {/* Title — words animate one by one */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
        className="flex flex-wrap gap-x-[0.35em] gap-y-2"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className={`inline-block font-sans font-black uppercase tracking-tighter leading-none text-4xl sm:text-5xl lg:text-6xl ${
              light ? 'text-white' : 'text-[#0d131f]'
            } ${titleClassName}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Accent underline bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.2,
          delay:
            (eyebrow ? 0.4 : 0.05) +
            words.length * 0.15 +
            0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ originX: 0 }}
        className={`h-[3px] w-20 rounded-full ${
          light ? 'bg-cyan-400' : 'bg-[#2193b0]'
        }`}
      />
    </div>
  );
};

export default AnimatedHeading;