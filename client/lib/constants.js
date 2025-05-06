export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"; // backend API
export const API_ENDPOINTS = {
  GET_PLAYER_PROPS: "/api/player-props", // Endpoint to fetch player props
  GET_GAME_MATCHUPS: "/api/game-matchups", // Endpoint to fetch game matchups
};

export const PROPS_TYPES = {
  POINTS: "Points",
  REBOUNDS: "Rebounds",
  ASSISTS: "Assists",
  STEALS: "Steals",
  BLOCKS: "Blocks",
};

export const DEFAULT_PLAYER_ID = "12345"; // Replace with a default player ID for testing or initial view
export const DEFAULT_GAME_ID = "67890"; // Replace with a default game ID for testing or initial view

export const UI_TEXT = {
  LOADING: "Loading...",
  ERROR: "Something went wrong. Please try again later.",
  NO_DATA: "No data available for the selected player or game.",
};

export const API_KEY = process.env.API_KEY || "your-api-key-here"; // If you need a key for the odd API