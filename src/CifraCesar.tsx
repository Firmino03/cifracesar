import "./CifraCesar.css";
import { useState } from "react";
import { cifrar, decifrar } from "./cifra";

export default function CifraCesar() {
  const [texto, setTexto] = useState("");
  const [chave, setChave] = useState(3);
  const [resultado, setResultado] = useState("");
  const [modo, setModo] = useState("");

  return (
    <div>
      <h2>Cifra de César</h2>

      <label>Texto:</label>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />

      <label>Chave (k):</label>
      <input type="number" value={chave} onChange={(e) => setChave(Number(e.target.value))} />

      <button onClick={() => { setResultado(cifrar(texto, chave)); setModo("Texto cifrado"); }}>
        Cifrar
      </button>

      <button onClick={() => { setResultado(decifrar(texto, chave)); setModo("Texto decifrado"); }}>
        Decifrar
      </button>

      {resultado && <p>{modo}: {resultado}</p>}
    </div>
  );
}