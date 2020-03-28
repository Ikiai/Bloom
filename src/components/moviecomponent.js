import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Add} from "@material-ui/icons";

const lod = require("./load.gif");

 class MovieComponent extends Component{
    state = {
        loading: true,
        data: [],
        description: "",
        genre: "",
        title: "",
        director: "",
        trailer: "",
        _id:"",
        imageUrl:"", 
      };
      
      async componentDidMount(){
        const url = "https://movi-lib.herokuapp.com/api/v1/movies";
        const response = await fetch (url);
        const movies = await response.json();
        this.setState({data: movies.data, loading: false})
        console.log(movies.data);
      }
     
       render (){
        if (this.state.loading===true){
          return(<div className="loader">
            <img src = {lod} alt = "" style = {{ display:"block", marginLeft:"auto", marginRight:"auto", backgroundColor:"grey", width:"150px"}}/>
            </div>
          )
        }
        else{
          return (
            <div className = "container" >
               <span>&nbsp;&nbsp;</span>
            {this.state.data.map(data =>(
                  <div key ={data._id} className= "card">
                    <Link to= {`/details/${data._id}`} style = {{textDecoration: "none"}}>
                    <img alt="" width="150" src={data.imageUrl}/>
                         <div style = {{fontSize: "20px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{data.title}</div> 
                   </Link>
                   <div>{data.genre}</div>
                   </div>
                              ))}
                              <div style = {{float:"right"}}>
            <Link to="/create">
                         <button 
                       type="submit"
                      ><Add/>
                   </button> 
                   </Link> 
                   Click to add movie
                  </div>
            
                              </div>
                     
            )
        }

       }
 }
 export default MovieComponent;
