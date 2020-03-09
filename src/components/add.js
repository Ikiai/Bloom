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
      });
      this.setState({loading: false})   
      
    };
       
      render (){
       
       
          return (
            <div className = "form">
        <form className="form-inline" onSubmit={this.onSubmit}>
      <h1>Add Movie</h1>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="Title"
             ref={input => this.title = input}/>
         <div>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="Release Date(YYYY-MM-DD)"
             ref={input => this.date = input}/> 
         </div>
        
         <div>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="Director"
             ref={input => this.director = input}/> 
         </div>
         <div>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="Description"
             ref={input => this.description = input}/> 
         </div>
         <div>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="Genre"
             ref={input => this.genre = input}/> 
         </div>
         <div>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="ImageUrl"
             ref={input => this.imageUrl = input}/> 
         </div>
         <div>
         <input
             type="text"
             style = {{width:"70%", height: "50px"}}
             placeholder="TrailerUrl"
             ref={input => this.trailer = input}/> 
         </div>
           
         <button 
             type="submit"
            ><b>Save</b>
         </button>
        </form>
            </div>
          );

        
       
       
      }
      
    }
    
export default withRouter(AddMovie);
