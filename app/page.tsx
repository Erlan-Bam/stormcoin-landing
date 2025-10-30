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

type Language = "en" | "en-ca" | "es" | "fr" | "it" | "pt" | "de" | "dk";

interface Translations {
  balance: string;
  perHour: string;
  perTap: string;
  boost: string;
  cooldown: string;
  nextLevel: string;
  level: string;
  coinsTo: string;
  aboutUs: string;
  aboutDescription: string;
  tapEarn: string;
  tapEarnDesc: string;
  casinoGames: string;
  casinoGamesDesc: string;
  referralSystem: string;
  referralSystemDesc: string;
  fastWithdrawals: string;
  fastWithdrawalsDesc: string;
  poweredBy: string;
  welcomeTitle: string;
  welcomeSubtitle: string;
  plinko: string;
  plinkoDesc: string;
  crash: string;
  crashDesc: string;
  roulette: string;
  rouletteDesc: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  playNow: string;
  home: string;
  income: string;
  earn: string;
  game: string;
  friends: string;
  energy: string;
  noEnergy: string;
  energyRestored: string;
  openingBot: string;
  boostActivated: string;
  boostEnded: string;
  noBoosts: string;
}

const translations: Record<Language, Translations> = {
  en: {
    balance: "Balance",
    perHour: "per hour",
    perTap: "per tap",
    boost: "Boost",
    cooldown: "Cooldown...",
    nextLevel: "To next level",
    level: "Level",
    coinsTo: "coins to next",
    aboutUs: "About Us",
    aboutDescription:
      "StormCoin is an innovative tap-to-earn and gaming platform integrated with Telegram. Earn coins by tapping, play our exciting games and build your empire!",
    tapEarn: "Tap & Earn",
    tapEarnDesc: "Earn by simply tapping",
    casinoGames: "Casino Games",
    casinoGamesDesc: "Plinko, Crash, Roulette",
    referralSystem: "Referral System",
    referralSystemDesc: "Earn by inviting friends",
    fastWithdrawals: "Fast Withdrawals",
    fastWithdrawalsDesc: "Withdraw quickly",
    poweredBy: "Powered By",
    welcomeTitle: "⚡ Welcome to StormCoin! ⚡",
    welcomeSubtitle: "Earn, play and win with our exciting games!",
    plinko: "Plinko",
    plinkoDesc: "Drop & Win",
    crash: "Crash",
    crashDesc: "Fly High",
    roulette: "Roulette",
    rouletteDesc: "Spin Now",
    feature1: "Tap to earn free coins",
    feature2: "Exciting games 24/7",
    feature3: "Invite friends and earn bonuses",
    feature4: "Fast and secure withdrawals",
    playNow: "Play Now in Bot!",
    home: "Home",
    income: "Income",
    earn: "Earn",
    game: "Game",
    friends: "Friends",
    energy: "Energy",
    noEnergy: "No energy left! Use Boost to refill!",
    energyRestored: "Energy fully restored! Keep tapping!",
    openingBot: "Opening Telegram Bot...",
    boostActivated: "Boost activated! 5x coins for 10 seconds!",
    boostEnded: "Boost ended! Back to normal tapping",
    noBoosts: "No boosts left!",
  },
  "en-ca": {
    balance: "Balance",
    perHour: "per hour",
    perTap: "per tap",
    boost: "Boost",
    cooldown: "Cooldown...",
    nextLevel: "To next level",
    level: "Level",
    coinsTo: "coins to next",
    aboutUs: "About Us",
    aboutDescription:
      "StormCoin is an innovative tap-to-earn and gaming platform integrated with Telegram. Earn coins by tapping, play our exciting games and build your empire!",
    tapEarn: "Tap & Earn",
    tapEarnDesc: "Earn by simply tapping",
    casinoGames: "Casino Games",
    casinoGamesDesc: "Plinko, Crash, Roulette",
    referralSystem: "Referral System",
    referralSystemDesc: "Earn by inviting friends",
    fastWithdrawals: "Fast Withdrawals",
    fastWithdrawalsDesc: "Withdraw quickly",
    poweredBy: "Powered By",
    welcomeTitle: "⚡ Welcome to StormCoin! ⚡",
    welcomeSubtitle: "Earn, play and win with our exciting games!",
    plinko: "Plinko",
    plinkoDesc: "Drop & Win",
    crash: "Crash",
    crashDesc: "Fly High",
    roulette: "Roulette",
    rouletteDesc: "Spin Now",
    feature1: "Tap to earn free coins",
    feature2: "Exciting games 24/7",
    feature3: "Invite friends and earn bonuses",
    feature4: "Fast and secure withdrawals",
    playNow: "Play Now in Bot!",
    home: "Home",
    income: "Income",
    earn: "Earn",
    game: "Game",
    friends: "Friends",
    energy: "Energy",
    noEnergy: "No energy left! Use Boost to refill!",
    energyRestored: "Energy fully restored! Keep tapping!",
    openingBot: "Opening Telegram Bot...",
    boostActivated: "Boost activated! 5x coins for 10 seconds!",
    boostEnded: "Boost ended! Back to normal tapping",
    noBoosts: "No boosts left!",
  },
  es: {
    balance: "Saldo",
    perHour: "por hora",
    perTap: "por toque",
    boost: "Impulso",
    cooldown: "Enfriamiento...",
    nextLevel: "Al siguiente nivel",
    level: "Nivel",
    coinsTo: "monedas para el siguiente",
    aboutUs: "Sobre Nosotros",
    aboutDescription:
      "StormCoin es una plataforma innovadora de tap-to-earn y juegos integrada con Telegram. ¡Gana monedas tocando, juega nuestros emocionantes juegos y construye tu imperio!",
    tapEarn: "Toca y Gana",
    tapEarnDesc: "Gana simplemente tocando",
    casinoGames: "Juegos de Casino",
    casinoGamesDesc: "Plinko, Crash, Ruleta",
    referralSystem: "Sistema de Referidos",
    referralSystemDesc: "Gana invitando amigos",
    fastWithdrawals: "Retiros Rápidos",
    fastWithdrawalsDesc: "Retira rápidamente",
    poweredBy: "Impulsado Por",
    welcomeTitle: "⚡ ¡Bienvenido a StormCoin! ⚡",
    welcomeSubtitle: "¡Gana, juega y vence con nuestros emocionantes juegos!",
    plinko: "Plinko",
    plinkoDesc: "Suelta y Gana",
    crash: "Crash",
    crashDesc: "Vuela Alto",
    roulette: "Ruleta",
    rouletteDesc: "Gira Ahora",
    feature1: "Toca para ganar monedas gratis",
    feature2: "Juegos emocionantes 24/7",
    feature3: "Invita amigos y gana bonos",
    feature4: "Retiros rápidos y seguros",
    playNow: "¡Juega Ahora en el Bot!",
    home: "Inicio",
    income: "Ingresos",
    earn: "Ganar",
    game: "Juego",
    friends: "Amigos",
    energy: "Energía",
    noEnergy: "¡Sin energía! ¡Usa Impulso para recargar!",
    energyRestored: "¡Energía completamente restaurada! ¡Sigue tocando!",
    openingBot: "Abriendo Bot de Telegram...",
    boostActivated: "¡Impulso activado! ¡5x monedas por 10 segundos!",
    boostEnded: "¡Impulso terminado! Vuelve al toque normal",
    noBoosts: "¡No quedan impulsos!",
  },
  fr: {
    balance: "Solde",
    perHour: "par heure",
    perTap: "par tap",
    boost: "Boost",
    cooldown: "Refroidissement...",
    nextLevel: "Au niveau suivant",
    level: "Niveau",
    coinsTo: "pièces pour le suivant",
    aboutUs: "À Propos",
    aboutDescription:
      "StormCoin est une plateforme innovante de tap-to-earn et de jeux intégrée avec Telegram. Gagnez des pièces en tapant, jouez à nos jeux passionnants et construisez votre empire!",
    tapEarn: "Tapez & Gagnez",
    tapEarnDesc: "Gagnez simplement en tapant",
    casinoGames: "Jeux de Casino",
    casinoGamesDesc: "Plinko, Crash, Roulette",
    referralSystem: "Système de Parrainage",
    referralSystemDesc: "Gagnez en invitant des amis",
    fastWithdrawals: "Retraits Rapides",
    fastWithdrawalsDesc: "Retirez rapidement",
    poweredBy: "Propulsé Par",
    welcomeTitle: "⚡ Bienvenue sur StormCoin! ⚡",
    welcomeSubtitle: "Gagnez, jouez et gagnez avec nos jeux passionnants!",
    plinko: "Plinko",
    plinkoDesc: "Déposez & Gagnez",
    crash: "Crash",
    crashDesc: "Volez Haut",
    roulette: "Roulette",
    rouletteDesc: "Tournez Maintenant",
    feature1: "Tapez pour gagner des pièces gratuites",
    feature2: "Jeux passionnants 24/7",
    feature3: "Invitez des amis et gagnez des bonus",
    feature4: "Retraits rapides et sécurisés",
    playNow: "Jouez Maintenant dans le Bot!",
    home: "Accueil",
    income: "Revenu",
    earn: "Gagner",
    game: "Jeu",
    friends: "Amis",
    energy: "Énergie",
    noEnergy: "Plus d'énergie! Utilisez Boost pour recharger!",
    energyRestored: "Énergie complètement restaurée! Continuez à taper!",
    openingBot: "Ouverture du Bot Telegram...",
    boostActivated: "Boost activé! 5x pièces pendant 10 secondes!",
    boostEnded: "Boost terminé! Retour au tap normal",
    noBoosts: "Plus de boosts!",
  },
  it: {
    balance: "Saldo",
    perHour: "all'ora",
    perTap: "per tap",
    boost: "Boost",
    cooldown: "Raffreddamento...",
    nextLevel: "Al prossimo livello",
    level: "Livello",
    coinsTo: "monete al prossimo",
    aboutUs: "Chi Siamo",
    aboutDescription:
      "StormCoin è una piattaforma innovativa di tap-to-earn e gaming integrata con Telegram. Guadagna monete toccando, gioca ai nostri giochi emozionanti e costruisci il tuo impero!",
    tapEarn: "Tap & Guadagna",
    tapEarnDesc: "Guadagna semplicemente toccando",
    casinoGames: "Giochi Casino",
    casinoGamesDesc: "Plinko, Crash, Roulette",
    referralSystem: "Sistema Referral",
    referralSystemDesc: "Guadagna invitando amici",
    fastWithdrawals: "Prelievi Veloci",
    fastWithdrawalsDesc: "Preleva velocemente",
    poweredBy: "Alimentato Da",
    welcomeTitle: "⚡ Benvenuto su StormCoin! ⚡",
    welcomeSubtitle: "Guadagna, gioca e vinci con i nostri giochi emozionanti!",
    plinko: "Plinko",
    plinkoDesc: "Drop & Win",
    crash: "Crash",
    crashDesc: "Vola Alto",
    roulette: "Roulette",
    rouletteDesc: "Gira Ora",
    feature1: "Tap per guadagnare coins gratis",
    feature2: "Giochi emozionanti 24/7",
    feature3: "Invita amici e guadagna bonus",
    feature4: "Prelievi veloci e sicuri",
    playNow: "Gioca Ora nel Bot!",
    home: "Home",
    income: "Entrate",
    earn: "Guadagna",
    game: "Gioco",
    friends: "Amici",
    energy: "Energia",
    noEnergy: "Nessuna energia! Usa Boost per ricaricare!",
    energyRestored: "Energia completamente ripristinata! Continua a tappare!",
    openingBot: "Apertura Bot Telegram...",
    boostActivated: "Boost attivato! 5x monete per 10 secondi!",
    boostEnded: "Boost finito! Torna al tap normale",
    noBoosts: "Nessun boost rimasto!",
  },
  pt: {
    balance: "Saldo",
    perHour: "por hora",
    perTap: "por toque",
    boost: "Impulso",
    cooldown: "Resfriamento...",
    nextLevel: "Para o próximo nível",
    level: "Nível",
    coinsTo: "moedas para o próximo",
    aboutUs: "Sobre Nós",
    aboutDescription:
      "StormCoin é uma plataforma inovadora de tap-to-earn e jogos integrada com Telegram. Ganhe moedas tocando, jogue nossos jogos emocionantes e construa seu império!",
    tapEarn: "Toque & Ganhe",
    tapEarnDesc: "Ganhe simplesmente tocando",
    casinoGames: "Jogos de Casino",
    casinoGamesDesc: "Plinko, Crash, Roleta",
    referralSystem: "Sistema de Indicação",
    referralSystemDesc: "Ganhe indicando amigos",
    fastWithdrawals: "Saques Rápidos",
    fastWithdrawalsDesc: "Retire rapidamente",
    poweredBy: "Desenvolvido Por",
    welcomeTitle: "⚡ Bem-vindo ao StormCoin! ⚡",
    welcomeSubtitle: "Ganhe, jogue e vença com nossos jogos emocionantes!",
    plinko: "Plinko",
    plinkoDesc: "Solte & Ganhe",
    crash: "Crash",
    crashDesc: "Voe Alto",
    roulette: "Roleta",
    rouletteDesc: "Gire Agora",
    feature1: "Toque para ganhar moedas grátis",
    feature2: "Jogos emocionantes 24/7",
    feature3: "Convide amigos e ganhe bônus",
    feature4: "Saques rápidos e seguros",
    playNow: "Jogue Agora no Bot!",
    home: "Início",
    income: "Renda",
    earn: "Ganhar",
    game: "Jogo",
    friends: "Amigos",
    energy: "Energia",
    noEnergy: "Sem energia! Use Impulso para recarregar!",
    energyRestored: "Energia totalmente restaurada! Continue tocando!",
    openingBot: "Abrindo Bot do Telegram...",
    boostActivated: "Boost ativado! 5x moedas por 10 segundos!",
    boostEnded: "Boost terminou! Volta ao toque normal",
    noBoosts: "Sem boosts restantes!",
  },
  de: {
    balance: "Guthaben",
    perHour: "pro Stunde",
    perTap: "pro Tipp",
    boost: "Boost",
    cooldown: "Abklingzeit...",
    nextLevel: "Zum nächsten Level",
    level: "Level",
    coinsTo: "Münzen zum nächsten",
    aboutUs: "Über Uns",
    aboutDescription:
      "StormCoin ist eine innovative Tap-to-Earn- und Gaming-Plattform, die mit Telegram integriert ist. Verdiene Münzen durch Tippen, spiele unsere aufregenden Spiele und baue dein Imperium auf!",
    tapEarn: "Tippen & Verdienen",
    tapEarnDesc: "Verdiene einfach durch Tippen",
    casinoGames: "Casino Spiele",
    casinoGamesDesc: "Plinko, Crash, Roulette",
    referralSystem: "Empfehlungssystem",
    referralSystemDesc: "Verdiene durch Freunde einladen",
    fastWithdrawals: "Schnelle Auszahlungen",
    fastWithdrawalsDesc: "Schnell abheben",
    poweredBy: "Angetrieben Von",
    welcomeTitle: "⚡ Willkommen bei StormCoin! ⚡",
    welcomeSubtitle:
      "Verdiene, spiele und gewinne mit unseren aufregenden Spielen!",
    plinko: "Plinko",
    plinkoDesc: "Fallen & Gewinnen",
    crash: "Crash",
    crashDesc: "Hoch Fliegen",
    roulette: "Roulette",
    rouletteDesc: "Jetzt Drehen",
    feature1: "Tippe, um kostenlose Münzen zu verdienen",
    feature2: "Aufregende Spiele 24/7",
    feature3: "Lade Freunde ein und verdiene Boni",
    feature4: "Schnelle und sichere Auszahlungen",
    playNow: "Jetzt im Bot Spielen!",
    home: "Startseite",
    income: "Einkommen",
    earn: "Verdienen",
    game: "Spiel",
    friends: "Freunde",
    energy: "Energie",
    noEnergy: "Keine Energie mehr! Benutze Boost zum Aufladen!",
    energyRestored: "Energie vollständig wiederhergestellt! Weiter tippen!",
    openingBot: "Telegram Bot wird geöffnet...",
    boostActivated: "Boost aktiviert! 5x Münzen für 10 Sekunden!",
    boostEnded: "Boost beendet! Zurück zum normalen Tippen",
    noBoosts: "Keine Boosts übrig!",
  },
  dk: {
    balance: "Balance",
    perHour: "per time",
    perTap: "per tryk",
    boost: "Boost",
    cooldown: "Nedkøling...",
    nextLevel: "Til næste niveau",
    level: "Niveau",
    coinsTo: "mønter til næste",
    aboutUs: "Om Os",
    aboutDescription:
      "StormCoin er en innovativ tap-to-earn og gaming platform integreret med Telegram. Tjen mønter ved at trykke, spil vores spændende spil og byg dit imperium!",
    tapEarn: "Tryk & Tjen",
    tapEarnDesc: "Tjen ved blot at trykke",
    casinoGames: "Casino Spil",
    casinoGamesDesc: "Plinko, Crash, Roulette",
    referralSystem: "Henvisningssystem",
    referralSystemDesc: "Tjen ved at invitere venner",
    fastWithdrawals: "Hurtige Udbetalinger",
    fastWithdrawalsDesc: "Hæv hurtigt",
    poweredBy: "Drevet Af",
    welcomeTitle: "⚡ Velkommen til StormCoin! ⚡",
    welcomeSubtitle: "Tjen, spil og vind med vores spændende spil!",
    plinko: "Plinko",
    plinkoDesc: "Slip & Vind",
    crash: "Crash",
    crashDesc: "Flyv Højt",
    roulette: "Roulette",
    rouletteDesc: "Spin Nu",
    feature1: "Tryk for at tjene gratis mønter",
    feature2: "Spændende spil 24/7",
    feature3: "Inviter venner og tjen bonusser",
    feature4: "Hurtige og sikre udbetalinger",
    playNow: "Spil Nu i Bot!",
    home: "Hjem",
    income: "Indkomst",
    earn: "Tjen",
    game: "Spil",
    friends: "Venner",
    energy: "Energi",
    noEnergy: "Ingen energi tilbage! Brug Boost til at genopfylde!",
    energyRestored: "Energi fuldt genoprettet! Fortsæt med at trykke!",
    openingBot: "Åbner Telegram Bot...",
    boostActivated: "Boost aktiveret! 5x mønter i 10 sekunder!",
    boostEnded: "Boost slut! Tilbage til normalt tryk",
    noBoosts: "Ingen boosts tilbage!",
  },
};

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

