import React from 'react';
import { Event, EventStatus } from '../types';
import { MapPin, Users, Clock } from './Icon';

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case EventStatus.RECRUITING: return 'bg-brand-500 text-white';
      case EventStatus.FULL: return 'bg-red-500 text-white';
      case EventStatus.ENDED: return 'bg-gray-400 text-gray-100';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getStatusText = (status: EventStatus) => {
    switch (status) {
      case EventStatus.RECRUITING: return '报名中';
      case EventStatus.FULL: return '已满';
      case EventStatus.ENDED: return '已结束';
      case EventStatus.ONGOING: return '进行中';
      default: return status;
    }
  };

  const formattedDate = new Date(event.startTime).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });

  return (
    <div 
      onClick={() => onClick(event)}
      className="bg-white rounded-xl overflow-hidden shadow-sm mb-4 active:scale-[0.98] transition-transform duration-100 cursor-pointer border border-gray-100"
    >
      <div className="relative h-40 w-full">
        <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
        <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-full ${getStatusColor(event.status)}`}>
          {getStatusText(event.status)}
        </div>
        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 text-xs rounded-md backdrop-blur-sm flex items-center">
            {event.price === 0 ? '免费' : `¥${event.price}`}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <Clock size={14} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center justify-between mt-2 text-sm">
          <div className="flex items-center text-gray-500">
            <MapPin size={14} className="mr-1" />
            <span className="truncate max-w-[120px]">{event.locationName}</span>
            {event.distance && <span className="ml-1 text-brand-500 text-xs">({event.distance})</span>}
          </div>
          <div className="flex items-center text-gray-500">
            <Users size={14} className="mr-1" />
            <span>{event.currentParticipants}/{event.maxParticipants}</span>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {event.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;