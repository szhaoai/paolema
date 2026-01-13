import React, { useState } from 'react';
import { generateEventDescription } from '../services/geminiService';
import { Sparkles, MapPin, Calendar, Image as ImageIcon } from 'lucide-react';

interface CreateEventProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const CreateEvent: React.FC<CreateEventProps> = ({ onCancel, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: '杀猪宴',
    date: '',
    location: '',
    rules: '',
    description: ''
  });

  const handleAiGenerate = async () => {
    if (!formData.title) {
      alert("请先输入活动标题！");
      return;
    }
    setLoading(true);
    const desc = await generateEventDescription(formData.title, formData.type, formData.rules);
    setFormData(prev => ({ ...prev, description: desc }));
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    setTimeout(() => {
        onSubmit();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100 p-4 flex justify-between items-center">
        <button onClick={onCancel} className="text-gray-500 font-medium">取消</button>
        <h2 className="text-lg font-bold">发起活动</h2>
        <button onClick={handleSubmit} className="text-brand-600 font-bold">发布</button>
      </div>

      <div className="p-5">
        <form className="space-y-6">
            {/* Title & Type */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">活动标题</label>
                <input 
                    type="text" 
                    placeholder="例如：2025 新春杀猪宴"
                    className="w-full text-xl font-bold border-b-2 border-gray-200 py-2 focus:border-brand-500 outline-none placeholder:text-gray-300"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                />
            </div>

            <div className="flex gap-2 overflow-x-auto py-2">
                {['杀猪宴', '露营', '公益', '运动', '派对'].map(type => (
                    <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({...formData, type})}
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${
                            formData.type === type 
                            ? 'bg-orange-50 border-brand-500 text-brand-600' 
                            : 'bg-white border-gray-200 text-gray-500'
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Logistics */}
            <div className="space-y-4">
                 <div className="flex items-center border border-gray-200 rounded-xl p-3">
                    <Calendar className="text-gray-400 mr-3" size={20} />
                    <input 
                        type="datetime-local" 
                        className="flex-1 outline-none text-sm bg-transparent"
                        onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-3">
                    <MapPin className="text-gray-400 mr-3" size={20} />
                    <input 
                        type="text" 
                        placeholder="活动地点 / 导航定位点"
                        className="flex-1 outline-none text-sm bg-transparent"
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                </div>
            </div>

            {/* Description & AI */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-gray-700">活动描述</label>
                    <button 
                        type="button"
                        onClick={handleAiGenerate}
                        disabled={loading}
                        className="flex items-center text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-bold"
                    >
                        <Sparkles size={12} className="mr-1" />
                        {loading ? '生成中...' : 'AI 帮写'}
                    </button>
                </div>
                <textarea 
                    rows={4}
                    placeholder="描述一下活动的亮点、食物和氛围..."
                    className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-1 focus:ring-brand-500 outline-none resize-none"
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
            </div>
            
            {/* Image Placeholder */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl h-32 flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                <ImageIcon size={24} className="mb-2" />
                <span className="text-xs">上传封面图 (模拟)</span>
            </div>

            {/* Rules */}
             <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">注意事项</label>
                <input 
                    type="text" 
                    placeholder="例如：请自带碗筷，不可携带宠物"
                    className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none"
                    value={formData.rules}
                    onChange={e => setFormData({...formData, rules: e.target.value})}
                />
            </div>

            {/* Safety Disclaimer Checkbox */}
            <div className="flex items-start bg-yellow-50 p-3 rounded-lg">
                <input type="checkbox" className="mt-1 mr-2" required />
                <p className="text-xs text-yellow-800">
                    我承诺该活动符合当地法律法规，并对参与者安全和食品卫生承担责任。
                </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;