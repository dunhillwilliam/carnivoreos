import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  ShieldAlert, 
  Filter 
} from 'lucide-react';
import { FOOD_DATABASE, BUDGET_COMPARISON } from '../data/carnivoreData';

export const NutritionalCalculator: React.FC = () => {
  const [weightKg, setWeightKg] = useState<number>(70);
  const [activity, setActivity] = useState<'sedentary' | 'moderate' | 'high'>('moderate');
  const [tierFilter, setTierFilter] = useState<string>('all');

  // Math
  const multiplier = activity === 'sedentary' ? 1.4 : activity === 'moderate' ? 1.6 : 2.0;
  const targetProtein = Math.round(weightKg * multiplier);
  const targetFat = targetProtein; // 1:1 gram ratio
  const totalKcal = (targetProtein * 4) + (targetFat * 9);
  const groundBeefGrams = Math.round((targetProtein / 17) * 100);

  const filteredFoods = tierFilter === 'all'
    ? FOOD_DATABASE
    : FOOD_DATABASE.filter(f => f.tier.toLowerCase().includes(tierFilter.toLowerCase()));

  return (
    <div className="space-y-6 sm:space-y-8 py-2 w-full">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase">
          <span>Modul 02</span>
          <span>·</span>
          <span>Kalkulator & Manajemen Biaya</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-bold font-display text-white mt-1 break-words">
          Kalkulator Rasio 1:1 Lemak-Protein
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
          Formula praktis 1:1 gram berat bersih untuk suplai 70–80% energi dari lemak hewani.
        </p>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls */}
        <div className="lg:col-span-5 border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-4">
          <span className="text-xs font-mono text-zinc-400 uppercase font-semibold block">INPUT KLIEN:</span>
          
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Berat Badan:</span>
              <span className="font-bold text-white font-mono text-sm">{weightKg} kg</span>
            </div>
            <input
              type="range"
              min="45"
              max="130"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-red-600 bg-zinc-800 h-2 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>45 kg</span>
              <span>85 kg</span>
              <span>130 kg</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs text-zinc-400 block font-mono">Aktivitas Harian:</span>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {[
                { id: 'sedentary', label: 'Ringan' },
                { id: 'moderate', label: 'Sedang' },
                { id: 'high', label: 'Tinggi' }
              ].map(a => (
                <button
                  key={a.id}
                  onClick={() => setActivity(a.id as any)}
                  className={`py-2 px-1 text-xs font-semibold border cursor-pointer text-center transition-colors ${
                    activity === a.id ? 'border-red-600 bg-red-950/40 text-white font-bold' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-zinc-900 border-l-2 border-amber-500 text-[11px] text-zinc-300 leading-relaxed">
            <strong className="text-white">Peringatan Rabbit Starvation: </strong> 
            Jangan hanya makan daging kurus tanpa lemak (lean meat). Hati memerlukan energi lemak untuk memproses metabolisme protein dengan aman.
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-7 border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-4">
          <span className="text-xs font-mono text-red-400 uppercase font-semibold block">TARGET HARIAN:</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-zinc-800 bg-zinc-900/60 p-3.5 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">TARGET PROTEIN</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">{targetProtein} <span className="text-xs font-normal">gram</span></div>
              <div className="text-[11px] text-zinc-400">~{targetProtein * 4} kcal energi</div>
            </div>
            <div className="border border-red-900/60 bg-zinc-900/60 p-3.5 space-y-1">
              <div className="text-[10px] font-mono text-red-400 uppercase tracking-wide">TARGET LEMAK (1:1)</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-red-500">{targetFat} <span className="text-xs font-normal">gram</span></div>
              <div className="text-[11px] text-red-300">~{targetFat * 9} kcal (70–75%)</div>
            </div>
          </div>

          <div className="p-3 border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-300 leading-relaxed">
            <span className="font-bold text-white block mb-0.5">Ekuivalen Makanan Praktis: </span>
            Sekitar <strong>~{groundBeefGrams} gram Daging Sapi Giling (70/30)</strong> per hari, atau 2 potong Ribeye sedang ditambah mentega/tallow saat memasak. Total energi: <strong className="font-mono text-white">{totalKcal} kcal</strong>.
          </div>
        </div>
      </div>

      {/* Menu $6.50 vs $65.00 Comparison */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold font-display text-white">
          Skalabilitas Biaya: Menu Hemat ($6.50) vs Mewah ($65.00)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="border border-emerald-900/60 bg-zinc-950 p-4 space-y-2">
            <div className="font-bold text-emerald-400 font-mono text-sm">{BUDGET_COMPARISON.economical.title}</div>
            <div className="text-zinc-200 font-semibold">{BUDGET_COMPARISON.economical.menu}</div>
            <div className="text-zinc-400 font-mono text-[11px]">{BUDGET_COMPARISON.economical.macros}</div>
            <p className="text-[11px] text-zinc-400 border-t border-zinc-800 pt-2 leading-relaxed">{BUDGET_COMPARISON.economical.summary}</p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-4 space-y-2">
            <div className="font-bold text-zinc-300 font-mono text-sm">{BUDGET_COMPARISON.luxury.title}</div>
            <div className="text-zinc-200 font-semibold">{BUDGET_COMPARISON.luxury.menu}</div>
            <div className="text-zinc-400 font-mono text-[11px]">{BUDGET_COMPARISON.luxury.macros}</div>
            <p className="text-[11px] text-zinc-400 border-t border-zinc-800 pt-2 leading-relaxed">{BUDGET_COMPARISON.luxury.summary}</p>
          </div>
        </div>
      </div>

      {/* Tier List Table (Responsive wrapping) */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-2">
          <h2 className="text-base sm:text-lg font-bold font-display text-white">Daftar Kualitas Bahan Makanan</h2>
          <div className="flex flex-wrap gap-1.5">
            {['all', 'S-Tier', 'A-Tier', 'B-Tier', 'Dilarang'].map(t => (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`px-2.5 py-1 text-xs border cursor-pointer transition-colors ${
                  tierFilter === t ? 'border-red-600 bg-red-950 text-white font-bold' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                {t === 'all' ? 'Semua' : t}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 text-xs">
          {filteredFoods.map((f, i) => (
            <div key={i} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-zinc-900/30">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`w-2 h-2 shrink-0 ${f.tier.includes('Dilarang') ? 'bg-red-600' : f.tier.includes('S-Tier') ? 'bg-emerald-500' : 'bg-amber-400'}`}></span>
                <span className="font-bold text-white text-xs">{f.name}</span>
                <span className="text-[10px] font-mono text-zinc-400">({f.tier})</span>
              </div>
              <div className="text-[11px] text-zinc-400 sm:max-w-md leading-relaxed break-words">
                {f.notes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
