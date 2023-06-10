import { chat } from '../types/chat';
import * as avatar from '../assets/avatar/avatar';

export const ChatList: chat[] = [
  {
    id: '1',
    name: 'Lê Hữu Lộc',
    avatarUrl: avatar.lehuuloc,
    isOnline: true,
    isSeen: true,
    lastMessage: 'Xin chào Lộc',
  },
  {
    id: '2',
    name: 'Lê Minh Khôi',
    avatarUrl: avatar.leminhkhoi,
    isOnline: false,
    isSeen: false,
    lastMessage: 'Xin chao Khoi',
  },

  {
    id: '3',
    name: 'Lê Quốc Bảo',
    avatarUrl: avatar.lequocbao,
    isOnline: true,
    isSeen: true,
    lastMessage: 'Xin chao Bảo',
  },
  {
    id: '4',
    name: 'Lê Tấn Kiệt',
    avatarUrl: avatar.letankiet,
    isOnline: true,
    isSeen: true,
    lastMessage: 'Xin chao Kiệt',
  },
  {
    id: '5',
    name: 'Trần Trọng Nguyên',
    avatarUrl: avatar.trantrongnguyen,
    isOnline: false,
    isSeen: false,
    lastMessage: 'Xin chao Nguyên',
  },
];
