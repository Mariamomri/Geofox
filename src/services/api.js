// Centralise tous les appels vers le back-end PHP
const API_BASE = "http://localhost/Geofox/back_end";

// Récupère N questions depuis l'API PHP
export async function fetchQuiz(nbQuestions = 10) {
  const res = await fetch(`${API_BASE}/api/quiz.php?n=${nbQuestions}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data;
}
