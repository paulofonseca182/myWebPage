import React from 'react'
import './Training.css'
import training from '../../Data/trainingData';
import Formacao from '../../assets/public/image/formacao.png'

function Training() {
  return (
    <div className="training-container" id="training">
      <p className="training-title">Formação</p>

      <div className='training-subcontainer'>
      <div>
        {training.map((item, index) => (
          <div key={index} className="training-container-data">
            <div className="training-data">
              <img
                className="training-small-image"
                src={item.image}
                alt={item.institution}
              />

              <div className="training-item">
                <p className="training-institution">{item.institution}</p>
                <p className="training-course">{item.course}</p>
                <p className="training-period">{item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img className='training-image' src={Formacao} alt="" />
      </div>

    </div>
  );
}

export default Training
