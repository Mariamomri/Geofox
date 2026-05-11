<?php
//recuperiamo i dati seguenti... dal database

require_once 'bd.php';

class
Pay
{
  public $id;
  public $name;
  public $capital;
  public $population;
  public $area;
  public $flag;

  public function __construct($id, $name, $capital, $population, $area, $flag)
  {
    $this->id = $id;
    $this->name = $name;
    $this->capital = $capital;
    $this->population = $population;
    $this->area = $area;
    $this->flag = $flag;
  }

  //getteur
  public function getId()
  {
    return $this->id;
  }

  public function getName()
  {
    return $this->name;
  }

  public function getCapital()
  {
    return $this->capital;
  }

  public function getPopulation()
  {
    return $this->population;
  }

  public function getArea()
  {
    return $this->area;
  }

  public function getFlag()
  {
    return $this->flag;
  }


  //setteur

  public function setId($id)
  {
    $this->id = $id;
  }

  public function setName($name)
  {
    $this->name = $name;
  }

  public function setCapital($capital)
  {
    $this->capital = $capital;
  }

  public function setPopulation($population)
  {
    $this->population = $population;
  }

  public function setArea($area)
  {
    $this->area = $area;
  }

  public function setFlag($flag)
  {
    $this->flag = $flag;
  }



  //methodes pour recuperer les données du database
  public function getAllPays()
  {
    $pdo = getConnexion();
    $resultat = $pdo->query('SELECT * FROM pays ORDER BY name ASC');
    return $resultat->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getPayById($id)
  {
    $pdo = getConnexion();
    $req = $pdo->prepare('SELECT * FROM pays WHERE id = :id');
    $req->execute(['id' => $id]);
    return $req->fetch(PDO::FETCH_ASSOC);
  }

  public function getRandomPays($nombre)
  {
    $pdo = getConnexion();
    $req = $pdo->prepare('SELECT * FROM pays ORDER BY RAND() LIMIT :nombre');
    $req->bindValue(':nombre', $nombre, PDO::PARAM_INT);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
  }
}
