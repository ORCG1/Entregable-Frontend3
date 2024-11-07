import '../styles/Card.module.css';

const Card = ({ imageUrl, animalName, animalDescription, index }) => {
    return (
        <div className="card">
            <h1>{`Información del Animal ${index}`}</h1>
            <img src={imageUrl} alt={`Imagen de ${animalName}`} style={{width: '200px', height: '200px'}}/>
            <h2><strong>Nombre:</strong> {animalName}</h2>
            <p><strong>Descripción:</strong> {animalDescription}</p>
        </div>
    );
};

export default Card;

