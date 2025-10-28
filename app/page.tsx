"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b11] text-white relative">
      {/* Background Lights - matching the app */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-[225px] h-[512px] opacity-20">
          <svg width="225" height="512" viewBox="0 0 225 512" fill="none">
            <g filter="url(#filter0_f)">
              <path
                d="M103.194 121.359C115.754 132.164 22.8624 260.731 -104.285 408.519C-231.433 556.308 -344.688 667.355 -357.248 656.549C-369.808 645.743 -276.917 517.177 -149.769 369.388C-22.6212 221.6 90.6342 110.553 103.194 121.359Z"
                fill="#2463eb"
              />
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="-478.386"
                y="0.632324"
                width="702.717"
                height="776.643"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="60"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[414px] h-[664px] opacity-10">
          <svg width="414" height="664" viewBox="0 0 414 664" fill="none">
            <g filter="url(#filter1_f)">
              <path
                d="M640.144 -210.636L473.955 270.265L288.51 543.793L350.924 118.06C314.372 128.631 167.863 283.949 132.861 325.734C127.104 333.797 124.386 337.373 125.594 335.164C126.39 333.707 128.918 330.441 132.861 325.734C164.588 281.306 288.609 100.668 356.541 1.4404L20.792 333.27L380.859 -155.858L797.527 -315.564L640.144 -210.636Z"
                fill="#2463eb"
              />
            </g>
            <defs>
              <filter
                id="filter1_f"
                x="-99.208"
                y="-435.564"
                width="1016.74"
                height="1099.36"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="60"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Container with proper structure like app */}
      <div className="container w-full m-auto h-screen relative overflow-hidden">
        <div className="container__wrapper max-w-[400px] flex justify-between m-auto flex-col h-full bg-black/20 rounded-md relative">
          {/* Main content area with proper padding */}
          <div className="contains px-[10px] overflow-y-auto overflow-x-hidden flex-1 pt-5 pb-24">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Hero Section */}
              <div className="flex flex-col items-center text-center mb-12">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[56px] h-[56px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4L22 16H10L16 4Z" fill="white" />
                      <path d="M16 28L10 16H22L16 28Z" fill="white" />
                    </svg>
                  </div>
                  <h1 className="text-[32px] font-extrabold">StormCoin</h1>
                </div>

                {/* Balance Display */}
                <div className="mb-8">
                  <div className="text-sm text-blue-400 mb-2 font-medium">
                    Balance
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-6xl font-bold">500</span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-blue-500"
                    >
                      <path d="M16 4L22 16H10L16 4Z" fill="currentColor" />
                      <path d="M16 28L10 16H22L16 28Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex justify-center gap-6 text-sm text-gray-400">
                    <span>
                      <span className="font-bold text-white">0</span> per hour
                    </span>
                    <span className="text-gray-600">|</span>
                    <span>
                      <span className="font-bold text-white">1</span> per tap
                    </span>
                  </div>
                </div>

                {/* Tap Button */}
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-3xl animate-pulse"></div>
                    <div className="relative w-[192px] h-[192px] rounded-full bg-gradient-to-br from-[#2d3250] via-[#1e2139] to-[#0f1120] border-[8px] border-blue-600/20 flex items-center justify-center shadow-2xl cursor-pointer active:scale-95 transition-transform">
                      <div className="w-[128px] h-[128px] rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-xl">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <path
                            d="M32 8L44 32H20L32 8Z"
                            fill="white"
                            fillOpacity="0.9"
                          />
                          <path
                            d="M32 56L20 32H44L32 56Z"
                            fill="white"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <h2 className="text-[28px] font-extrabold leading-tight mb-4">
                  Start Playing
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    & Earning Today
                  </span>
                </h2>
                <p className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-[340px]">
                  Tap to earn coins, complete tasks, and compete with friends in
                  this exciting Telegram game!
                </p>

                {/* Launch Button */}
                <button className="w-full py-[18px] bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-bold text-[17px] shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 mb-3">
                  🚀 Launch Mini App
                </button>
                <p className="text-xs text-gray-500">
                  Available on Telegram • No download required
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-12">
                <h3 className="text-[24px] font-bold text-center mb-8">
                  How It Works
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: "⚡",
                      title: "Tap to Earn",
                      desc: "Tap the big coin button to earn StormCoins instantly. The more you tap, the more you earn!",
                      color: "from-blue-600 to-blue-500",
                    },
                    {
                      icon: "🎯",
                      title: "Complete Tasks",
                      desc: "Finish daily tasks and challenges to earn bonus coins and unlock special rewards.",
                      color: "from-purple-600 to-purple-500",
                    },
                    {
                      icon: "🎮",
                      title: "Play Mini Games",
                      desc: "Try Plinko, Roulette, and Crash games. Win big and multiply your earnings!",
                      color: "from-cyan-600 to-cyan-500",
                    },
                    {
                      icon: "👥",
                      title: "Invite Friends",
                      desc: "Get 10% of your friends' earnings forever. Build your team and earn passive income!",
                      color: "from-pink-600 to-pink-500",
                    },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-[14px] bg-[#181820]/50 backdrop-blur-sm rounded-xl p-[14px] border border-gray-800/50"
                    >
                      <div
                        className={`shrink-0 w-[48px] h-[48px] bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg text-[24px]`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[17px] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[13px] text-gray-400 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div className="mb-12">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "500K+", label: "Players" },
                    { value: "1M+", label: "Taps Daily" },
                    { value: "$100K", label: "Rewards" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#181820]/50 backdrop-blur-sm rounded-xl p-[14px] border border-gray-800/50 text-center"
                    >
                      <div className="text-[28px] font-bold text-blue-500 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-[18px] p-8 border border-blue-500/20 text-center mb-8">
                <h3 className="text-[24px] font-extrabold mb-3">
                  Ready to Storm?
                </h3>
                <p className="text-gray-300 mb-6 text-[14px]">
                  Join thousands of players earning coins every day
                </p>
                <button className="w-full py-[18px] bg-white text-blue-600 rounded-2xl font-bold text-[17px] hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl mb-3">
                  Play Now in Telegram
                </button>
                <p className="text-xs text-gray-500">@The_StormCoin_bot</p>
              </div>
            </div>
          </div>

          {/* Fixed Bottom CTA - matching app's bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#181820]/95 backdrop-blur-xl border-t border-gray-800/50 p-[14px] rounded-b-md">
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-bold text-[15px] shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 active:scale-95">
              🎮 Open in Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
