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
      <div className="full" >
      <div style = {{float:"right"}}>
      <Link to={{
           pathname: `/details/${this.state.data._id}/edit`,
           state: {data: this.state.data}
            }}><button  style = {{backgroundColor: "blue",
            fontSize: "15px"}}>Edit</button></Link>
        <button onClick = {this.onDelete.bind(this)}
             type="submit" 
             style = {{backgroundColor: "red", fontSize: "15px"}}
            >Delete
         </button>
      </div>
      <span>&nbsp;&nbsp;</span>
       <div className="detail">
        <img alt="" width="200" src={this.state.data.imageUrl}/>
          <div className="ketchup">
            <h1>{this.state.data.title}</h1>
                <h3>{this.state.data.genre}</h3>
           </div>
         </div>
      <div className = "depth">
      <iframe title = "Trailer" frameBorder="0" src={this.state.data.trailer} height = "250px" width= "350px"></iframe>
      <span>&nbsp;&nbsp;</span> 
               <div>{this.state.data.description}</div>  
      </div>
         
       
      </div>
      )
    }
}

export default withRouter(Details);
