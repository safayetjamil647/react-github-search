import React, { Component } from "react";
import Navbar from "./../src/components/layout/Navbar";
import User from "./../src/components/users/User";
import "./App.css";
import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className=''>
        <Navbar />
        <div className='container'>
          {" "}
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
