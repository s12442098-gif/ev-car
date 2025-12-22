import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardElectricPage from "../components/CardElectricPage";

import hanImg from "../assets/byd-han.jpg";
import sealImg from "../assets/byd-seal.jpg";

import mgZsImg from "../assets/mg-zs-ev.jpg";
import mg4Img from "../assets/mg4-ev-xpower.jpg";

import teslaSImg from "../assets/tesla-model-s-plaid.jpg";
import teslaXImg from "../assets/tesla-model-x-plaid.jpg";

import peugeot3008Img from "../assets/peugeot-e-3008.jpg";
import peugeot208Img from "../assets/peugeot-e-208.jpg";

export default function ElectricCars() {
  const cars = [
    {
      img: hanImg,
      carName: "BYD Han EV Performance AWD",
      specs: [
        "Manufacturer: BYD (Build Your Dreams).",
        "Horsepower: 494 hp.",
        "Battery: 85.4 kWh.",
        "Range per charge: ≈ 550 km (WLTP).",
        "(0–100) km/h: 3.9 seconds.",
        "Weight: ≈ 2,020 kg.",
      ],
    },
    {
      img: sealImg,
      carName: "BYD Seal",
      specs: [
        "Manufacturer: BYD (Build Your Dreams).",
        "Horsepower: ≈ 523 hp.",
        "Battery: 82.5 kWh.",
        "Range per charge: ≈ 520 km (WLTP).",
        "(0–100) km/h: ≈ 3.8 seconds.",
        "Weight: ≈ 2,150 kg.",
      ],
    },
    {
      img: mgZsImg,
      carName: "MG ZS EV",
      specs: [
        "Manufacturer: MG Motor (SAIC Motor).",
        "Horsepower: ≈ 174 hp.",
        "Battery: 72.6 kWh.",
        "Range per charge: ≈ 440 km (WLTP).",
        "(0–100) km/h: ≈ 8.6 seconds.",
        "Weight: ≈ 1,620 kg.",
      ],
    },
    {
      img: mg4Img,
      carName: "MG4 EV XPower",
      specs: [
        "Manufacturer: MG Motor (SAIC Motor).",
        "Horsepower: 429 hp.",
        "Battery: 64 kWh.",
        "Range per charge: ≈ 385 km (WLTP).",
        "(0–100) km/h: ≈ 3.8 seconds.",
        "Weight: ≈ 1,800 kg.",
      ],
    },
    {
      img: teslaSImg,
      carName: "Tesla Model S Plaid",
      specs: [
        "Manufacturer: Tesla.",
        "Horsepower: ≈ 1,020 hp.",
        "Battery: ≈ 100 kWh.",
        "Range per charge: ≈ 600 km (WLTP).",
        "(0–100) km/h: ≈ 2.1 seconds.",
        "Weight: ≈ 2,160 kg.",
      ],
    },
    {
      img: teslaXImg,
      carName: "Tesla Model X Plaid",
      specs: [
        "Manufacturer: Tesla.",
        "Horsepower: ≈ 1,020 hp.",
        "Battery: ≈ 100 kWh.",
        "Range per charge: ≈ 560 km (WLTP).",
        "(0–100) km/h: ≈ 2.6 seconds.",
        "Weight: ≈ 2,455 kg.",
      ],
    },
    {
      img: peugeot3008Img,
      carName: "Peugeot e-3008",
      specs: [
        "Manufacturer: Peugeot.",
        "Horsepower: ≈ 210 hp.",
        "Battery: 73 kWh.",
        "Range per charge: ≈ 525 km (WLTP).",
        "(0–100) km/h: ≈ 8.8 seconds.",
        "Weight: ≈ 2,180 kg.",
      ],
    },
    {
      img: peugeot208Img,
      carName: "Peugeot e-208",
      specs: [
        "Manufacturer: Peugeot.",
        "Horsepower: 136 hp.",
        "Battery: 50 kWh.",
        "Range per charge: ≈ 362 km (WLTP).",
        "(0–100) km/h: ≈ 8.1 seconds.",
        "Weight: ≈ 1,455 kg.",
      ],
    },
  ];

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            alignItems: "center",
          }}
        >
          {cars.map((car, idx) => (
            <CardElectricPage
              key={idx}
              img={car.img}
              carName={car.carName}
              specs={car.specs}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}