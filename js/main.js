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
  { label: '`', value: '`' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '0', value: '0' },
  { label: '-', value: '-' },
  { label: '=', value: '=' },
  { label: 'Backspace', value: 'Backspace' },

  { label: 'Tab', value: 'Tab' },
  { label: 'Q', value: 'q' },
  { label: 'W', value: 'w' },
  { label: 'E', value: 'e' },
  { label: 'R', value: 'r' },
  { label: 'T', value: 't' },
  { label: 'Y', value: 'y' },
  { label: 'U', value: 'u' },
  { label: 'I', value: 'i' },
  { label: 'O', value: 'o' },
  { label: 'P', value: 'p' },
  { label: '[', value: '[' },
  { label: ']', value: ']' },
  {  label: '\\', value: '\\'  },
  {  label: 'Del', value: 'Del'  },

  {  label: 'Caps Lock', value: 'Caps Lock' },
  {  label: 'A', value: 'a' },
  {  label: 'S', value: 's' },
  {  label: 'D', value: 'd' },
  {  label: 'F', value: 'f' },
  {  label: 'G', value: 'g' },
  {  label: 'H', value: 'h' },
  {  label: 'J', value: 'j' },
  {  label: 'K', value: 'k' },
  {  label: 'L', value: 'l' },
  {  label: ';', value: ';' },
  {  label: "'", value: "'" },
  { label: 'Enter', value: 'Enter' },

  {  label: 'shiftLeft', value: 'Shift' },
  // {  label: '\\', value: '\\' },
  {  label: 'Z', value: 'z' },
  {  label: 'X', value: 'x' },
  {  label: 'C', value: 'c' },
  {  label: 'V', value: 'v' },
  {  label: 'B', value: 'b' },
  {  label: 'N', value: 'n' },
  {  label: 'M', value: 'm' },
  {  label: ',', value: ',' },
  {  label: '.', value: '.' },
  {  label: '/', value: "/" },
  {  label: 'up', value: '↑' },
  {  label: 'shiftRight', value: 'Shift' },

  {  label: 'Ctrl', value: 'Ctrl' },
  {  label: 'Fn', value: 'Fn' },
  {  label: 'Alt', value: 'Alt' },
  {  label: 'Space', value: '' },
  {  label: 'Alt', value: 'Alt' },
  {  label: 'left', value: '←' },
  {  label: 'down', value: '↓' },
  {  label: 'right', value: '→' },
  {  label: 'Ctrl', value: 'Ctrl' },
];
console.log(keyboardKeysArr.length);

for ( let i = 0; i < keyboardKeysArr.length; i++ ) {
  const keyboardKey = document.createElement('button'),
        keyboardSpan = document.createElement('span');
  
  keyboardKey.className = "keyboard-key";
  keyboardSpan.className = "keyboard-span";
  keyboardSpan.innerHTML = keyboardKeysArr[i].value;

  keyboardLine.append( keyboardKey);
  keyboardKey.append( keyboardSpan);
  
  if(keyboardKeysArr[i].label === "Backspace") {
    keyboardKey.classList.add('backspace');
  }
  if(keyboardKeysArr[i].label === "shiftRight") {
    keyboardKey.classList.add('shiftRight');
  }
  if(keyboardKeysArr[i].label === "shiftLeft") {
    keyboardKey.classList.add('shiftLeft');
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
  if(keyboardKeysArr[i].label === "Space") {
    keyboardKey.classList.add('space');
  }
  

}