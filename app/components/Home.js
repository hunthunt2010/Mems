import React, {Component} from 'react';
import * as T from 'prop-types';
import {topInputOnChange, bottomInputOnChange, topInputOnDeleteChange, bottomInputOnDeleteChange} from '../actions';
import {connect} from 'react-redux';

class Home extends Component {

  render() {
    let {topText, bottomText} = this.props;
    return (
      <div>
        <div className="meme">
          <p className="top">{topText}</p>
          <p className="bottom">{bottomText}</p>
        </div>
        <div className="centered-inputs">
          <input placeholder="Top Text" onKeyUp={this.props.topChange.bind(this)}/>
          <input placeholder="Bottom Text" onKeyUp={this.props.bottomChange.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    topChange: function(e) {
      var inp = String.fromCharCode(e.keyCode);
      if(e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32) {
        dispatch(topInputOnChange(inp));
      } else if (e.keyCode === 8) {
        dispatch(topInputOnDeleteChange());
      } else {
        e.preventDefault();
      }
    },
    bottomChange: function(e) {
      var inp = String.fromCharCode(e.keyCode);
      if(e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32) {
        dispatch(bottomInputOnChange(inp));
      } else if (e.keyCode === 8) {
        dispatch(bottomInputOnDeleteChange());
      } else {
        e.preventDefault();
      }
    }
  };
};

const mapStateToProps = state => {
  let {example} = state;
  return {
    topText: example.topText,
    bottomText: example.bottomText
  };
};

Home.propTypes = {
  topChange: T.func,
  bottomChange: T.func,
  topText: T.string,
  bottomText: T.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);