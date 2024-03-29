import './MemoryCard.css';
const MemoryCard = ({ icon, title, handleClick }) => {

    const handleCardClick = () => {
        handleClick();
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