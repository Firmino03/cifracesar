export function cifrar(texto: string, chave: number): string {
  return aplicarCifra(texto, chave % 26);
}

export function decifrar(texto: string, chave: number): string {
  return aplicarCifra(texto, 26 - (chave % 26));
}

function aplicarCifra(texto: string, k: number): string {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];

    if (letra >= "a" && letra <= "z") {
      const posicao = letra.charCodeAt(0) - 97;
      resultado += String.fromCharCode(((posicao + k) % 26) + 97);

    } else if (letra >= "A" && letra <= "Z") {
      const posicao = letra.charCodeAt(0) - 65;
      resultado += String.fromCharCode(((posicao + k) % 26) + 65);

    } else {
      resultado += letra;
    }
  }

  return resultado;
}