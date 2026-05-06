<?php
// salviamo i punteggi nel database e recuperiamo i migliori punteggi per la classifica

require 'bd.php';

function saveScore($pseudo, $score, $total, $mode)
{
  $pdo = getConnexion();
  $req = $pdo->prepare(
    'INSERT INTO scores (pseudo, score, total, mode) 
        VALUES (:pseudo, :score, :total, :mode)'
  );
  $req->execute([
    'pseudo' => $pseudo,
    'score'  => $score,
    'total'  => $total,
    'mode'   => $mode
  ]);
}


function getTopScores()
{
  $pdo = getConnexion();
  $resultat = $pdo->query(
    'SELECT * FROM scores ORDER BY score DESC LIMIT 10'
  );
  return $resultat->fetchAll(PDO::FETCH_ASSOC);
}
