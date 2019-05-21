import React from 'react';
import { matchPath, withRouter } from 'react-router';
import { Button } from 'grommet';

// A simple component that shows the pathname of the current location
class RoutedButton extends React.Component {
  onClick = event => {
    const { history, path } = this.props;
    event.preventDefault();
    history.push(path);
  };

  render() {
    const {
      exact,
      icon,
      match,
      location,
      history,
      path,
      strict,
      ...rest
    } = this.props;
    const pathMatch = matchPath(location.pathname, { exact, path, strict });
    return (
      <Button plain active={!!pathMatch} {...rest} onClick={this.onClick} />
    );
  }
}

export default withRouter(RoutedButton);
