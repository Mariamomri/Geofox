<?php
// Test per verificare accessibilità dell'API quiz.php

$response = file_get_contents('http://localhost/Geofox/back_end/api/quiz.php');

if ($response === FALSE) {
  echo "API inaccessible";
} else {
  echo "API accessible : " . $response;
}
