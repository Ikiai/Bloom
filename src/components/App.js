import React, {Component} from "react";
import "./App.css";
import Header from "./Header";
import {BrowserRouter, Route} from "react-router-dom";
import Details from "./movieDetail";
import MovieComponent from "./moviecomponent";
import AddMovie from "./add";
import EditMovie from "./editmovie";


class App extends Component {
  state = {
    loading: true,
    data:[],
    description: "",
    genre: "",
    title: "",
    director: "",
    trailer: "",
    _id:"",
    imageUrl:"", 
   
  };

  render (){
   
  
      return (
        <BrowserRouter> 
      <div className="App">
             <Header text="JOJO'S MOVIE LIBRARY" /> 
         {/* <Switch> */}
         <Route exact={true} path="/" component = {MovieComponent}/>
         <Route exact={true} path="/create" component = {AddMovie}/>
         <Route exact={true} path="/details/:id" component = {Details}/>
         <Route exact={true} path="/details/:id/edit" component = {EditMovie}/>
         {/* </Switch> */}
             </div>
        </BrowserRouter>  
         );  
    }
  

}


export default App;
        


    
