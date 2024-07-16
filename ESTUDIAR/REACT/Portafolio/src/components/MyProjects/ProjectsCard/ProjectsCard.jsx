import React from 'react'

const ProjectsCard = ({title, imgUrl, skills}) => {
  return (
    <div className=''>
        <div className='projects-img'>
        <img src={imgUrl} alt={title} />
        <span>{skills}</span>
        </div>
    </div>
  )
}

export default ProjectsCard