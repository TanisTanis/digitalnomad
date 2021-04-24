import React from 'react';
import WorldMap from './WorldMap';

interface Props {
  employeeCount: number
  name: string
}

const CompanyHomePage: React.FC<Props> = (props) => {

  return (
    <div className="company-home-page">
      <div className="cnd">
        <span className="company-name">{props.name}</span>
      </div>
      <div className="ced">
        <span>Remote Employees: {props.employeeCount}</span>
      </div>
      <WorldMap />
    </div>
  )
}

export default CompanyHomePage;