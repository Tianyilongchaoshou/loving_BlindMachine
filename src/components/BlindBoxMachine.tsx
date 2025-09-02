import React from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

interface BlindBoxMachineProps {
  onDraw: () => void;
  isDrawing: boolean;
  remainingCount: number;
  allGiftsDrawn: boolean;
  onViewFinalSecret: () => void;
}

const BlindBoxMachine: React.FC<BlindBoxMachineProps> = ({
  onDraw,
  isDrawing,
  remainingCount,
  allGiftsDrawn,
  onViewFinalSecret
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-orange-50 flex flex-col items-center justify-center p-4 safe-top safe-bottom">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart 
          className="absolute top-20 left-10 text-pink-300 animate-pulse opacity-40" 
          size={24}
          style={{ animationDelay: '0s' }}
        />
        <Sparkles 
          className="absolute top-32 right-16 text-rose-300 animate-pulse opacity-40" 
          size={20}
          style={{ animationDelay: '1.5s' }}
        />
        <Heart 
          className="absolute bottom-32 left-20 text-pink-400 animate-pulse opacity-40" 
          size={18}
          style={{ animationDelay: '3s' }}
        />
        <Sparkles 
          className="absolute bottom-20 right-10 text-rose-400 animate-pulse opacity-40" 
          size={22}
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center max-w-sm sm:max-w-md mx-auto w-full">
        {/* Counter */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-pink-200">
            <p className="text-base sm:text-lg font-semibold text-gray-700">
              剩余惊喜：<span className="text-pink-600 font-bold">{remainingCount}</span> 个
            </p>
          </div>
        </div>

        {/* Enhanced Blind Box Machine */}
        <div className="mb-8 sm:mb-12">
          <div className={`relative bg-gradient-to-b from-pink-200 to-pink-300 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-pink-300 mx-auto w-72 h-80 sm:w-80 sm:h-96 flex flex-col items-center justify-center transition-all duration-500 ${isDrawing ? 'animate-pulse scale-105' : 'hover:scale-[1.02]'}`}>
            {/* Decorative lights */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-300/50"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300 rounded-full animate-pulse shadow-lg shadow-blue-300/50" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-300 rounded-full animate-pulse shadow-lg shadow-green-300/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-300 rounded-full animate-pulse shadow-lg shadow-purple-300/50" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Machine top with enhanced design */}
            <div className="absolute -top-5 sm:-top-7 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-2xl w-20 h-10 sm:w-24 sm:h-14 shadow-lg overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 rounded-full w-6 h-6 flex items-center justify-center">
                <div className="w-4 h-4 bg-pink-700 rounded-full ${isDrawing ? 'animate-ping' : ''}"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-pink-600/30"></div>
            </div>
            
            {/* Machine display with enhanced effects */}
            <div className="bg-gradient-to-br from-white/95 to-pink-50/95 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-inner border-2 border-pink-200 w-full relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i}
                    className="absolute text-pink-300" 
                    size={14} 
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 360}deg)`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                {isDrawing ? (
                  <div className="relative">
                    <Gift className="mx-auto text-pink-500 animate-bounce" size={48} />
                    <div className="absolute inset-0 animate-ping opacity-30">
                      <Gift className="mx-auto text-pink-500" size={48} />
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <Gift className="mx-auto text-pink-500 mb-2 transition-transform duration-300 group-hover:scale-110" size={48} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="mx-auto text-yellow-400" size={48} />
                    </div>
                  </div>
                )}
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 font-bold text-base sm:text-lg mt-2">
                  {isDrawing ? '正在抽取中...' : '爱意盲盒机'}
                </p>
              </div>
            </div>

            {/* Enhanced decoration dots */}
            <div className="flex space-x-3 mb-2">
              <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-sm shadow-pink-500/50 animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="w-4 h-4 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full shadow-sm shadow-rose-500/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-sm shadow-pink-500/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Machine bottom opening with enhanced design */}
            <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-pink-500 to-pink-600 rounded-b-2xl w-24 h-8 sm:w-28 sm:h-10 shadow-lg overflow-hidden">
              <div className="absolute inset-x-3 top-2 bg-pink-700/70 rounded-full h-2 shadow-inner"></div>
              {isDrawing && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-4">
          {allGiftsDrawn ? (
            <button
              onClick={onViewFinalSecret}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Heart size={20} />
                最后的礼物
              </span>
            </button>
          ) : (
            <button
              onClick={onDraw}
              disabled={isDrawing || remainingCount === 0}
              className={`w-full sm:w-auto ${
                isDrawing || remainingCount === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:scale-105'
              } text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-base sm:text-lg`}
            >
              <span className="flex items-center justify-center gap-2">
                <Gift size={20} />
                {isDrawing ? '抽取中...' : '抽取惊喜'}
              </span>
            </button>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-pink-200 inline-block">
            <p className="text-xs sm:text-sm text-gray-600">
              {isDrawing ? '正在为你准备惊喜...' : '点击上方按钮开始抽取'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindBoxMachine;