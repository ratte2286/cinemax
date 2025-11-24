import { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EditProfileProps {
  onBack: () => void;
}

export function EditProfile({ onBack }: EditProfileProps) {
  const [formData, setFormData] = useState({
    name: 'Alex',
    surname: 'Johnson',
    email: 'alex.johnson@gmail.com',
    phone: '+1234567890',
    gender: 'Male',
    birthDate: '03/15/1995',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between border-b border-gray-800">
        <button onClick={onBack} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white">Edit Profile</h2>
        <div className="w-6"></div>
      </header>

      {/* Profile Photo */}
      <div className="px-4 py-8 flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#FF3D3D] rounded-full flex items-center justify-center">
            <Camera size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 pb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">First Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Last Name</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => handleChange('surname', e.target.value)}
              className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Date of Birth</label>
            <input
              type="text"
              value={formData.birthDate}
              onChange={(e) => handleChange('birthDate', e.target.value)}
              placeholder="MM/DD/YYYY"
              className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button
            onClick={handleSave}
            className="w-full py-3 bg-[#FF3D3D] text-white rounded-lg hover:bg-[#FF5555] transition-colors"
          >
            Save Changes
          </button>
          <button
            onClick={onBack}
            className="w-full py-3 border border-gray-700 text-white rounded-lg hover:bg-[#1A1F29] transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}