<?php
//recuperiamo i dati seguenti... dal database

require_once 'bd.php';


function getAllPays()
{
  $pdo = getConnexion();
  $resultat = $pdo->query('SELECT * FROM pays ORDER BY name ASC');
  return $resultat->fetchAll(PDO::FETCH_ASSOC);
}

function getPayById($id)
{
  $pdo = getConnexion();
  $req = $pdo->prepare('SELECT * FROM pays WHERE id = :id');
  $req->execute(['id' => $id]);
  return $req->fetch(PDO::FETCH_ASSOC);
}

function getRandomPays($nombre)
{
  $pdo = getConnexion();
  $req = $pdo->prepare('SELECT * FROM pays ORDER BY RAND() LIMIT :nombre');
  $req->bindValue(':nombre', $nombre, PDO::PARAM_INT);
  $req->execute();
  return $req->fetchAll(PDO::FETCH_ASSOC);
}
