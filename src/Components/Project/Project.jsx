import React from 'react'
import "./Project.css"
import project_data from "../../assets/project_data.jsx"

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
      {project_data.map((proj,index)=>{
          return <div className='project-format'>
            <h3>{proj.p_no}</h3>
            <h2>{proj.p_name}</h2>
            <p>{proj.p_desc}</p>
            {/* <img src={proj.p_image} alt={proj.p_name} /> */}
           
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Project
