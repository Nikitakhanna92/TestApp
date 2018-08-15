import React, { Component } from 'react';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PostComment from './PostComment.js'

class CardView extends Component {
  render() {
    return (
      this.props.formValues.map((value, index) =>
        <div className="card" style={{ 'width': '45rem', 'margin': '0 auto 8px' }}>
          <div className="card-head"> {value.user}</div>
          <div className="card-body">
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.comment}</p>
          </div>
        </div>
      ));
  }
}

export default CardView;
