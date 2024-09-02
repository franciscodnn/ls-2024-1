function handleKeyUp(event) {
    document.querySelector('p').innerHTML = event.key;

    if(event.key == 'Escape') {
        document.querySelector('html').removeEventListener('keyup', handleKeyUp);
    }
}

document.querySelector('html').addEventListener('keyup', handleKeyUp);