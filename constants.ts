import { Event, EventStatus, User, UserRole } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: '跑山猪',
  avatar: 'https://picsum.photos/100/100',
  role: UserRole.GUEST,
  paoValue: 98,
};

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    hostId: 'h1',
    hostName: '王大伯的田园生活',
    hostAvatar: 'https://picsum.photos/101/101',
    title: '传统乡村“杀猪宴”来咯',
    coverImage: 'https://picsum.photos/800/600?random=1',
    locationName: '幸福村社区中心',
    locationAddress: '合川区幸福村88号',
    startTime: new Date(Date.now() + 86400000 * 2).toISOString(),
    endTime: new Date(Date.now() + 86400000 * 2 + 14400000).toISOString(),
    price: 50,
    maxParticipants: 30,
    currentParticipants: 24,
    status: EventStatus.RECRUITING,
    tags: ['杀猪宴', '乡村体验', '传统'],
    description: '一年一度的冬日盛宴来啦！自家喂养的土猪，传统土灶烹饪，热闹非凡。想带点土特产回去的记得自带容器哦！',
    rules: ['光盘行动，拒绝浪费', '尊重当地老人', '酒水自带'],
    distance: '2.5km',
    requiresAudit: false,
    comments: [
      {
        id: 'c1',
        userId: 'u2',
        userName: '吃货小简',
        userAvatar: 'https://picsum.photos/102/102',
        content: '请问方便停车吗？',
        timestamp: Date.now() - 3600000,
        isHost: false
      },
      {
        id: 'c2',
        userId: 'h1',
        userName: '王大伯',
        userAvatar: 'https://picsum.photos/101/101',
        content: '方便的，村口有个大坝子可以停！',
        timestamp: Date.now() - 1800000,
        isHost: true
      }
    ]
  },
  {
    id: 'e2',
    hostId: 'h2',
    hostName: '露营达人Pro',
    hostAvatar: 'https://picsum.photos/103/103',
    title: '嘉陵江畔日落Glamping',
    coverImage: 'https://picsum.photos/800/600?random=2',
    locationName: '翡翠江滩',
    locationAddress: '滨江路北段',
    startTime: new Date(Date.now() + 86400000 * 5).toISOString(),
    endTime: new Date(Date.now() + 86400000 * 6).toISOString(),
    price: 200,
    maxParticipants: 10,
    currentParticipants: 10,
    status: EventStatus.FULL,
    tags: ['露营', '摄影', '休闲'],
    description: '拎包入住的精致露营体验。提供全套帐篷装备，你只需要带上好心情。晚上有篝火晚会和露天电影。',
    rules: ['晚上10点后请勿大声喧哗', '无痕露营，带走垃圾', '注意水边安全'],
    distance: '12km',
    requiresAudit: true,
    comments: []
  },
  {
    id: 'e3',
    hostId: 'h3',
    hostName: '义工小分队',
    hostAvatar: 'https://picsum.photos/104/104',
    title: '社区公园清洁 & 免费烧烤',
    coverImage: 'https://picsum.photos/800/600?random=3',
    locationName: '中央公园南门',
    locationAddress: '主干道入口处',
    startTime: new Date(Date.now() + 86400000 * 1).toISOString(),
    endTime: new Date(Date.now() + 86400000 * 1 + 10800000).toISOString(),
    price: 0,
    maxParticipants: 50,
    currentParticipants: 15,
    status: EventStatus.RECRUITING,
    tags: ['公益', '免费美食', '交友'],
    description: '帮忙清理公园2小时，之后享受由周边商家赞助的免费烧烤派对！',
    rules: ['提供手套和工具', '请穿舒适的运动鞋'],
    distance: '0.8km',
    requiresAudit: false,
    comments: []
  }
];

export const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'feast', label: '杀猪宴' },
  { id: 'camping', label: '露营' },
  { id: 'volunteer', label: '公益' },
  { id: 'party', label: '派对' },
];