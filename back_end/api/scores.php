<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../classes/bd.php';

// GET top 3
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  try {
    $pdo = getConnexion();
    $req = $pdo->query(
      'SELECT * FROM scores ORDER BY score DESC LIMIT 3'
    );
    $scores = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($scores, JSON_PRETTY_PRINT);
  } catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
  }
  exit;
}

// POST score
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Données invalides']);
    exit;
  }

  try {
    $pdo = getConnexion();
    $req = $pdo->prepare(
      'INSERT INTO scores (pseudo, score, total, mode)
            VALUES (:pseudo, :score, :total, :mode)'
    );
    $req->execute([
      'pseudo' => $data['pseudo'],
      'score'  => (int) $data['score'],
      'total'  => (int) $data['total'],
      'mode'   => $data['mode'],
    ]);

    echo json_encode(['success' => true]);
  } catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
  }
  exit;
}
