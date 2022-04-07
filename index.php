<?php
include "php/database.php";
$a = new Database('127.0.0.1', 'root','', 'mydb');
$a->setdata("data");
$a->connect();
echo $a->toJson("zbozi", "produkty");
$a->closeDatabase();


?>