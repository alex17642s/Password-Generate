btn = document.querySelector('#btn')
password = document.querySelector('#inPutPass')

function generateCode(lenght = 16) {
  var phrase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&_-=%*!?£€¥¢^¡'
  var pass = ''

  for (var x = 0; x < lenght; x++) {
    pass += phrase[Math.floor(Math.random() * phrase.length)];
  }

  return pass
}

btn.addEventListener('click', () =>
{
  password.value = generateCode();
});