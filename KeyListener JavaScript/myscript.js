function buttonClicked() {
    body.innerHTML += `Hallo`;
}

let KEY_W;
let KEY_A;
let KEY_S;
let KEY_D;

document.addEventListener('keydown', event => {
    var code = event.code;
    switch(code) {
        case 'KeyW': 
            KEY_W = true;
            body.innerHTML += `W Pressed! `;
            break;
        case 'KeyA':
            KEY_A = true;
            body.innerHTML += `A Pressed! `;
            break;
        case 'KeyS': 
            KEY_S = true;
            body.innerHTML += `S Pressed! `;
            break;
        case 'KeyD':
            KEY_D = true;
            body.innerHTML += `D Pressed! `;
            break;
    }
}, false);