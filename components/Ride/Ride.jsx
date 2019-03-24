import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Ride.styles';
//import { RideWrapper } from './Ride.styles';

class Ride extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Ride will mount');
  }

  componentDidMount = () => {
    console.log('Ride mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Ride will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Ride will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Ride did update');
  }

  componentWillUnmount = () => {
    console.log('Ride will unmount');
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.RideWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.RideWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Ride.propTypes = {
  // bla: PropTypes.string,
};

Ride.defaultProps = {
  // bla: 'test',
};

export default Ride;
