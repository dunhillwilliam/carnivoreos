/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation, ActiveTab } from './components/Navigation';
import { TransitionCoach } from './components/TransitionCoach';
import { NutritionalCalculator } from './components/NutritionalCalculator';
import { ScienceEngine } from './components/ScienceEngine';
import { BiofeedbackTracker } from './components/BiofeedbackTracker';
import { CaseStudyCommunity } from './components/CaseStudyCommunity';
import { BiofeedbackSosModal } from './components/BiofeedbackSosModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('transisi');
  const [isSosOpen, setIsSosOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-red-700 selection:text-white overflow-x-hidden w-full">
      {/* Straightforward Header Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenQuickEmergency={() => setIsSosOpen(true)}
      />

      {/* Quick Status Bar (Responsive, no tight wrapping) */}
      <div className="bg-zinc-900 border-b border-zinc-800 text-[11px] py-2 px-3 sm:px-4 font-mono text-zinc-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 bg-emerald-500 inline-block shrink-0"></span>
            <span className="text-zinc-200 font-semibold shrink-0">Bukti Klinis:</span>
            <span className="hidden md:inline truncate">0% Serat = 100% Sembelit Sembuh (Ho 2012) · Plak Kalsium = 0 (Budoff 2024)</span>
            <span className="inline md:hidden truncate">0% Serat = Sembelit Sembuh (Ho 2012)</span>
          </div>
          <button 
            onClick={() => setIsSosOpen(true)}
            className="text-red-400 hover:text-red-300 font-bold underline cursor-pointer text-left sm:text-right shrink-0"
          >
            Kendala Diare / Sembelit? SOS
          </button>
        </div>
      </div>

      {/* Main Container with generous mobile padding */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 overflow-x-hidden">
        {activeTab === 'transisi' && <TransitionCoach />}
        {activeTab === 'kalkulator' && <NutritionalCalculator />}
        {activeTab === 'sains' && <ScienceEngine />}
        {activeTab === 'biofeedback' && <BiofeedbackTracker />}
        {activeTab === 'kasus' && <CaseStudyCommunity />}
      </main>

      {/* Emergency SOS Modal */}
      <BiofeedbackSosModal 
        isOpen={isSosOpen} 
        onClose={() => setIsSosOpen(false)} 
      />

      {/* Concise Broadsheet Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-6 px-4 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-2 text-zinc-300">
            <div className="w-4 h-4 bg-red-600 text-white flex items-center justify-center font-bold text-[10px]">
              C
            </div>
            <span className="font-bold text-white">CarnivoreOS</span>
            <span className="hidden sm:inline">— Panduan Fisiologi & Protokol Transisi Diet Karnivora</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
