<?php
// Permettre à React de communiquer avec PHP poi ur récupérer les données des pays et les questions du quiz

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

echo json_encode($question);
