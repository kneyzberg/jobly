import SearchForm from "./SearchForm";

import CompanyCard from "./CompanyCard";


function CompanyList(){

  return(
    <div>
      <div>This is the company list</div>
      <SearchForm/>
      <CompanyCard/>
    </div>
    
  )
}

export default CompanyList;