# Modal Challenge

<!-- [Visit demo](https://jdwillemse.github.io/modal-challenge/) -->

## Testing

Install dependencies

```bash
npm install
```

run locally

```bash
npm run build && npm run preview
```

## Tech stack

I chose React, TypeScript, Vite & Vitest, and Zustand as the libraries to work with because I've never worked with Vite, Vitest, or Zustand before and having this opportunity to test new technology I decided to take it. My initial conversation with Anuj also revealed that this is the tech direction that you are heading in.

## Approach

The styling is rudimentary as I'm much better at implementing designs than creating them :)

Only unit tests are used for this test whereas for a production projects I would have opted for additional end-to-end testing of this component. The reason I did not do so here is that I ran out of time while also struggling with the setting up of Cypress with Vite. This being the first time I tried this is took a lot of time with limited success.

I ended up taking approx. 7 hours for this challenge. I realise this is quite a long time for a relatively simple task. I spent a good chunk of time researching accessibility best practices for this component as I've not been coding for a while and needed a refresher and since this component has quite complicated requirements.

The challenge instructions had me second guessing myself about whether to implement a component that literally complies with your wording—using a header and footer inside the modal—or following best practices. I implemented both and then changed my mind using only the one I believe is best.

## Research

- https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
- https://shoptalkshow.com/552/
- https://www.scottohara.me/blog/2023/01/26/use-the-dialog-element.html
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- https://dev.to/iam_timsmith/dialogs-vs-modals-is-there-a-difference-210k
- https://stackoverflow.com/questions/43186545/header-footer-or-main-element-inside-dialog-element-in-html5

---
