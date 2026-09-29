import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Calendar, 
  Flame, 
  Droplet, 
  Check, 
  X,
  AlertCircle 
} from 'lucide-react';
import { TRANSITION_PHASES, TransitionPhase } from '../data/carnivoreData';

export const TransitionCoach: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const [protocolType, setProtocolType] = useState<'bbbe' | 'lion' | 'nosetotail'>('bbbe');
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPhase: TransitionPhase = TRANSITION_PHASES.find(p => p.phase === selectedPhase) || TRANSITION_PHASES[0];

  const protocols = [
    { id: 'bbbe', name: 'BBBE Protocol', desc: 'Beef, Butter, Bacon, Eggs. Paling cocok untuk pemula umum.' },
    { id: 'lion', name: 'The Lion Diet', desc: '100% Sapi/Domba, Garam, Air. Terbaik untuk autoimun & radang usus parah.' },
    { id: 'nosetotail', name: 'Nose-to-Tail', desc: 'Daging + Jeroan (hati 100g/mgg) + Lemak Tallow + Ikan Laut Liar.' }
  ];

  return (
    <div className="space-y-8 py-2">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase">
          <span>Modul 02</span>
          <span>·</span>
          <span>Panduan Transisi Bertahap</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
          Protokol Transisi 6–8 Minggu
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Adaptasi enzim pencernaan, pencegahan keto flu, dan pengasaman asam lambung tanpa kejutan biologis.
        </p>
      </div>

      {/* Protocol Variant Selector */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-zinc-400 uppercase font-semibold">PILIH VARIAN PROTOKOL:</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {protocols.map(p => (
            <button
              key={p.id}
              onClick={() => setProtocolType(p.id as any)}
              className={`p-3 text-left border transition-colors cursor-pointer ${
                protocolType === p.id
                  ? 'border-red-600 bg-red-950/40 text-white'
                  : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div className="text-xs font-bold text-white">{p.name}</div>
              <div className="text-[11px] text-zinc-400 mt-1">{p.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 3 Phases Buttons */}
      <div className="flex border-b border-zinc-800 gap-2 overflow-x-auto text-xs font-semibold">
        {TRANSITION_PHASES.map(p => (
          <button
            key={p.phase}
            onClick={() => setSelectedPhase(p.phase)}
            className={`pb-2 px-3 whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
              selectedPhase === p.phase
                ? 'border-red-600 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Fase 0{p.phase} ({p.weeks})
          </button>
        ))}
      </div>

      {/* Phase Action Container */}
      <div className="border border-zinc-800 bg-zinc-950 p-5 space-y-5">
        <div className="border-b border-zinc-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <span className="text-[10px] font-mono text-red-400 font-bold">{currentPhase.weeks}</span>
            <h3 className="text-lg font-bold text-white">{currentPhase.title}</h3>
          </div>
          <span className="text-xs text-zinc-400">{currentPhase.objective}</span>
        </div>

        {/* Action Checklist */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">CHECKLIST TINDAKAN:</span>
          <div className="space-y-1.5">
            {currentPhase.checklist.map((item, idx) => {
              const key = `p${currentPhase.phase}_${idx}`;
              const isChecked = !!completed[key];
              return (
                <button
                  key={idx}
                  onClick={() => toggleCheck(key)}
                  className={`w-full flex items-start gap-2.5 p-2 text-left border cursor-pointer text-xs ${
                    isChecked 
                      ? 'border-emerald-900 bg-emerald-950/20 text-zinc-400' 
                      : 'border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <span className="mt-0.5 shrink-0">
                    {isChecked ? <CheckSquare className="w-4 h-4 text-emerald-500" /> : <Square className="w-4 h-4 text-zinc-600" />}
                  </span>
                  <span className={isChecked ? 'line-through text-zinc-500' : 'text-zinc-200'}>
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Foods In & Out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="border border-emerald-950 bg-zinc-900/40 p-3 text-xs">
            <span className="text-emerald-400 font-bold flex items-center gap-1 mb-2 font-mono">
              <Check className="w-3.5 h-3.5" /> MAKANAN DIUTAMAKAN:
            </span>
            <ul className="space-y-1 text-zinc-300">
              {currentPhase.foodsToAdd.map((f, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-red-950 bg-zinc-900/40 p-3 text-xs">
            <span className="text-red-400 font-bold flex items-center gap-1 mb-2 font-mono">
              <X className="w-3.5 h-3.5" /> MAKANAN DIBUANG:
            </span>
            <ul className="space-y-1 text-zinc-300">
              {currentPhase.foodsToRemove.map((f, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="text-red-500">✕</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Crucial Tip */}
        <div className="p-3 bg-zinc-900 border-l-2 border-red-500 text-xs text-zinc-300">
          <strong className="text-white font-mono">KUNCI SUKSES: </strong>
          {currentPhase.keyTip}
        </div>
      </div>

      {/* Brief HCl & Celtic Salt Guide */}
      <div className="border border-zinc-800 bg-zinc-900/40 p-4 space-y-2 text-xs">
        <div className="text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
          <Droplet className="w-4 h-4 text-red-500" />
          <span>Fisiologi Garam Celtic & Asam Lambung (HCl)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-zinc-300 pt-1">
          <p><strong className="text-white">1. Bahan Baku HCl:</strong> Ion klorida (Cl-) dari garam murni diperlukan sel parietal untuk membuat HCl pekat (pH 1.5–2.0).</p>
          <p><strong className="text-white">2. Menutup Katup GERD:</strong> Keasaman tinggi otomatis merangsang katup kerongkongan menutup rapat, menyembuhkan asam lambung dalam 24–48 jam.</p>
          <p><strong className="text-white">3. Dosis Anjuran:</strong> Konsumsi 5–7 gram garam laut Celtic/Himalaya setiap hari (taburkan gurih pada daging).</p>
        </div>
      </div>
    </div>
  );
};
