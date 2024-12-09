<?php
    header('Content-Type: application/json');

    $r = isset($_GET['r']) ? (float) $_GET['r'] : 0;

    if ($r < 0) {
        http_response_code(400);
        echo "";
        exit;
    }

    http_response_code(200);

    $area = ($r^2) * 3.141;
    $circumference = 6.283 * $r;

    $response = [
        'results' => [
            'area' => $area,
            'circumference' => $circumference
        ]
    ];

    echo json_encode($response);
?>