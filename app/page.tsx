"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import lightningVFX from "@/public/lightning-vfx.json";

// Types
type ToastType = "error" | "success" | "info";
interface ToastData {
  message: string;
  type: ToastType;
}

// Toast Component
const Toast = ({
  message,
  type = "info",
  onClose,
}: {
  message: string;
  type?: ToastType;
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "error"
      ? "from-red-600 to-red-700"
      : type === "success"
      ? "from-green-600 to-green-700"
      : "from-blue-600 to-blue-700";

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-9999 animate-slideDown px-4 w-full max-w-[400px]">
      <div
        className={`bg-linear-to-r ${bgColor} text-white px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 flex items-center gap-2 w-full`}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {type === "error" && (
            <div className="text-2xl animate-bounce shrink-0">⚠️</div>
          )}
          {type === "success" && (
            <div className="text-2xl animate-bounce shrink-0">⚡</div>
          )}
          {type === "info" && (
            <div className="text-2xl animate-pulse shrink-0">ℹ️</div>
          )}
          <p className="font-semibold text-sm sm:text-base leading-tight truncate">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white text-xl leading-none shrink-0 w-6 h-6 flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  );
};

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
const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
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
  const [energy, setEnergy] = useState(500);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [tapAnimation, setTapAnimation] = useState(false);
  const [boostCooldown, setBoostCooldown] = useState(false);
  const [showLightningVFX, setShowLightningVFX] = useState(false);
  const [ambientLightning, setAmbientLightning] = useState<number[]>([]);
  const tapTimestamps = useRef<number[]>([]);

  // Removed ambient lightning effect to improve performance

  // Load state from localStorage on mount
  useEffect(() => {
    const savedBalance = localStorage.getItem("stormcoin_balance");
    const savedEnergy = localStorage.getItem("stormcoin_energy");

    if (savedBalance) setCurrentBalance(parseInt(savedBalance));
    if (savedEnergy) setEnergy(parseInt(savedEnergy));
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("stormcoin_balance", currentBalance.toString());
    localStorage.setItem("stormcoin_energy", energy.toString());
  }, [currentBalance, energy]);

  // Reset energy to 500 on page reload (after initial load)
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("stormcoin_reloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("stormcoin_reloaded", "true");
      setEnergy(500);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  const showToast = (message: string, type: ToastType = "info") => {
    setToast({ message, type });
  };

  const handleTabClick = (tabId: string) => {
    if (tabId === "Home") {
      setActiveTab(tabId);
    } else {
      // Show notification before navigating
      showToast("Opening Telegram Bot...", "info");
      // Navigate to Telegram bot for other tabs
      const botUsername = "TheStormCoin_bot"; // TODO: Replace with your actual bot username
      setTimeout(() => {
        window.open(`https://t.me/${botUsername}`, "_blank");
      }, 500);
    }
  };

  const handleTapCoin = () => {
    if (energy <= 0) {
      showToast("No energy left! Use Boost to refill!", "error");
      return;
    }

    // Track tap timestamps for rapid tapping detection
    const now = Date.now();
    tapTimestamps.current.push(now);

    // Keep only taps from the last 2 seconds
    tapTimestamps.current = tapTimestamps.current.filter(
      (timestamp) => now - timestamp < 2000
    );

    // If user taps more than 10 times in 2 seconds, show lightning VFX
    if (tapTimestamps.current.length > 10 && !showLightningVFX) {
      setShowLightningVFX(true);
      setTimeout(() => setShowLightningVFX(false), 3000);
    }

    // Decrease energy by 1
    setEnergy((prev) => Math.max(0, prev - 1));
    // Increase balance by 1
    setCurrentBalance((prev) => prev + 1);
    // Trigger tap animation
    setTapAnimation(true);
    setTimeout(() => setTapAnimation(false), 200);
  };

  const handleBoost = () => {
    if (boostCooldown) {
      showToast("Boost is on cooldown! Wait a moment.", "info");
      return;
    }

    // Refill energy to 500
    setEnergy(500);
    showToast("Energy fully restored! Keep tapping!", "success");

    // Set cooldown for 3 seconds
    setBoostCooldown(true);
    setTimeout(() => {
      setBoostCooldown(false);
    }, 3000);
  };

  const energyPercentage = (energy / 500) * 100;
  const levelProgress = ((currentBalance % 100) / 100) * 100; // Simple level system

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

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0f] via-[#0f1020] to-[#1a1a2e] text-white relative overflow-hidden">
      {/* Lightning Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Ambient Lightning removed for performance */}

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
        {/* Toast Notification */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

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
              {/* Balance Section */}
              <div className="text-center mb-6 mt-8">
                <div className="text-blue-400 text-lg font-medium mb-2">
                  Saldo
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span
                    className={`text-7xl font-bold transition-all duration-300 ${
                      tapAnimation ? "scale-110 text-blue-400" : ""
                    }`}
                  >
                    {currentBalance}
                  </span>
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

              {/* Tapping Coin Section */}
              <div className="flex justify-center mb-8 relative">
                {/* Optimized Lightning VFX - Only 3 animations for performance */}
                {showLightningVFX && (
                  <>
                    {/* Center Main Lightning - Reduced Size */}
                    <div
                      className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
                      style={{
                        marginTop: "-60px",
                        marginBottom: "-60px",
                        animation: "fadeInOut 2.5s ease-in-out",
                      }}
                    >
                      <div className="w-[300px] h-[300px]">
                        <Lottie
                          animationData={lightningVFX}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    </div>

                    {/* Top Small Lightning */}
                    <div
                      className="absolute z-15 pointer-events-none"
                      style={{
                        top: "-40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        animation: "fadeInOut 2s ease-in-out 0.15s",
                      }}
                    >
                      <div className="w-[140px] h-[140px] opacity-50">
                        <Lottie
                          animationData={lightningVFX}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    </div>

                    {/* Bottom Small Lightning */}
                    <div
                      className="absolute z-15 pointer-events-none"
                      style={{
                        bottom: "-40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        animation: "fadeInOut 2.2s ease-in-out 0.1s",
                      }}
                    >
                      <div className="w-[150px] h-[150px] opacity-45">
                        <Lottie
                          animationData={lightningVFX}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    </div>
                  </>
                )}

                <button
                  onClick={handleTapCoin}
                  disabled={energy <= 0}
                  className={`relative w-64 h-64 rounded-full bg-linear-to-b from-[#2d3250] via-[#1e213a] to-[#141629] border-8 flex items-center justify-center shadow-2xl transition-all duration-200 ${
                    energy <= 0
                      ? "border-red-500/50 opacity-50 cursor-not-allowed"
                      : "border-blue-500/30 active:scale-95 hover:border-blue-500/50"
                  } ${tapAnimation ? "scale-95" : ""}`}
                >
                  <div
                    className={`transition-all duration-200 ${
                      tapAnimation ? "scale-110" : ""
                    }`}
                  >
                    <CoinTurbo size={512} />
                  </div>
                  {/* Tap effect ripples */}
                  {tapAnimation && (
                    <>
                      <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-75"></div>
                      <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse"></div>
                    </>
                  )}
                </button>
                {/* +1 floating animation */}
                {tapAnimation && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-4xl font-bold text-blue-400 animate-floatUp pointer-events-none">
                    +1
                  </div>
                )}
              </div>

              {/* Energy and Boost Section */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                      className={`w-8 h-8 transform -rotate-90 ${
                        energy <= 100 ? "animate-pulse" : ""
                      }`}
                      viewBox="0 0 32 32"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="3"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke={energy <= 100 ? "#ef4444" : "#10b981"}
                        strokeWidth="3"
                        strokeDasharray={`${
                          (energyPercentage / 100) * 87.96
                        } 87.96`}
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`text-xs font-bold ${
                          energy <= 100 ? "text-red-400" : "text-green-400"
                        }`}
                      >
                        ⚡
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-bold text-lg ${
                        energy <= 100 ? "text-red-400" : "text-white"
                      }`}
                    >
                      {energy} / 500
                    </span>
                    <span className="text-xs text-gray-400">Energy</span>
                  </div>
                </div>
                <button
                  onClick={handleBoost}
                  disabled={boostCooldown || energy === 500}
                  className={`px-6 py-3 rounded-2xl font-bold text-white shadow-lg transition-all duration-300 ${
                    boostCooldown || energy === 500
                      ? "bg-gray-600 opacity-50 cursor-not-allowed"
                      : "bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 hover:shadow-xl hover:shadow-blue-500/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <span>{boostCooldown ? "Cooldown..." : "Boost"}</span>
                  </div>
                </button>
              </div>

              {/* Level Progress */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span className="text-gray-300 font-medium">
                      Al prossimo livello
                    </span>
                  </div>
                  <span className="text-white font-bold text-lg">
                    {Math.floor(levelProgress)} %
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                    style={{ width: `${levelProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400 text-center">
                  Level {Math.floor(currentBalance / 100) + 1} •{" "}
                  {currentBalance % 100}/100 coins to next
                </div>
              </div>

              {/* About Us Section */}
              <div className="mb-8">
                <div className="bg-linear-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-md rounded-3xl p-6 border border-gray-700/30 shadow-2xl">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-3">
                      Chi Siamo
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      StormCoin è una piattaforma innovativa di tap-to-earn e
                      gaming integrata con Telegram. Guadagna monete toccando,
                      gioca ai nostri giochi emozionanti e costruisci il tuo
                      impero crypto!
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Feature 1 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">⚡</div>
                      <div className="text-xs font-bold text-blue-400 text-center mb-1">
                        Tap & Earn
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        Guadagna semplicemente toccando
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">🎰</div>
                      <div className="text-xs font-bold text-purple-400 text-center mb-1">
                        Casino Games
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        Plinko, Crash, Roulette
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">👥</div>
                      <div className="text-xs font-bold text-cyan-400 text-center mb-1">
                        Referral System
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        Guadagna invitando amici
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">💰</div>
                      <div className="text-xs font-bold text-green-400 text-center mb-1">
                        Fast Withdrawals
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        Preleva velocemente
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-linear-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-4 border border-blue-500/20">
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-blue-300">
                        🚀 Powered By
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-gray-400">
                      <span className="bg-black/40 px-2 py-1 rounded-lg border border-gray-700/30">
                        React
                      </span>
                      <span className="bg-black/40 px-2 py-1 rounded-lg border border-gray-700/30">
                        Telegram SDK
                      </span>
                      <span className="bg-black/40 px-2 py-1 rounded-lg border border-gray-700/30">
                        Socket.io
                      </span>
                      <span className="bg-black/40 px-2 py-1 rounded-lg border border-gray-700/30">
                        Zustand
                      </span>
                      <span className="bg-black/40 px-2 py-1 rounded-lg border border-gray-700/30">
                        Framer Motion
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Section - Why Join */}
              <div className="mb-8">
                <div className="bg-linear-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-6 border border-blue-500/30 shadow-2xl">
                  <div className="text-center mb-4">
                    <h2 className="text-3xl font-extrabold bg-linear-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-2">
                      ⚡ Benvenuto su StormCoin! ⚡
                    </h2>
                    <p className="text-gray-300 text-sm">
                      Guadagna, gioca e vinci con i nostri giochi emozionanti!
                    </p>
                  </div>

                  {/* Games Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* Plinko Game */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎯</div>
                        <div className="text-xs font-bold text-blue-400">
                          Plinko
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          Drop & Win
                        </div>
                      </div>
                    </div>

                    {/* Crash Game */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🚀</div>
                        <div className="text-xs font-bold text-purple-400">
                          Crash
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          Fly High
                        </div>
                      </div>
                    </div>

                    {/* Roulette Game */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎰</div>
                        <div className="text-xs font-bold text-red-400">
                          Roulette
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          Spin Now
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">
                        Tap per guadagnare coins gratis
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">
                        Giochi emozionanti 24/7
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">
                        Invita amici e guadagna bonus
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">
                        Prelievi veloci e sicuri
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleTabClick("Gioco")}
                    className="w-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 active:scale-95"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">🎮</span>
                      <span>Gioca Ora nel Bot!</span>
                    </div>
                  </button>
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
                  onClick={() => handleTabClick(item.id)}
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
