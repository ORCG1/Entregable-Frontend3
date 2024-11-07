import { useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
    const [animalName, setAnimalName] = useState('');
    const [animalDescription, setAnimalDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [animals, setAnimals] = useState([]);  // Estado para almacenar la lista de animales
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (
            animalName.trim().length >= 3 &&
            animalDescription.trim().length >= 3 &&
            imageUrl.length >= 6
        ) {
            setError(false);

            setAnimals([
                ...animals,
                { name: animalName, description: animalDescription, image: imageUrl },
            ]);

            setAnimalName('');
            setAnimalDescription('');
            setImageUrl('');
        } else {
            setError(true);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre del animal:
                    <input
                        type="text"
                        value={animalName}
                        onChange={(e) => setAnimalName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Descripción del animal:
                    <input
                        type="text"
                        value={animalDescription}
                        onChange={(e) => setAnimalDescription(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    URL de la imagen:
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>

            {error && <p className="error-message">Por favor chequea que la información sea correcta.</p>}

            <div className="cards-container">
                {animals.map((animal, index) => (
                    <Card
                        key={index}
                        animalName={animal.name}
                        animalDescription={animal.description}
                        imageUrl={animal.image}
                        index={index + 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
