import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { adddetails,deletedetails } from './actions';
import './App.css';
const Header = ({Details, adddetails,deletedetails}) => {
    const [show, setShow] = useState(false);
    
    const [name,setName]=useState([])
    const [phone,setPhone]=useState([])
    
    const Submithandler=async(e)=>{
        e.preventDefault();
        
          await adddetails({Name:name,Phone:phone})

          setName("")
          setPhone("")
        
        
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(Details)
  return (
    <div>
        <Navbar bg="dark" variant="dark">
         <Container>
          <Navbar.Brand href="#home">
          
            ToDo LiSt

          </Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
        Add Contact +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CONTACT BOOK</Modal.Title>
        </Modal.Header>
       <form className='form' onSubmit={Submithandler}>
       Enter Name:<input type='text' name='Name' value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}></input><br/><br/>
       Phone Number : <input type='text' name='phonenumber' value={phone} placeholder='enter phone number'  onChange={(e)=>setPhone(e.target.value)} ></input><br/>
       <input type='submit' className='btn btn-success' value='Add'></input>
       </form>
       
      </Modal>
        </Container>
      </Navbar>
      <div>
      {
          Details.map(prod=>
            <Table striped>
<thead>
  <tr>
    
    <th>{prod.Name}</th>
    <th>{prod.Phone}</th>
    <th><button className='btn btn-danger' onClick={()=>deletedetails(prod.Name)}> X</button></th>
  </tr>
</thead>
<tbody>
 
 

 

   
  
 
</tbody>
</Table>
          
            )
        }
      </div>
    </div>
  )
}
const mapStateToProps=state=>({
  Details:state
})


export default connect(mapStateToProps,{adddetails,deletedetails})(Header)
