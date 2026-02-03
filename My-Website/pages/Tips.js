import React from "react";
import "../App.css";

const Tips = () => {
  const petTips = [
    {
      id: 1,
      title: "Keep Your Dog Hydrated",
      description:
        "Always ensure your dog has access to clean, fresh water — especially during summer.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0ipZwzvmal7ac4hlu1OTG5ukbwkUiiKVSA&s",
    },
    {
      id: 2,
      title: "Groom Your Cat Regularly",
      description:
        "Brushing helps reduce shedding and prevents hairballs. Plus, your cat will love it!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrBs3p3r-nqJeJfZ4nCpdLORL7j2hvQcrbQ&s",
    },
    {
      id: 3,
      title: "Clean Bird Cages Weekly",
      description:
        "A clean cage ensures your bird stays healthy and happy. Change water daily and wash perches weekly.",
      image:
        "https://cloudfront.ojcommerce.com/img/blog/deep-clean-weekly.jpg",
    },
    {
      id: 4,
      title: "Maintain Water Quality for Fish",
      description:
        "Regularly test water pH and temperature. Change 25% of tank water weekly for clean and oxygen-rich water.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFTmbE5JDnU7wYmpniHvWj5JWC1k2jOQIBg&s",
    },
    {
      id: 5,
      title: "Regular Vet Checkups",
      description:
        "Schedule annual health checkups and vaccinations for your pets. Prevention is better than cure!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKxNmZ6JoY_vMmqKmSlsnTbFzZPMbw99zEQ&s",
    },
    {
      id: 6,
      title: "Balanced Diet",
      description:
        "Feed your pets high-quality food suitable for their age and breed to ensure long-term health.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwOx-MHCDRmqtNdqBM1aGprI6WL_oY_cxig&s",
    },
  ];

  return (
    <div className="tips-page">
      <h1 className="tips-title">Pet Care Tips</h1>
      <p className="tips-subtitle">
        Simple and effective advice to keep your furry, feathered, and finned
        friends happy!
      </p>

      <div className="tips-grid">
        {petTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <img src={tip.image} alt={tip.title} className="tip-image" />
            <div className="tip-content">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
