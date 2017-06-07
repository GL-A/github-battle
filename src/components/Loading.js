import React from 'react';
import PropTypes from 'prop-types';

var styles = {
  contents: {
    textAlign: 'center',
    fontSize: '35px'
  }
}
class Loading extends React.Component {
  constructor( props ) {
    super( props )

      this.state = {
        text: props.text
      }
  }
  componentDidMount() {
    var stopper = this.props.text + '...';

    this.interval = window.setInterval( () => {
      if( this.state.text === stopper ) {
        this.setState( () => {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState( ( prevState ) => {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }, this.props.speed)
  }
  componentWillUnmount(){
    window.clearInterval( this.interval );
  }
  render() {
    return (
      <p style={ styles.contents }>
        { this.state.text }
      </p>
    )
  }
}

export default Loading;

Loading.PropTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};
