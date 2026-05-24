import { createContext, useContext, useState, useEffect } from "react";

export const GamificationContext = createContext();

export const GamificationProvider = ({ children }) => {
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem("userXP");
    return saved ? parseInt(saved) : 0;
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("userStreak");
    return saved ? parseInt(saved) : 0;
  });

  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem("userBadges");
    return saved ? JSON.parse(saved) : [];
  });

  const [level, setLevel] = useState(() => {
    const saved = localStorage.getItem("userLevel");
    return saved ? parseInt(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("userXP", xp);
    setLevel(Math.floor(xp / 500) + 1);
  }, [xp]);

  useEffect(() => {
    localStorage.setItem("userStreak", streak);
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("userBadges", JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem("userLevel", level);
  }, [level]);

  const addXP = (amount) => {
    setXp((prev) => prev + amount);
    checkBadges();
  };

  const incrementStreak = () => {
    setStreak((prev) => prev + 1);
    checkBadges();
  };

  const resetStreak = () => {
    setStreak(0);
  };

  const unlockBadge = (badge) => {
    if (!badges.find((b) => b.id === badge.id)) {
      setBadges((prev) => [...prev, badge]);
    }
  };

  const checkBadges = () => {
    const newBadges = [
      { id: "first_step", name: "First Step", icon: "👣", description: "Earned 100 XP", condition: xp >= 100 },
      { id: "on_fire", name: "On Fire", icon: "🔥", description: "7-day streak", condition: streak >= 7 },
      { id: "unstoppable", name: "Unstoppable", icon: "💪", description: "30-day streak", condition: streak >= 30 },
      { id: "scholar", name: "Scholar", icon: "📚", description: "Reached Level 5", condition: level >= 5 },
      { id: "legend", name: "Legend", icon: "⭐", description: "1000+ XP", condition: xp >= 1000 },
      { id: "champion", name: "Champion", icon: "🏆", description: "3000+ XP", condition: xp >= 3000 },
    ];

    newBadges.forEach((badge) => {
      if (badge.condition && !badges.find((b) => b.id === badge.id)) {
        unlockBadge(badge);
      }
    });
  };

  return (
    <GamificationContext.Provider
      value={{
        xp,
        streak,
        badges,
        level,
        addXP,
        incrementStreak,
        resetStreak,
        unlockBadge,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => useContext(GamificationContext);