import SearchForm from "./SearchForm";
import {useState, useEffect} from  "react";
import JoblyApi from "./api"
import {Redirect} from "react-router-dom";

import CompanyCard from "./CompanyCard";


function CompanyList(){
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  async function filterCompanies(query) {
        setIsLoading(true);
        let companies = await JoblyApi.getCompanies(query);
        setCompanies(companies);
        setIsLoading(false);
  }

  useEffect(function getCompanies() {
    async function fetchData(){
      const companyResult = await JoblyApi.getCompanies()
      setCompanies(companyResult);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <i>Loading...</i>;


  return(
    <div>
      <SearchForm inputName="name" filter={filterCompanies}/>
      <div className ="companyList-companies">
        {companies.map( 
          company => (
            <CompanyCard
              key= {company.handle}
              company={company}
            />
          ))
        }
      </div>
    </div>
    
  )
}

export default CompanyList;