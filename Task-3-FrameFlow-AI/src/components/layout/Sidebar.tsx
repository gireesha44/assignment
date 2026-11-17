import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  FolderKanban, 
  LayoutTemplate, 
  Palette, 
  Workflow, 
  Settings, 
  ChevronRight,
  Layers,
  Zap,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, projects, createNewProject, brandKit } = useApp();

  const navItems: { id: NavigationTab; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'create', label: 'Create Carousel', icon: Sparkles, badge: 'Studio' },
    { id: 'projects', label: 'My Projects', icon: FolderKanban, badge: projects.length.toString() },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate, badge: '5' },
    { id: 'brand-kit', label: 'Brand Kit', icon: Palette },
    { id: 'workflow', label: 'Workflow', icon: Workflow, badge: 'AI Arch' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#171923] border-r border-[#222633] flex flex-col h-screen shrink-0 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#222633]/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B72FF] to-[#5AA9FF] flex items-center justify-center shadow-glow-violet shadow-md">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white">FRAMEFLOW</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#8B72FF]/20 text-[#8B72FF] border border-[#8B72FF]/40">AI</span>
            </div>
            <p className="text-[11px] text-[#A3A8B8] truncate max-w-[140px] font-medium">Idea → Story → Publish</p>
          </div>
        </div>

        {/* Quick Action Button */}
        <button
          onClick={() => createNewProject()}
          className="mt-4 w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] p-[1px] shadow-sm hover:shadow-glow-violet transition-all duration-300"
        >
          <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-[7px] bg-[#171923] group-hover:bg-opacity-80 transition-all">
            <Sparkles className="w-4 h-4 text-[#8B72FF] group-hover:text-white transition-colors" />
            <span className="text-xs font-semibold text-white tracking-wide">New Carousel</span>
          </div>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-[#A3A8B8]/60">
          Studio Workspace
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                isActive
                  ? 'bg-[#222633] text-white shadow-inner border border-[#8B72FF]/30 font-semibold'
                  : 'text-[#A3A8B8] hover:text-[#F7F7FB] hover:bg-[#222633]/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-[#8B72FF]' : 'text-[#A3A8B8] group-hover:text-[#F7F7FB]'
                  }`}
                />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                    isActive
                      ? 'bg-[#8B72FF] text-white'
                      : 'bg-[#222633] text-[#A3A8B8] group-hover:text-white'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* System Status / Plan Usage Card */}
      <div className="px-3 py-2">
        <div className="p-3 rounded-xl bg-[#222633]/60 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-slate-200">Founder Pro</span>
            </div>
            <span className="text-[10px] text-[#5AA9FF] font-mono">Active</span>
          </div>
          <div className="w-full bg-[#171923] rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(projects.length * 12, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[#A3A8B8]">
            <span>{projects.length} Decks active</span>
            <span>Cloud sync ready</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-3 border-t border-[#222633]">
        <div 
          onClick={() => setActiveTab('brand-kit')}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#222633]/60 transition-colors cursor-pointer group"
        >
          <div className="relative">
            <img
              src={brandKit.avatarUrl}
              alt={brandKit.brandName}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#8B72FF]/40 group-hover:ring-[#8B72FF] transition-all"
            />
            {brandKit.verifiedBadge && (
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#5AA9FF] rounded-full border-2 border-[#171923] flex items-center justify-center text-[8px] text-white font-bold">
                ✓
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate group-hover:text-[#5AA9FF] transition-colors">
              {brandKit.brandName}
            </p>
            <p className="text-[11px] text-[#A3A8B8] truncate">{brandKit.handle}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#A3A8B8]/60 group-hover:text-white transition-colors" />
        </div>
      </div>
    </aside>
  );
};