// Language flags and names
const languageData: Record<Language, { flag: string; name: string }> = {
  "en-ca": { flag: "/ca.png", name: "English (CA)" },
  en: { flag: "/en.svg", name: "English (US)" },
  es: { flag: "/es.png", name: "Español" },
  fr: { flag: "/fr.png", name: "Français" },
  it: { flag: "/it.svg", name: "Italiano" },
  pt: { flag: "/pt.png", name: "Português" },
  de: { flag: "/de.png", name: "Deutsch" },
  dk: { flag: "/dk.svg", name: "Dansk" },
};

// Header Component with Language Selector
const Header = ({
  currentLanguage,
  onLanguageChange,
}: {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}) => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-700/50">
      <div className="flex items-center justify-between px-5 py-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <CoinTurbo size={32} className="animate-pulse" />
          <h1 className="text-xl font-bold bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            StormCoin
          </h1>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/50 rounded-xl px-3 py-2 transition-all duration-300"
          >
            <Image
              src={languageData[currentLanguage].flag}
              alt={languageData[currentLanguage].name}
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-sm font-medium text-gray-300 hidden sm:block">
              {languageData[currentLanguage].name}
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                showLanguageMenu ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Language Dropdown Menu */}
          {showLanguageMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden animate-dropdownSlide">
              {(Object.keys(languageData) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setShowLanguageMenu(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-600/20 transition-all duration-200 ${
                    currentLanguage === lang
                      ? "bg-blue-600/30 text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  <Image
                    src={languageData[lang].flag}
                    alt={languageData[lang].name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="font-medium">{languageData[lang].name}</span>
                  {currentLanguage === lang && (
                    <span className="ml-auto text-blue-400">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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
      { progress: 20, text: "Connecting to server..." },
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
  const [currentBalance, setCurrentBalance] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [tapAnimation, setTapAnimation] = useState(false);
  const [boostCooldown, setBoostCooldown] = useState(false);
  const [showLightningVFX, setShowLightningVFX] = useState(false);
  const [ambientLightning, setAmbientLightning] = useState<number[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en-ca");
  const [boostsLeft, setBoostsLeft] = useState(3);
  const [refillsLeft, setRefillsLeft] = useState(3);
  const tapTimestamps = useRef<number[]>([]);

  // Get current translations
  const t = translations[currentLanguage];

  // Removed ambient lightning effect to improve performance

  // Load state from localStorage on mount
  useEffect(() => {
    const savedBalance = localStorage.getItem("stormcoin_balance");
    const savedEnergy = localStorage.getItem("stormcoin_energy");
    const savedLanguage = localStorage.getItem("stormcoin_language");
    const savedBoosts = localStorage.getItem("stormcoin_boosts");
    const savedRefills = localStorage.getItem("stormcoin_refills");

    if (savedBalance) setCurrentBalance(parseInt(savedBalance));
    if (savedEnergy) setEnergy(parseInt(savedEnergy));
    if (savedLanguage) setCurrentLanguage(savedLanguage as Language);
    if (savedBoosts) setBoostsLeft(parseInt(savedBoosts));
    if (savedRefills) setRefillsLeft(parseInt(savedRefills));
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("stormcoin_balance", currentBalance.toString());
    localStorage.setItem("stormcoin_energy", energy.toString());
    localStorage.setItem("stormcoin_language", currentLanguage);
    localStorage.setItem("stormcoin_boosts", boostsLeft.toString());
    localStorage.setItem("stormcoin_refills", refillsLeft.toString());
  }, [currentBalance, energy, currentLanguage, boostsLeft, refillsLeft]);

  // Reset energy to 100 on page reload (after initial load)
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("stormcoin_reloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("stormcoin_reloaded", "true");
      setEnergy(100);
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
      showToast(t.openingBot, "info");
      // Navigate to Telegram bot for other tabs
      const botUsername = "TheStormCoin_bot"; // TODO: Replace with your actual bot username
      setTimeout(() => {
        window.open(`https://t.me/${botUsername}`, "_blank");
      }, 500);
    }
  };

  const handleTapCoin = () => {
    if (energy <= 0) {
      showToast(t.noEnergy, "error");
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

    // Determine multiplier (5x when boost active)
    const multiplier = boostCooldown ? 5 : 1;

    // Decrease energy by 1
    setEnergy((prev) => Math.max(0, prev - 1));
    // Increase balance by multiplier
    setCurrentBalance((prev) => prev + multiplier);
    // Trigger tap animation
    setTapAnimation(true);
    setTimeout(() => setTapAnimation(false), 200);
  };

  const handleBoost = () => {
    if (boostCooldown) {
      showToast(t.cooldown, "info");
      return;
    }

    if (boostsLeft <= 0) {
      showToast(t.noBoosts, "error");
      return;
    }

    // Activate turbo boost - show visual effect
    setBoostsLeft((prev) => prev - 1);
    showToast(t.boostActivated, "success");

    // Show lightning VFX
    setShowLightningVFX(true);
    setTimeout(() => setShowLightningVFX(false), 3000);

    // Set cooldown for 10 seconds
    setBoostCooldown(true);
    setTimeout(() => {
      setBoostCooldown(false);
      showToast(t.boostEnded, "info");
    }, 10000); // 10 seconds boost duration
  };

  const handleEnergyRefill = () => {
    if (refillsLeft <= 0) {
      showToast(t.noBoosts, "error");
      return;
    }

    if (energy >= 100) {
      showToast("Energy is already full!", "info");
      return;
    }

    // Restore 100 energy (max 100)
    setEnergy((prev) => Math.min(prev + 100, 100));
    setRefillsLeft((prev) => prev - 1);
    showToast(t.energyRestored, "success");
  };

  const energyPercentage = (energy / 100) * 100;
  const levelProgress = ((currentBalance % 100) / 100) * 100; // Simple level system

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  const tabItems = [
    {
      id: "Home",
      label: t.home,
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
      label: t.income,
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
      label: t.earn,
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
      label: t.game,
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
      label: t.friends,
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
          {/* Header with Language Selector */}
          <Header
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />

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
                  {t.balance}
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
                    <span className="text-white font-semibold">0</span>{" "}
                    {t.perHour}
                  </span>
                  <span className="text-gray-600">|</span>
                  <span>
                    <span className="text-white font-semibold">
                      {boostCooldown ? 5 : 1}
                    </span>{" "}
                    {t.perTap}
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
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-4xl font-bold animate-floatUp pointer-events-none ${
                      boostCooldown ? "text-yellow-300" : "text-blue-400"
                    }`}
                  >
                    +{boostCooldown ? 5 : 1}
                  </div>
                )}
              </div>

              {/* Energy and Boost Section */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                      className={`w-8 h-8 transform -rotate-90 ${
                        energy <= 20 ? "animate-pulse" : ""
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
                        stroke={energy <= 20 ? "#ef4444" : "#10b981"}
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
                          energy <= 20 ? "text-red-400" : "text-green-400"
                        }`}
                      >
                        ⚡
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-bold text-lg ${
                        energy <= 20 ? "text-red-400" : "text-white"
                      }`}
                    >
                      {energy} / 100
                    </span>
                    <span className="text-xs text-gray-400">{t.energy}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* Refill Button */}
                  <button
                    onClick={handleEnergyRefill}
                    disabled={refillsLeft <= 0}
                    className={`flex-1 px-4 py-3 rounded-2xl font-bold text-white shadow-lg transition-all duration-300 ${
                      refillsLeft <= 0
                        ? "bg-gray-600 opacity-50 cursor-not-allowed"
                        : "bg-linear-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 active:scale-95 hover:shadow-xl hover:shadow-green-500/50"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2v6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm">Refill</span>
                      </div>
                      <span className="text-xs opacity-80">
                        {refillsLeft}/3
                      </span>
                    </div>
                  </button>

                  {/* Boost Button */}
                  <button
                    onClick={handleBoost}
                    disabled={boostCooldown || boostsLeft === 0}
                    className={`flex-1 px-4 py-3 rounded-2xl font-bold text-white shadow-lg transition-all duration-300 ${
                      boostCooldown || boostsLeft === 0
                        ? "bg-gray-600 opacity-50 cursor-not-allowed"
                        : "bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 hover:shadow-xl hover:shadow-blue-500/50 ring-2 ring-blue-400/10"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-2xl ${
                            boostCooldown ? "animate-pulse" : ""
                          }`}
                        >
                          🚀
                        </span>
                        <span className="text-sm">
                          {boostCooldown ? t.cooldown : t.boost}
                        </span>
                      </div>
                      <span className="text-xs opacity-80">{boostsLeft}/3</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Level Progress */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span className="text-gray-300 font-medium">
                      {t.nextLevel}
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
                  {t.level} {Math.floor(currentBalance / 100) + 1} •{" "}
                  {currentBalance % 100}/100 {t.coinsTo}
                </div>
              </div>

              {/* About Us Section */}
              <div className="mb-8">
                <div className="bg-linear-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-md rounded-3xl p-6 border border-gray-700/30 shadow-2xl">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-3">
                      {t.aboutUs}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {t.aboutDescription}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Feature 1 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">⚡</div>
                      <div className="text-xs font-bold text-blue-400 text-center mb-1">
                        {t.tapEarn}
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        {t.tapEarnDesc}
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">🎰</div>
                      <div className="text-xs font-bold text-purple-400 text-center mb-1">
                        {t.casinoGames}
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        {t.casinoGamesDesc}
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">👥</div>
                      <div className="text-xs font-bold text-cyan-400 text-center mb-1">
                        {t.referralSystem}
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        {t.referralSystemDesc}
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                      <div className="text-3xl mb-2 text-center">💰</div>
                      <div className="text-xs font-bold text-green-400 text-center mb-1">
                        {t.fastWithdrawals}
                      </div>
                      <div className="text-[10px] text-gray-400 text-center">
                        {t.fastWithdrawalsDesc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Section - Why Join */}
              <div className="mb-8">
                <div className="bg-linear-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-6 border border-blue-500/30 shadow-2xl">
                  <div className="text-center mb-4">
                    <h2 className="text-3xl font-extrabold bg-linear-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-2">
                      {t.welcomeTitle}
                    </h2>
                    <p className="text-gray-300 text-sm">{t.welcomeSubtitle}</p>
                  </div>

                  {/* Games Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* Plinko Game */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎯</div>
                        <div className="text-xs font-bold text-blue-400">
                          {t.plinko}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          {t.plinkoDesc}
                        </div>
                      </div>
                    </div>

                    {/* Crash Game */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🚀</div>
                        <div className="text-xs font-bold text-purple-400">
                          {t.crash}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          {t.crashDesc}
                        </div>
                      </div>
                    </div>

                    {/* Roulette Game */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎰</div>
                        <div className="text-xs font-bold text-red-400">
                          {t.roulette}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          {t.rouletteDesc}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{t.feature1}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{t.feature2}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{t.feature3}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{t.feature4}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleTabClick("Gioco")}
                    className="w-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 active:scale-95"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">🎮</span>
                      <span>{t.playNow}</span>
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
