import React, { useState } from 'react';
import { 
  Settings, 
  Key, 
  ShieldCheck, 
  Save, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Layers,
  Cpu,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SettingsView: React.FC = () => {
  const { settings, updateSettings, resetAllData, addToast } = useApp();

  const [formState, setFormState] = useState(settings);
  const [showKey, setShowKey] = useState(false);

  const handleSave = () => {
    updateSettings(formState);
    addToast('Settings Saved', 'Configuration updated successfully.', 'success');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#222633]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold mb-2">
            <Settings className="w-3.5 h-3.5" />
            <span>Environment & Preferences</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">Studio Settings</h1>
          <p className="text-xs text-[#A3A8B8] mt-1">
            Configure LLM generation engines, API keys, export defaults, and integrations.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Save Preferences</span>
        </button>
      </div>

      {/* AI Engine Configuration Card */}
      <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#8B72FF]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              AI Generation Engine & API Gateway
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {formState.useLiveApi && formState.apiKey ? 'Live API Active' : 'Offline Demo Engine'}
          </span>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            onClick={() => setFormState(prev => ({ ...prev, useLiveApi: false }))}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              !formState.useLiveApi
                ? 'bg-[#8B72FF]/15 border-[#8B72FF] text-white'
                : 'bg-[#11131B] border-[#222633] text-[#A3A8B8]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">Built-in Demo Engine</span>
              {!formState.useLiveApi && <CheckCircle2 className="w-4 h-4 text-[#8B72FF]" />}
            </div>
            <p className="text-[11px] text-[#A3A8B8]">
              Zero configuration required. Generates realistic, topical research, hooks, and slides instantly.
            </p>
          </div>

          <div
            onClick={() => setFormState(prev => ({ ...prev, useLiveApi: true }))}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              formState.useLiveApi
                ? 'bg-[#5AA9FF]/15 border-[#5AA9FF] text-white'
                : 'bg-[#11131B] border-[#222633] text-[#A3A8B8]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">Custom LLM Key (Gemini / OpenAI)</span>
              {formState.useLiveApi && <CheckCircle2 className="w-4 h-4 text-[#5AA9FF]" />}
            </div>
            <p className="text-[11px] text-[#A3A8B8]">
              Connect your private API key for live inference. Keys remain stored strictly in your browser.
            </p>
          </div>
        </div>

        {/* API Key Input */}
        <div className="space-y-2 pt-2 border-t border-[#222633]">
          <label className="text-xs font-bold text-white flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>Private API Key (Optional)</span>
            </span>
            <span className="text-[10px] text-[#A3A8B8] font-mono">Stored in browser localStorage</span>
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={formState.apiKey}
              onChange={(e) => setFormState(prev => ({ ...prev, apiKey: e.target.value }))}
              placeholder="AIzaSy... or sk-proj-..."
              className="w-full p-3 pr-10 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs font-mono outline-none focus:border-[#8B72FF]"
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3A8B8] hover:text-white"
            >
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Security Disclosure */}
        <div className="p-3.5 rounded-xl bg-[#11131B] border border-white/5 flex items-start gap-2.5 text-xs text-[#A3A8B8] leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white">Privacy Guarantee: </span>
            <span>API keys and drafts are kept strictly client-side. FrameFlow does not proxy or log prompts on external servers.</span>
          </div>
        </div>
      </div>

      {/* Export Defaults Card */}
      <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
          <Download className="w-4 h-4 text-[#5AA9FF]" />
          <span>Export Preferences</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white">Default Export Format</label>
            <select
              value={formState.exportFormatDefault}
              onChange={(e) => setFormState(prev => ({ ...prev, exportFormatDefault: e.target.value as any }))}
              className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none"
            >
              <option value="pdf">Multi-Page PDF (LinkedIn Document)</option>
              <option value="png">1080x1080 PNG Bundle (Instagram)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white">DPI Resolution Scaling</label>
            <select
              className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none"
              defaultValue="2x"
            >
              <option value="2x">2x High-DPI (Retina Sharp 2160x2160)</option>
              <option value="1x">1x Standard (1080x1080)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Integration Registry */}
      <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Production Integration Matrix</span>
        </h3>

        <div className="space-y-2">
          <div className="p-3 rounded-xl bg-[#11131B] border border-[#222633] flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-white">Client-Side Canvas Rasterizer</p>
              <p className="text-[11px] text-[#A3A8B8]">Native DOM-to-PNG engine with html-to-image</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Active (Local)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#11131B] border border-[#222633] flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-white">jsPDF Multi-Page Compiler</p>
              <p className="text-[11px] text-[#A3A8B8]">Vector document generation formatted 1080x1080</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Active (Local)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#11131B] border border-[#222633] flex items-center justify-between text-xs opacity-75">
            <div>
              <p className="font-bold text-white">n8n Automation Webhook</p>
              <p className="text-[11px] text-[#A3A8B8]">Configurable endpoint for external webhook triggers</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
              Ready to Connect
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#11131B] border border-[#222633] flex items-center justify-between text-xs opacity-75">
            <div>
              <p className="font-bold text-white">Google Drive Cloud Archiver</p>
              <p className="text-[11px] text-[#A3A8B8]">Staging carousel PDFs directly in team drive</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
              Ready to Connect
            </span>
          </div>
        </div>
      </div>

      {/* Danger Zone / Reset */}
      <div className="p-6 rounded-2xl bg-[#24171A] border border-rose-500/20 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
          Reset Application State
        </h3>
        <p className="text-xs text-rose-200/80 leading-relaxed">
          Restore the preloaded 9-slide sample project ("5 AI Tools Every College Student Should Know in 2026") and reset custom brand-kit preferences.
        </p>

        <button
          onClick={resetAllData}
          className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white text-xs font-bold transition-all border border-rose-500/30 flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Data to Factory Defaults</span>
        </button>
      </div>
    </div>
  );
};
