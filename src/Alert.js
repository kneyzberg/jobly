function Alert({errors}){


  return(
    <div className="alert alert-danger">
      {errors.map(e => <p>{e}</p>)}
    </div>
    
  )
}

export default Alert;