// Función para encriptar el texto ingresado
function encriptar() {
    // Se agregó una funcion para convertir el texto a minúsculas
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    // Remplaza las vocales por sus equivalentes encriptados
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    
    // Funciones para mostrar el texto encriptado, limpiar el campo de entrada de texto, y quitar la imagen en el box de salida
    document.getElementById("outputTexto").value = textoEncriptado;
    document.getElementById("inputTexto").value = "";
    actualizarImagenFondo();

}

// Función para desencriptar el texto ingresado
function desencriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    // Remplaza los patrones encriptados por las vocales
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    // Funciones para mostrar el texto desencriptado, limpiar el campo de entrada de texto, y quitar la imagen en el box de salida                             
    document.getElementById("outputTexto").value = textoDesencriptado;
    document.getElementById("inputTexto").value = "";
    actualizarImagenFondo();
}

// Copiar texto del box de salida al portapapeles
function copiarTexto() {
    let textoCopiado = document.getElementById("outputTexto").value;

    navigator.clipboard.writeText(textoCopiado).then(() => {
            document.getElementById("outputTexto").value = "";
            actualizarImagenFondo();
            alert("texto copiado al portapapeles!");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

// Función para remover imagen o restaurarla cunado hay, o cuando no hay texto en el box de salida
function actualizarImagenFondo() {
    let outputTextarea = document.getElementById("outputTexto");
    if (outputTextarea.value.trim() !== "") {
        outputTextarea.style.backgroundImage = "none";
    } else {
        outputTextarea.style.backgroundImage = "url(assets/Muñeco.png)";
    }
}

document.addEventListener("DOMContentLoaded", actualizarImagenFondo);

document.getElementById("outputTexto").addEventListener("input", actualizarImagenFondo);