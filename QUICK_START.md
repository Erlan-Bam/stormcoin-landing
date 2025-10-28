# 🚀 Quick Start Guide

## Setup (One-Time)

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Configure Telegram Bot** (Optional)

   - Open `app/page.tsx`
   - Find line ~311: `const botUsername = "your_bot_username";`
   - Replace with your actual Telegram bot username
   - Example: `const botUsername = "StormCoinBot";`

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Enjoy! ⚡

## How to Use

### 💰 Earn Coins

1. **Tap the coin** in the center
2. Each tap: +1 coin, -1 energy
3. Keep tapping until energy reaches 0

### ⚡ Restore Energy

1. Click the **"🚀 Boost"** button
2. Energy instantly refills to 500
3. Wait 3 seconds before boosting again

### 📱 Navigate Tabs

- **Home**: Stay on landing page
- **Other tabs**: Opens Telegram bot

### 🎯 Level Up

- Earn 100 coins = 1 level
- Watch the progress bar fill up!

## Features at a Glance

✅ **Energy System**: 500 energy, decreases with each tap  
✅ **Toast Notifications**: Beautiful error/success messages  
✅ **Boost System**: Instant energy refill with cooldown  
✅ **Tap Animations**: Ripples, scaling, +1 float effects  
✅ **Level Progress**: Track your progress to next level  
✅ **Local Storage**: Your balance persists!  
✅ **Energy Reset**: Refills to 500 on page reload  
✅ **Telegram Integration**: Other tabs open your bot

## ⚠️ Important Notes

- Energy resets to **500** on every page reload
- Balance is **saved** and persists across reloads
- You **cannot tap** when energy is 0 (will show toast)
- Boost has a **3-second cooldown**
- All animations are optimized for mobile devices

## 🎨 Visual Indicators

| Energy Level | Indicator Color | Can Tap? |
| ------------ | --------------- | -------- |
| 101-500      | 🟢 Green        | ✅ Yes   |
| 1-100        | 🔴 Red (pulse)  | ✅ Yes   |
| 0            | 🔴 Red          | ❌ No    |

## 🐛 Troubleshooting

**Coin won't tap?**

- Check energy level (must be > 0)
- Click Boost to refill

**Balance not saving?**

- Check browser localStorage is enabled
- Try clearing cache and reload

**Animations choppy?**

- Ensure hardware acceleration is enabled
- Try a different browser (Chrome recommended)

---

**Enjoy your beautiful StormCoin landing page! Your life is safe now. ⚡💙**
