import React from 'react'
import './Experience.css'
import experienceData from '../../Data/experiencieData'


function Experience() {
  return (
    <div className="experience-container" id="experience">
      <p className="experience-title">Experiência</p>

      <div>
        {experienceData.map((item, index) => (
          <div key={index} className="experience-container-data">
            <div className="experience-data">
              <div className="experience-item-container">
                <img className='experience-small-image' src={item.smallImage} alt={item.company} />

                <div className="experience-item">
                  <p className='experience-company'>{item.company}</p>
                  <p className='experience-position'>{item.position}</p>
                </div>
              </div>
              {/* <img className='image-company' src={item.image} alt={item.company} /> */}
            </div>
            <p className='experience-text'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience
