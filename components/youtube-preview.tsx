"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function YouTubePreview({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="relative w-full h-full bg-black group rounded-sm overflow-hidden">
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <Image 
              src={ `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} 
              alt={title} 
              fill
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-2xl text-white"
              >
                 {/* SVG Play Icon */}
                 <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                 </svg>
              </motion.div>
            </div>

            {/* Hint Text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                Click to Play Preview
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
              title={title}
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            
            {/* Close Button - To return to thumbnail */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
              }}
              className="absolute top-2 right-2 z-30 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}