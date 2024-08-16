import React, {useState} from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = altura / 100;
    const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
    setImc(imcCalculado);
    classificarIMC(imcCalculado);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
    if (peso) calcularIMC();
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
    if (altura) calcularIMC();
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={handleAlturaChange}
            placeholder="Digite sua altura"
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={handlePesoChange}
            placeholder="Digite seu peso"
          />
        </div>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
