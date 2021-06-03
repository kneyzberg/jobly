import {Link} from "react-router-dom";
import "./companyCard.css";

function CompanyCard({company}){
  

  return(
    <Link className="companyCard-link" to={`/companies/${company.handle}`}>
      <div className="companyCard-card">
        <h5>{company.name}.</h5>
        <p>{company.description}</p>
        <img src={company.logoUrl} />
      </div>
    </Link>
  )
}

export default CompanyCard;