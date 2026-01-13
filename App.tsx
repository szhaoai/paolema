import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import EventDetail from './views/EventDetail';
import CreateEvent from './views/CreateEvent';
import Profile from './views/Profile';
import { Event } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentView('event-detail');
  };

  const handleBackToHome = () => {
    setSelectedEvent(null);
    setCurrentView('home');
  };

  const handleCreateSubmit = () => {
    setCurrentView('home');
    alert("活动发布成功！(演示)");
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onEventClick={handleEventClick} />;
      case 'event-detail':
        return selectedEvent ? (
          <EventDetail event={selectedEvent} onBack={handleBackToHome} />
        ) : (
          <Home onEventClick={handleEventClick} />
        );
      case 'create':
        return <CreateEvent onCancel={() => setCurrentView('home')} onSubmit={handleCreateSubmit} />;
      case 'messages':
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-400">
                <span className="text-4xl mb-2">💬</span>
                <p>消息功能即将上线</p>
            </div>
        );
      case 'profile':
        return <Profile />;
      default:
        return <Home onEventClick={handleEventClick} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative shadow-2xl overflow-hidden">
      {renderView()}
      
      {/* Show Navbar unless in Create Mode or Detail Mode (optional, keeping it in Detail for easy escape in this demo) */}
      {currentView !== 'create' && currentView !== 'event-detail' && (
        <Navbar currentView={currentView} setView={setCurrentView} />
      )}
    </div>
  );
};

export default App;