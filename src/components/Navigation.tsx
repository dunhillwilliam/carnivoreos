import React from 'react';
import { 
  Calendar, 
  Calculator, 
  FlaskConical, 
  Activity, 
  UserCheck, 
  AlertOctagon
} from 'lucide-react';

export type ActiveTab = 'transisi' | 'kalkulator' | 'sains' | 'biofeedback' | 'kasus';

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuickEmergency: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeTab, 
  setActiveTab,
  onOpenQuickEmergency 
}) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'transisi', label: 'Transisi', icon: <Calendar className="w-4 h-4 shrink-0" /> },
    { id: 'kalkulator', label: 'Kalkulator', icon: <Calculator className="w-4 h-4 shrink-0" /> },
    { id: 'sains', label: 'Sains', icon: <FlaskConical className="w-4 h-4 shrink-0" /> },
    { id: 'biofeedback', label: 'Pencernaan', icon: <Activity className="w-4 h-4 shrink-0" /> },
    { id: 'kasus', label: 'Kisah', icon: <UserCheck className="w-4 h-4 shrink-0" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 gap-2">
          
          {/* Logo */}
          <button 
            onClick={() => setActiveTab('transisi')}
            className="flex items-center gap-2 text-left cursor-pointer group shrink-0"
          >
            <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center font-bold text-sm tracking-tighter shrink-0">
              C
            </div>
            <span className="text-base sm:text-lg font-bold font-display text-white group-hover:text-red-500 transition-colors">
              CarnivoreOS
            </span>
          </button>

          {/* Desktop Nav - 5 clean tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const fullLabel = item.id === 'sains' ? 'Sains & Mitos' : item.id === 'kasus' ? 'Kisah Nyata' : item.label;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer border-b-2 flex items-center gap-1.5 ${
                    isActive 
                      ? 'border-red-600 text-white' 
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {item.icon}
                  <span>{fullLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Direct Emergency SOS */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenQuickEmergency}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-bold text-white bg-red-700 hover:bg-red-800 transition-colors cursor-pointer flex items-center gap-1.5 border border-red-500"
            >
              <AlertOctagon className="w-3.5 h-3.5 shrink-0" />
              <span>SOS Usus</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Bar - direct 1-tap tabs with comfortable spacing */}
      <div className="md:hidden grid grid-cols-5 border-t border-zinc-800 bg-zinc-950 text-center">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-2.5 px-0.5 flex flex-col items-center justify-center gap-1 cursor-pointer border-b-2 min-w-0 transition-colors ${
                isActive 
                  ? 'border-red-600 text-white font-bold bg-zinc-900/60' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {item.icon}
              <span className="text-[10px] leading-none truncate w-full block tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
