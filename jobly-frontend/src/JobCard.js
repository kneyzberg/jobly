import "./JobCard.css";

import UserContext from "./UserContext";
import {useContext, useState} from "react";


function JobCard({job}){
  const {currentUser,  userApplyToJob} = useContext(UserContext);
  const initialJobState = currentUser.applications.includes(job.id) ? true : false

  const [isApplied, setIsApplied] = useState(initialJobState);


  async function applytoJob(){
    await userApplyToJob(currentUser.username, job.id);
    setIsApplied(true);
  }



  return(
    <div className="JobCard-card">
        <h5>{job.title}</h5>
        <div><small>Salary: {job.salary}</small></div>
        <div><small>equity: {job.equity}</small></div>
        {!isApplied && <button onClick={applytoJob} className="btn btn-danger">APPLY</button>}
        {isApplied && <button className="btn btn-danger disabled">APPLIED</button>}
    </div>

  )
}

export default JobCard;
