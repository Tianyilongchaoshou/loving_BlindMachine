import React from 'react';
import { Heart, Sparkles, Gift, RefreshCw } from 'lucide-react';

interface FinalPageProps {
  onRestart?: () => void;
}

const FinalPage: React.FC<FinalPageProps> = ({ onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 flex items-center justify-center p-4 safe-top safe-bottom">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart 
          className="absolute top-16 left-8 text-pink-300 animate-pulse opacity-60" 
          size={28}
          style={{ animationDelay: '0s' }}
        />
        <Sparkles 
          className="absolute top-24 right-12 text-rose-300 animate-pulse opacity-60" 
          size={24}
          style={{ animationDelay: '1s' }}
        />
        <Heart 
          className="absolute top-1/3 left-16 text-purple-300 animate-pulse opacity-60" 
          size={20}
          style={{ animationDelay: '2s' }}
        />
        <Gift 
          className="absolute top-1/2 right-8 text-pink-400 animate-pulse opacity-60" 
          size={26}
          style={{ animationDelay: '3s' }}
        />
        <Heart 
          className="absolute bottom-32 left-12 text-rose-400 animate-pulse opacity-60" 
          size={22}
          style={{ animationDelay: '1.5s' }}
        />
        <Sparkles 
          className="absolute bottom-20 right-16 text-purple-400 animate-pulse opacity-60" 
          size={18}
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className="text-center max-w-lg sm:max-w-2xl mx-auto relative z-10 w-full">
        {/* Main content card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-200 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Heart className="text-pink-500 animate-pulse" size={48} />
                <Sparkles 
                  className="absolute -top-2 -right-2 text-rose-400 animate-ping" 
                  size={16} 
                />
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-bold text-pink-600 mb-4 leading-tight">
              生日快乐~~
              <br />
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                我的挚爱！
              </span> */}
            </h1>
          </div>

          {/* Love letter content */}
          <div className="text-left space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              亲爱的老婆，
            </p>
            
            {/* 🔧 在这里修改你的祝福文字内容 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              在这个专属于你的日子里，我想轻轻告诉你：你的笑容如盛夏的清风，是我心底最珍贵的馈赠；你的陪伴似宁静的港湾，铸就我生命中最大的幸福。
            </p>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              这些小小礼物，仅是我万千爱意的细微注脚。但愿在往后每一个生日、每一个值得纪念的晨昏，我都能为你制造惊喜，守望你眼中绽放的光芒。
            </p>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              愿你始终怀揣那份清澈与美好，更愿你所有的愿望都被岁月温柔以待。
            </p>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-semibold">
              生日快乐，我的挚爱！于我而言，你是全世界最特别的存在。 ❤️
            </p>
          </div>

          {/* 🔧 我们的美好合照 */}
          <div className="mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-4 border-2 border-pink-200 overflow-hidden">
              <div className="relative">
                <img 
                  src="/images/couple.jpg" 
                  // alt="我们的合照" 
                  className="w-full h-56 sm:h-72 object-cover rounded-xl shadow-lg transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent rounded-xl"></div>
                <Heart className="absolute bottom-4 right-4 text-white drop-shadow-lg" size={32} />
              </div>
              <p className="text-pink-600 font-medium text-sm sm:text-base mt-3 text-center">
                我们最美好的时光
              </p>
            </div>
          </div>

          {/* Signature */}
          <div className="text-right">
            <p className="text-pink-600 italic text-base sm:text-lg">
              永远爱你的，
            </p>
            <p className="text-pink-600 font-bold text-lg sm:text-xl mt-2">
              你的好老公 💕
            </p>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-6 sm:mt-8 flex justify-center space-x-4 opacity-60">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-rose-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>
        </div>
        
        {/* 再次尝试按钮 */}
        {onRestart && (
          <div className="mt-8">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <RefreshCw size={20} />
                再次尝试
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalPage;