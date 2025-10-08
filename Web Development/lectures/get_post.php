    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Data Table</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>

        <div class="container m-5">
            <div class="row">
           
                <div class="col-6">
                <h5 class="text-center text-primary mb-5" >Wel Come to Data Page</h5>
                <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td><?php echo $_POST['fname']; ?> </td>
                <td><?php echo $_POST['lname']; ?></td>
                <td><?php echo $_POST['phone']; ?></td>
                </tr>
            </tbody>
            </table>
                </div>
            </div>
        </div>

    
    </body>
    </html>





 
