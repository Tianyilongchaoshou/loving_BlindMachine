import { BlindBoxItem } from '../types/BlindBoxItem';

// 🔧 在这里修改你的盲盒内容：
// - 修改 image 字段来更换图片（使用本地图片路径）
// - 修改 description 字段来更换文字描述
// - 可以调整 type 为 'gift'（礼物）或 'fun'（趣味互动）
// - 盲盒会随机排序显示

export const blindBoxItems: BlindBoxItem[] = [
  {
    type: 'fun',
    title: '幸运指令！',
    image: '/images/hug.jpg', // 将上传到public/images/hug.jpg
    description: '恭喜你！获得了一个可以随时兑换的、温暖的老公拥抱！💕'
  },
  {
    type: 'gift',
    title: '哇！你抽中了<胶囊晴雨伞>',
    image: '/images/umbrella.jpg', // 将上传到public/images/umbrella.jpg
    description: '为你遮阳，也为你挡雨。愿这把小小的伞，能像我一样时刻守护着你。☀️'
  },
  {
    type: 'gift',
    title: '哇！你抽中了<智能手环>',
    image: '/images/bracelet.jpg', // 将上传到public/images/bracelet.jpg
    description: '我想关心你的心跳、睡眠和每一步。让它助我记录你的健康与活力，每天都要元气满满！🏃🏻‍♀️'
  },
  {
    type: 'fun',
    title: '幸运指令！',
    image: '/images/kiss.jpg', // 将上传到public/images/kiss.jpg
    description: '这是"亲亲卡"，无论什么情形下，都能获得老公的深情一吻，请合理使用！😘'
  },
  {
    type: 'gift',
    title: '哇！你抽中了<白噪音响>',
    image: '/images/voice.jpg', // 将上传到public/images/voice.jpg
    description: '让温柔的音乐或白噪音伴你入睡，隔绝所有纷扰。愿你夜夜好梦，醒来有我。🌟'
  },
  {
    type: 'fun',
    title: '幸运指令',
    image: '/images/massage.jpg', // 将上传到public/images/massage.jpg
    description: '辛苦了一天，是时候召唤老公来按摩了，希望你能有一个美好的夜晚！💆🏻‍♀️'
  },
  {
    type: 'fun',
    title: '幸运指令！',
    image: '/images/dinner.jpg', // 将上传到public/images/dinner.jpg
    description: '获得一次浪漫晚餐约会！你提需求我付钱，请你在我这里享受美好的时光！🍽️'
  },
  {
    type: 'gift',
    title: '哇！你抽中了<腋下包>',
    image: '/images/bag.jpg', // 将上传到public/images/bag.jpg
    description: '原来的小包该升级了！愿他装下你的可爱和好心情，自信地去发光吧！🎁'
  }
];

// 导出一个函数，用于获取随机排序的盲盒数据
export function getRandomizedBlindBoxItems(): BlindBoxItem[] {
  // 创建一个新数组，避免修改原始数据
  const shuffledItems = [...blindBoxItems];
  
  // Fisher-Yates 洗牌算法
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }
  
  return shuffledItems;
}