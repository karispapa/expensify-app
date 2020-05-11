import React from 'react';
import {Link} from 'react-router-dom'
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses'

const ExportListItem = ({id, description, amount, createdAt})=>(

  <div>
    <Link to={`/edit/${id}`}>
     <h3>{description} </h3>
    </Link>
    
    <p> {createdAt} ksh: {amount} </p>
  </div>
);

export default ExportListItem; 