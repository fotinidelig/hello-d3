import Bar from './Bar';

const Card = ({ title, color, imgUrl, id, hp, attack, favorite = false, onToggleFavorite }) => {
    return (
        <div className="card" key={id} 
            style={{border: `5px solid ${color}`, 
                padding: '0px', 
                margin: '0px', 
                borderRadius: '5px', 
                width: '160px',
                height: '265px',
                backgroundColor: '#F6F6F6',
                justifyContent: 'center',
                alignItems: 'center'}}>
            <div
                style={{
                    backgroundColor: color,
                    borderRadius: 0,
                    padding: 0,
                    marginTop: '0px',
                    position: 'relative',
                }}
            >   
                <button
                    type="button"
                    onClick={onToggleFavorite}
                    aria-pressed={favorite}
                    aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                    style={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        width: 30,
                        height: 30,
                        padding: 0,
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        zIndex: 3,
                    }}
                >
                <img
                    src="Poke_Ball.webp"
                    alt="Poke Ball"
                    style={{
                        opacity: favorite ? 1 : 0.25,
                        width: 22,
                        height: 22,
                        display: 'block',
                    }}
                />
                </button>
                <img style={{width: '100%', display: 'block'}} src={imgUrl} alt={title} />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    width: "70%",
                    padding: "10px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    backgroundColor: '#F6F6F6',
                }}
                >
                <p style={{ margin: 0, width: '100%', color: "#111", fontSize: "18px" }}>{title}</p>
                <span style={{ marginLeft: '10px', color: "#666", fontSize: "12px" }}>#{id}</span>
            </div>
            <div style={{ padding: '5px' }}>
                <Bar label="HP" value={hp} maxValue={160} colorValue="#ffcb00" />
                <Bar label="Attack" value={attack} maxValue={130} colorValue="#4d77b4" />
            </div>
        </div>
    );
};

export default Card;