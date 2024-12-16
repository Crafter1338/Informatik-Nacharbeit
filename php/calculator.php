<?php
header('Content-Type: application/json');

$type = isset($_GET['type']) ? $_GET['type'] : null;
$response = [
    'results' => []
];

if ($type == "square") {
    $a = $_GET["a"];
    $b = $_GET["b"];

    if ($a <= 0 || $b <= 0) {
        http_response_code(400);
    } else {
        $area = $a * $b;
        $circumference = 2 * ($a + $b);

        $response['results'] = [
            'area' => $area,
            'circumference' => $circumference
        ];
    }
} elseif ($type == "circle"){
    $r = $_GET["r"];

    if ($r <= 0) {
        http_response_code(400);
    } else {
        $area = 3.14159 * ($r * $r);   //r^2 * pi
        $circumference = 6.28318 * $r; //2pi * r

        $response['results'] = [
            'area' => $area,
            'circumference' => $circumference
        ];
    }

} else { http_response_code(400); }

// Return the response as JSON
echo json_encode($response);