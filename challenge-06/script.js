// write a program that accepts two user inputs and a math operator (+, -, *, /) and calculate the result based on the provided inputs
// // print the result

let x = window.prompt('First Number');
let y = window.prompt('*,/,+,-');
let z = window.prompt('Second Number');

switch (y) {
  case '*':
    window.alert(
      `Awesome, you selected ${x} ${y} ${z}, which equals ${Number(x * z)}`
    );
    break;
  case '/':
    window.alert(
      `Awesome, you selected ${x} ${y} ${z}, which equals ${Number(x / z)}`
    );
    break;
  case '+':
    window.alert(
      `Awesome, you selected ${x} ${y} ${z}, which equals ${Number(+x + +z)}`
    );
    break;
  case '-':
    window.alert(
      `Awesome, you selected ${x} ${y} ${z}, which equals ${Number(x - z)}`
    );
    break;
}
