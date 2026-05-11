<?php
// Permettre à React de communiquer avec PHP poi récupérer les données des pays 
// et les questions du quiz pour les envoyer à React en format JSON

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once '../classes/bd.php';
require_once '../classes/Pay.php';

$n = isset($_GET['n']) ? (int)$_GET['n'] : 10;

$questions = [];


$pay = new Pay(null, null, null, null, null, null);


try {

  for ($i = 0; $i < $n; $i++) {

    $pays = $pay->getRandomPays(4);
    $bonPays = $pays[0];

    $options = [
      $pays[0]['capital'],
      $pays[1]['capital'],
      $pays[2]['capital'],
      $pays[3]['capital'],
    ];

    shuffle($options);

    $questions[] = [
      'statement' => 'Quelle est la capitale de ' . $bonPays['name'] . ' ?',
      'answer'    => $bonPays['capital'],
      'flag'      => $bonPays['flag'],
      'options'   => $options
    ];
  }

  echo json_encode($questions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
  // Si erreur base de données → on envoie un message d'erreur en JSON
  echo json_encode(['error' => $e->getMessage()]);
}

/*React fa una richiesta fetch all'endpoint PHP. PHP legge il database con PDO, 
crea un array con la domanda e le 4 opzioni, e lo invia in formato JSON con json_encode. 
React riceve il JSON e lo mostra all'utente*/