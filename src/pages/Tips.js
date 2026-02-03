import React from "react";
import "../App.css";

const Tips = () => {
  const tipsData = [
    {
      id: 1,
      title: "Keep Your Dog Hydrated",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0ipZwzvmal7ac4hlu1OTG5ukbwkUiiKVSA&s",
      description:
        "Always ensure your dog has access to clean, fresh water — especially during summer.",
    },
    {
      id: 2,
      title: "Groom Your Cat Regularly",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrBs3p3r-nqJeJfZ4nCpdLORL7j2hvQcrbQ&s",
      description:
        "Brushing helps reduce shedding and prevents hairballs. Plus, your cat will love it!",
    },
    {
      id: 3,
      title: "Clean Bird Cages Weekly",
      image:
        "https://cloudfront.ojcommerce.com/img/blog/deep-clean-weekly.jpg",
      description:
        "A clean cage ensures your bird stays healthy and happy. Change water daily and wash perches weekly.",
    },
    {
      id: 4,
      title: "Maintain Water Quality for Fish",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFTmbE5JDnU7wYmpniHvWj5JWC1k2jOQIBg&s",
      description:
        "Regularly test water pH and temperature. Change 25% of tank water weekly for clean and oxygen-rich water.",
    },
    {
      id: 5,
      title: "Regular Vet Checkups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKxNmZ6JoY_vMmqKmSlsnTbFzZPMbw99zEQ&s",
      description:
        "Schedule annual health checkups and vaccinations for your pets. Prevention is better than cure!",
    },
    {
      id: 6,
      title: "Balanced Diet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwOx-MHCDRmqtNdqBM1aGprI6WL_oY_cxig&s",
      description:
        "Feed your pets high-quality food suitable for their age and breed to ensure long-term health.",
    },
  ];

  return (
    <div className="tips-page">
      <h1 className="tips-title">Pet Care Tips</h1>
      <div className="tips-grid">
        {tipsData.map((tip) => (
          <div key={tip.id} className="tip-card">
            <img src={tip.image} alt={tip.title} className="tip-image" />
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;