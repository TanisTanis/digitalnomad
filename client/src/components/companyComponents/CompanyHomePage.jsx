import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import WorldMap from './WorldMap';

const CompanyHomePage = (props) => {

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