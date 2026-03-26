const ElementButton = ({ label, iconUrl, color, active = false, onClick }) => {
  return (
    <button
      type="button"
      className="element-button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        borderRadius: '20px',
        backgroundColor: active ? color : '#F6F6F6',
        border: `3px solid ${color}`,
        alignItems: 'center',
        padding: '10px',
        justifyContent: 'center',
        width: '70px',
        height: '70px',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        gap: 4,
      }}
    >
      <img style={{ width: '55%', marginTop: 2 }} src={iconUrl} alt={label} />
      <span style={{ color: 'black', fontSize: '11px', fontWeight: 'bold', lineHeight: 1 }}>
        {label}
      </span>
    </button>
  );
};

export default ElementButton;