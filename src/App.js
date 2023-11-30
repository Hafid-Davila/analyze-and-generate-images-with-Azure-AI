import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAnalyzeImage = () => {
    console.log("Analizando imagen:", imageUrl);
    // Aquí puedes agregar la lógica para analizar la imagen
  };

  const handleGenerateImage = () => {
    console.log("Generando imagen para:", imageUrl);
    // Aquí puedes agregar la lógica para generar la imagen
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Análisis y Generación de Imágenes</h1>
        <input 
          type="text" 
          placeholder="Ingresa la URL de la imagen o la solicitud de imagen" 
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <button onClick={handleAnalyzeImage}>Analizar Imagen</button>
        <button onClick={handleGenerateImage}>Generar Imagen</button>
      </header>
    </div>
  );
}

export default App;
