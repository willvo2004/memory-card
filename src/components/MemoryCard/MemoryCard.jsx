import { useState } from 'react';
import './MemoryCard.css';
const MemoryCard = ({ icon, title, handleClick}) => {
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        if (selected) {
            console.log("already clicked!")
            return;
        }
        setSelected(true);
    }

    const handleCardClick = () => {
        // Call both handleClick and handleSelect
        handleClick();
        handleSelect();
    };
    
    return (
      <>
        <div className="card-wrapper">
            <div className="card-content" onClick={handleCardClick}>
                <div className="card-icon">
                    <img src={icon} alt="vite logo" />
                </div>
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>        
      </>
    )
}

export default MemoryCard;