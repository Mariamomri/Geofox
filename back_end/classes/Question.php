<?php

class Question
{
  public $id;
  public $question;
  public $answer;
  public $options;

  public function __construct($id, $question, $answer, $options)
  {
    $this->id = $id;
    $this->question = $question;
    $this->answer = $answer;
    $this->options = $options;
  }


  //getteur
  public function getId()
  {
    return $this->id;
  }

  public function getQuestion()
  {
    return $this->question;
  }

  public function getAnswer()
  {
    return $this->answer;
  }

  public function getOptions()
  {
    return $this->options;
  }


  //setteur

  public function setId($id)
  {
    $this->id = $id;
  }

  public function setQuestion($question)
  {
    $this->question = $question;
  }

  public function setAnswer($answer)
  {
    $this->answer = $answer;
  }

  public function setOptions($options)
  {
    $this->options = $options;
  }
}
