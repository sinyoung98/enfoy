  let menus = document.querySelectorAll('button');

  let btnAmericano = menus[0];
  let btnCaffelatte = menus[1];

  btnAmericano.onclick = handleClick;
  btnCaffelatte.onclick = handleClick;

function handleClick(event){
   alert(event.target.textContent);
}