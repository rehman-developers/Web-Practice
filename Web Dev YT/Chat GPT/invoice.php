// generate_invoice.php
<?php
include 'config.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $item_code = $_POST['item_code'];
    $item_name = $_POST['item_name'];
    $unit_price = $_POST['unit_price'];
    $selling_price = $_POST['selling_price'];
    $customer_name = $_POST['customer_name'];
    $sold_date = $_POST['sold_date'];

    $query = "INSERT INTO invoices (item_code, item_name, unit_price, selling_price, customer_name, sold_date) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('ssddss', $item_code, $item_name, $unit_price, $selling_price, $customer_name, $sold_date);
    $stmt->execute();

    echo "Invoice generated successfully";
}
?>