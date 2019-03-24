import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Share.styles';
//import { ShareWrapper } from './Share.styles';

class Share extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Share will mount');
  }

  componentDidMount = () => {
    console.log('Share mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Share will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Share will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Share did update');
  }

  componentWillUnmount = () => {
    console.log('Share will unmount');
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.ShareWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.ShareWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Share.propTypes = {
  // bla: PropTypes.string,
};

Share.defaultProps = {
  // bla: 'test',
};

export default Share;
