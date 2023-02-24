import React from "react";
import { connect } from "react-redux"

class App extends React.Component{

    // filtering button apa yang di pencet
    increment = () => {
        this.props.dispatch({
          type: "INCREMENT"
        });
      };
    
      decrement = () => {
        this.props.dispatch({
          type: "DECREMENT"
        });
      };

      reset = () => {
        this.props.dispatch({
            type: "RESET"
        })
      }
 
      render() {
        return (
          <div className="App mt-5">
            <button onClick={this.increment} >
              Increment
            </button>
            <button onClick={this.decrement} >
              Decrement
            </button>
            <button onClick={this.reset} >
              Reset
            </button>
            <h2 className="mt-5 display-1">{this.props.count}</h2>
          </div>
        );
      }
}

// function mapStateToProps berfungsi merubah value state 
const mapStateToProps = state => {
    return {
      count: state.count
    };
  };



export default connect(mapStateToProps)(App);
