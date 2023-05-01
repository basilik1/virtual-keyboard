const keyboardDiv = document.createElement('div'),
      keyboardBody = document.createElement('div'),
      keyboardLine = document.createElement('div'),
      keyboardTitle = document.createElement('h1'),
      keyboardText = document.createElement('textarea');

keyboardDiv.className = "keyboard";
keyboardTitle.className = "keyboard-title";
keyboardText.className = "keyboard-text text";
keyboardBody.className = "keyboard-body";
keyboardLine.className = "keyboard-line";
keyboardTitle.textContent = "virtual keyboard";

document.body.prepend(keyboardDiv)
keyboardDiv.append(keyboardTitle);
keyboardDiv.append(keyboardText, keyboardBody);
keyboardBody.append(keyboardLine);

const keyboardKeysArr = [
  { data: "data-special", label: '`', value: '`' },
  { data: "data-special", label: '1', value: '1' },
  { data: "data-special", label: '2', value: '2' },
  { data: "data-special", label: '3', value: '3' },
  { data: "data-special", label: '4', value: '4' },
  { data: "data-special", label: '5', value: '5' },
  { data: "data-special", label: '6', value: '6' },
  { data: "data-special", label: '7', value: '7' },
  { data: "data-special", label: '8', value: '8' },
  { data: "data-special", label: '9', value: '9' },
  { data: "data-special", label: '0', value: '0' },
  { data: "data-special", label: '-', value: '-' },
  { data: "data-special", label: '=', value: '=' },
  { label: 'Backspace', value: 'Backspace' },

  { label: 'Tab', value: 'Tab' },
  { data: "data-register", label: 'Q', value: 'q' },
  { data: "data-register", label: 'W', value: 'w' },
  { data: "data-register", label: 'E', value: 'e' },
  { data: "data-register", label: 'R', value: 'r' },
  { data: "data-register", label: 'T', value: 't' },
  { data: "data-register", label: 'Y', value: 'y' },
  { data: "data-register", label: 'U', value: 'u' },
  { data: "data-register", label: 'I', value: 'i' },
  { data: "data-register", label: 'O', value: 'o' },
  { data: "data-register", label: 'P', value: 'p' },
  { data: "data-special", label: '[', value: '[' },
  { data: "data-special", label: ']', value: ']' },
  { data: "data-special", label: '\\', value: '\\'  },
  { label: 'Del', value: 'Del'  },

  {  label: 'Caps Lock', value: 'Caps Lock' },
  {  data: "data-register", label: 'A', value: 'a' },
  {  data: "data-register", label: 'S', value: 's' },
  {  data: "data-register", label: 'D', value: 'd' },
  {  data: "data-register", label: 'F', value: 'f' },
  {  data: "data-register", label: 'G', value: 'g' },
  {  data: "data-register", label: 'H', value: 'h' },
  {  data: "data-register", label: 'J', value: 'j' },
  {  data: "data-register", label: 'K', value: 'k' },
  {  data: "data-register", label: 'L', value: 'l' },
  {  data: "data-special", label: ';', value: ';' },
  {  data: "data-special", label: "'", value: "'" },
  { label: 'Enter', value: 'Enter'},

  {  label: 'shiftLeft', value: 'Shift' },
  {  data: "data-register", label: 'Z', value: 'z' },
  {  data: "data-register", label: 'X', value: 'x' },
  {  data: "data-register", label: 'C', value: 'c' },
  {  data: "data-register", label: 'V', value: 'v' },
  {  data: "data-register", label: 'B', value: 'b' },
  {  data: "data-register", label: 'N', value: 'n' },
  {  data: "data-register", label: 'M', value: 'm' },
  {  data: "data-special", label: ',', value: ',' },
  {  data: "data-special", label: '.', value: '.' },
  {  data: "data-special", label: '/', value: "/" },
  {  label: 'up', value: '↑' },
  {  label: 'shiftRight', value: 'Shift' },

  {  label: 'Ctrl', value: 'Ctrl' },
  {  label: 'Fn', value: 'Fn' },
  {  label: 'Alt', value: 'Alt' },
  {   data: "data-special", label: 'Space', value: ' ' },
  {  label: 'Alt', value: 'Alt' },
  {  label: 'left', value: '←' },
  {  label: 'down', value: '↓' },
  {  label: 'right', value: '→' },
  {  label: 'Ctrl', value: 'Ctrl' }
]
console.log(keyboardKeysArr.length);

