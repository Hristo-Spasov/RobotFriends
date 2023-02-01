import React, { Component , Fragment } from "react";
import CardList from "../components/CardList"; 
import SearchBox from "../components/SearchBox.js"
import Scroll from "../components/Scroll";
import './App.css'




class  App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: "",
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
          return  robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <Fragment>
                <div className="tc">
                    <h1 className="f1" >ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
            </Fragment>
        );
    }  

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json()
            })
            .then((users) => {
                this.setState({ robots: users })
            })
    }

}



export default App;