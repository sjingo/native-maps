import React from 'react';
import withUserLocation from './../hocs/withUserLocation';
import {Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

class MyLocation extends React.Component {
  render () {
    const {location} = this.props;
    const text = JSON.stringify (location);
    console.log (location);
    return (
      <Card raised title="Your location is...">
        <Text style={{marginBottom: 10}}>
          {text}
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    );
  }
}

export default withUserLocation (MyLocation);
