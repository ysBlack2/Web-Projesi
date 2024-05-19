<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $fname = $_POST['pfname'];
    $lname = $_POST['plname'];
    $gender = $_POST['gender'];
    $phone = $_POST['pphone'];
    $email = $_POST['pemail'];
    $education = $_POST['pselect'];
    $reason = $_POST['pdatalist'];
    $exams = isset($_POST['exam']) ? (array)$_POST['exam'] : array(); 
    $message = $_POST['ptxtarea'];

    
    echo "First Name: $fname<br>";
    echo "Last Name: $lname<br>";
    echo "Gender: $gender<br>";
    echo "Phone: $phone<br>";
    echo "Email: $email<br>";
    echo "Education Level: $education<br>";
    echo "Reason for Contacting: $reason<br>";
    echo "Exams Entered: ";
    if (!empty($exams)) {
        echo implode(", ", $exams); 
    } else {
        echo "None"; 
    }
    echo "<br>";
    echo "Message: $message<br>";
}
?>
