import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
    info: <Info className="w-5 h-5 text-[#23866B] shrink-0" />
  };

  const bgStyles = {
    success: 'border-emerald-200 bg-white/95 text-slate-800 shadow-soft-lg',
    error: 'border-rose-200 bg-white/95 text-slate-800 shadow-soft-lg',
    info: 'border-[#23866B]/30 bg-white/95 text-slate-800 shadow-soft-lg'
  };

  return (
    <div className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-3 ${bgStyles[toast.type]}`}>
      {icons[toast.type]}
      <div className="flex-1 text-sm">
        <p className="font-semibold text-slate-900">{toast.title}</p>
        {toast.message && <p className="text-slate-600 text-xs mt-0.5">{toast.message}</p>}
      </div>
      <button 
        onClick={() => onDismiss(toast.id)}
        className="text-slate-400 hover:text-slate-600 transition-colors p-1 -mr-1 -mt-1 rounded-md"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
