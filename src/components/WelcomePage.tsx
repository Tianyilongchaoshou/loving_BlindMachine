import React from 'react';
import { Heart, Gift } from 'lucide-react';

interface WelcomePageProps {
  onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-orange-50 flex items-center justify-center p-4 safe-top safe-bottom">
      <div className="text-center max-w-md mx-auto">
        {/* Floating hearts animation */}
        <div className="relative mb-6">
          <Heart 
            className="absolute -top-2 -left-8 text-pink-300 animate-pulse" 
            size={20}
            style={{ animationDelay: '0s' }}
          />
          <Heart 
            className="absolute -top-4 right-4 text-rose-300 animate-pulse" 
            size={16}
            style={{ animationDelay: '1s' }}
          />
          <Heart 
            className="absolute top-12 -right-6 text-pink-400 animate-pulse" 
            size={14}
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* Main content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-200">
          <div className="mb-6">
            <Gift className="mx-auto text-pink-500 mb-4 animate-bounce" size={48} />
            <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 leading-tight">
              亲爱的老婆，
              <br />
              <span className="text-pink-600">生日快乐！</span>
            </h1>
          </div>

          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            我为你准备了一些小惊喜，
            <br />
            点击下方的按钮，
            <br />
            开启你的专属好运吧！
          </p>

          <button
            onClick={onStart}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <Gift size={20} />
              开启惊喜之旅
            </span>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-6 sm:mt-8 flex justify-center space-x-4 opacity-60">
          <div className="w-2 h-2 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-rose-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;