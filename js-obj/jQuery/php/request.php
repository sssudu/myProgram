<?php
    header( 'Content-Type:text/html;charset=utf-8 ');
    $city = $_GET["city"];
    $url='http://api.jisuapi.com/weather/query?appkey=dd87100f70330bf1&city='.$city;
    $html = file_get_contents($url);
    echo $html;
?>