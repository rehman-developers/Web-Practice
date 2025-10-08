<!-- dashboard.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
    <script src="jquery.min.js"></script>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Invoice ID</th>
                <th>Customer Name</th>
                <th>Sold Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $query = "SELECT * FROM invoices";
            $result = $conn->query($query);
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>{$row['invoice_id']}</td>
                        <td>{$row['customer_name']}</td>
                        <td>{$row['sold_date']}</td>
                        <td>
                            <button class='edit' data-id='{$row['invoice_id']}'>Edit</button>
                            <button class='delete' data-id='{$row['invoice_id']}'>Delete</button>
                        </td>
                    </tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>