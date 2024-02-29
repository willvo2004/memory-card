const Score = ({ score, bestScore }) => {
    return (
        <div className="score-wrapper">
            <div className="score-content">
                <h2>Score: {score}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
        </div>
    )
}

export default Score;