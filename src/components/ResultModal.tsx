import React from 'react';
import { X, Gift, Heart } from 'lucide-react';
import { BlindBoxItem } from '../types/BlindBoxItem';

interface ResultModalProps {
  item: BlindBoxItem;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn safe-top safe-bottom">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden animate-slideUp max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${item.type === 'gift' ? 'bg-gradient-to-r from-pink-400 to-rose-400' : 'bg-gradient-to-r from-purple-400 to-pink-400'} p-4 sm:p-6 text-center relative`}>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
          
          <div className="mb-2">
            {item.type === 'gift' ? (
              <Gift className="mx-auto text-white animate-bounce" size={28} />
            ) : (
              <Heart className="mx-auto text-white animate-pulse" size={28} />
            )}
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {item.title}
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Image with enhanced styling */}
          <div className="mb-4 sm:mb-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Decorative elements based on item type */}
              {item.type === 'gift' ? (
                <div className="absolute -bottom-1 -right-1 transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Gift className="text-white drop-shadow-lg" size={32} />
                </div>
              ) : (
                <div className="absolute -bottom-1 -right-1 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Heart className="text-white drop-shadow-lg animate-pulse" size={32} />
                </div>
              )}
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"></div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {item.description}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className={`w-full ${
              item.type === 'gift' 
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            } text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg`}
          >
            好的！继续抽取
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;