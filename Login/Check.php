<?php
session_start();

$kullanci = 'g231210559@sakarya.edu.tr';
$sifre = 'g231210559';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST["username"];
    $password = $_POST["password"];

    
    if ($username === $kullanci && $password === $sifre) {
        
        $_SESSION['username'] = $username;
        echo 'Welcome Yusuf Demir!';
        
        exit;
    } else {
        echo 'Username or Password is incorrect! Please try again.';
        
        exit;
    }
}

?>