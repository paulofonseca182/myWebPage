import React, { useState } from "react";
import "./Certificates.css";
import certificatesData from "../../Data/certificatesData";

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalCertificates = certificatesData.length;

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCertificates - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCertificates - 1 : prevIndex - 1
    );
  };

  const prevIndex = (currentIndex - 1 + totalCertificates) % totalCertificates;
  const nextIndex = (currentIndex + 1) % totalCertificates;

  return (
    <div className="certificate-container" id="certificates">
      <p className="certificate-title">Certificados</p>

      <div className="carousel">
      <button onClick={prevCertificate} className="prev-btn">
          ❮
        </button>
        {/* Certificado Anterior */}
        <div className="certificate-item small">
          <img src={certificatesData[prevIndex].image} alt="Certificado" />
        </div>

        {/* Certificado Atual (Destaque) */}
        <div
          className="certificate-item large"
          onClick={() => setIsModalOpen(true)}
        >
          <img src={certificatesData[currentIndex].image} alt="Certificado" />
        </div>

        {/* Certificado Próximo */}
        <div className="certificate-item small">
          <img src={certificatesData[nextIndex].image} alt="Certificado" />
        </div>

        {/* Botões de navegação */}
        
        <button onClick={nextCertificate} className="next-btn">
          ❯
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setIsModalOpen(false)}>
              ×
            </span>
            <img
              src={certificatesData[currentIndex].image}
              alt="Certificado Grande"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
