export class Key {
  constructor({
    key, code, caps, shift, capsShift, keyRu, capsRu, shiftRu, capsShiftRu
  }) {
    this.key = key;
    this.code = code;
    this.caps = caps;
    this.shift = shift;
    this.capsShift = capsShift;
    this.keyRu = keyRu;
    this.capsRu = capsRu;
    this.shiftRu = shiftRu;
    this.capsShiftRu = capsShiftRu;
    }

  createKey() { 
    const key = document.createElement('div');
    key.className = `key ${this.code}`;

    const langEn = document.createElement('div');
    langEn.className = 'lang-en';
    const caselower = document.createElement('span');
    caselower.className = 'case-lower';
    caselower.innerHTML = this.key;
    const caps = document.createElement('span');
    caps.className = 'caps hidden';
    caps.innerHTML = this.caps;
    const shift = document.createElement('span');
    shift.className ='shift hidden';
    shift.innerHTML = this.shift;
    const capsShift = document.createElement('span');
    capsShift.className = 'caps-shift hidden';
    capsShift.innerHTML = this.capsShift;
    
    langEn.append(caselower);
    langEn.append(caps);
    langEn.append(shift);
    langEn.append(capsShift); 
    

    const langRu = document.createElement('div');
    langRu.className = 'lang-ru hidden';
    const caselowerRu = document.createElement('span');
    caselowerRu.className = 'case-lower';
    caselowerRu.innerHTML = this.keyRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps hidden';
    capsRu.innerHTML = this.capsRu;
    const shiftRu = document.createElement('span');
    shiftRu.className ='shift hidden';
    shiftRu.innerHTML = this.shiftRu;
    const capsShiftRu = document.createElement('span');
    capsShiftRu.className = 'caps-shift hidden';
    capsShiftRu.innerHTML = this.capsShiftRu;

    langRu.append(caselowerRu);
    langRu.append(capsRu);
    langRu.append(shiftRu);
    langRu.append(capsShiftRu);
    
    key.append(langEn);
    key.append(langRu);

    return key;
    }
}