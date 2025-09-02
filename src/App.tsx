import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import BlindBoxMachine from './components/BlindBoxMachine';
import ResultModal from './components/ResultModal';
import FinalPage from './components/FinalPage';
import { BlindBoxItem } from './types/BlindBoxItem';
import { getRandomizedBlindBoxItems } from './data/blindBoxData';

type AppState = 'welcome' | 'machine' | 'final';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [drawnItems, setDrawnItems] = useState<BlindBoxItem[]>([]);
  const [currentDrawnItem, setCurrentDrawnItem] = useState<BlindBoxItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [randomizedItems, setRandomizedItems] = useState<BlindBoxItem[]>([]);
  
  // 初始化时和重新开始时随机排序盲盒
  useEffect(() => {
    setRandomizedItems(getRandomizedBlindBoxItems());
  }, [currentState === 'welcome']);

  const remainingItems = randomizedItems.filter((_, index) => !drawnItems.some(drawn => drawn.id === index));
  const giftCount = randomizedItems.filter(item => item.type === 'gift').length;
  const drawnGifts = drawnItems.filter(item => item.type === 'gift');

  const handleStartJourney = () => {
    setCurrentState('machine');
  };

  const handleDraw = () => {
    if (remainingItems.length === 0 || isDrawing) return;

    setIsDrawing(true);
    
    // Find the next item to draw based on randomized order
    const nextIndex = drawnItems.length;
    const nextItem = { ...randomizedItems[nextIndex], id: nextIndex };
    
    // Simulate drawing animation delay
    setTimeout(() => {
      setCurrentDrawnItem(nextItem);
      setDrawnItems(prev => [...prev, nextItem]);
      setShowModal(true);
      setIsDrawing(false);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentDrawnItem(null);
    // 移除自动跳转逻辑，让用户必须点击"最后的礼物"按钮才能进入FinalPage
  };

  const handleViewFinalSecret = () => {
    setCurrentState('final');
  };
  
  // 添加重新开始功能
  const handleRestart = () => {
    setCurrentState('welcome');
    setDrawnItems([]);
    setCurrentDrawnItem(null);
    setShowModal(false);
    setIsDrawing(false);
  };

  if (currentState === 'welcome') {
    return <WelcomePage onStart={handleStartJourney} />;
  }

  if (currentState === 'final') {
    return <FinalPage onRestart={handleRestart} />;
  }

  return (
    <>
      <BlindBoxMachine
        onDraw={handleDraw}
        isDrawing={isDrawing}
        remainingCount={remainingItems.length}
        allGiftsDrawn={drawnItems.length === 8}
        onViewFinalSecret={handleViewFinalSecret}
      />
      {showModal && currentDrawnItem && (
        <ResultModal
          item={currentDrawnItem}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;