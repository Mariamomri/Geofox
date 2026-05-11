<?php

function getConnexion()
{
  try {
    $pdo = new PDO('mysql:dbname=db_pays;host=localhost', 'root', '');

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
  } catch (PDOException $e) {
    die('Erreur de connexion : ' . $e->getMessage());
  }
}
