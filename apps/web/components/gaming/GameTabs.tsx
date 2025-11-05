'use client';

import { SiPubg, SiValorant, SiRoblox } from 'react-icons/si';
import { Gamepad2 } from 'lucide-react';

export function GameTabs() {
  const games = [
    { name: 'PUBG MOBILE', icon: SiPubg, active: true },
    { name: 'COUNTER STRIKE', icon: Gamepad2, active: false },
    { name: 'VALORANT', icon: SiValorant, active: false },
    { name: 'FREEFIRE', icon: Gamepad2, active: false },
    { name: 'ROBLOX', icon: SiRoblox, active: false },
    { name: 'FORTNITE', icon: Gamepad2, active: false },
  ];

  return (
    <div className="bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  game.active
                    ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50'
                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <Icon className="w-8 h-8" />
                <span className="text-xs font-medium">{game.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
