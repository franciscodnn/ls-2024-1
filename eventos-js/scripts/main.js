function handleButtonClick(param){
    alert(param);
}

function handleDoubleClick(){
    alert('Clicado duas vezes');
}

document.querySelector('#btn-1').addEventListener('click', function(){
    alert('Botão clicado');
});

document.querySelector('h1').addEventListener('dblclick', function(){
    handleDoubleClick();
});

function changeColor(color){
    const h1 = document.querySelector('h1');
    h1.style.color = color;
}

document.querySelector('#btn-red').addEventListener('click', () => {
    changeColor('red');
});

document.querySelector('#btn-green').addEventListener('click', () => {
    changeColor('green');
})

window.handleButtonClick = handleButtonClick;
window.handleDoubleClick = handleDoubleClick;
