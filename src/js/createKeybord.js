export function createKeyboard() {


const body = document.querySelector('body'),
			container = document.createElement('div'),
			title = document.createElement('h1'),
			description = document.createElement('p'),
			language = document.createElement('p'),
			textarea = document.createElement('textarea'),
			keyboard = document.createElement('div'),
			keyboardLine = document.createElement('div');

			container.className = "container";
			title.className = "title";
			title.textContent = "Virtual keyboard";
			description.className = "description";
			description.textContent = "Operating system Windows";
			language.className = "language";
			language.textContent = "Language switch Ctrl + Alt";
			textarea.className = "textarea";
			textarea.textContent = "";
			keyboard.className = "keyboard";
			keyboardLine.className = "keyboard-line";

			keyboard.append(keyboardLine);
			container.append(title);
			container.append(description);
			container.append(language);
			container.append(textarea);
			container.append(keyboard);
			body.append(container);

			return body;

}

