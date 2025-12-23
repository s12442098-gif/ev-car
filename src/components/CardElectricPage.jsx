import "./CardElectricPage.css";

export default function CardElectricPage({ img, carName, specs }) {
  return (
    <div className="e-card">
      <div className="e-card__img">
        {img ? (
          <img src={img} alt={carName} />
        ) : (
          <div className="e-card__imgPlaceholder">No Image</div>
        )}
      </div>

      <div className="e-card__body">
        <h3 className="e-card__title">{carName}</h3>

        {specs && specs.length > 0 ? (
          <ul className="e-card__list">
            {specs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="e-card__coming">Coming Soon...</p>
        )}
      </div>
    </div>
  );
}
