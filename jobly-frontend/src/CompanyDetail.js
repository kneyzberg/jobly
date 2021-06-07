import JobCardList from "./JobCardList"
import JoblyApi from "./api";

import "./CompanyDetail.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getCompanies() {
    async function fetchData() {
      const companyResult = await JoblyApi.getCompany(handle);
      setCompany(companyResult);
      console.log(companyResult);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <i>Loading...</i>;

  return (
    <section className="CompanyList-container">
      <div className="CompanyDetail-container">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
      </div>

    </section>

  )
}

export default CompanyDetail;