import React, {Component} from "react";
import { withRouter } from "react-router-dom";


class AddMovie extends Component{
  
        state = {
          data: {},
        }
      
      onSubmit = event => {
        event.preventDefault();
        const title = this.title.value;
        const releaseDate = this.date.value;
        const director = this.director.value;
        const description = this.description.value;
        const genre = this.genre.value;
        const imageUrl = this.imageUrl.value;
        const trailer = this.trailer.value;
        const info = {title: title, releaseDate: releaseDate, director: director, description: description, genre: genre, imageUrl: imageUrl, trailer: trailer};
        const data = {...this.state.data, ...info};
        this.setState({
          data: data, loading: true
        });
       

        
        fetch('https://movi-lib.herokuapp.com/api/v1/movies', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        this.props.history.push("/"); 
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Oops. An error occured. Try again");
      });
      this.setState({loading: false})   
      
    };
       
      render (){
          return (
            <div className = "addform">
        <form className="form-inline" onSubmit={this.onSubmit}>
      <h2>Add Movie</h2>
      <div style = {{float: "left", fontSize: "15px"}}>
      <p>
      <legend><b>Title</b></legend>
         <input
             type="text"
             style = {{padding: "10px",width:"70%", height: "50px",border: "solid",borderWidth:"1px",borderColor: "grey", overflow: "auto", borderRadius: "3px", fontSize:"15px", resize: "vertical"}}
             ref={input => this.title = input}/></p>
       </div>
         <div style = {{float: "right", fontSize: "15px"}}>
           <p>
             <legend><b>Release Date(YYYY-MM-DD)</b></legend>
         <input
             type="date"
             style = {{padding: "10px",width:"70%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px" }}
             ref={input => this.date = input}/> </p>
         </div>
        
         <div style = {{float: "left", fontSize: "15px"}}>
           <p>
             <legend><b>Director</b></legend>
         <input
             type="text"
             style = {{padding: "10px",width:"70%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.director = input}/> </p>
         </div>
         <div style = {{float: "right", fontSize: "15px", marginBottom: "20px"}}>
           <p>
             <legend><b>Genre</b></legend>
         <input
             type="text"
             style = {{padding: "10px",width:"70%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.genre = input}/> </p>
         </div>

         <div style = {{clear: "both", fontSize: "15px"}}>
           <p>
             <legend><b>Description</b></legend>
         <textarea
             type="text"
             style = {{padding: "10px",width:"100%", height: "150px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none",fontSize: "15px"}}
             ref={input => this.description = input}/> </p>
         </div>
         
         <div style = {{fontSize: "15px"}}>
           <p>
             <legend><b>Image Url</b></legend>
         <input
             type="text"
             style = {{padding: "10px",width:"100%", height: "100px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.imageUrl = input}/> </p>
         </div>
         <div style = {{fontSize: "15px"}}>
           <p>
             <legend><b>Trailer Url</b></legend>
         <textarea
             type="text"
             style = {{padding: "10px",width:"100%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey",  borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.trailer = input}/> </p>
         </div>
           
         <button 
             type="submit"
             style ={{padding: "10px",backgroundColor: "#a86dc4", fontSize: "15px", width:"100%", height:"50px", border:"solid", borderWidth: "1px",borderRadius: "3px", borderColor: "grey"}}
            ><b>Save</b>
         </button>
        </form>
            </div>
          );

        
       
       
      }
      
    }
    
export default withRouter(AddMovie);
