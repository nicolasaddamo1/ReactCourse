import ReactImage from "./assets/react.svg"
import './PresentationCard.css'
function PresentationCard() {
    let name = 'Ada Lovelace'
    let description = 'La primera programadora de la historia'

    return (
        <div className="presentation-card">
            <img src={ReactImage} alt="React" className="avatar" />
            <h1>Hola soy {name} y soy {description}</h1>
        </div>
    )
}
export default PresentationCard