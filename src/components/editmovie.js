import React, {Component} from "react";

class EditMovie extends Component{
  
    state = {
      loading: true,
      description: "",
      genre: "",
      title: "",
      director: "",
      trailer: "",
      _id:"",
      imageUrl:""
    };
        
    async componentDidMount(){
    
     await this.setState({
         ...this.props.location.state.data
        })
      console.log(this.state)
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
        this.setState({
          ...info
        });

        this.saveChange();
        
       };

    handleInputChange (e){
    const target = e.target;
    const value= target.value;
    this.setState({
    [e.target.name]: value});
       }

       saveChange (){
    
      fetch(`https://movi-lib.herokuapp.com/api/v1/movies/${this.state._id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        this.props.history.push(`/details/${this.state._id}`);
        alert("Success!! Movie has been edited.");
      })

       };
  
        
      render (){
        return (
          <div className = "editform">
         <h2>Edit Movie Details</h2>
         <span>&nbsp;&nbsp;</span>
      <form className="form-inline" onSubmit={this.onSubmit}>
       <div>
         <p>
         <legend>Title</legend>
       <input
           type="text"
           title="title"
           name="title"
           style = {{width:"50%", height: "50px",border: "none", overflow: "auto", borderRadius: "3px", resize:"vertical", fontSize:"15px"}}
           ref={input => this.title = input}
           value = {this.state.title}
           onChange = {this.handleInputChange.bind(this)}
        />
         </p>
       </div>
    
       <div>
         <p>
       <legend>Release Date</legend>
       <input
           type="text"
           name="releaseDate"
           ref={input => this.date = input}
           style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.releaseDate ||""}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       
       <div>
       <p>
       <legend>Director</legend>
       <input
           type="text"
           name="director"
           ref={input => this.director = input}
           style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.director}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       <div>
       <p>
       <legend>Description</legend>
       <textarea
           type="text"
           name="description"
           ref={input => this.description = input}
           style = {{width:"100%", height: "100px", border: "none", borderRadius: "3px", fontSize: "15px"}}
           value = {this.state.description}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       <div>
       <p>
       <legend>Genre</legend>
       <input
           type="text"
           name="genre"
           ref={input => this.genre = input}
           style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.genre}
           onChange = {this.handleInputChange.bind(this)}
           /> 
       </p>
       </div>
       <div>
       <p>
       <legend>Image Url</legend>
       <textarea
           type="text"
           name="imageUrl"
           ref={input => this.imageUrl = input}
           style = {{width:"50%", height: "50px", border: "none", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.imageUrl}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       <div>
       <p>
       <legend>Trailer Url</legend>
       <textarea
           type="text"
           name="trailer"
           ref={input => this.trailer = input}
           style = {{width:"50%", height: "50px", border: "none",  borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.trailer}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
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
    
export default EditMovie;
