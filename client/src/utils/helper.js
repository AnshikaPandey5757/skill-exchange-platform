// Utility helper functions for UI + formatting

export const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const truncateText = (text, max = 120) => {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
};

export const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));