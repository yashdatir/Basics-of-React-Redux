import React from 'react';
import { addData } from './Redux/Action';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch){
  return{
    addData: value => dispatch(addData(value))
  }
}

class App extends React.Component {
  render(){
  return (
    <div>
      <input placeholder="Please Write your name here..." onChange={(e)=>this.props.addData(e.target.value)}  />
    </div>
  );
  }
}

export default connect(null,mapDispatchToProps)(App);