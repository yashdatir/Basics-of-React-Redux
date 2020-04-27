import React from 'react';
import { connect } from 'react-redux';
class Message extends React.Component{
    render(){
        return (
            <div>
                <p>Welcome, <b>{this.props.txt}</b>. You can chill out till more updates coming soon...</p>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        txt : state.text
    }
}
export default connect(mapStateToProps)(Message);