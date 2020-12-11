import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  createUI(){
     return this.state.values.map((el, i) => 
         <div key={i}>
         <div className="row">
         <Form.Group controlId="formBasicEmail" className="col-3">
       
         <Form.Control type="email" placeholder="Enter email" value={el||''} onChange={this.handleChange.bind(this, i)} />  
        </Form.Group>
        
        <div className="col-3 ">
        
          <Button  variant="danger" size="sm" onClick={this.removeClick.bind (this, i)}>Remove</Button>

        </div>

       
    	    </div>
    	   
         
         </div>          
     )
  }

   handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
   removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }

   handleSubmit(event) {
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
  }

  
render() {
  return (
    <form onSubmit={this.handleSubmit}>
         <div className="ml-lg-5 mt-4">
         <Form.Group controlId="formBasicName">
         <Form.Label>Full Name</Form.Label>
         <Form.Control type="text" placeholder="Full Name"  className="col-3" />
        </Form.Group>
         <Form.Label>Add Address</Form.Label>
        <Button variant="primary" size="sm" onClick={this.addClick.bind (this)} className="ml-lg-5">Add more</Button>{' '}
         <hr/>
       {this.createUI ()}
      

  </div>

</form>

  );
}
}

export default App;
