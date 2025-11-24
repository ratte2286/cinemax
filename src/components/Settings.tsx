import { useState } from 'react';
import { ArrowLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between border-b border-gray-800">
        <button onClick={onBack} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white">Settings</h2>
        <div className="w-6"></div>
      </header>

      <div className="px-4 py-6">
        {/* Security Section */}
        <div className="mb-8">
          <h3 className="text-white mb-4">Security</h3>
          
          {/* Change Password */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg mb-4">
              <span className="text-white">Change Password</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            
            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current Password"
                  className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  className="w-full px-4 py-3 bg-[#1A1F29] text-white rounded-lg border border-gray-800 focus:border-[#FF3D3D] focus:outline-none pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg mb-3">
            <div>
              <p className="text-white">Two-Factor Authentication</p>
              <p className="text-gray-400 text-sm mt-1">Extra layer of security</p>
            </div>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`w-12 h-6 rounded-full transition-colors ${
                twoFactor ? 'bg-[#FF3D3D]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  twoFactor ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg">
            <span className="text-white">Privacy & Data</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Notifications Section */}
        <div className="mb-8">
          <h3 className="text-white mb-4">Notifications</h3>
          
          <div className="flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg mb-3">
            <div>
              <p className="text-white">Push Notifications</p>
              <p className="text-gray-400 text-sm mt-1">Get updates about new releases</p>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-[#FF3D3D]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg mb-3">
            <span className="text-white">Email Newsletters</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg">
            <span className="text-white">Personalization</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Other Settings */}
        <div className="mb-8">
          <h3 className="text-white mb-4">Other</h3>
          
          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg mb-3">
            <span className="text-white">Language</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">English</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg mb-3">
            <span className="text-white">App Theme</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Dark</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 bg-[#1A1F29] rounded-lg">
            <span className="text-white">Legal Documents</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Save Button */}
        <button className="w-full py-3 bg-[#FF3D3D] text-white rounded-lg hover:bg-[#FF5555] transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );
}