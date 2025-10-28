"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// CoinTurbo Component
const CoinTurbo = ({ size = 32, className = "" }) => (
  <Image
    src="/coinTurbo.png"
    alt="StormCoin"
    width={size}
    height={size}
    className={`object-contain ${className}`}
  />
);

// Loading Screen Component
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing StormCoin...");

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: "Connecting to blockchain..." },
      { progress: 40, text: "Loading lightning network..." },
      { progress: 60, text: "Preparing your wallet..." },
      { progress: 80, text: "Starting mining protocol..." },
      { progress: 100, text: "Ready to storm!" },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-linear-to-b from-[#0a0a0f] via-[#0f1020] to-[#1a1a2e] text-white flex items-center justify-center z-50">
      {/* Animated Background Lightning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-blue-400/40 via-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-15">
          <div className="absolute inset-0 bg-linear-to-tl from-cyan-400/35 via-blue-500/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Rotating Lightning Bolts */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-[600px] h-[600px] animate-spin"
            style={{ animationDuration: "20s" }}
          >
            <svg
              className="w-full h-full opacity-10"
              viewBox="0 0 600 600"
              fill="none"
            >
              <path
                d="M100 150L130 200L110 250L140 300"
                stroke="url(#loadingLightning1)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M500 100L470 150L490 200L460 250"
                stroke="url(#loadingLightning2)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M300 80L330 130L310 180L340 230"
                stroke="url(#loadingLightning3)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M150 400L180 450L160 500L190 550"
                stroke="url(#loadingLightning4)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M450 350L420 400L440 450L410 500"
                stroke="url(#loadingLightning5)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="loadingLightning1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient
                  id="loadingLightning2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="loadingLightning3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient
                  id="loadingLightning4"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="loadingLightning5"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#DC2626" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo and Title */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <CoinTurbo size={80} className="relative animate-pulse" />
            </div>
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              StormCoin
            </h1>
          </div>
          <p className="text-gray-400 text-lg font-medium animate-pulse">
            Lightning Fast • Ultra Secure
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-8">
          <div className="mb-4">
            <div className="text-lg font-semibold text-white mb-2">
              {loadingText}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
            <div className="absolute inset-0 bg-linear-to-r from-gray-800/20 to-gray-600/20"></div>
            <div
              className="h-full bg-linear-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="mt-3 text-sm text-gray-400 font-medium">
            {progress}% Complete
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [currentBalance, setCurrentBalance] = useState(7);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  const tabItems = [
    {
      id: "Home",
      label: "Home",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "Entrate",
      label: "Entrate",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="8"
            y1="21"
            x2="16"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "Guadagna",
      label: "Guadagna",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10C16 11.1046 15.1046 12 14 12H10C8.89543 12 8 11.1046 8 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "Gioco",
      label: "Gioco",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <path
            d="M13 7L15 9L13 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7L19 9L17 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "Amici",
      label: "Amici",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7084C21.7033 16.0627 20.9979 15.6179 20.2 15.4373"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13281C16.8604 3.35119 17.5872 3.79905 18.0966 4.45065C18.6061 5.10225 18.8705 5.91837 18.8705 6.76156C18.8705 7.60476 18.6061 8.42088 18.0966 9.07248C17.5872 9.72408 16.8604 10.1719 16 10.3903"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const handleTapCoin = () => {
    setCurrentBalance(currentBalance + 1);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0f] via-[#0f1020] to-[#1a1a2e] text-white relative overflow-hidden">
      {/* Lightning Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Lightning Bolts */}
        <div className="absolute top-10 left-10 w-48 h-48 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-blue-400/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 right-10 w-64 h-64 opacity-15">
          <div className="absolute inset-0 bg-linear-to-tl from-cyan-400/25 via-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Lightning Bolts Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 100L80 150L60 200L90 250"
              stroke="url(#lightning1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M350 50L320 100L340 150L310 200"
              stroke="url(#lightning2)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M200 300L230 350L210 400L240 450"
              stroke="url(#lightning3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="lightning1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="lightning2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient
                id="lightning3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main App Container */}
      <div className="container w-full max-w-[400px] mx-auto h-screen relative z-10">
        <div className="flex flex-col h-full bg-black/30 backdrop-blur-sm border-l border-r border-gray-800/30">
          {/* Main Content */}
          <div className="flex-1 px-5 pb-24 overflow-y-auto">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center mb-8 mt-12">
                <div className="text-blue-400 text-lg font-medium mb-2">
                  Saldo
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-7xl font-bold">{currentBalance}</span>
                  <CoinTurbo size={40} />
                </div>
                <div className="flex items-center justify-center gap-6 text-gray-400">
                  <span>
                    <span className="text-white font-semibold">0</span> all'ora
                  </span>
                  <span className="text-gray-600">|</span>
                  <span>
                    <span className="text-white font-semibold">1</span> per tap
                  </span>
                </div>
              </div>
              <div className="flex justify-center mb-12">
                <button
                  onClick={handleTapCoin}
                  className="relative w-64 h-64 rounded-full bg-linear-to-b from-[#2d3250] via-[#1e213a] to-[#141629] border-8 border-blue-500/30 flex items-center justify-center shadow-2xl active:scale-95 transition-all duration-200"
                >
                  <CoinTurbo size={512} />
                </button>
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-gray-700 rounded-sm flex items-center">
                    <div className="w-4 h-2 bg-linear-to-r from-green-400 to-green-500 rounded-sm ml-0.5"></div>
                  </div>
                  <span className="text-white font-medium">493 / 500</span>
                </div>
                <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-white shadow-lg active:scale-95 transition-all">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <span>Boost</span>
                  </div>
                </button>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Al prossimo livello</span>
                  <span className="text-white font-semibold">0 %</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-gray-700/50">
            <div className="flex items-center justify-around px-2 py-2">
              {tabItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-blue-600/20 text-blue-400 scale-105"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <div
                    className={`mb-1 transition-all duration-300 ${
                      activeTab === item.id ? "scale-110" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-xs font-medium transition-all duration-300 ${
                      activeTab === item.id ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 w-8 h-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-t-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
