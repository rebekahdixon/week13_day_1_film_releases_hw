import React, {Component, Fragment} from 'react';

class Film extends Component {
  render() {
    return(
    <Fragment>
    <li>
    <a href={this.props.url}> {this.props.name}</a>
    </li>
    </Fragment>
);
}
}
 export default Film;
