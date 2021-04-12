// write a function that prints the word "pong!"
// get the input from a user
// if the user enters "ping" call the function
// otherwise give them a funny insult.
// function declarations
function pingpong() {
  window.alert('pong!');
}

// program body
let user1 = window.prompt('Please write ping');

if (user1 === 'ping' || user1 === 'Ping' || user1 === 'PING') {
  pingpong();
} else {
  window.alert('Piss!!!!');
}
