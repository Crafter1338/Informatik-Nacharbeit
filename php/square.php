<?php
    header('Content-Type: application/json');

    $a = isset($_GET['a']) ? (float) $_GET['a'] : 0;
    $b = isset($_GET['b']) ? (float) $_GET['b'] : 0;

    if ($a < 0 || $b < 0) {
        http_response_code(400);
        echo "";
        exit;
    }

    http_response_code(200);

    $area = $a * $b;
    $circumference = 2 * ($a + $b);

    $response = [
        'results' => [
            'area' => $area,
            'circumference' => $circumference
        ]
    ];

    echo json_encode($response);
?>