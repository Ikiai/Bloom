import React, {Component} from "react";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

class Details extends Component{
  state = {
    loading: true,
    data: [],
    description: "",
    genre: "",
    title: "",
    director: "",
    trailer: "",
    _id:"",
    imageUrl:""
  };
  
async componentDidMount(){
  const idValue = this.props.match.params.id;
  console.log(idValue);
  const url = `https://movi-lib.herokuapp.com/api/v1/movies/${idValue}`;
  const response = await fetch (url);
  const file = await response.json();
  console.log(url);
  this.setState({data: file.data, loading: false})
  console.log(file.data)
  
}
onDelete(){
  const idValue = this.props.match.params.id;
  const url = `https://movi-lib.herokuapp.com/api/v1/movies/${idValue}`;
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    this.props.history.push("/"); 
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
   };

  render (){
    return( 
      <div className="movieCard">
      <div className="full" >
      <div style = {{float:"right"}}>
      <Link to={{
           pathname: `/details/${this.state.data._id}/edit`,
           state: {data: this.state.data}
            }}>
            <button  style = {{backgroundColor: "blue",
            fontSize: "15px"}}>Edit</button></Link>
        <button onClick = {this.onDelete.bind(this)}
             type="submit" 
             style = {{backgroundColor: "red", fontSize: "15px"}}
            >Delete
         </button>
      </div>
      
       <div>
        <img alt="" width="200" src={this.state.data.imageUrl} style={{borderRadius: "3px",float: "left", paddingLeft: "0px"}}/>
            <div style={{ width: "600px",height: "200px",float:"left", paddingLeft: "50px"}}>
              <p style = {{fontSize: "30px"}}>{this.state.data.title}</p>
            <p style = {{color: "red"}}>{this.state.data.genre}</p></div>
               <div style={{float: "left", padding: "50px"}}>{this.state.data.description}</div>
               <div style={{float: "left", padding: "50px"}}>
      <iframe title = "Trailer" frameBorder="0" src={this.state.data.trailer} height = "250px" width= "400px"></iframe></div>
      </div>
      </div>
      </div>
      )
    }
}

export default withRouter(Details);
