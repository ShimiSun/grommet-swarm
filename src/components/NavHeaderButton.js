import React from 'react';
import { matchPath, withRouter } from 'react-router';
import { Button } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';

// A simple component that shows the pathname of the current location
class NavHeaderButton extends React.Component {
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
        pad={{ horizonatl: 'small' }}
        active={!!pathMatch}
        {...rest}
        icon={
          <GrommetIcon
            color={icon && !!pathMatch ? 'accent-3' : '#425563'}
            size="small"
          />
        }
        onClick={this.onClick}
      />
    );
  }
}

export default withRouter(NavHeaderButton);
