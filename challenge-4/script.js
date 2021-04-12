let x = window.prompt(
  'Hello please enter a string with an uppercase A somewhere in it'
);

if (x.match('A')) {
  window.alert('You get an A!');
} else {
  window.alert('Fail');
}
