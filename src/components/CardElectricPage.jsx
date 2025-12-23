import "./CardElectricPage.css";

export default function CardElectricPage({ img, carName, specs }) {
  return (
    <div className="e-card">
      <div className="e-cardimg">
        {img ? (
          <img src={img} alt={carName} />
        ) : (
          <div className="e-cardimgPlaceholder">No Image</div>
        )}
      </div>

      <div className="e-cardbody">
        <h3 className="e-cardtitle">{carName}</h3>

        {specs && specs.length > 0 ? (
          <ul className="e-cardlist">
            {specs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="e-cardcoming">Coming Soon...</p>
        )}
      </div>
    </div>
  );
}