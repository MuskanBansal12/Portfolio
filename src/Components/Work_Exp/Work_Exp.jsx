import React from 'react'
import "./Work_Exp.css"
import mywork_data from "../../assets/mywork_data.jsx"

const Work_Exp = () => {
  return (
    <div id ="work" className="work">
      <div className="work-title">
        <h1>Work Experience</h1>
      </div>
      <div className="work-container">
      {mywork_data.map((work_exp,index)=>{
          return <div className='work-format'>
            <img src={work_exp.w_image} alt={work_exp.w_name} />
           
            <h2>{work_exp.w_name}</h2>
            <p>{work_exp.w_desc}</p>
           
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Work_Exp
