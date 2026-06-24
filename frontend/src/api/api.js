// src/api/api.js

const BASE_URL = "http://localhost:8080";

export const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export default BASE_URL;