import React, { useState } from 'react';
import { 
  Brain, 
  ShieldAlert, 
  Search 
} from 'lucide-react';
import { SCOPUS_STUDIES, MYTH_REGISTRY } from '../data/carnivoreData';

export const ScienceEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mekanisme' | 'toksin' | 'mitos' | 'studi'>('mekanisme');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = SCOPUS_STUDIES.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.clinicalTakeaway.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 sm:space-y-8 py-2 w-full">
      {/* Header Ringkas */}
      <div className="border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase">
          <span>Modul 01</span>
          <span>·</span>
          <span>Sains & Bukti Klinis</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-bold font-display text-white mt-1 break-words">
          Fisiologi Manusia & Bukti Bebas Tumbuhan
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
          Rangkuman ringkas mekanisme metabolisme, eliminasi lektin/oksalat, dan pembuktian klinis Scopus.
        </p>
      </div>

      {/* 3 Stat Banners Ringkas (Solid Contrast, Full width on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="border border-zinc-800 bg-zinc-900/60 p-3.5 space-y-1">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">KEASAMAN LAMBUNG</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white">pH 1.5 – 2.0</div>
          <div className="text-xs text-zinc-400 leading-relaxed">Setara karnivora pemangsa; dirancang memecah daging padat & membunuh kuman.</div>
        </div>
        <div className="border border-zinc-800 bg-zinc-900/60 p-3.5 space-y-1">
          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wide">PENYERAPAN DAGING</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">95% – 98%</div>
          <div className="text-xs text-zinc-400 leading-relaxed">Diserap di usus halus tanpa ampas selulosa; tidak memicu fermentasi pembusukan.</div>
        </div>
        <div className="border border-zinc-800 bg-zinc-900/60 p-3.5 space-y-1">
          <div className="text-[10px] font-mono text-red-400 uppercase tracking-wide">UJI BEBAS SERAT</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-red-400">100% Sembuh</div>
          <div className="text-xs text-zinc-400 leading-relaxed">63 pasien sembelit kronis diberi 0% serat sembuh total dari rasa sakit & kembung (Ho 2012).</div>
        </div>
      </div>

      {/* Sub-Navigation (Scrollable without overflow) */}
      <div className="flex border-b border-zinc-800 gap-1 sm:gap-2 overflow-x-auto pb-1 text-xs font-semibold no-scrollbar">
        {[
          { id: 'mekanisme', label: '1. Usus Bocor & Keton' },
          { id: 'toksin', label: '2. Toksin Tumbuhan' },
          { id: 'mitos', label: '3. 4 Mitos Terbesar' },
          { id: 'studi', label: '4. Repositori Jurnal' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-2 px-2.5 sm:px-3 whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-red-600 text-white font-bold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Mekanisme Inti Usus & Otak */}
      {activeTab === 'mekanisme' && (
        <div className="space-y-4 sm:space-y-6">
          {/* Sumbu Usus-Otak Ringkas */}
          <div className="border border-zinc-800 bg-zinc-950 p-4 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Brain className="w-4 h-4 text-red-500 shrink-0" />
              <span>Sumbu Usus-Otak: Kenapa Depresi Lenyap dalam 21 Hari?</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="border-l-2 border-red-500 pl-3 py-1 space-y-1 bg-zinc-900/40">
                <span className="font-bold text-white block">Saat Makan Karbohidrat & Gula:</span>
                <p className="text-zinc-400 leading-relaxed">
                  Gula memicu lonjakan insulin disusul <em>glucose crash</em>. Fluktuasi ini memicu peradangan saraf, kelelahan mental (<em>brain fog</em>), dan ketagihan dopamin.
                </p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-3 py-1 space-y-1 bg-zinc-900/40">
                <span className="font-bold text-white block">Saat Ketosis Karnivora (BHB):</span>
                <p className="text-zinc-400 leading-relaxed">
                  Otak memakai keton (<em>beta-hydroxybutyrate</em>). BHB membakar bersih tanpa radikal bebas, memicu produksi neurotransmiter penenang <strong>GABA</strong>, dan menstabilkan suasana hati.
                </p>
              </div>
            </div>
          </div>

          {/* Kaskade Zonulin Ringkas */}
          <div className="border border-zinc-800 bg-zinc-950 p-4 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
              <span>Alur Kerusakan Usus oleh Bahan Nabati (Leaky Gut)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 border border-zinc-800 bg-zinc-900/60 space-y-1">
                <span className="font-mono text-red-400 font-bold block text-[10px]">TAHAP 1 & 2</span>
                <strong className="text-white block text-xs">Lektin Masuk & Menempel</strong>
                <span className="text-zinc-400 text-[11px] block leading-relaxed">Lektin gandum/kacang berikatan dengan sel dinding usus halus (enterosit).</span>
              </div>
              <div className="p-3 border border-zinc-800 bg-zinc-900/60 space-y-1">
                <span className="font-mono text-red-400 font-bold block text-[10px]">TAHAP 3 & 4</span>
                <strong className="text-white block text-xs">Pelepasan Zonulin</strong>
                <span className="text-zinc-400 text-[11px] block leading-relaxed">Zonulin merusak perekat sel (tight junctions), membuka celah mikro di usus.</span>
              </div>
              <div className="p-3 border border-zinc-800 bg-zinc-900/60 space-y-1">
                <span className="font-mono text-red-400 font-bold block text-[10px]">TAHAP 5 & 6</span>
                <strong className="text-white block text-xs">Respon Autoimun Darah</strong>
                <span className="text-zinc-400 text-[11px] block leading-relaxed">Peptida asing lolos ke darah; antibodi menyerang organ (kolitis, radang sendi, jerawat).</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 italic pt-1">
              Diet karnivora memotong rantai ini di tahap awal dengan menghentikan total masuknya lektin dan racun tanaman.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Toksin Tumbuhan (Clean Mobile Cards, Desktop Grid) */}
      {activeTab === 'toksin' && (
        <div className="border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 text-xs">
          {/* Header visible on desktop only */}
          <div className="hidden md:grid md:grid-cols-4 p-3 bg-zinc-900 font-mono font-bold text-zinc-400 gap-2">
            <div>TOKSIN NABATI</div>
            <div>SUMBER MAKANAN</div>
            <div>EFEK PADA TUBUH</div>
            <div>SOLUSI KARNIVORA</div>
          </div>
          {[
            {
              name: "Lektin & WGA",
              src: "Gandum, sereal, polong, kedelai",
              effect: "Memicu zonulin, merusak dinding usus (usus bocor)",
              sol: "Eliminasi 100%; diganti daging sapi yang aman dicerna."
            },
            {
              name: "Asam Fitat (Phytates)",
              src: "Kacang, beras merah, sereal oat",
              effect: "Mengikat zat besi, seng, magnesium hingga 100% tak terserap",
              sol: "Daging menyediakan zat besi heme & seng yang siap serap."
            },
            {
              name: "Asam Oksalat",
              src: "Bayam, buah bit, almond, cokelat",
              effect: "Membentuk kristal jarum tajam: batu ginjal & nyeri sendi",
              sol: "Tanpa sayuran tinggi oksalat, kristal tubuh luruh perlahan."
            },
            {
              name: "Phytohemagglutinin",
              src: "Kacang merah mentah / setengah matang",
              effect: "Merusak sel darah dan memicu muntah serta diare akut",
              sol: "Dihilangkan total dari asupan."
            }
          ].map((row, idx) => (
            <div key={idx} className="p-3.5 space-y-2 md:space-y-0 md:grid md:grid-cols-4 md:gap-2 md:items-center hover:bg-zinc-900/30">
              <div className="font-bold text-white text-sm md:text-xs">{row.name}</div>
              <div className="text-zinc-400 leading-relaxed">
                <span className="md:hidden font-mono text-zinc-500 font-semibold block text-[10px]">SUMBER:</span>
                {row.src}
              </div>
              <div className="text-red-400 leading-relaxed">
                <span className="md:hidden font-mono text-zinc-500 font-semibold block text-[10px]">DAMPAK:</span>
                {row.effect}
              </div>
              <div className="text-emerald-400 leading-relaxed">
                <span className="md:hidden font-mono text-zinc-500 font-semibold block text-[10px]">SOLUSI:</span>
                {row.sol}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: 4 Mitos Terbesar */}
      {activeTab === 'mitos' && (
        <div className="space-y-3">
          {MYTH_REGISTRY.map(m => (
            <div key={m.id} className="border border-zinc-800 bg-zinc-950 p-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="font-bold text-white text-sm">{m.title}</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">{m.reality}</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-1 pt-1.5 border-t border-zinc-800/80">
                {m.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 leading-relaxed">
                    <span className="text-red-500 font-bold shrink-0">·</span>
                    <span className="text-zinc-300">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Repositori Jurnal Scopus */}
      {activeTab === 'studi' && (
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Cari kata kunci studi (misal: LDL, konstipasi, Ho, Budoff)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600"
            />
          </div>

          <div className="border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800">
            {filteredStudies.map(s => (
              <div key={s.id} className="p-3.5 space-y-1.5 hover:bg-zinc-900/30 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-white text-sm sm:text-xs break-words">{s.title}</span>
                  <span className="text-[11px] font-mono text-zinc-400 shrink-0">{s.journal} ({s.year})</span>
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">Penulis: {s.authors}</div>
                <p className="text-zinc-300 text-xs leading-relaxed">{s.summary}</p>
                <div className="text-xs font-semibold text-emerald-400 mt-1">
                  Takeaway: {s.clinicalTakeaway}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
