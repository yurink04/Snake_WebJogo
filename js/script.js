const canvas = document.querySelector('canvas'); // seleciona o canvas
const ctx = canvas.getContext('2d'); //define que o canvas é 2d

const size = 30; // tamanho

const snake = [ // snake array - criação do corpo da cobra
    { x: 200, y: 200 },
    { x: 230, y: 200 },
    { x: 260, y: 200 },
    { x: 290, y: 200 },

];

const drawSnake = () => {
    ctx.fillStyle = '#ddd'; // cor
    snake.forEach((part, index) => {

        if(index ==snake.length-1){
            ctx.fillStyle = 'white'; // faz com que o ultimo elemento verificado no array seja branco
        }

        ctx.fillRect(part.x, part.y, size, size); // desenha a cobra
    });
};




let direction 

const moveSnake = () => {

    if(!direction ) return; // se não houver direção, a cobra não se move

    const head = snake[snake.length(-1)]; // verifica a cabeça da cobra

    if (direction == 'right') {
        snake.push({ x: head.x + size, y: head.y}); // move para direta
    }
    if (direction == 'left') {
        snake.push({ x: head.x - size, y: head.y}); // move para esquerda
    }
    if (direction == 'up') {
        snake.push({ x: head.x, y: head.y - size}); // move para cima
    }
    if (direction == 'down') {
        snake.push({ x: head.x, y: head.y + size}); // move para baixo
    }

    snake.shift(); // remove o primeiro elemento do array
}





// chama a função num loop

setInterval(() =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpa o canvas

    drawSnake(); //desenha a cobra 
    moveSnake(); // move a cobra
}, 300)

