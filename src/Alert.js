function Alert({errors}){


  return(
    <div className="alert alert-danger">
      {errors.map(e => <p key={e}>{e}</p>)}
    </div>
    
  )
}

export default Alert;