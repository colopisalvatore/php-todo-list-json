<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With");

$tasks = file_get_contents('./assets/data/data.json');
$tasks_todo = json_decode($tasks);

header('Content-type: application/json');
echo json_encode($tasks_todo);