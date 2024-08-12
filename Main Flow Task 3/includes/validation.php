<?php
    // First include the connection.php file
    include_once "connection.php";

    // Take the username and password variables that my form sends here with the action method.
    // These variables are known here cause the action of the 2nd form points here
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Now I must search in my database through the users table and check if 
    // username AND password belong to a user

    $sql = "SELECT * FROM users WHERE username ='$username' AND password = '$password'; ";
    $result = mysqli_query($connection,$sql);
    $check = mysqli_num_rows($result);

    if($check == 1){ // Found a user
        header("Location: ../SuccessLogin.php");
    }
    else{ // Did not find anything type relevant message to Index.php
        header("Location: ../index.php?UserNOTFound");
    }
    
?>