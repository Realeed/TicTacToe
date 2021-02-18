addEventListener('DOMContentLoaded', () => {
    document.body.style.userSelect = 'none';
    document.body.style.backgroundImage = 'url(tic.jpg)';
    document.body.style.backgroundSize = '100%';
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = 'tac.png';
    document.head.append(icon)
    document.title = 'TicTacToe';
    for (let i = 0; i < 9; i++) {
        let button = document.getElementsByTagName('button');
        button[i].onclick = () => {
            button[i].innerHTML = 'X';
            button[i].style.fontSize = '50px';
            button[i].style.textAlign = 'center';
            button[i].style.color = 'black';
            button[i].disabled = 'true';
            for (let i = 0; i < 9; i++) {
                button[i].onclick = () => {
                    button[i].innerHTML = 'O';
                    button[i].style.fontSize = '50px';
                    button[i].style.textAlign = 'center';
                    button[i].style.color = 'black';
                    button[i].disabled = 'true';
                    for (let i = 0; i < 9; i++) {
                        button[i].onclick = () => {
                            button[i].innerHTML = 'X';
                            button[i].style.fontSize = '50px';
                            button[i].style.textAlign = 'center';
                            button[i].style.color = 'black';
                            button[i].disabled = 'true';
                            for (let i = 0; i < 9; i++) {
                                button[i].onclick = () => {
                                    button[i].innerHTML = 'O';
                                    button[i].style.fontSize = '50px';
                                    button[i].style.textAlign = 'center';
                                    button[i].style.color = 'black';
                                    button[i].disabled = 'true';
                                    for (let i = 0; i < 9; i++) {
                                        button[i].onclick = () => {
                                            button[i].innerHTML = 'X';
                                            button[i].style.fontSize = '50px';
                                            button[i].style.textAlign = 'center';
                                            button[i].style.color = 'black';
                                            button[i].disabled = 'true';
                                            if (button[0].innerHTML == button[1].innerHTML && button[1].innerHTML == button[2].innerHTML && button[0].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                winner.style.backgroundSize = '100%';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                                let replay = document.createElement('button');
                                                replay.innerHTML = 'Rematch';
                                                replay.style.textAlign = 'center';
                                                replay.style.color = 'gray';
                                                replay.style.fontSize = '80px';
                                                replay.style.cursor = 'pointer';
                                                document.body.append(replay);
                                                replay.onclick = () => {
                                                    window.location.reload();
                                                }
                                            }
                                            for (let i = 0; i < 9; i++) {
                                                button[i].onclick = () => {
                                                    button[i].innerHTML = 'O';
                                                    button[i].style.fontSize = '50px';
                                                    button[i].style.textAlign = 'center';
                                                    button[i].style.color = 'black';
                                                    button[i].disabled = 'true';
                                                    if (button[0].innerHTML == button[1].innerHTML && button[1].innerHTML == button[2].innerHTML && button[0].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                        winner.style.backgroundSize = '100%';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                        let replay = document.createElement('button');
                                                        replay.innerHTML = 'Rematch';
                                                        replay.style.textAlign = 'center';
                                                        replay.style.color = 'gray';
                                                        replay.style.fontSize = '80px';
                                                        replay.style.cursor = 'pointer';
                                                        document.body.append(replay);
                                                        replay.onclick = () => {
                                                            window.location.reload();
                                                        }
                                                    }
                                                    for (let i = 0; i < 9; i++) {
                                                        button[i].onclick = () => {
                                                            button[i].innerHTML = 'X';
                                                            button[i].style.fontSize = '50px';
                                                            button[i].style.textAlign = 'center';
                                                            button[i].style.color = 'black';
                                                            button[i].disabled = 'true';
                                                            if (button[0].innerHTML == button[1].innerHTML && button[1].innerHTML == button[2].innerHTML && button[0].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                winner.style.backgroundSize = '100%';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                                let replay = document.createElement('button');
                                                                replay.innerHTML = 'Rematch';
                                                                replay.style.textAlign = 'center';
                                                                replay.style.color = 'gray';
                                                                replay.style.fontSize = '80px';
                                                                replay.style.cursor = 'pointer';
                                                                document.body.append(replay);
                                                                replay.onclick = () => {
                                                                    window.location.reload();
                                                                }
                                                            }
                                                            for (let i = 0; i < 9; i++) {
                                                                button[i].onclick = () => {
                                                                    button[i].innerHTML = 'O';
                                                                    button[i].style.fontSize = '50px';
                                                                    button[i].style.textAlign = 'center';
                                                                    button[i].style.color = 'black';
                                                                    button[i].disabled = 'true';
                                                                    if (button[0].innerHTML == button[1].innerHTML && button[1].innerHTML == button[2].innerHTML && button[0].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                        winner.style.backgroundSize = '100%';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                        let replay = document.createElement('button');
                                                                        replay.innerHTML = 'Rematch';
                                                                        replay.style.textAlign = 'center';
                                                                        replay.style.color = 'gray';
                                                                        replay.style.fontSize = '80px';
                                                                        replay.style.cursor = 'pointer';
                                                                        document.body.append(replay);
                                                                        replay.onclick = () => {
                                                                            window.location.reload();
                                                                        }
                                                                    }
                                                                    for (let i = 0; i < 9; i++) {
                                                                        button[i].onclick = () => {
                                                                            button[i].innerHTML = 'X';
                                                                            button[i].style.fontSize = '50px';
                                                                            button[i].style.textAlign = 'center';
                                                                            button[i].style.color = 'black';
                                                                            button[i].disabled = 'true';
                                                                            let draw = document.createElement('h1');
                                                                            draw.innerHTML = 'It Was a Draw!';
                                                                            draw.style.textAlign = 'center';
                                                                            draw.style.backgroundColor = 'rgb(237, 237, 237)';
                                                                            draw.style.backgroundSize = '100%';
                                                                            draw.style.color = 'gray';
                                                                            draw.style.fontSize = '80px';
                                                                            document.body.append(draw);
                                                                            let replay = document.createElement('button');
                                                                            replay.innerHTML = 'Rematch';
                                                                            replay.style.textAlign = 'center';
                                                                            replay.style.color = 'gray';
                                                                            replay.style.fontSize = '80px';
                                                                            replay.style.cursor = 'pointer';
                                                                            document.body.append(replay);
                                                                            replay.onclick = () => {
                                                                                window.location.reload();
                                                                            }
                                                                            if (button[0].innerHTML == button[1].innerHTML && button[1].innerHTML == button[2].innerHTML && button[0].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                            if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                draw.innerHTML = 'First player won!';
                                                                            }
                                                                        }
                                                                    }   
                                                                }
                                                            }  
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }
})