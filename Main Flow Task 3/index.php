
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Home</title>
</head>
<body>
    <div class="container big-div">
        <div class="row">
            <div class="col-lg-6 my-3 ">
                <form class="form-style" action="includes/validation.php" method="POST">
                    <h3>Login</h3>
                    <label for="username">Username</label>
                    <input type="text" name="username" required>
                    <label for="password">Password</label>
                    <input type="password" name="password" required>
                    <button class="btn btn-primary" type="submit" name="login">Login</button>
                </form>
            </div>
            
            <div class="col-lg-6 my-3 ">
                
                <form class="form-style" action="includes/registration.php" method="POST">
                    <h3>Signup</h3>
                    
                    <label for="username">Username</label>
                    <input type="text" name="username" required>
                    <label for="password">Password</label>
                    <input type="password" name="password" required>
                    <button class="btn btn-primary" type="submit" name="login">Signup</button>
                </form>
                
            </div>
        </div>   
    </div>

    
  
</body>
</html>