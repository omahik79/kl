<?php
$file = fopen('presses.txt', 'r');
if ($file) {
  while (($presses = fgets($file)) !== false) {
    $presses = json_decode($presses, 1);
    foreach ($presses as $p) {
      printf("[%s] %s<br>", date("Y-m-d H:i:s", $p['t']), $p['k']);
    }
  }
  fclose($file);
} else {
  echo "Error reading file!";
}
?>
