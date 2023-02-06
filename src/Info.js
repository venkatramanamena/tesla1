import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import { deletedetails } from './actions';

const Info = (Details,deletedetails) => {
  return (
    <div>
        <Table striped>
      <thead>
        <tr>
          
          <th>Full Name</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       
       
      
       
      
         
        
       
      </tbody>
    </Table>
     
    </div>
  )
}
const mapStateToProps=state=>({
    Details:state
  })

export default connect(mapStateToProps,{deletedetails})(Info)
