export enum UserRole {
  HOST = 'HOST',
  GUEST = 'GUEST'
}

export enum EventStatus {
  RECRUITING = 'RECRUITING', // 报名中
  FULL = 'FULL', // 已满
  ONGOING = 'ONGOING', // 进行中
  ENDED = 'ENDED' // 已结束
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;
  paoValue: number; // 泡值 (Credit score)
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: number;
  isHost: boolean;
}

export interface Event {
  id: string;
  hostId: string;
  hostName: string;
  hostAvatar: string;
  title: string;
  coverImage: string;
  locationName: string;
  locationAddress: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  status: EventStatus;
  tags: string[];
  description: string;
  rules: string[]; // Safety rules, items to bring
  distance?: string; // Mock distance
  comments: Comment[];
  requiresAudit: boolean;
}

export interface Booking {
  id: string;
  eventId: string;
  userId: string;
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED';
  timestamp: number;
  peopleCount: number;
}