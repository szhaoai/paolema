import React from 'react';
import { CURRENT_USER } from '../constants';
import { Award, ShieldCheck, Settings, ChevronLeft } from '../components/Icon';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white p-6 pb-8 rounded-b-3xl shadow-sm">
        <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-bold">个人中心</h1>
            <Settings className="text-gray-400" />
        </div>
        
        <div className="flex items-center">
            <div className="relative">
                <img src={CURRENT_USER.avatar} alt="Profile" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                <div className="absolute -bottom-1 -right-1 bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white">
                    Lv.5
                </div>
            </div>
            <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold text-slate-900">{CURRENT_USER.name}</h2>
                <div className="flex items-center mt-1">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-md font-bold mr-2">
                        泡值: {CURRENT_USER.paoValue}
                    </span>
                    <span className="text-xs text-gray-400">ID: 884821</span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
             <div className="text-center">
                 <p className="text-lg font-bold text-slate-800">12</p>
                 <p className="text-xs text-gray-400 uppercase">我报名的</p>
             </div>
             <div className="text-center border-l border-r border-gray-100">
                 <p className="text-lg font-bold text-slate-800">3</p>
                 <p className="text-xs text-gray-400 uppercase">我发起的</p>
             </div>
             <div className="text-center">
                 <p className="text-lg font-bold text-slate-800">142</p>
                 <p className="text-xs text-gray-400 uppercase">关注</p>
             </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 mt-6 space-y-3">
        <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform">
            <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-lg text-brand-600 mr-3">
                    <Award size={20} />
                </div>
                <span className="font-medium text-slate-700">我的票夹</span>
            </div>
            <ChevronLeft size={16} className="rotate-180 text-gray-300" />
        </div>
        
        <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform">
            <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg text-green-600 mr-3">
                    <ShieldCheck size={20} />
                </div>
                <span className="font-medium text-slate-700">组织者工作台</span>
            </div>
             <ChevronLeft size={16} className="rotate-180 text-gray-300" />
        </div>
      </div>

      <div className="px-4 mt-8">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-4 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-1">成为发起人</h3>
              <p className="text-sm text-white/80 mb-3">举办杀猪宴、徒步或派对。</p>
              <button className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-full">
                  实名认证
              </button>
          </div>
      </div>
    </div>
  );
};

export default Profile;