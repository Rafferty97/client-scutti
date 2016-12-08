<?php

$form = json_decode(file_get_contents("php://input"));

$body = "<html><body><p>You have a new contact form submission:</p><table><tbody>";

foreach ($form as $key => $value) {
  if ($key == 'errors') continue;
  $body .= "<tr><td><strong>$key</strong></td><td>$value</td></tr>";
}

$body .= "</tbody></table><p>SCUTTI</p></body></html>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail("enquiries@scutti.com.au", "Form Submission | Scutti", $body, $headers);
