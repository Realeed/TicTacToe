addEventListener('DOMContentLoaded', () => {
    document.body.style.userSelect = 'none'
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
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
                                            }
                                            if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                for (let i = 0; i < 9; i++) {
                                                    button[i].disabled = 'true';
                                                }
                                                let winner = document.createElement('h1');
                                                winner.innerHTML = 'First player won!';
                                                winner.style.textAlign = 'center';
                                                winner.style.color = 'gray';
                                                winner.style.fontSize = '80px';
                                                document.body.append(winner);
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
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
                                                    }
                                                    if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                        for (let i = 0; i < 9; i++) {
                                                            button[i].disabled = 'true';
                                                        }
                                                        let winner = document.createElement('h1');
                                                        winner.innerHTML = 'Second player won!';
                                                        winner.style.textAlign = 'center';
                                                        winner.style.color = 'gray';
                                                        winner.style.fontSize = '80px';
                                                        document.body.append(winner);
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
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
                                                            }
                                                            if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                                for (let i = 0; i < 9; i++) {
                                                                    button[i].disabled = 'true';
                                                                }
                                                                let winner = document.createElement('h1');
                                                                winner.innerHTML = 'First player won!';
                                                                winner.style.textAlign = 'center';
                                                                winner.style.color = 'gray';
                                                                winner.style.fontSize = '80px';
                                                                document.body.append(winner);
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
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
                                                                    }
                                                                    if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                                        for (let i = 0; i < 9; i++) {
                                                                            button[i].disabled = 'true';
                                                                        }
                                                                        let winner = document.createElement('h1');
                                                                        winner.innerHTML = 'Second player won!';
                                                                        winner.style.textAlign = 'center';
                                                                        winner.style.color = 'gray';
                                                                        winner.style.fontSize = '80px';
                                                                        document.body.append(winner);
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
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[0].innerHTML == button[3].innerHTML && button[3].innerHTML == button[6].innerHTML && button[0].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML && button[0].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[2].innerHTML == button[5].innerHTML && button[5].innerHTML == button[8].innerHTML && button[2].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML && button[2].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[3].innerHTML == button[4].innerHTML && button[4].innerHTML == button[5].innerHTML && button[3].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[6].innerHTML == button[7].innerHTML && button[7].innerHTML == button[8].innerHTML && button[6].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
                                                                            }
                                                                            if (button[1].innerHTML == button[4].innerHTML && button[4].innerHTML == button[7].innerHTML && button[1].innerHTML != '') {
                                                                                for (let i = 0; i < 9; i++) {
                                                                                    button[i].disabled = 'true';
                                                                                }
                                                                                let winner = document.createElement('h1');
                                                                                winner.innerHTML = 'First player won!';
                                                                                winner.style.textAlign = 'center';
                                                                                winner.style.color = 'gray';
                                                                                winner.style.fontSize = '80px';
                                                                                document.body.append(winner);
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