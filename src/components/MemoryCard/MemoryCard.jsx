/* TODO: 
update image source
*/
const MemoryCard = ({ icon, title }) => {
    return (
        <>
        <div className="card-wrapper">
            <div className="card-content">
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