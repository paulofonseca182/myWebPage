import React from 'react'
import './SkillFrame.css'

function SkillFrame( { skills, children } ) {
  return (
    <div className='skillsFrame-container'>
        <p className='skill'>{children}</p>
        <div className='skills-frame-container'>
            {skills.map((skill, index) => (
            <div key={index} className='skill-frame'>
                <p className='skill-title'>{skill.title}</p>
                <p className='skill-text'>{skill.text}</p>
            </div>
            ))}
        </div>
        <p>teste</p>
    </div>
  )
}

export default SkillFrame
