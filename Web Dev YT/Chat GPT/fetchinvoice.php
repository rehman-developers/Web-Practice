// fetch_invoice.php
<?php
include 'config.php'; // Include database connection

$item_code = $_GET['item_code'];

$query = "SELECT * FROM invoices WHERE item_code = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('s', $item_code);
$stmt->execute();
$result = $stmt->get_result();

$invoice = $result->fetch_assoc();
echo json_encode($invoice);
?>