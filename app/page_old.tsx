"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b11] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#563fdd] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#563fdd] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-5 pt-8 pb-24">
        {/* Header */}
        <header
          className={`flex justify-between items-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-[#563fdd]/30">
              <span className="text-2xl font-bold">⚡</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">StormCoin</h1>
          </div>
          <button className="px-5 py-2.5 bg-[#181820] rounded-full text-sm font-semibold hover:bg-[#222228] transition-colors">
            Connect
          </button>
        </header>

        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#563fdd]/10 border border-[#563fdd]/30 rounded-full">
            <span className="text-[#563fdd] text-sm font-semibold">
              🚀 Live on Mainnet
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Tap Into The
            <br />
            <span className="bg-linear-to-r from-[#563fdd] to-purple-400 bg-clip-text text-transparent">
              Future of Crypto
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
            Earn rewards by playing games, completing tasks, and inviting
            friends. The ultimate crypto gaming experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mb-12">
            <button className="w-full py-5 bg-linear-to-r from-[#563fdd] to-purple-600 rounded-2xl font-bold text-lg shadow-xl shadow-[#563fdd]/30 hover:shadow-2xl hover:shadow-[#563fdd]/40 transition-all duration-300 hover:scale-[1.02] active:scale-95">
              Launch App
            </button>
            <button className="w-full py-5 bg-[#181820] rounded-2xl font-semibold text-lg hover:bg-[#222228] transition-colors border border-gray-800">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-[#181820] rounded-2xl p-5 border border-gray-800/50">
              <div className="text-3xl font-bold text-[#563fdd] mb-1">
                500K+
              </div>
              <div className="text-xs text-gray-400 font-medium">
                Active Users
              </div>
            </div>
            <div className="bg-[#181820] rounded-2xl p-5 border border-gray-800/50">
              <div className="text-3xl font-bold text-[#563fdd] mb-1">$2M+</div>
              <div className="text-xs text-gray-400 font-medium">
                Rewards Paid
              </div>
            </div>
            <div className="bg-[#181820] rounded-2xl p-5 border border-gray-800/50">
              <div className="text-3xl font-bold text-[#563fdd] mb-1">24/7</div>
              <div className="text-xs text-gray-400 font-medium">Support</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why StormCoin?
          </h3>
          <div className="space-y-4">
            <div className="bg-[#181820] rounded-2xl p-6 border border-gray-800/50 hover:border-[#563fdd]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#563fdd]/10">
              <div className="w-12 h-12 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#563fdd]/30">
                <span className="text-2xl">🎮</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Play & Earn</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engage in exciting games like Plinko, Roulette, and Crash. Every
                play earns you real rewards.
              </p>
            </div>

            <div className="bg-[#181820] rounded-2xl p-6 border border-gray-800/50 hover:border-[#563fdd]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#563fdd]/10">
              <div className="w-12 h-12 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#563fdd]/30">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Referral System</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Invite friends and earn 10% of their rewards forever. Build your
                network, multiply your earnings.
              </p>
            </div>

            <div className="bg-[#181820] rounded-2xl p-6 border border-gray-800/50 hover:border-[#563fdd]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#563fdd]/10">
              <div className="w-12 h-12 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#563fdd]/30">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Instant Withdrawals</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Withdraw your earnings anytime to your wallet. No minimum
                requirements, no delays.
              </p>
            </div>

            <div className="bg-[#181820] rounded-2xl p-6 border border-gray-800/50 hover:border-[#563fdd]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#563fdd]/10">
              <div className="w-12 h-12 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#563fdd]/30">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Daily Rewards</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complete daily tasks and challenges for bonus rewards. Never
                miss an opportunity to earn.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Get Started in 3 Steps
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#563fdd]/30">
                1
              </div>
              <div className="flex-1 bg-[#181820] rounded-2xl p-5 border border-gray-800/50">
                <h4 className="font-bold mb-1">Connect Wallet</h4>
                <p className="text-gray-400 text-sm">
                  Link your crypto wallet securely in seconds
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#563fdd]/30">
                2
              </div>
              <div className="flex-1 bg-[#181820] rounded-2xl p-5 border border-gray-800/50">
                <h4 className="font-bold mb-1">Start Playing</h4>
                <p className="text-gray-400 text-sm">
                  Choose from multiple games and start earning
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#563fdd]/30">
                3
              </div>
              <div className="flex-1 bg-[#181820] rounded-2xl p-5 border border-gray-800/50">
                <h4 className="font-bold mb-1">Withdraw Anytime</h4>
                <p className="text-gray-400 text-sm">
                  Cash out your rewards instantly to your wallet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            What Users Say
          </h3>
          <div className="space-y-4">
            <div className="bg-[#181820] rounded-2xl p-6 border border-gray-800/50">
              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 bg-linear-to-br from-[#563fdd] to-purple-600 rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#563fdd]/30">
                  M
                </div>
                <div className="flex-1">
                  <div className="font-bold">Mike Johnson</div>
                  <div className="text-xs text-gray-400">@cryptomike</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Best crypto gaming platform I've used! Made over $500 in my
                first month just by playing games."
              </p>
            </div>

            <div className="bg-[#181820] rounded-2xl p-6 border border-gray-800/50">
              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center font-bold shadow-lg shadow-purple-500/30">
                  S
                </div>
                <div className="flex-1">
                  <div className="font-bold">Sarah Chen</div>
                  <div className="text-xs text-gray-400">@sarahc</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "The referral program is insane! I invited 20 friends and now I
                earn passive income daily. 🔥"
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-linear-to-br from-[#563fdd] to-purple-600 rounded-3xl p-8 shadow-2xl shadow-[#563fdd]/30">
            <h3 className="text-3xl font-extrabold mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-purple-100 mb-8 text-sm">
              Join thousands of players earning crypto daily
            </p>
            <button className="w-full py-5 bg-white text-[#563fdd] rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl">
              Get Started Now
            </button>
            <p className="text-purple-200 text-xs mt-4">
              No credit card required • Instant access
            </p>
          </div>
        </section>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#181820]/95 backdrop-blur-xl border-t border-gray-800/50 p-4 z-50">
        <button className="w-full py-4 bg-linear-to-r from-[#563fdd] to-purple-600 rounded-2xl font-bold shadow-xl shadow-[#563fdd]/30 hover:shadow-2xl hover:shadow-[#563fdd]/40 transition-all duration-300 active:scale-95">
          Launch App Now
        </button>
      </div>
    </div>
  );
}
