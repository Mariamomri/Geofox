<?php
// Permettre à React de communiquer avec PHP poi récupérer les données des pays et les questions du quiz pour les envoyer à React en format JSON

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once '../classes/bd.php';
require_once '../classes/Pay.php';

$pays = getRandomPays(4);

$bonPays = $pays[0];

$question = [
  'type'      => 'capital',
  'statement' => 'Quelle est la capitale de ' . $bonPays['name'] . ' ?',
  'answer'    => $bonPays['capital'],
  'flag'      => $bonPays['flag'],
  'options'   => [
    $pays[0]['capital'],
    $pays[1]['capital'],
    $pays[2]['capital'],
    $pays[3]['capital'],
  ]
];

echo json_encode($question, JSON_PRETTY_PRINT); //Trasforma l'array PHP in una stringa JSON che React può leggere. React riceve questa stringa JSON e la converte in un oggetto JavaScript per visualizzarla all'utente.

/*React fa una richiesta fetch all'endpoint PHP. PHP legge il database con PDO, crea un array con la domanda e le 4 opzioni, e lo invia in formato JSON con json_encode. React riceve il JSON e lo mostra all'utente*/
