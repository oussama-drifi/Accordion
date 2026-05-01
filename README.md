# Accordion

A lightweight accordion component built with vanilla JavaScript and CSS — no frameworks, no build step.

**[Live Demo](https://oussama-drifi.github.io/Accordion/)**

## Features

- Smooth expand/collapse animation
- Keyboard accessible (`Enter` / `Space` to toggle)
- Bootstrap Icons via CDN (no local assets)
- Pure CSS transitions — no JS animation libraries

## Usage

Instantiate `Accordion` with an object where keys are questions and values are answers, then call `render()` with a target container:

```js
const accordion = new Accordion({
    "Question one?": "Answer one.",
    "Question two?": "Answer two."
});

accordion.render(document.body);
```

## Stack

- Vanilla JavaScript (ES6+)
- CSS (flat, no preprocessor)
- [Bootstrap Icons](https://icons.getbootstrap.com/) via CDN
- [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)
