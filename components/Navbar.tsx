import React from 'react';
import { Home, PlusCircle, MessageSquare, User } from './Icon';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'home', icon: Home, label: '发现' },
    { id: 'create', icon: PlusCircle, label: '泡一下', primary: true },
    { id: 'messages', icon: MessageSquare, label: '消息' },
    { id: 'profile', icon: User, label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pb-safe pt-2 px-6 flex justify-between items-center z-50 h-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.id || (item.id === 'home' && currentView === 'event-detail');
        
        if (item.primary) {
            return (
                <button 
                    key={item.id}
                    onClick={() => setView(item.id)}
                    className="flex flex-col items-center justify-center -mt-6"
                >
                    <div className="bg-brand-500 text-white p-4 rounded-full shadow-lg shadow-brand-500/40 active:scale-95 transition-transform">
                        <Icon size={28} />
                    </div>
                    <span className="text-xs font-medium text-gray-500 mt-1">{item.label}</span>
                </button>
            )
        }

        return (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`flex flex-col items-center justify-center w-12 transition-colors ${
              isActive ? 'text-brand-600' : 'text-gray-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;