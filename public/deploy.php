<?php
$secret = 'laconchadelalora'; // The secret you set in the webhook settings
$signature = 'sha1=' . hash_hmac('sha1', file_get_contents('php://input'), $secret);

if (hash_equals($signature, $_SERVER['HTTP_X_HUB_SIGNATURE'])) {
    shell_exec('/var/www/bianco/deploy.sh');
} else {
    http_response_code(403);
}
?>
