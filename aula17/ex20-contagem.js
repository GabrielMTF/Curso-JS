function contar(){
    let inicio = document.querySelector('input#inicio')
    let final = document.querySelector('input#final')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO, Faltam dados!')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido!Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i;c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449} `
        }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
    

}
