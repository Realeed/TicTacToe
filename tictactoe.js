addEventListener('DOMContentLoaded', () => {
    document.body.style.userSelect = 'none'
    for (let i = 0; i < 9; i++) {
        let button = document.getElementsByTagName('button');
        let td = document.getElementsByTagName('td');
        button[i].onclick = () => {
            td[i].innerHTML = 'X';
            td[i].style.fontSize = '50px';
            td[i].style.textAlign = 'center';
        };
        
    }
})