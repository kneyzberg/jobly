import "./JobCard.css"

function JobCard({job}){

  return(
    <div className="JobCard-card">
        <h5>{job.title}</h5>
        <div><small>Salary: {job.salary}</small></div>
        <div><small>equity: {job.equity}</small></div>
        <button className="btn btn-danger">APPLY</button>
    </div>

  )
}

export default JobCard;
