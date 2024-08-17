
let areaTexto = document.querySelector("#digitaTexto");
let mensagemCopia = document.querySelector("#campoMensagem");


// Botão Criptografar
function botaoCriptografar() {
    let textoCodificado = funcaoCriptografar(areaTexto.value);
    mensagemCopia.value = textoCodificado;
    areaTexto.value = "";
}

// Botão Descriptografar
function botaoDescriptografar() {
    let textoDescodificado = funcaoDescriptografar(areaTexto.value);
    mensagemCopia.value = textoDescodificado;
    areaTexto.value = "";
}

// Botão Copiar Texto
function funcaoCopiarTexto() {
    navigator.clipboard.writeText(mensagemCopia.value).then(() => {
        alert('Texto copiado!');   
    })
    areaTexto.value = "";
}

// Function Criptografar
function funcaoCriptografar(stringCodificada) {
    let chaves = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringCodificada = stringCodificada.toLowerCase();

    for (let i = 0; i < chaves.length; i++) {
        if (stringCodificada.includes(chaves[i][0])) {
            stringCodificada = stringCodificada.replaceAll(chaves[i][0], chaves[i][1])
        }
    }
    return stringCodificada;
}

// Function Descriptografar
function funcaoDescriptografar(stringDescodificada) {
    let chaves = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDescodificada = stringDescodificada.toLowerCase();

    for (let i = 0; i < chaves.length; i++) {
        if (stringDescodificada.includes(chaves[i][1])) {
            stringDescodificada = stringDescodificada.replaceAll(chaves[i][1], chaves[i][0]);
        }
    }
    return stringDescodificada;
}