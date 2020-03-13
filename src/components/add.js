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
      <h1>Add Movie</h1>
      <span>&nbsp;&nbsp;</span>
      <div>
      <p>
      <legend>Title</legend>
         <input
             type="text"
             style = {{width:"50%", height: "50px",border: "none", overflow: "auto", borderRadius: "3px", resize:"vertical", fontSize:"15px"}}
             ref={input => this.title = input}/></p>
       </div>
         <div>
           <p>
             <legend>Release Date(YYYY-MM-DD)</legend>
         <input
             type="text"
             style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.date = input}/> </p>
         </div>
        
         <div>
           <p>
             <legend>Director</legend>
         <input
             type="text"
             style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.director = input}/> </p>
         </div>
         <div>
           <p>
             <legend>Description</legend>
         <textarea
             type="text"
             style = {{width:"100%", height: "100px", border: "none", borderRadius: "3px", fontSize: "15px"}}
             ref={input => this.description = input}/> </p>
         </div>
         <div>
           <p>
             <legend>Genre</legend>
         <input
             type="text"
             style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.genre = input}/> </p>
         </div>
         <div>
           <p>
             <legend>Image Url</legend>
         <input
             type="text"
             style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.imageUrl = input}/> </p>
         </div>
         <div>
           <p>
             <legend>Trailer Url</legend>
         <textarea
             type="text"
             style = {{width:"50%", height: "50px", border: "none",  borderRadius: "3px", resize:"none", fontSize:"15px"}}
             ref={input => this.trailer = input}/> </p>
         </div>
           
         <button 
             type="submit"
             style ={{backgroundColor: "rgba(135, 134, 221, 0.877)", fontSize: "15px", width:"50px", height:"50px", border:"none"}}
            ><b>Save</b>
         </button>
        </form>
            </div>
          );

        
       
       
      }
      
    }
    
export default withRouter(AddMovie);
