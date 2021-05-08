// https://gist.github.com/minaminfo/86c8db246ac75063867043af86d21b95
// copy to clipboard
const d = document;
const tempCopyInput = d.createElement('input');
d.body.appendChild(tempCopyInput);
tempCopyInput.style.position = 'fixed';
tempCopyInput.style.top = '-1000px';
// copy to clipboard function
const copyToCB = () => {
  tempCopyInput.select();
  d.execCommand('copy');
};

// Hugo outputs code `div` with `highlight` class name.
// copy from highlight container
let highlight = d.querySelectorAll('.highlight'),// or any div containing code stuff
    copyIcon = d.createElement('button');
copyIcon.innerHTML = 'copy to clipboard';

highlight.forEach((hl) => {
  hl.appendChild(copyIcon.cloneNode([true]));
  hl.children[1].addEventListener('click',() => {
  let codeText = hl.childNodes[0].textContent;
  tempCopyInput.setAttribute('value', codeText);
    copyToCB();
  })
})
