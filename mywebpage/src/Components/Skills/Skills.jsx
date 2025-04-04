import React from 'react'
import './Skills.css'
import SkillFrame from '../SkillFrame/SkillFrame'
import skiillsData from './skillsData.js' // Importando os dados de habilidades


function Skills() {

 return (
    <div className='skills-container' id='skills'>
      <p className="skills-title">Habilidades</p>

      <div className='skills-subcontainer'>
        <SkillFrame skills={skiillsData.softSkills}>
          <div className='skills'>
            <p className='skillsOne'>SOFT</p>
            <p className='skillsTwo'>skills</p>
          </div>
        </SkillFrame>

        <SkillFrame skills={skiillsData.hardSkills}>
        <div className='skills'>
            <p className='skillsOne'>HARD</p>
            <p className='skillsTwo'>skills</p>
          </div>
        </SkillFrame>
      </div> 


    </div>
  )
}

export default Skills
