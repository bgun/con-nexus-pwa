import React from 'react';


class Image extends React.Component {
  render() {
    return (
      <img src={ this.props.source } />
    );
  }
}

class InternalLink extends React.Component {
  render() {
    return (
      <a href={} onClick={ this.props.onPress }></a>
    );
  }
}

class Text extends React.Component {
  render() {
    return (
      <span className={ this.props.className }>
        { this.props.children }
      </span>
    );
  }
}

class View extends React.Component {
  render() {
    return (
      <div className={ this.props.className }>
        { this.props.children }
      </div>
    );
  }
}

export Image;
export InternalLink;
export Text;
export View;
