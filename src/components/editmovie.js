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
      <form className="form-inline" onSubmit={this.onSubmit}>
        
       <div style = {{float: "left", fontSize: "15px"}}>
         <p>
         <legend><b>Title</b></legend>
       <input
           type="text"
           title="title"
           name="title"
           style = {{padding: "10px",width:"70%", height: "50px",border: "solid",borderWidth:"1px",borderColor: "#2f0244", overflow: "auto", borderRadius: "3px", fontSize:"15px"}}
           ref={input => this.title = input}
           value = {this.state.title}
           onChange = {this.handleInputChange.bind(this)}
        />
         </p>
       </div>
    
       <div style = {{float: "right", fontSize: "15px"}}>
         <p>
       <legend><b>Release Date</b></legend>
       <input
           type="text"
           name="releaseDate"
           ref={input => this.date = input}
           style = {{padding: "10px",width:"70%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px" }}
           value = {this.state.releaseDate ||""}
           onChange = {this.handleInputChange.bind(this)}
           readOnly
           /> </p>
       </div>
       
       <div style = {{float: "left", fontSize: "15px"}}>
       <p>
       <legend><b>Director</b></legend>
       <input
           type="text"
           name="director"
           ref={input => this.director = input}
           style = {{padding: "10px",width:"70%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.director}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       <div style = {{float: "right", fontSize: "15px", marginBottom: "20px"}}>
       <p>
       <legend><b>Genre</b></legend>
       <input
           type="text"
           name="genre"
           ref={input => this.genre = input}
           style = {{padding: "10px",width:"70%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.genre}
           onChange = {this.handleInputChange.bind(this)}
           /> 
       </p>
       </div>
       <div style = {{clear: "both", fontSize: "15px"}}>
       <p>
       <legend><b>Description</b></legend>
       <textarea
           type="text"
           name="description"
           ref={input => this.description = input}
           style = {{padding: "10px",width:"100%", height: "150px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none",fontSize: "15px"}}
           value = {this.state.description}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       
       <div style = {{fontSize: "15px"}}>
       <p>
       <legend><b>Image Url</b></legend>
       <textarea
           type="text"
           name="imageUrl"
           ref={input => this.imageUrl = input}
           style = {{padding: "10px",width:"100%", height: "100px", border: "solid",borderWidth:"1px",borderColor: "grey", borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.imageUrl}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
       </div>
       
       <div style = {{fontSize: "15px"}}>
       <p>
       <legend><b>Trailer Url</b></legend>
       <textarea
           type="text"
           name="trailer"
           ref={input => this.trailer = input}
           style = {{padding: "10px",width:"100%", height: "50px", border: "solid",borderWidth:"1px",borderColor: "grey",  borderRadius: "3px", resize:"none", fontSize:"15px"}}
           value = {this.state.trailer}
           onChange = {this.handleInputChange.bind(this)}
           /> </p>
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
    
export default EditMovie;
