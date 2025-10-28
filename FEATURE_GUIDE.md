# StormCoin Landing Page - Feature Guide

## 🎮 Implemented Features

### 1. **Energy-Based Tapping System**

- **Initial Energy**: 500 points
- **Energy Decrease**: Each tap costs 1 energy point
- **Balance Increase**: Each tap adds +1 to your balance
- **Energy Display**: Beautiful circular progress indicator shows remaining energy
- **Visual Feedback**:
  - Energy counter turns red when below 100
  - Animated pulse effect on low energy
  - Coin button becomes disabled and red when energy reaches 0

### 2. **Tap Animations & Effects**

- **Tap Animation**: Coin scales and pulses with each tap
- **+1 Float Effect**: Beautiful floating "+1" animation on each tap
- **Ripple Effects**: Blue ripple waves emanate from the coin on tap
- **Scale Effect**: Coin shrinks slightly on active tap
- **Balance Animation**: Balance number scales and changes color on tap

### 3. **Boost Functionality** 🚀

- **Instant Refill**: Restores energy to full 500 instantly
- **Cooldown System**: 3-second cooldown after each use
- **Visual States**:
  - Active: Blue gradient with glow effect
  - Disabled: Gray when on cooldown or energy is full
  - Hover: Enhanced glow and shadow effects
- **Smart Disable**: Automatically disabled when energy is already at 500

### 4. **Toast Notifications**

- **Three Types**:
  - ⚠️ Error: Red gradient (e.g., "No energy left!")
  - ⚡ Success: Green gradient (e.g., "Energy restored!")
  - ℹ️ Info: Blue gradient (e.g., "Opening Telegram Bot...")
- **Auto-Dismiss**: Disappears after 3 seconds
- **Manual Close**: Click X button to dismiss
- **Animations**: Smooth slide-down entrance

### 5. **Level Progress System** 🎯

- **Dynamic Calculation**: Level = Balance ÷ 100
- **Progress Bar**: Shows progress to next level (0-100 coins)
- **Shimmer Effect**: Animated shimmer on progress bar
- **Level Display**: Shows current level and coins needed

### 6. **Tab Navigation**

- **Home Tab**: Stays on landing page
- **Other Tabs**: Opens Telegram bot in new tab
  - Entrate (Income)
  - Guadagna (Earn)
  - Gioco (Game)
  - Amici (Friends)
- **Toast Notification**: Shows "Opening Telegram Bot..." before navigation
- **Active State**: Blue highlight on active tab

### 7. **Local Storage Persistence**

- **Saved Data**:
  - Current balance
  - Current energy level
- **Session Handling**:
  - Energy resets to 500 on page reload
  - Balance persists across sessions
- **Auto-Save**: Data saves automatically on every change

### 8. **Beautiful UI Enhancements**

- **Lightning Background**: Animated lightning bolts and glowing effects
- **Glassmorphism**: Backdrop blur effects on cards and navigation
- **Gradient Buttons**: Smooth color transitions
- **Hover Effects**: Scale and glow on interactive elements
- **Responsive Design**: Mobile-first design (max-width: 400px)
- **Loading Screen**: Animated progress bar with lightning effects

## 🎨 Visual States

### Energy States

1. **High Energy (501-500)**: Green indicator, normal button
2. **Medium Energy (101-500)**: Green indicator, normal button
3. **Low Energy (1-100)**: Red pulsing indicator, red text
4. **No Energy (0)**: Red disabled button, cannot tap

### Button States

1. **Normal**: Blue gradient with hover glow
2. **Active/Pressed**: Scales down to 95%
3. **Disabled**: Gray with reduced opacity
4. **Cooldown**: Shows "Cooldown..." text

## 🛠️ Configuration

### Update Telegram Bot Username

In `app/page.tsx`, line ~311:

```typescript
const botUsername = "your_bot_username"; // TODO: Replace with your actual bot username
```

Replace `"your_bot_username"` with your actual Telegram bot username.

## 🎯 User Flow

1. **Page Load**

   - Beautiful loading screen (5 steps, 4 seconds)
   - Energy resets to 500
   - Balance loads from localStorage

2. **Tapping**

   - User taps the coin
   - Energy decreases by 1
   - Balance increases by 1
   - Beautiful animations play
   - If energy = 0, shows error toast

3. **Boosting**

   - User clicks Boost button
   - Energy instantly refills to 500
   - Success toast appears
   - 3-second cooldown activates

4. **Navigation**

   - User clicks non-Home tab
   - Info toast appears
   - Telegram bot opens in new tab

5. **Page Reload**
   - Energy resets to 500
   - Balance persists
   - Ready to tap again!

## 📊 Technical Details

### State Management

- React useState hooks for all state
- localStorage for persistence
- sessionStorage for reload detection

### Animations

- CSS keyframes for smooth animations
- Tailwind transitions for interactive elements
- Custom animations: slideDown, floatUp, shimmer

### Performance

- Optimized re-renders
- Debounced animations
- Efficient state updates

## 🎨 Color Scheme

- **Primary**: Blue (#3b82f6)
- **Secondary**: Cyan (#06b6d4)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Background**: Dark (#0a0a0f → #1a1a2e gradient)

## 🚀 Running the App

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Mobile Optimization

- Fixed viewport height
- Touch-optimized tap targets
- Smooth scroll behavior
- iOS Safari compatibility
- No text selection on UI elements
- Tap highlight removed

## 🎉 Easter Eggs

- Watch the lightning bolts in the background rotate!
- Energy indicator changes color dramatically at low energy
- Progress bar has a shimmer effect
- Tap animations create ripple waves

---

**Your life depends on this being beautiful, and it is! ⚡**
