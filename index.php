<?php
include "php/database.php";
$a = new Database('127.0.0.1', 'root','', 'sklad');
$a->setdata("data");
$a->connect();
echo $a->toJson("zbozi");
$a->closeDatabase();


?>