for ( let i = 0; i < keyboardKeysArr.length; i++ ) {
  const keyboardKey = document.createElement('button'),
        keyboardSpan = document.createElement('span');
  
  keyboardKey.className = "keyboard-key";
  keyboardSpan.className = "keyboard-span";
  const value = keyboardKeysArr[i].value;
  keyboardSpan.innerHTML = keyboardKeysArr[i].value;

  keyboardKey.setAttribute(keyboardKeysArr[i].data, keyboardKeysArr[i].value.toLowerCase());
  
  keyboardLine.append( keyboardKey);
  keyboardKey.append( keyboardSpan);

  if(keyboardKeysArr[i].label === "Backspace") {
    keyboardKey.classList.add('backspace');
  }
  if(keyboardKeysArr[i].label === "shiftRight") {
    keyboardKey.classList.add('shiftRight');
    keyboardKey.classList.add('shift');
  }
  if(keyboardKeysArr[i].label === "shiftLeft") {
    keyboardKey.classList.add("shiftLeft");
    keyboardKey.classList.add("shift");
  }
  if(keyboardKeysArr[i].label === "Tab") {
    keyboardKey.classList.add('tab');
  }
  if(keyboardKeysArr[i].label === "Enter") {
    keyboardKey.classList.add('enter');
  }
  if(keyboardKeysArr[i].label === "Caps Lock") {
    keyboardKey.classList.add('capsLock');
  }
  if(keyboardKeysArr[i].label === "Ctrl") {
    keyboardKey.classList.add('ctrl');
  }
  if(keyboardKeysArr[i].label === "Fn") {
    keyboardKey.classList.add('fn');
  }
  if(keyboardKeysArr[i].label === "Alt") {
    keyboardKey.classList.add('alt');
  }
  if(keyboardKeysArr[i].label === "Space") {
    keyboardKey.classList.add('space');
  }
  if(keyboardKeysArr[i].label === "left") {
    keyboardKey.classList.add('left');
  }
  if(keyboardKeysArr[i].label === "down") {
    keyboardKey.classList.add('down');
  }
  if(keyboardKeysArr[i].label === "right") {
    keyboardKey.classList.add('right');
  }
  if(keyboardKeysArr[i].label === "up") {
    keyboardKey.classList.add('up');
  }
  const shiftLeft = document.querySelectorAll(".shift")[0];
  const shiftRight = document.querySelectorAll(".shift")[1];


  keyboardKey.addEventListener('click', (e) => {
    let target = e.target;
    let textarea = keyboardText;
    let button = keyboardKeysArr[i];
    textarea.focus();
    

    if ( target.classList.contains("keyboard-key") ) {
      if(button.hasOwnProperty("data")) {
        textarea.value += target.textContent;
      }
    } else {
      if ( target.classList.contains("backspace") ) {
        textarea.value = textarea.value.slice(0, -1);
      }  
    }
    
    
  })

  document.addEventListener('keydown', (e)=> {
    let button = keyboardKeysArr[i];
    
    let textarea = keyboardText;
    textarea.focus();

    if(button) {
      let key = document.querySelectorAll('.keyboard-key');
      key.classList.add('active')
    }
  });


  document.addEventListener("keyup", (e)=> {
    let button = keyboardKeysArr[i];
    if(button) {
      let key = document.querySelectorAll('.keyboard-key');
      key.classList.remove('active');
    }
  });
}










