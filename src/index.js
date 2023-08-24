import './index.scss';
import { createKeyboard } from './js/createKeybord'
import keys from './json/keys.json';
import { Key } from './js/keys';



let lang = 'en',
    caps = false,
    posCurrent = 0,
    holdCaps = false;
  
function changeCaps() {
  const keyCaseLower = document.querySelectorAll('.case-lower'),
        keyCaps = document.querySelectorAll('.caps'),
        keyCapsLock = document.querySelector('.CapsLock');
  keyCapsLock.classList.toggle('pushed');

  if (!caps) {
    keyCaseLower.forEach((key) => {
      key.classList.add('hidden');
    });
    keyCaps.forEach((key) => {
      key.classList.remove('hidden');
    });
    caps = true;
  }
    else {
      keyCaseLower.forEach((key) => {
        key.classList.remove('hidden');
      });
      keyCaps.forEach((key) => {
        key.classList.add('hidden');
      });
      caps = false;
    }
};

function activateCapsShift() {
  const keyCaseLower = document.querySelectorAll('.case-lower'),
        keyCaps = document.querySelectorAll('.caps'),
        keyCapsShift = document.querySelectorAll('.caps-shift'),
        keyShift = document.querySelectorAll('.shift');

  keyCaseLower.forEach((key) => {
    key.classList.add('hidden');
  });
  keyCaps.forEach((key) => {
    key.classList.add('hidden');
  });
  keyCapsShift.forEach((key) => {
    key.classList.remove('hidden');
  });
  keyShift.forEach((key) => {
    key.classList.add('hidden');
  })
};

function disableCapsShift() {
  const keyCaps = document.querySelectorAll('.caps');
  const keyCapsShift = document.querySelectorAll('.caps-shift');

  keyCapsShift.forEach((key) => {
    key.classList.add('hidden');
  });
  keyCaps.forEach((key) => {
    key.classList.remove('hidden');
  });
};


function activateShift() {
  const keyCaseLower = document.querySelectorAll('.case-lower');
  const keyShift = document.querySelectorAll('.shift');

  keyCaseLower.forEach((key) => {
    key.classList.add('hidden');
  });
  keyShift.forEach((key) => {
    key.classList.remove('hidden');
  });
};

function disableShift() {
  const keyCaseLower = document.querySelectorAll('.case-lower');
  const keyShift = document.querySelectorAll('.shift');

  keyShift.forEach((key) => {
    key.classList.add('hidden');
  });
  keyCaseLower.forEach((key) => {
    key.classList.remove('hidden');
  });
};

function changeLang() {
  const keyEn = document.querySelectorAll('.lang-en'),
        keyRu = document.querySelectorAll('.lang-ru');

  if (lang === 'en') {
      lang = 'ru';
  } else {
    lang = 'en';
  }
  keyEn.forEach((key) => {
    key.classList.toggle('hidden');
  })
  keyRu.forEach((key) => {
    key.classList.toggle('hidden');
  });
};


function concatText(start, text, symbol) {
  posCurrent += 1;
  let first = text.slice(0, start);
  const last = text.slice(start, text.length);
  first += symbol;

  const textInArea = first + last;
  return textInArea;
}

function writeKeyboard(code) {
  const textArea = document.querySelector('.textarea');
  const findKey = document.querySelector(`.${code}`);
  let symbol = findKey.innerText;
  console.log(symbol);
  if (code === 'Space') {
    symbol = " ";
  }

  const start = posCurrent;
  textArea.value = concatText(start, textArea.value, symbol);
  textArea.setSelectionRange(posCurrent, posCurrent);
}

function writeEnter() {
  const textArea = document.querySelector('.textarea');
  let start = posCurrent;
  const symbol = '\n';
  textArea.value = concatText(start, textArea.value, symbol);
  textArea.setSelectionRange(posCurrent, posCurrent);
}

function writeTab() {
  const textArea = document.querySelector('.textarea');
  let start = posCurrent;
  const symbol = '\t';
  textArea.value = concatText(start, textArea.value, symbol);
  textArea.setSelectionRange(posCurrent, posCurrent);
}

function writeBackspace() {
  const textArea = document.querySelector('.textarea');
  let start = posCurrent;
  const text = textArea.value;

  if (posCurrent >= 1) {
    const first = text.slice(0, start - 1);
    const last = text.slice(start, text.length);
    const textInArea = first + last;
    textArea.value = textInArea;
    posCurrent -= 1;
    textArea.setSelectionRange(posCurrent, posCurrent);
  }
}

function writeDelete() {
  const textArea = document.querySelector('.textarea');
  const text = textArea.value;
  const start = posCurrent;

  if (posCurrent <= text.length) {
    const first = text.slice(0, start);
    const last = text.slice(start + 1, text.length);
    const textInArea = first + last;
    textArea.value = textInArea;
    textArea.setSelectionRange(posCurrent, posCurrent);
  }
}

