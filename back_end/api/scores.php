<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../classes/bd.php';

// Récupère les données JSON envoyées par React
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
  echo json_encode(['success' => false, 'error' => 'Données invalides']);
  exit;
}

$pseudo = $data['pseudo'];
$score  = (int) $data['score'];
$total  = (int) $data['total'];
$mode   = $data['mode'];

try {
  $pdo = getConnexion();
  $req = $pdo->prepare(
    'INSERT INTO scores (pseudo, score, total, mode) 
        VALUES (:pseudo, :score, :total, :mode)'
  );
  $req->execute([
    'pseudo' => $pseudo,
    'score'  => $score,
    'total'  => $total,
    'mode'   => $mode,
  ]);

  echo json_encode(['success' => true]);
} catch (PDOException $e) {
  echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
