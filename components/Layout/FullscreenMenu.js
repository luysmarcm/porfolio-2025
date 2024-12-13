"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function FullscreenMenu() {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
    <AnimatePresence>
        {isOpen && (
          <motion.div
		  className="fixed inset-0 bg-black bg-opacity-75 flex justify-end z-50"
		  initial={{ x: '100%' }}
		  animate={{ x: 0 }}
		  exit={{ x: '100%' }}
		  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
		>
            <div className="relative w-full h-full flex flex-col justify-center items-center">
              <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
                Cerrar
              </button>
              <nav className="flex flex-col space-y-4">
                <Link href="/page1">
                  <p className="text-white text-2xl">Página 1</p>
                </Link>
                <Link href="/page2">
                <p className="text-white text-2xl">Página 1</p>
                </Link>
                <Link href="/page3">
				<p className="text-white text-2xl">Página 1</p>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  </>
  );
}

export default FullscreenMenu;