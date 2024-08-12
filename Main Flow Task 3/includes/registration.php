<?php
    // At first include the connection.php file with the connection details
    include_once "connection.php";

    // Now take the variables username and password that the user entered and store into database
    // These variables are known here cause the action of the 2nd form points here
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Before inserting new user must check if username is already taken
    $if_exists = "SELECT * FROM users WHERE username = '$username';";
    $check  = mysqli_num_rows(mysqli_query($connection,$if_exists));
    if($check==1){ // found one user with same username
        header("Location: ../index.php?This_user_already_exists");
    }
    else{ // unique user so we can proceed
        $sql = "INSERT INTO users (username,password) VALUES ('$username','$password');";
        mysqli_query($connection,$sql);
        header("Location: ../SuccessSignup.php");
    }

?>