import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Activity, 
  Pill, 
  Syringe, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Sparkles,
  Info,
  Heart,
  QrCode
} from 'lucide-react';
import { MOCK_PET_PROFILES, PetProfile } from '../../data/passportMock';

interface PawCarePassportProps {
  onNotify: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const PawCarePassport: React.FC<PawCarePassportProps> = ({ onNotify }) => {
  const [selectedPetId, setSelectedPetId] = useState<string>('pet-bruno');
  const [activeTab, setActiveTab] = useState<'vaccines' | 'visits' | 'diagnostics' | 'meds' | 'appointments'>('vaccines');
  const [showShareSummaryModal, setShowShareSummaryModal] = useState<boolean>(false);

  const currentPet = MOCK_PET_PROFILES.find((p) => p.id === selectedPetId) || MOCK_PET_PROFILES[0];

  const handleDownloadDemo = () => {
    setShowShareSummaryModal(true);
    onNotify('Passport Summary Ready', `Generated digital health snapshot for ${currentPet.name}.`, 'success');
  };

  return (
    <section id="passport" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7F4EC] border border-[#23866B]/20 text-xs font-bold text-[#153D35] uppercase tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#23866B]" />
            Signature Platform Innovation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153D35] tracking-tight">
            PawCare Passport
          </h2>
          <p className="mt-3 text-lg text-[#23866B] font-medium font-serif italic">
            Their care journey, all in one place.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Never scramble for vaccination cards, blood reports, or prescription dosages again. A unified, timeline-based health ledger designed for pet parents and attending doctors.
          </p>

          {/* Prototype Disclaimer Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF9F5] border border-slate-200 rounded-full text-xs text-slate-500">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Interactive product simulation. Demonstrates upcoming pet digital health record technology.</span>
          </div>
        </div>

        {/* Main Passport Card Container */}
        <div className="bg-[#FAF9F5] rounded-3xl border border-slate-200 shadow-soft-lg overflow-hidden w-full mx-auto">
          
          {/* Top Pet Profile Ribbon */}
          <div className="bg-[#153D35] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left: Pet Info & Switcher */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src={currentPet.avatarUrl}
                  alt={currentPet.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white/20 shadow-soft-md"
                />
                <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#23866B] text-white border border-white">
                  Active
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{currentPet.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md">
                    {currentPet.breed}
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                  <span>Age: <strong className="text-white font-medium">{currentPet.age}</strong></span>
                  <span>•</span>
                  <span>Weight: <strong className="text-white font-medium">{currentPet.weightKg} kg</strong></span>
                  <span>•</span>
                  <span>Microchip: <strong className="text-white font-mono">{currentPet.microchipId}</strong></span>
                </div>

                <div className="mt-2 text-xs text-emerald-300 flex items-center gap-1 font-mono">
                  <span>Passport ID:</span>
                  <span className="bg-black/30 px-2 py-0.5 rounded tracking-wider">{currentPet.passportId}</span>
                </div>
              </div>
            </div>

            {/* Right: Switch Pet Profiles & Download Summary */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              {/* Pet Switcher Buttons */}
              <div className="flex items-center gap-2 p-1.5 bg-black/25 rounded-2xl border border-white/10">
                {MOCK_PET_PROFILES.map((pet) => (
                  <button
                    key={pet.id}
                    onClick={() => setSelectedPetId(pet.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                      selectedPetId === pet.id
                        ? 'bg-[#23866B] text-white shadow-soft-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{pet.name} ({pet.species})</span>
                  </button>
                ))}
              </div>

              {/* Download Digital Passport */}
              <button
                onClick={handleDownloadDemo}
                className="px-4 py-2 rounded-xl bg-white text-[#153D35] hover:bg-slate-100 font-bold text-xs shadow-soft-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#23866B]" />
                <span>View Digital Health Card</span>
              </button>
            </div>

          </div>

          {/* Navigation Tabs for Passport Records */}
          <div className="px-6 border-b border-slate-200/90 bg-white flex space-x-6 overflow-x-auto text-xs sm:text-sm font-semibold text-slate-500">
            {[
              { id: 'vaccines', label: `Vaccinations (${currentPet.vaccinations.length})`, icon: <Syringe className="w-4 h-4" /> },
              { id: 'visits', label: `Medical Visits (${currentPet.medicalVisits.length})`, icon: <Calendar className="w-4 h-4" /> },
              { id: 'diagnostics', label: `Diagnostic Reports (${currentPet.diagnostics.length})`, icon: <Activity className="w-4 h-4" /> },
              { id: 'meds', label: `Medications (${currentPet.medications.length})`, icon: <Pill className="w-4 h-4" /> },
              { id: 'appointments', label: `Upcoming (${currentPet.upcomingAppointments.length})`, icon: <Clock className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#23866B] text-[#153D35] font-bold'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Display Area */}
          <div className="p-6 sm:p-8">
            
            {/* 1. VACCINATIONS */}
            {activeTab === 'vaccines' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#153D35] uppercase tracking-wide">Immunization History</h4>
                  <span className="text-xs text-slate-500">Official rabies & core protocol compliance</span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {currentPet.vaccinations.map((vac) => (
                    <div key={vac.id} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h5 className="font-bold text-sm text-slate-900">{vac.vaccineName}</h5>
                          {vac.status === 'valid' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Valid
                            </span>
                          )}
                          {vac.status === 'due-soon' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> Due Soon
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mt-1">Protects against: {vac.targetDisease}</p>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400">
                          <span>Administered: <strong className="text-slate-700">{vac.administeredDate}</strong></span>
                          <span>•</span>
                          <span>Valid Until: <strong className="text-slate-700">{vac.validUntil}</strong></span>
                          <span>•</span>
                          <span>Administered by: <strong className="text-slate-700">{vac.veterinarian}</strong></span>
                        </div>
                      </div>

                      <div className="text-right sm:border-l sm:pl-4 border-slate-100 shrink-0">
                        <span className="text-[10px] font-mono text-slate-400 block">Batch #{vac.batchNumber}</span>
                        <span className="text-xs font-semibold text-[#23866B] mt-0.5 block">{vac.clinic}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. MEDICAL VISITS */}
            {activeTab === 'visits' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#153D35] uppercase tracking-wide">Clinical Consultation Notes</h4>
                  <span className="text-xs text-slate-500">Historical diagnoses and doctor assessments</span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {currentPet.medicalVisits.map((visit) => (
                    <div key={visit.id} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm space-y-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-bold text-[#23866B]">{visit.date}</span>
                          <h5 className="font-bold text-sm text-slate-900 mt-0.5">{visit.reason}</h5>
                        </div>
                        <div className="text-xs text-slate-500">
                          {visit.veterinarian} • <span className="font-medium text-slate-800">{visit.clinic}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1 text-xs">
                        <div className="p-2 bg-slate-50 rounded-lg">
                          <span className="text-slate-400 block text-[10px]">Recorded Weight</span>
                          <span className="font-bold text-slate-800">{visit.weightKg} kg</span>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-lg">
                          <span className="text-slate-400 block text-[10px]">Body Temp</span>
                          <span className="font-bold text-slate-800">{visit.temperatureC} °C</span>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-lg col-span-2">
                          <span className="text-slate-400 block text-[10px]">Primary Diagnosis</span>
                          <span className="font-bold text-slate-800 truncate block">{visit.diagnosis}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 bg-[#FAF9F5] p-3 rounded-xl border border-slate-200/60 leading-relaxed italic">
                        "{visit.treatmentNotes}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. DIAGNOSTIC REPORTS */}
            {activeTab === 'diagnostics' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#153D35] uppercase tracking-wide">Pathology & Imaging Panels</h4>
                  <span className="text-xs text-slate-500">Point-of-care laboratory outputs</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {currentPet.diagnostics.map((report) => (
                    <div key={report.id} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E7F4EC] text-[#23866B]">
                              {report.category}
                            </span>
                            <span className="text-xs text-slate-400">{report.date}</span>
                          </div>
                          <h5 className="font-bold text-sm text-slate-900 mt-1">{report.title}</h5>
                          <span className="text-xs text-slate-500">{report.labName}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-slate-400">{report.fileSize}</span>
                          <button
                            onClick={() => onNotify('Sample Report Preview', `Opening ${report.title}`, 'info')}
                            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                          >
                            Preview
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {report.summary}
                      </p>

                      {/* Key Value Metrics Table */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        {report.keyValues.map((kv, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                            <span className="text-[10px] text-slate-500 block truncate">{kv.metric}</span>
                            <span className="text-xs font-bold text-slate-900 block mt-0.5">{kv.value}</span>
                            <span className="text-[9px] text-slate-400 block mt-0.5">Ref: {kv.normalRange}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. MEDICATIONS */}
            {activeTab === 'meds' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#153D35] uppercase tracking-wide">Prescription & Preventive Regimen</h4>
                  <span className="text-xs text-slate-500">Active dosages and refill reminders</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentPet.medications.map((med) => (
                    <div key={med.id} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {med.status === 'active' ? '● Active Regimen' : 'Completed'}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">{med.frequency}</span>
                        </div>
                        <h5 className="font-bold text-sm text-slate-900 mt-2">{med.name}</h5>
                        <p className="text-xs font-semibold text-[#23866B] mt-0.5">{med.dosage}</p>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-2 rounded-lg">
                          {med.instructions}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Rx by: {med.prescribedBy}</span>
                        <span>Started: {med.startDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. APPOINTMENTS */}
            {activeTab === 'appointments' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#153D35] uppercase tracking-wide">Upcoming Care Schedule</h4>
                  <span className="text-xs text-slate-500">Scheduled boosters & wellness reviews</span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {currentPet.upcomingAppointments.map((app) => (
                    <div key={app.id} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E7F4EC] text-[#23866B]">
                            {app.type}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                            Confirmed
                          </span>
                        </div>
                        <h5 className="font-bold text-base text-slate-900 mt-1">{app.serviceType}</h5>
                        <p className="text-xs text-slate-600 mt-0.5">{app.providerName} • {app.doctorName}</p>
                        <p className="text-xs text-slate-400 mt-1 font-mono">{app.dateTime}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onNotify('Calendar Sync (Demo)', 'Appointment added to your device calendar.', 'success')}
                          className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                        >
                          Add to Calendar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Summary Alert */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#23866B] shrink-0" />
              <span>Standardized under the Open Companion Health Framework (Demo Architecture)</span>
            </div>
            <button
              onClick={handleDownloadDemo}
              className="text-[#23866B] font-bold hover:underline flex items-center gap-1"
            >
              <span>Generate Emergency QR Code</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Share / Digital Health Card Modal Demo */}
      {showShareSummaryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-[#23866B]" />
                <h4 className="font-bold text-[#153D35] text-base">Digital Health Card & Collar QR</h4>
              </div>
              <button
                onClick={() => setShowShareSummaryModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <ChevronRight className="w-5 h-5 rotate-90" />
              </button>
            </div>

            {/* Visual Digital Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#153D35] to-[#23866B] text-white shadow-soft-lg space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-emerald-200 uppercase">PRACTO FOR ANIMALS</span>
                  <h5 className="text-xl font-bold">{currentPet.name}</h5>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center">
                  {/* QR Pattern visual */}
                  <div className="w-full h-full bg-slate-900 rounded grid grid-cols-3 gap-0.5 p-1">
                    <div className="bg-white rounded-xs" />
                    <div className="bg-slate-900" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-slate-900" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-slate-900" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-slate-900" />
                    <div className="bg-white rounded-xs" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/20">
                <div>
                  <span className="text-white/60 text-[10px] block">BREED & SPECIES</span>
                  <span className="font-semibold">{currentPet.breed} ({currentPet.species})</span>
                </div>
                <div>
                  <span className="text-white/60 text-[10px] block">BLOOD TYPE</span>
                  <span className="font-semibold">{currentPet.bloodType}</span>
                </div>
                <div>
                  <span className="text-white/60 text-[10px] block">MICROCHIP ID</span>
                  <span className="font-mono text-emerald-200">{currentPet.microchipId}</span>
                </div>
                <div>
                  <span className="text-white/60 text-[10px] block">KNOWN ALLERGIES</span>
                  <span className="font-semibold text-amber-200 truncate block">
                    {currentPet.allergies.join(', ') || 'None reported'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed text-center">
              Scanning this QR allows emergency vets or rescuers to instantly view {currentPet.name}'s blood group, verified rabies vaccination status, and critical drug allergies.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowShareSummaryModal(false);
                  onNotify('PDF Downloaded (Demo)', `${currentPet.name}_Passport_Summary.pdf saved.`, 'success');
                }}
                className="w-full py-2.5 bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-xs rounded-xl shadow-soft-sm transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save PDF Snapshot</span>
              </button>
              <button
                onClick={() => setShowShareSummaryModal(false)}
                className="w-full py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
