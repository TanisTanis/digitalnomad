import React from 'react';

const Employee = (props) => {

  return(
    <div className="employee-div">
      <section className="employee-name-section">
        <div className="eid">
          <span className="employee-name">{props.employee.firstName} {props.employee.lastName}</span>
        </div>
        <div className="eid">
          <span>{props.employee.location}</span>
        </div>
      </section>
      <section className="employee-contact-section">
        <div className="eid">
          <span className="cit">Contact Info</span>
        </div>
        <div className="eid">
          <span>Phone: {props.employee.phone}</span>
        </div>
        <div className="eid">
          <span>Email: {props.employee.email}</span>
        </div>
      </section>
      <section className="contact-button-section">
        <button className="contact-button">Contact</button>
      </section>
    </div>
  )
}

export default Employee;