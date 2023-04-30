const keyboardDiv = document.createElement('div'),
      keyboardBody = document.createElement('div'),
      keyboardLine = document.createElement('div'),
      keyboardTitle = document.createElement('h1'),
      keyboardText = document.createElement('textarea')

keyboardDiv.className = "keyboard";
keyboardTitle.className = "keyboard-title";
keyboardText.className = "keyboard-text text";
keyboardBody.className = "keyboard-body";
keyboardLine.className = "keyboard-line";
keyboardTitle.textContent = "virtual keyboard";

document.body.prepend(keyboardDiv)
keyboardDiv.append(keyboardTitle);
keyboardDiv.append(keyboardText, keyboardBody);
keyboardBody.append(keyboardLine)