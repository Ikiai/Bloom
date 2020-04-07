import React, { Component } from "react";
import { Link } from "react-router-dom";


const lod = require("./load.gif");
const FaceBook = require("./FB.jpeg");
const Twitter = require("./Twitter.jpeg");
const Add = require ("./Add.jpeg");

class MovieComponent extends Component {
  state = {
    loading: true,
    data: [],
    description: "",
    genre: "",
    title: "",
    director: "",
    trailer: "",
    _id: "",
    imageUrl: "",
  };

  async componentDidMount() {
    const url = "https://movi-lib.herokuapp.com/api/v1/movies";
    const response = await fetch(url);
    const movies = await response.json();
    this.setState({ data: movies.data, loading: false });
    console.log(movies.data);
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="loader">
          <img src={lod} alt="" width="200px" />
        </div>
      );
    } else {
      return (
      <div>
      <div className="navbar"> 
      <ul><li>
            <Link to="/create">
              <button type="submit" style={{border:"none"}}>
              <img src = {Add} alt ="" width="50px"/>
              </button>
            </Link></li>
            <li><img src = {FaceBook} alt ="" width="50px"/></li>
            <li><img src = {Twitter} alt ="" width="50px"/></li>
            </ul>
          
          </div>
        <div className="container">
          {this.state.data.map((data) => (
            <div key={data._id} className="card">
              <Link
                to={`/details/${data._id}`}
                style={{ textDecoration: "none" }}
              >
                <img alt="" width="150" src={data.imageUrl} />
                <div
                  style={{
                    fontSize: "20px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {data.title}
                </div>
              </Link>
              <div>{data.genre}</div>
            </div>
          ))}
         
        </div>
        </div>
      );
    }
  }
}
export default MovieComponent;
