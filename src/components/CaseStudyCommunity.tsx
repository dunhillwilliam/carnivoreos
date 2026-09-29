import React, { useState } from 'react';
import { 
  Utensils, 
  Sun 
} from 'lucide-react';
import { CASE_STUDIES } from '../data/carnivoreData';

export const CaseStudyCommunity: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const c = CASE_STUDIES[selectedCase];

  const faqs = [
    {
      q: "Bagaimana cara pesan makan di luar/restoran?",
      a: "Pesan steak atau daging burger patty ganda tanpa roti. Minta: 'Tolong masak dengan mentega murni atau tanpa minyak sama sekali, dan hidangan kentang/nasi ditiadakan ganti telur atau ekstra mentega jika boleh.'"
    },
    {
      q: "Bagaimana jika keluarga bertanya: 'Mana seratmu?'",
      a: "Jelaskan ringkas: 'Serat tidak dapat dicerna enzim manusia. Uji klinis membuktikan eliminasi serat menyembuhkan sembelit dan kembung 100%, sementara tubuh saya kini bertenaga lemak hewani bersih tanpa ampas.'"
    },
    {
      q: "Apakah kolesterol LDL tinggi berbahaya?",
      a: "Tunjukkan fakta: 'The KETO Trial 2024 membuktikan karnivora dengan LDL tinggi memiliki skor plak kalsium nol (CAC = 0). Partikel LDL berfungsi mengantar energi lemak ke otot dan otak.'"
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 py-2 w-full">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase">
          <span>Modul 05</span>
          <span>·</span>
          <span>Kisah Nyata & Tips Sosial</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-bold font-display text-white mt-1 break-words">
          Kisah Transformasi & Navigasi Praktis
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
          Bukti kesembuhan klinis nyata dan strategi praktis makan di restoran serta lingkungan sosial.
        </p>
      </div>

      {/* Case Switcher (Scrollable on mobile) */}
      <div className="flex border-b border-zinc-800 gap-1.5 sm:gap-2 overflow-x-auto pb-1 text-xs font-semibold no-scrollbar">
        {CASE_STUDIES.map((cs, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCase(idx)}
            className={`pb-2 px-3 whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
              selectedCase === idx ? 'border-red-600 text-white font-bold' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {cs.name} ({cs.origin})
          </button>
        ))}
      </div>

      {/* Case Box */}
      <div className="border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-4">
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">DIAGNOSIS: {c.diagnosis}</div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">{c.name}</h2>
          <div className="text-xs text-red-400 font-semibold mt-1 italic leading-relaxed">
            "{c.takeaway}"
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-3 space-y-2 text-xs text-zinc-300">
          <span className="font-mono text-zinc-400 uppercase font-bold block text-[11px]">KRONOLOGI HASIL:</span>
          {c.highlights.map((hl, i) => (
            <div key={i} className="flex items-start gap-2 leading-relaxed">
              <span className="text-red-500 font-bold shrink-0">✓</span>
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dining Out & Social FAQ (Full width cards on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Restaurant Script */}
        <div className="border border-zinc-800 bg-zinc-950 p-4 space-y-2">
          <span className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
            <Utensils className="w-4 h-4 shrink-0" /> SKRIP RESTORAN PRAKTIS
          </span>
          <p className="text-zinc-200 leading-relaxed bg-zinc-900/60 p-2.5 border-l-2 border-red-500">
            "Mohon steak/dagingnya dipanggang murni dengan mentega asli tanpa olesan minyak sayur atau saus manis. Untuk kentang/saladnya tidak perlu disajikan."
          </p>
          <span className="text-[11px] text-zinc-500 block pt-1">
            Sebagian besar juru masak menyukai pesanan ini karena mudah diolah.
          </span>
        </div>

        {/* 4 Environmental Tips (1 col on mobile, 2 col on sm+) */}
        <div className="border border-zinc-800 bg-zinc-950 p-4 space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
            <Sun className="w-4 h-4 shrink-0" /> GAYA HIDUP BEBAS TOKSIN
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
            <div className="p-2 border border-zinc-900 bg-zinc-900/40">
              <strong className="text-white block mb-0.5">1. Bebas Plastik:</strong>
              <span className="text-zinc-400 text-[11px]">Hindari memanaskan makanan di wadah plastik (cegah BPA).</span>
            </div>
            <div className="p-2 border border-zinc-900 bg-zinc-900/40">
              <strong className="text-white block mb-0.5">2. Air Bersih:</strong>
              <span className="text-zinc-400 text-[11px]">Air mineral murni + garam Celtic untuk hidrasi seluler.</span>
            </div>
            <div className="p-2 border border-zinc-900 bg-zinc-900/40">
              <strong className="text-white block mb-0.5">3. Matahari Pagi:</strong>
              <span className="text-zinc-400 text-[11px]">Sinar matahari mengaktifkan sintesis vitamin D alami.</span>
            </div>
            <div className="p-2 border border-zinc-900 bg-zinc-900/40">
              <strong className="text-white block mb-0.5">4. Batasi Blue Light:</strong>
              <span className="text-zinc-400 text-[11px]">Matikan layar 1 jam sebelum tidur agar melatonin optimal.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social FAQs Accordion */}
      <div className="border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 text-xs">
        {faqs.map((f, i) => {
          const isOpen = openFaq === i;
          return (
            <div key={i} className="p-3.5">
              <button 
                onClick={() => setOpenFaq(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left cursor-pointer font-semibold text-white hover:text-red-400 gap-2"
              >
                <span className="text-xs sm:text-sm">{f.q}</span>
                <span className="font-mono text-zinc-500 shrink-0">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <p className="mt-2 text-zinc-300 pl-2 border-l-2 border-red-600 leading-relaxed text-xs">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
