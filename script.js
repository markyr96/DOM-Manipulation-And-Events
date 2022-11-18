const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
container.appendChild(para);

const header = document.createElement('h3');
header.textContent = "I’m a blue h3!";
header.setAttribute('style','color:blue;')
container.appendChild(header);

const div = document.createElement('div');
div.setAttribute('style','border:5px solid black; background:pink;')
const header2 = document.createElement('h1');
header2.textContent = "I’m in a div";
const para2 = document.createElement('p');
para2.textContent = "ME TOO!";
div.appendChild(header2);
div.appendChild(para2);
container.appendChild(div);