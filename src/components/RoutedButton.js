/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { matchPath, withRouter } from 'react-router';
import { Button } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';

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
      <Button
        plain
        active={!!pathMatch}
        {...rest}
        icon={
          icon && !!pathMatch ? (
            <GrommetIcon color="accent-3" size="small" />
          ) : (
            <React.Fragment />
          )
        }
        onClick={this.onClick}
      />
    );
  }
}

export default withRouter(RoutedButton);
