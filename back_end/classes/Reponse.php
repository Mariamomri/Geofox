<?php

class Reponse
{
  public $id;
  public $question_id;
  public $reponse;

  public function __construct($id, $question_id, $reponse)
  {
    $this->id = $id;
    $this->question_id = $question_id;
    $this->reponse = $reponse;
  }

  //getteur
  public function getId()
  {
    return $this->id;
  }

  public function getQuestionId()
  {
    return $this->question_id;
  }

  public function getReponse()
  {
    return $this->reponse;
  }

  //setteur

  public function setId($id)
  {
    $this->id = $id;
  }

  public function setQuestionId($question_id)
  {
    $this->question_id = $question_id;
  }

  public function setReponse($reponse)
  {
    $this->reponse = $reponse;
  }
}
