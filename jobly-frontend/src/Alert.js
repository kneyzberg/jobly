function Alert({errors, alertType}){

  return(
    <div className={`alert alert-${alertType}`}>
      {alertType === "danger" && 
      errors.map(e => <p key={e}>{e}</p>)
      }
      {alertType === "success" && <p>Profile Updated!</p>}
    </div>
  )
}

export default Alert;