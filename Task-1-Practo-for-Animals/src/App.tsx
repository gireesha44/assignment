import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { QuickServices } from './components/services/QuickServices';
import { SmartDiscovery } from './components/discovery/SmartDiscovery';
import { PawCarePassport } from './components/passport/PawCarePassport';
import { EmergencySection } from './components/emergency/EmergencySection';
import { ForProvidersSection } from './components/providers/ForProvidersSection';
import { TrustSection } from './components/trust/TrustSection';
import { Footer } from './components/layout/Footer';
import { ListBusinessModal } from './components/providers/ListBusinessModal';
import { CorrectionModal } from './components/providers/CorrectionModal';
import { AuthModal } from './components/auth/AuthModal';
import { SavedProvidersDrawer } from './components/discovery/SavedProvidersDrawer';
import { ToastContainer, ToastMessage } from './components/common/Toast';
import { ProviderModal } from './components/discovery/ProviderModal';

import { MOCK_PROVIDERS } from './data/mockProviders';
import { Provider, FilterState, ServiceCategory, BusinessListingSubmission, CorrectionSubmission } from './types';

export function App() {
  // Provider database state (allows adding new listings dynamically from the form!)
  const [providers, setProviders] = useState<Provider[]>(MOCK_PROVIDERS);
  
  // Navigation active section
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    location: 'Bengaluru, Karnataka',
    maxDistanceKm: 20,
    openNowOnly: false,
    emergencyOnly: false,
    homeVisitOnly: false,
    minRating: 0,
    priceLevel: 'all',
    selectedAnimals: [],
    sortBy: 'distance'
  });

  // Saved / Bookmarked providers
  const [savedProviderIds, setSavedProviderIds] = useState<string[]>(['prov-1']);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Modals state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isListBusinessOpen, setIsListBusinessOpen] = useState(false);
  const [correctionTargetProvider, setCorrectionTargetProvider] = useState<Provider | null>(null);
  const [selectedProviderDetail, setSelectedProviderDetail] = useState<Provider | null>(null);

  // User state
  const [currentUser, setCurrentUser] = useState<{ name: string; role: 'parent' | 'provider'; email: string } | null>(null);

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Section navigation helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Bookmark / Save toggle
  const handleToggleSave = (providerId: string) => {
    setSavedProviderIds((prev) => {
      const exists = prev.includes(providerId);
      if (exists) {
        addToast('Removed from Saved', 'Provider removed from your bookmarks.', 'info');
        return prev.filter((id) => id !== providerId);
      } else {
        addToast('Saved Provider', 'Added to your quick access bookmarks.', 'success');
        return [...prev, providerId];
      }
    });
  };

  // Hero search trigger
  const handleHeroSearch = (category: ServiceCategory | 'all', location: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
      location: location || prev.location
    }));
    scrollToSection('discover');
    addToast('Search Updated', `Showing results for ${category === 'all' ? 'all services' : category} in ${location}.`, 'info');
  };

  // Category card click
  const handleSelectQuickCategory = (cat: ServiceCategory) => {
    setFilters((prev) => ({
      ...prev,
      category: cat
    }));
    scrollToSection('discover');
  };

  // Emergency triggers
  const handleEmergencyTrigger = (type: 'vet' | 'ambulance' | 'hospital') => {
    if (type === 'vet') {
      setFilters((prev) => ({
        ...prev,
        category: 'veterinary-clinic',
        emergencyOnly: true,
        openNowOnly: true
      }));
    } else if (type === 'ambulance') {
      setFilters((prev) => ({
        ...prev,
        category: 'animal-ambulance',
        emergencyOnly: true
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        category: 'animal-hospital',
        emergencyOnly: true
      }));
    }
    scrollToSection('discover');
    addToast('Emergency Filter Active', 'Showing verified emergency-ready providers sorted by distance.', 'info');
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      location: 'Bengaluru, Karnataka',
      maxDistanceKm: 20,
      openNowOnly: false,
      emergencyOnly: false,
      homeVisitOnly: false,
      minRating: 0,
      priceLevel: 'all',
      selectedAnimals: [],
      sortBy: 'distance'
    });
    addToast('Filters Reset', 'All filter constraints cleared.', 'info');
  };

  // Provider listing submission handler
  const handleBusinessListingSuccess = (submission: BusinessListingSubmission) => {
    // Add to local state as a newly submitted provider (pending verification)
    const newProvider: Provider = {
      id: `prov-new-${Date.now()}`,
      name: submission.orgName,
      tagline: `Newly listed practice in ${submission.location}. Verification in audit.`,
      category: submission.category,
      categoryLabel: submission.category,
      isVerified: false,
      rating: 5.0,
      reviewCount: 1,
      address: submission.address,
      area: submission.location,
      city: 'Bengaluru',
      distanceKm: 2.1,
      operatingHours: {
        isOpenNow: true,
        displayHours: '09:00 AM – 08:00 PM',
        is24x7: submission.hasEmergency
      },
      hasEmergency24x7: submission.hasEmergency,
      hasHomeVisit: submission.hasHomeVisit,
      priceLevel: 'moderate',
      priceEstimate: '₹500 consultation',
      phone: submission.phone,
      email: submission.email,
      website: submission.website,
      imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
      galleryImages: [],
      animalsTreated: submission.animalsTreated,
      servicesOffered: submission.servicesOffered,
      equipmentAndFacilities: ['Standard Examination Suite'],
      accreditations: [submission.licenseNumber ? `Reg #${submission.licenseNumber}` : 'Licensure Verification Pending'],
      doctors: [
        {
          name: 'Consulting Veterinarian',
          role: 'Lead Doctor',
          qualification: 'BVSc & AH',
          experienceYears: 5,
          avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
        }
      ],
      reviews: []
    };

    setProviders((prev) => [newProvider, ...prev]);
    addToast('Listing Published to Demo', `${submission.orgName} added to local catalog.`, 'success');
  };

  const handleCorrectionSuccess = (correction: CorrectionSubmission) => {
    addToast('Correction Logged', `Audit task created for ${correction.providerName}.`, 'success');
  };

  const handleLoginSuccess = (user: { name: string; role: 'parent' | 'provider'; email: string }) => {
    setCurrentUser(user);
    addToast('Welcome to Practo for Animals', `Signed in as ${user.name} (${user.role === 'parent' ? 'Pet Parent' : 'Care Provider'}).`, 'success');
  };

  const savedProviders = providers.filter((p) => savedProviderIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#202A27] selection:bg-[#23866B] selection:text-white">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <Navbar
        onOpenSignIn={() => setIsAuthModalOpen(true)}
        onOpenListBusiness={() => setIsListBusinessOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
        savedCount={savedProviderIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        
        {/* 2. HERO SECTION */}
        <HeroSection
          onSearchSubmit={handleHeroSearch}
          onExploreServices={() => scrollToSection('services')}
          onFindCareNearYou={() => scrollToSection('discover')}
        />

        {/* 3. QUICK SERVICE DISCOVERY (6 CATEGORIES) */}
        <QuickServices
          onSelectCategory={handleSelectQuickCategory}
          selectedCategory={filters.category}
        />

        {/* 4. SMART DISCOVERY SECTION (CORE FUNCTIONALITY) */}
        <SmartDiscovery
          providers={providers}
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
          savedProviderIds={savedProviderIds}
          onToggleSave={handleToggleSave}
          onOpenCorrection={(p) => setCorrectionTargetProvider(p)}
          onNotify={addToast}
        />

        {/* 5. UNIQUE FEATURE: PAWCARE PASSPORT */}
        <PawCarePassport onNotify={addToast} />

        {/* 6. EMERGENCY CARE SECTION */}
        <EmergencySection
          onTriggerEmergencyFilter={handleEmergencyTrigger}
          onNotify={addToast}
        />

        {/* 7. FOR ANIMAL-CARE PROVIDERS */}
        <ForProvidersSection
          onOpenListBusiness={() => setIsListBusinessOpen(true)}
          onOpenGeneralCorrection={() => setCorrectionTargetProvider(providers[0])}
          onNotify={addToast}
        />

        {/* 8. TRUST AND COMMUNITY */}
        <TrustSection />

      </main>

      {/* 9. FOOTER */}
      <Footer
        onNavigate={scrollToSection}
        onOpenListBusiness={() => setIsListBusinessOpen(true)}
        onOpenSignIn={() => setIsAuthModalOpen(true)}
      />

      {/* Modals & Slide-out Drawers */}
      <ListBusinessModal
        isOpen={isListBusinessOpen}
        onClose={() => setIsListBusinessOpen(false)}
        onSuccess={handleBusinessListingSuccess}
      />

      <CorrectionModal
        provider={correctionTargetProvider}
        isOpen={!!correctionTargetProvider}
        onClose={() => setCorrectionTargetProvider(null)}
        onSubmitSuccess={handleCorrectionSuccess}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <SavedProvidersDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProviders={savedProviders}
        onRemoveSave={handleToggleSave}
        onViewDetails={(p) => setSelectedProviderDetail(p)}
      />

      {/* Standalone Provider Detail Modal when clicked from Saved drawer */}
      <ProviderModal
        provider={selectedProviderDetail}
        isOpen={!!selectedProviderDetail}
        onClose={() => setSelectedProviderDetail(null)}
        onOpenCorrection={(p) => setCorrectionTargetProvider(p)}
        isSaved={selectedProviderDetail ? savedProviderIds.includes(selectedProviderDetail.id) : false}
        onToggleSave={handleToggleSave}
        onNotify={addToast}
      />

      {/* Global Toast Notifications Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

    </div>
  );
}

export default App;
