<?php 
$protocol = "HTTP/1.0";
if ( "HTTP/1.1" == $_SERVER["SERVER_PROTOCOL"] )
$protocol = "HTTP/1.1";
header( "$protocol 503 Service Unavailable", true, 503 );
header( "Retry-After: 13-08-2022 10:00" );  
?>
