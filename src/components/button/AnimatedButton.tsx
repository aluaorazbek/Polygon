import React, { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ArrowIcon from "#/public/icon/arrow-right-up.svg";
import { twMerge } from 'tailwind-merge';

type TProps = {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  classNames?: {
    hover?: string;
    leftIcon?: string;
    rightIcon?: string;
    background?: string;
  };
};

const AnimatedButton = ({ label, leftIcon, rightIcon, classNames = {}, ...rest }: TProps) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const handleMouseEnter = () => {
    controls1.start({ x: 10, y: -10, opacity: 0, transition: { type: 'spring', stiffness: 900, damping: 35 } });
    controls2.start({ x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 900, damping: 35, delay: 0.05 } });
  };

  const handleMouseLeave = () => {
    controls1.start({ x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 900, damping: 35, delay: 0.05 } });
    controls2.start({ x: -10, y: 10, opacity: 0, transition: { type: 'spring', stiffness: 900, damping: 35 } });
  };

  return (
    <a
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ background: classNames.background}}
      className={twMerge(
        "inline-block items-center relative text-white p-10 pl-14 rounded-[48px]",
        classNames.hover
      )}
      {...rest}
    >
      <div className='flex items-center gap-6'>
        {leftIcon && <div className={classNames.leftIcon}>{leftIcon}</div>}
        {label && <span className="text-sm font-medium">{label}</span>}
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute w-24 h-24"
            initial={{ x: 0, y: 0 }}
            animate={controls1}
          >
            <ArrowIcon width={24} height={24} className="text-white" />
          </motion.div>
          <motion.div
            className="absolute w-24 h-24"
            initial={{ x: -10, y: 10, opacity: 0 }}
            animate={controls2}
          >
            {rightIcon ? (<div>{rightIcon}</div>) : (
              <ArrowIcon width={24} height={24} className="text-white" />
            )}
          </motion.div>
        </div>
      </div>
    </a>
  );
};

export default AnimatedButton;
