import "./Footer.css";
import map from "../assets/map.png";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <hr className="footer-line" />

      <div className="footer-content">
        <div>
          <h2 className="footer-title">Contact</h2>
          <p className="footer-hint">For communication:</p>

          <div className="footer-grid">
            <div>
              <p className="footer-label">Phone</p>
              <p>0590000000</p>
              <p>0560000000</p>
            </div>

            <div>
              <p className="footer-label">Email</p>
              <p>info@evcars.com</p>
              <p>support@evcars.com</p>
            </div>
          </div>
        </div>

        <img className="footer-map" src={map} alt="map" />
      </div>
    </footer>
  );
}
