// refactor challenge 7 to take an argument, and move the if/else to inside your function body.
// get input from the user
// print the result of the function.

function pingpong(x) {
  if (x === 'ping' || x === 'Ping' || x === 'PING') {
    window.alert(`PONG!`);
  } else {
    window.alert('Piss!!!!');
  }
}

let y = window.prompt('Please write ping');

pingpong(y);
