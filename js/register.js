$.ajax({
 url: 'register.php',
 type: 'POST',
 data: {
 username: $('input[data-role="username"]'),
 password: $('input[data-role="password"]')
 }
});