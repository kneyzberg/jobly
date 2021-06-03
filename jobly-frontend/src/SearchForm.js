import { useState } from "react"

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
    
      <form onSubmit={handleSubmit} className="form-inline my-2 my-sm-5">
        <input onChange={handleChange} name={inputName} value={formData[inputName]} className="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    
  )
}

export default SearchForm;