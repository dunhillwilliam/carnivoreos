import React, { useState } from 'react';
import { X, AlertOctagon, CheckCircle, AlertTriangle } from 'lucide-react';
import { BIOFEEDBACK_GUIDES } from '../data/carnivoreData';

interface BiofeedbackSosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BiofeedbackSosModal: React.FC<BiofeedbackSosModalProps> = ({ isOpen, onClose }) => {
  const [selectedIssue, setSelectedIssue] = useState<'loose' | 'constipated' | 'reflux'>('loose');

  if (!isOpen) return null;

  const guide = 
    selectedIssue === 'loose' 
      ? BIOFEEDBACK_GUIDES.looseStool 
      : selectedIssue === 'constipated' 
        ? BIOFEEDBACK_GUIDES.constipation 
        : BIOFEEDBACK_GUIDES.acidReflux;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-none">
      <div className="w-full max-w-lg bg-zinc-950 border-2 border-red-600 text-zinc-100 p-4 sm:p-5 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 bg-red-600 text-white flex items-center justify-center shrink-0">
              <AlertOctagon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wide">SOLUSI CEPAT USUS</div>
              <h2 className="text-sm sm:text-base font-bold text-white truncate">Troubleshooting SOS</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-900 cursor-pointer shrink-0"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Issue Buttons with clean mobile wrapping */}
        <div className="grid grid-cols-3 gap-1 bg-zinc-900 p-1 border border-zinc-800">
          <button
            onClick={() => setSelectedIssue('loose')}
            className={`py-2 px-1 text-[11px] sm:text-xs font-semibold cursor-pointer text-center transition-colors ${
              selectedIssue === 'loose' ? 'bg-red-700 text-white font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            1. Diare
          </button>
          <button
            onClick={() => setSelectedIssue('constipated')}
            className={`py-2 px-1 text-[11px] sm:text-xs font-semibold cursor-pointer text-center transition-colors ${
              selectedIssue === 'constipated' ? 'bg-red-700 text-white font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            2. Sembelit
          </button>
          <button
            onClick={() => setSelectedIssue('reflux')}
            className={`py-2 px-1 text-[11px] sm:text-xs font-semibold cursor-pointer text-center transition-colors ${
              selectedIssue === 'reflux' ? 'bg-red-700 text-white font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            3. GERD
          </button>
        </div>

        {/* Content Box */}
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-zinc-900 border-l-2 border-red-500 space-y-0.5">
            <span className="font-bold text-white block text-xs">Penyebab Utama:</span>
            <span className="text-zinc-300 text-xs leading-relaxed block">{guide.cause}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 border border-amber-950 bg-zinc-900/60 space-y-1.5">
              <span className="text-amber-400 font-bold block font-mono text-[10px] tracking-wide">HENTIKAN SEGERA:</span>
              <ul className="space-y-1 text-zinc-300 text-xs">
                {guide.stopNow.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-amber-500 shrink-0 font-bold">✕</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 border border-emerald-950 bg-zinc-900/60 space-y-1.5">
              <span className="text-emerald-400 font-bold block font-mono text-[10px] tracking-wide">LAKUKAN SEKARANG:</span>
              <ul className="space-y-1 text-zinc-300 text-xs">
                {guide.doNow.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-emerald-500 shrink-0 font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-zinc-400">Target Reda: <strong className="text-emerald-400 font-mono">{guide.timeframe}</strong></span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-1.5 bg-red-700 hover:bg-red-800 text-white font-semibold cursor-pointer text-center"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
