import { useState } from "react"

function SearchForm(){
  const [formData, setFormData] = useState({searchTerm:""});

  function handleSubmit(evt) {
    evt.preventDefault();
    
  }

  return(
    
      <form className="form-inline my-2 my-sm-5">
        <input name="searchTerm" value={formData.value} className="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    
  )
}

export default SearchForm;