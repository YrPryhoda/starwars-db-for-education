import React from 'react';
import ErrorCatch from '../error-catch';

export default class ErrorBoundry extends React.Component {
  state = {
    hasError: false
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {

    if (this.state.hasError) {
      return (
        <div className="  navbar navbar-expand-lg navbar-light bg-light media ">
          <ErrorCatch />
        </div>
      )
    }
    return this.props.children; //body of tag
  }
}