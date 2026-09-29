import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  Plus, 
  Trash2 
} from 'lucide-react';
import { BIOFEEDBACK_GUIDES, SymptomGuide } from '../data/carnivoreData';

interface LogEntry {
  id: string;
  date: string;
  day: number;
  energy: number;
  mood: number;
  stoolType: number;
  note: string;
}

export const BiofeedbackTracker: React.FC = () => {
  const [activeIssue, setActiveIssue] = useState<'loose' | 'constipated' | 'reflux'>('loose');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [showAdd, setShowAdd] = useState(false);

  // Form
  const [day, setDay] = useState(1);
  const [energy, setEnergy] = useState(8);
  const [mood, setMood] = useState(8);
  const [stoolType, setStoolType] = useState(4);
  const [note, setNote] = useState('');

  useEffect(() => {
    try {
      const data = localStorage.getItem('carnivoreos_quick_logs');
      if (data) {
        setLogs(JSON.parse(data));
      } else {
        const sample: LogEntry[] = [
          { id: '1', date: 'Hari 1', day: 1, energy: 7, mood: 7, stoolType: 4, note: 'Mulai eliminasi minyak biji & roti. GERD tidak kambuh.' },
          { id: '2', date: 'Hari 7', day: 7, energy: 9, mood: 9, stoolType: 4, note: 'Jerawat punggung mengering total, tidur jauh lebih lelap.' }
        ];
        setLogs(sample);
        localStorage.setItem('carnivoreos_quick_logs', JSON.stringify(sample));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: LogEntry = {
      id: Date.now().toString(),
      date: `Hari ${day}`,
      day,
      energy,
      mood,
      stoolType,
      note
    };
    const updated = [entry, ...logs];
    setLogs(updated);
    localStorage.setItem('carnivoreos_quick_logs', JSON.stringify(updated));
    setShowAdd(false);
    setNote('');
  };

  const handleDelete = (id: string) => {
    const updated = logs.filter(l => l.id !== id);
    setLogs(updated);
    localStorage.setItem('carnivoreos_quick_logs', JSON.stringify(updated));
  };

  const guide: SymptomGuide = 
    activeIssue === 'loose' 
      ? BIOFEEDBACK_GUIDES.looseStool 
      : activeIssue === 'constipated' 
        ? BIOFEEDBACK_GUIDES.constipation 
        : BIOFEEDBACK_GUIDES.acidReflux;

  return (
    <div className="space-y-6 sm:space-y-8 py-2 w-full">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase">
          <span>Modul 04</span>
          <span>·</span>
          <span>Biofeedback & Solusi Pencernaan</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-bold font-display text-white mt-1 break-words">
          Troubleshooting Cepat Usus & Log Harian
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
          Panduan langsung mengatasi diare transisi, sembelit, dan asam lambung.
        </p>
      </div>

      {/* Tabs Switcher (Scrollable, comfortable spacing) */}
      <div className="flex border-b border-zinc-800 gap-1.5 sm:gap-2 overflow-x-auto pb-1 text-xs font-semibold no-scrollbar">
        {[
          { id: 'loose', label: '1. Diare / Feses Encer' },
          { id: 'constipated', label: '2. Sembelit / Keras' },
          { id: 'reflux', label: '3. Asam Lambung / GERD' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveIssue(t.id as any)}
            className={`pb-2 px-2.5 sm:px-3 whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
              activeIssue === t.id ? 'border-red-600 text-white font-bold' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Troubleshooting Panel */}
      <div className="border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-4">
        <div>
          <span className="text-[10px] font-mono text-red-400 uppercase font-bold">KONDISI:</span>
          <h2 className="text-base sm:text-lg font-bold text-white">{guide.condition}</h2>
          <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
            <strong className="text-zinc-200">Penyebab: </strong>{guide.cause}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs pt-1">
          <div className="border border-amber-950 bg-zinc-900/60 p-3.5 space-y-1.5">
            <span className="text-amber-400 font-bold block font-mono text-[11px]">HENTIKAN / HINDARI SEGERA:</span>
            <ul className="space-y-1 text-zinc-300">
              {guide.stopNow.map((s, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-amber-500 font-bold shrink-0">✕</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-emerald-950 bg-zinc-900/60 p-3.5 space-y-1.5">
            <span className="text-emerald-400 font-bold block font-mono text-[11px]">LAKUKAN SEKARANG:</span>
            <ul className="space-y-1 text-zinc-300">
              {guide.doNow.map((d, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>Target Pemulihan: <strong className="text-emerald-400 font-mono">{guide.timeframe}</strong></span>
        </div>
      </div>

      {/* Brief Note on Stool Frequency */}
      <div className="p-3.5 bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2.5 leading-relaxed">
        <HelpCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
        <p>
          <strong className="text-white">Fakta Penting: </strong>
          Daging hewani diserap 98% di usus halus tanpa meninggalkan ampas selulosa. Buang air besar setiap 2–3 hari sekali tanpa perut kembung atau rasa sakit adalah <strong>sangat normal</strong>, bukan sembelit!
        </p>
      </div>

      {/* Quick Daily Log */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold font-display text-white">Buku Catatan Harian</h2>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="px-3 py-1.5 text-xs font-semibold bg-red-700 hover:bg-red-800 text-white cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{showAdd ? 'Tutup' : 'Catat Hari Ini'}</span>
          </button>
        </div>

        {showAdd && (
          <form onSubmit={handleSave} className="border border-zinc-700 bg-zinc-950 p-4 space-y-3 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div>
                <label className="text-zinc-400 block font-mono text-[11px]">Hari ke-:</label>
                <input 
                  type="number" 
                  value={day} 
                  onChange={e => setDay(Number(e.target.value))} 
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-zinc-400 block font-mono text-[11px]">Energi (1–10):</label>
                <input 
                  type="number" 
                  min="1" max="10" 
                  value={energy} 
                  onChange={e => setEnergy(Number(e.target.value))} 
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-zinc-400 block font-mono text-[11px]">Mood (1–10):</label>
                <input 
                  type="number" 
                  min="1" max="10" 
                  value={mood} 
                  onChange={e => setMood(Number(e.target.value))} 
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-zinc-400 block font-mono text-[11px]">Bristol Stool:</label>
                <select 
                  value={stoolType} 
                  onChange={e => setStoolType(Number(e.target.value))} 
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-white font-mono text-xs"
                >
                  <option value={1}>1 - Terlalu keras</option>
                  <option value={4}>4 - Sempurna lembut</option>
                  <option value={7}>7 - Cair / Diare</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-zinc-400 block font-mono text-[11px]">Catatan:</label>
              <input 
                type="text" 
                placeholder="Misal: Daging 500g, energi stabil, BAB lancar" 
                value={note} 
                onChange={e => setNote(e.target.value)} 
                className="w-full bg-zinc-900 border border-zinc-800 p-2 text-white text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button 
                type="button" 
                onClick={() => setShowAdd(false)} 
                className="px-3 py-1 text-zinc-400 hover:text-white cursor-pointer"
              >
                Batal
              </button>
              <button 
                type="submit" 
                className="px-4 py-1.5 bg-red-700 hover:bg-red-800 text-white font-semibold cursor-pointer"
              >
                Simpan
              </button>
            </div>
          </form>
        )}

        {/* Log Entries: Responsive layout without overflow */}
        <div className="border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 text-xs">
          {logs.map(log => (
            <div key={log.id} className="p-3 flex items-start justify-between gap-3 hover:bg-zinc-900/30">
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono font-bold text-red-400 text-xs">{log.date}</span>
                  <span className="text-zinc-400 text-xs">Energi: <strong className="text-white font-mono">{log.energy}/10</strong></span>
                  <span className="text-zinc-400 text-xs">Mood: <strong className="text-white font-mono">{log.mood}/10</strong></span>
                  <span className="text-zinc-400 text-xs">Bristol: <strong className="text-white font-mono">Tipe {log.stoolType}</strong></span>
                </div>
                {log.note && <p className="text-zinc-300 text-xs leading-relaxed break-words">{log.note}</p>}
              </div>
              <button 
                onClick={() => handleDelete(log.id)}
                className="text-zinc-500 hover:text-red-400 cursor-pointer p-1 shrink-0 mt-0.5"
                title="Hapus"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
