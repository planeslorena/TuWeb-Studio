import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  highlightWords = [],
  highlightColor = '#E11D74',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            isHighlight={isHighlight}
            highlightColor={highlightColor}
          />
        );
      })}
    </p>
  );
};

interface WordProps {
  word: string;
  range: [number, number];
  progress: any;
  isHighlight: boolean;
  highlightColor: string;
}

const Word: React.FC<WordProps> = ({
  word,
  range,
  progress,
  isHighlight,
  highlightColor,
}) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <span className="relative mr-[0.3em] inline-block mb-1">
      <motion.span
        style={{
          opacity,
          y,
          color: isHighlight ? highlightColor : undefined,
          fontWeight: isHighlight ? 600 : undefined,
        }}
        className="transition-colors duration-200"
      >
        {word}
      </motion.span>
    </span>
  );
};
