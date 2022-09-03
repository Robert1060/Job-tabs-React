import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  if(loading){
    return <div>
      <h4>Loading...</h4>
    </div>
  }

  const {company,title,dates,duties} = jobs[value]

  return <section className='section'>
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((job,index)=>{
        return <button key={job.id} onClick={()=>{
          setValue(index)
        }} className={`job-btn ${index===value && 'active-btn'}`}>
          {job.company}
        </button>
      })}
      </div>
      
      {/* jobs */}
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-dates'>{dates}</p>
        {duties.map((duty,index)=>{
          return <div key={index} className="job-desc">
            <FaAngleDoubleRight/>
            {duty}
          </div>
        })}
      </article>
    </div>
    <button type='btn' className='btn'>
      more info
    </button>
  </section>
}

export default App
