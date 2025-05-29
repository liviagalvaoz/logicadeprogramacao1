LOGPRO DESAFIO 3 SWITCH CASE
let inicio = prompt("Qual sistema você quer simular? \n 1-Linux \n 2-CMD Windows \n")
if (inicio == "linux" || inicio == "Linux" || inicio == "1"){
    console.log("Modo Linux ativado!")
    let linux = prompt("Os comandos disponíveis são: \n 1-mkdir \n 2-ls \n 3-cd \n 4-cd .. \n 5-rm \n 6-clear \n 7-cp \n 8-mv \n 9-cat\n10-echo \n")
    switch (linux){
        case "mkdir":
        case "1":
            console.log("Cria uma nova pasta ou diretório")
            break

        case "ls":
        case "2":
            console.log("Lista os arquivos e pastas no diretório atual")
            break

        case "cd":
        case "3":
            console.log("Muda o diretório atual")
            break

        case "cd ..":
        case "4":
            console.log("Volta para a pasta/diretório anterior")
            break

        case "rm":
        case "5":
            console.log("Remove arquivos ou pastas")
            break

        case "clear":
        case "6":
            console.log("Limpa o terminal")
            break

        case "cp":
        case "7":
            console.log("Copia arquivos ou pastas")
            break

        case "mv":
        case "8":
            console.log("Move ou renomeia arquivos/pastas")
            break

        case "cat":
        case "9":
            console.log("Mostra o conteúdo de arquivos")
            break

        case "echo":
        case "10":
            console.log("Cria um arquivo")
            break

        default:
            console.log("Não possuimos a definição desse comando")
    }
}

else if (inicio == "cmd" || inicio == "CMD" || inicio == "2"){
    console.log("Modo CMD ativado!")
    let cmd = prompt("Os comandos disponíveis são: \n 1-mkdir \n 2-dir \n 3-cd \n 4-cd .. \n 5-del \n 6-cls \n 7-echo \n 8-copy \n 9-move\n10-rmdir\n11-exit\n")
    
    switch (cmd){
        case "mkdir":
        case "1":
            console.log("Cria uma nova pasta ou diretório")
            break

        case "dir":
        case "2":
            console.log("Lista os arquivos e pastas dentro do diretório atual")
            break

        case "cd":
        case "3":
            console.log("Entra na pasta")
            break

        case "cd ..":
        case "4":
            console.log("Volta para a pasta/diretório anterior")
            break

        case "del":
        case "5":
            console.log("Remove arquivos")
            break

        case "cls":
        case "6":
            console.log("Limpa o terminal")
            break

        case "echo":
        case "7":
            console.log("Cria arquivos")
            break

        case "copy":
        case "8":
            console.log("Copia arquivos de um lugar para o outro")
            break

        case "move":
        case "9":
            console.log("Move arquivos ou renomeia")
            break

        case "rmdir":
        case "10":
            console.log("Apaga uma pasta/diretório")
            break

        case "exit":
        case "11":
            console.log("Fecha o prompt de comando")
            break

        default:
            console.log("Não possuimos a definição desse comando")
    }
}


