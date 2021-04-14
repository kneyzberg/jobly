import JobCardList from "./JobCardList"
import JoblyApi from "./api";

import "./CompanyDetail.css"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import UserContext from "./UserContext";
import {useContext} from "react";
import {Redirect} from "react-router-dom";



function CompanyDetail(){
  const {handle} = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {currentUser} = useContext(UserContext);


  useEffect(function getCompanies() {
    async function fetchData(){
      const companyResult = await JoblyApi.getCompany(handle);
      setCompany(companyResult);
      console.log(companyResult);
      setIsLoading(false);
    }
    fetchData();
  }, [ ]);

  if (isLoading) return <i>Loading...</i>;

  if (currentUser === null) {
    return <Redirect exact path ="/" />;
  }

  return (
    <div className="CompanyDetail-container">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs}/>

    </div>
  )
}

export default CompanyDetail; 