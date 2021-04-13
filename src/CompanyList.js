import SearchForm from "./SearchForm";
import {useState, useEffect} from  "react";
import JoblyApi from "./api"


import CompanyCard from "./CompanyCard";

function CompanyList(){
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function filterCompanies(query) {
    console.log(query);
      async function getData() {
        setIsLoading(true);
        let companies = await JoblyApi.getCompanies(query);
        setCompanies(comps => companies);
        setIsLoading(false);
    }
    getData();
  }

  useEffect(function getCompanies() {
    async function fetchData(){
      const companyResult = await JoblyApi.getCompanies()
      setCompanies(company => companyResult);
      console.log(companyResult);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <i>Loading...</i>;

  return(
    <div>
      <SearchForm inputName="name" filter={filterCompanies}/>
      <div className ="companyList-companies">This is the company list
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