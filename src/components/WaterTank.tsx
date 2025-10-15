// Add this to your water container component

const WaterTankWithScale = () => {
  const waterLevel = 65; // Example: 65% full
  
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
      {/* Meter Scale on the Left */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '300px',
        paddingRight: '10px'
      }}>
        {[100, 75, 50, 25, 0].map((level) => (
          <div key={level} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{level}%</span>
            <div style={{
              width: '15px',
              height: '2px',
              backgroundColor: '#333'
            }} />
          </div>
        ))}
      </div>

      {/* Water Container Tank */}
      <div style={{
        width: '150px',
        height: '300px',
        border: '3px solid #2c3e50',
        borderRadius: '10px',
        position: 'relative',
        backgroundColor: '#ecf0f1',
        overflow: 'hidden'
      }}>
        {/* Water Fill */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: `${waterLevel}%`,
          backgroundColor: '#3498db',
          transition: 'height 0.3s ease'
        }} />
      </div>
    </div>
  );
};
