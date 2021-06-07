import { useState } from "react";
import "./SearchForm.css"

function SearchForm({inputName, filter}){
  const [formData, setFormData] = useState({[inputName]:""});

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    filter(formData);
  }

  return(
    
      <form onSubmit={handleSubmit} className="SearchForm-container form-inline my-2 my-sm-5">
        <input onChange={handleChange} name={inputName} value={formData[inputName]} className="form-control w-75" type="search" placeholder="Search Jobly" aria-label="Search"/>
        <button className="btn btn-success my-2 my-sm-0 ms-3" type="submit">Search</button>
      </form>
    
  )
}

export default SearchForm;