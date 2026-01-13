import React, { useState } from 'react';
import { Event, EventStatus } from '../types';
import { ChevronLeft, MapPin, Clock, Calendar, ShieldCheck, Share2, MessageSquare, Send } from '../components/Icon';

interface EventDetailProps {
  event: Event;
  onBack: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBack }) => {
  const [commentText, setCommentText] = useState('');
  const [hasJoined, setHasJoined] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleJoin = () => {
    setShowDisclaimer(true);
  };

  const confirmJoin = () => {
    setHasJoined(true);
    setShowDisclaimer(false);
  };

  return (
    <div className="bg-white min-h-screen pb-24 relative z-50">
      {/* Header Image */}
      <div className="relative h-64 w-full">
        <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
        <button 
            onClick={onBack}
            className="absolute top-4 left-4 bg-black/40 p-2 rounded-full text-white backdrop-blur-md"
        >
            <ChevronLeft size={24} />
        </button>
        <button className="absolute top-4 right-4 bg-black/40 p-2 rounded-full text-white backdrop-blur-md">
            <Share2 size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 -mt-6 relative bg-white rounded-t-3xl pt-6">
        <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold text-slate-900 leading-tight flex-1 mr-4">{event.title}</h1>
            <div className="text-center">
                <span className="block text-2xl font-bold text-brand-600">{event.price === 0 ? '免费' : `¥${event.price}`}</span>
            </div>
        </div>

        {/* Host */}
        <div className="flex items-center mt-4 mb-6 p-3 bg-gray-50 rounded-xl">
            <img src={event.hostAvatar} className="w-10 h-10 rounded-full mr-3 border border-gray-200" alt="Host" />
            <div className="flex-1">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">发起人</p>
                <p className="font-bold text-slate-800">{event.hostName}</p>
            </div>
            <button className="px-4 py-1.5 border border-brand-500 text-brand-500 text-xs font-bold rounded-full">关注</button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg text-brand-600 mr-3">
                    <Calendar size={20} />
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800">
                        {new Date(event.startTime).toLocaleDateString('zh-CN')}
                    </p>
                    <p className="text-xs text-gray-500">
                        {new Date(event.startTime).toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit'})} - {new Date(event.endTime).toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit'})}
                    </p>
                </div>
            </div>
            <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-3">
                    <MapPin size={20} />
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800">{event.locationName}</p>
                    <p className="text-xs text-gray-500 truncate max-w-[250px]">{event.locationAddress}</p>
                </div>
            </div>
        </div>

        {/* Description */}
        <div className="mb-8">
            <h3 className="font-bold text-lg mb-2">活动详情</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{event.description}</p>
            
            <h4 className="font-bold text-sm mt-4 mb-2">注意事项</h4>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
                {event.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                ))}
            </ul>
        </div>

        {/* Comments */}
        <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center">
                留言互动 <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-500">{event.comments.length}</span>
            </h3>
            
            <div className="space-y-4">
                {event.comments.map(comment => (
                    <div key={comment.id} className="flex gap-3">
                        <img src={comment.userAvatar} className="w-8 h-8 rounded-full" alt={comment.userName} />
                        <div className="flex-1 bg-gray-50 p-3 rounded-r-xl rounded-bl-xl">
                            <div className="flex justify-between items-center mb-1">
                                <span className={`text-xs font-bold ${comment.isHost ? 'text-brand-600' : 'text-slate-700'}`}>
                                    {comment.userName} {comment.isHost && '(发起人)'}
                                </span>
                                <span className="text-[10px] text-gray-400">2小时前</span>
                            </div>
                            <p className="text-sm text-gray-700">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex gap-2">
                <input 
                    type="text" 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="发条友善的评论..." 
                    className="flex-1 bg-gray-100 border-0 rounded-full px-4 text-sm focus:ring-2 focus:ring-brand-500 outline-none h-10"
                />
                <button className="bg-slate-900 text-white p-2.5 rounded-full">
                    <Send size={18} />
                </button>
            </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 pb-safe flex items-center justify-between z-50">
        <div className="flex flex-col">
            <span className="text-xs text-gray-500">剩余名额</span>
            <span className="text-lg font-bold text-brand-600">{event.maxParticipants - event.currentParticipants}</span>
        </div>
        
        {hasJoined ? (
             <button className="bg-green-100 text-green-700 px-8 py-3 rounded-full font-bold w-2/3 flex items-center justify-center">
                <ShieldCheck size={20} className="mr-2" />
                已报名
            </button>
        ) : (
            <button 
                onClick={handleJoin}
                disabled={event.status !== EventStatus.RECRUITING}
                className={`px-8 py-3 rounded-full font-bold w-2/3 shadow-lg shadow-brand-500/30 text-white
                    ${event.status === EventStatus.RECRUITING ? 'bg-brand-500' : 'bg-gray-400 cursor-not-allowed'}
                `}
            >
                {event.status === EventStatus.RECRUITING ? '立即报名' : '已满 / 结束'}
            </button>
        )}
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
          <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-6 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-6 w-full max-w-sm animate-[scaleIn_0.2s_ease-out]">
                  <div className="flex justify-center mb-4 text-brand-500">
                      <ShieldCheck size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">安全提醒</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">参与活动前，请阅读并同意社区安全公约。</p>
                  
                  <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 mb-6 space-y-2">
                    <p>1. 我将遵守组织者规则和场地规定。</p>
                    <p>2. 我对自己的安全和个人财物负责。</p>
                    <p>3. 我承诺不从事任何违法或危险行为。</p>
                  </div>

                  <button 
                    onClick={confirmJoin}
                    className="w-full bg-brand-500 text-white font-bold py-3 rounded-xl mb-2"
                  >
                      同意并报名
                  </button>
                  <button 
                    onClick={() => setShowDisclaimer(false)}
                    className="w-full bg-transparent text-gray-500 font-medium py-2"
                  >
                      取消
                  </button>
              </div>
          </div>
      )}
    </div>
  );
};

export default EventDetail;