document.addEventListener('keydown', (event) => {
  const textArea = document.querySelector('.textarea');
  textArea.focus();
  event.preventDefault();
  const activeKey = document.querySelector(`.${event.code}`);
  activeKey.classList.add('active');
  const symbolCode = event.code;
  console.log(symbolCode);

  if( event.key === 'Alt') {
    if ( event.key === 'Alt' && event.ctrlKey ) {
      changeLang();
    }
  } else if( event.key === 'Control') {
    if ( event.key === 'Control' && event.altKey ) {
      changeLang();
    }
  } else if ( !caps && event.code === 'CapsLock' && event.shiftKey && !holdCaps) {
    caps = false;
    holdCaps = true;
    changeCaps();
    activateCapsShift();

  } else if ( caps && event.code === 'CapsLock' && event.shiftKey && !holdCaps) {
    holdCaps = true;
    caps = true;
    changeCaps();
    disableCapsShift();
    activateShift();

  } else if (  event.code === 'CapsLock' && !event.shiftKey && !holdCaps) {
    holdCaps = true;
    changeCaps();

  } else if ( caps && event.key === 'Shift') {
    activateCapsShift();
  } else if (  event.key === 'Shift') {
    activateShift();
  } else if ( event.code === 'Enter' ) { 
    writeEnter();
  } else if ( event.code === 'Tab' ) {
    writeTab();
  } else if ( event.code === 'Backspace' ) {
    writeBackspace();
  } else if ( event.code === 'Delete' ) {
    writeDelete();
  } else if (event.code !== 'MetaLeft' && event.code !== 'CapsLock') {
    writeKeyboard(symbolCode);
  }
});

document.addEventListener('keyup', (event) => {
  const textArea = document.querySelector('.textarea');
  textArea.focus();
  const activeKey = document.querySelector(`.${event.code}`);
  activeKey.classList.remove('active');

  if (event.code === 'CapsLock') {
    holdCaps = false;
  }
  if ( !caps && event.key === 'Shift') {
    disableShift();
  } else if ( caps && event.key === 'Shift') {
    disableCapsShift();
  }
});

function writeScreen(symbol) {
  const textArea = document.querySelector('.textarea');
  let symbolScreen = symbol;

  if ( symbolScreen === '') {
    symbolScreen = ' ';
  }
  const start = posCurrent;
  textArea.value = concatText(start, textArea.value, symbolScreen);
  textArea.setSelectionRange(posCurrent, posCurrent);

};

document.addEventListener('mousedown', (event) => {
  const symbol = event.target.innerText;
  console.log(symbol);
  if ( !caps && symbol === 'CapsLock' && event.shiftKey )  {
    changeCaps();
    activateCapsShift();
  } else if ( caps && symbol === 'CapsLock' && event.shiftKey )  {
    disableCapsShift();
    changeCaps();
    activateShift();
  } else if ( !caps && symbol === 'Shift' ) {
    activateShift();
  } else if ( caps && symbol === 'Shift' )  {
    activateCapsShift();
  }
});

document.addEventListener('mouseup', (event) => {
  const textArea = document.querySelector('.textarea');
  textArea.focus();

  const allKeys = document.querySelectorAll('.key');
  const symbol = event.target.innerText;
  if ( event.target === textArea ) {
    posCurrent = textArea.selectionStart;
  }
  if ( caps && symbol === 'CapsLock' && event.shiftKey ) {
    disableCapsShift();
  } else if ( !caps && symbol === 'CapsLock' && event.shiftKey) {
    disableShift();
  } else if ( !caps && symbol === 'Shift' ) {
    disableShift();
  } else if ( caps && symbol === 'Shift' ) {
    disableCapsShift();
  } else if ( symbol === 'CapsLock') {
    changeCaps();
  } else if ( symbol === 'Enter' ) {
    writeEnter();
  } else if ( symbol === 'Tab' ) {
    writeTab();
  } else if ( symbol === 'Backspace' ) {
    writeBackspace();
  } else if ( symbol === 'Delete' ) {
    writeDelete();
  } else if ( symbol === 'Alt' && event.ctrlKey ) {
    changeLang();
  } else if ( symbol === 'Ctrl' && event.altKey ) {
    changeLang();
  } else if ( symbol !== 'Ctrl' && symbol !== 'Win' && symbol !== 'Alt' && symbol !== 'Shift' ) {
    allKeys.forEach((key) => {
      if ( key.contains(event.target) ) {
        writeScreen(symbol);
      }
    });
  }
});


function generateKeys(arr) {
  const arrKeys = [];
  arr.forEach((key) => { 
    arrKeys.push(new Key(key));
  });

  return arrKeys;
};

function createKeys() {
  const keyboardKeysArr = [];
  keyboardKeysArr.push(...keys)

  const keyboardLine = document.querySelector('.keyboard-line');
  generateKeys(keyboardKeysArr).forEach((key) => {
    keyboardLine.append(key.createKey());
  });
};

window.onload = function load() {
  createKeyboard();
  createKeys()
};

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    if ( lang === 'ru' ) {
      changeLang();
    }
  }
}

window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage);

