const Bar = ({ label, value, maxValue, colorValue }) => {
  const safeMax = Number(maxValue) > 0 ? Number(maxValue) : 1;
  const safeValue = Number.isFinite(Number(value)) ? Number(value) : 0;
  const pct = Math.max(0, Math.min(100, (safeValue / safeMax) * 100));

  return (
    <div
      className="bar-row"
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
      aria-label="value"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={safeValue}
      role="meter"
    >
      
      <span
        className="bar-title"
        style={{
        flex: '0 0 auto',
        minWidth: 48,
        textAlign: 'left',
        fontSize: 10,
        letterSpacing: 0.4,
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.65)',
        userSelect: 'none',
        }}
    >
        {label}
    </span>
      <div
        className="bar"
        style={{
          flex: '1 1 auto',
          height: 6,
          backgroundColor: 'rgba(0,0,0,0.08)',
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <div
          className="bar-inner"
          style={{
            width: `${pct}%`,
            height: '100%',
            backgroundColor: colorValue,
            borderRadius: 999,
            transition: 'width 250ms ease',
          }}
        />
      </div>
      <span
        className="bar-label"
        style={{
          flex: '0 0 auto',
          minWidth: 28,
          textAlign: 'right',
          fontSize: 10,
          color: 'rgba(0,0,0,0.75)',
          userSelect: 'none',
        }}
      >
        {safeValue}
      </span>
    </div>
  );
};

export default Bar;