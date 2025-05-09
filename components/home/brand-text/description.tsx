'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'motion/react';
import * as React from 'react';

export default function BrandTextDescription({
     text,
     className = '',
}: {
     text: string;
     className?: string;
}) {
     const splittedText = text.split('');

     const pullupVariant = {
          initial: { y: 10, opacity: 0 },
          animate: (i: number) => ({
               y: 0,
               opacity: 1,
               transition: {
                    delay: i * 0.05,
               },
          }),
     };
     const ref = React.useRef(null);
     const isInView = useInView(ref, { once: true });
     return (
          <p className="flex flex-wrap">
               {splittedText.map((current, i) => (
                    <motion.span
                         key={i}
                         ref={ref}
                         variants={pullupVariant}
                         initial="initial"
                         animate={isInView ? 'animate' : ''}
                         custom={i}
                         className={cn(
                              'text-sm font-light tracking-tighter',
                              className,
                         )}
                    >
                         {current == ' ' ? (
                              <>&nbsp;</>
                         ) : (
                              current
                         )}
                    </motion.span>
               ))}
          </p>
     );
}
