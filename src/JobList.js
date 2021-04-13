import SearchForm from "./SearchForm";

import JobCardList from "./JobCardList";


function JobList(){

  return(
    <div>
      <div>This is the JobList page</div>
      <SearchForm/>
      <JobCardList/>
    </div>
    
  )
}

export default JobList;