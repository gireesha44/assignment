import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ToastNotification } from './components/layout/ToastNotification';
import { OverviewDashboard } from './components/overview/OverviewDashboard';
import { CreateCarouselWorkspace } from './components/create/CreateCarouselWorkspace';
import { MyProjectsView } from './components/projects/MyProjectsView';
import { TemplatesGallery } from './components/templates/TemplatesGallery';
import { BrandKitView } from './components/brand/BrandKitView';
import { WorkflowPage } from './components/workflow/WorkflowPage';
import { SettingsView } from './components/settings/SettingsView';
import { Menu, X, Layers } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { activeTab } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewDashboard />;
      case 'create':
        return <CreateCarouselWorkspace />;
      case 'projects':
        return <MyProjectsView />;
      case 'templates':
        return <TemplatesGallery />;
      case 'brand-kit':
        return <BrandKitView />;
      case 'workflow':
        return <WorkflowPage />;
      case 'settings':
        return <SettingsView />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#11131B] text-[#F7F7FB]">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-72 z-50 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#222633] text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main App Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Top Bar */}
        <div className="md:hidden h-14 bg-[#171923] border-b border-[#222633] px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-lg bg-[#222633] text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 font-extrabold text-sm text-white">
              <Layers className="w-4 h-4 text-[#8B72FF]" />
              <span>FRAMEFLOW AI</span>
            </div>
          </div>
        </div>

        {/* Global Desktop Header */}
        <Header />

        {/* Dynamic Page View */}
        <main className="flex-1 overflow-y-auto">
          {renderActiveView()}
        </main>
      </div>

      {/* Toast Notification Container */}
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
