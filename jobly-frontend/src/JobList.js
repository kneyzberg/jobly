import SearchForm from "./SearchForm";
import JoblyApi from "./api"

import JobCardList from "./JobCardList";
import {useState, useEffect} from "react";


function JobList(){
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function filterJobs(query) {
      setIsLoading(true);
      let jobs = await JoblyApi.getJobs(query);
      setJobs(jobs);
      setIsLoading(false);

  }

  useEffect(function getJobs() {
    async function fetchData(){
      const jobResult = await JoblyApi.getJobs();
      console.log(jobResult, "jobssss");
      setJobs(jobResult);
      console.log(jobResult);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <i>Loading...</i>;

  return(
    <section className="CompanyList-container">
      <div className="Companylist-content">
        <h2 className="text-center">Job Board Listings</h2>
      <SearchForm inputName="title" filter={filterJobs}/>
      <JobCardList jobs={jobs}/>
    </div>

    </section>
    
    
  )
}

export default JobList;