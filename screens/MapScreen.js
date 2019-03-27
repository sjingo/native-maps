import React from 'react';
import {Dimensions, View} from 'react-native';
import MapHome from './../components/MapHome';
import {Input} from 'react-native-elements';
import withUserLocation from '../hocs/withUserLocation';
// import Inputs from './../components/WhereTo'

const {height, width} = Dimensions.get ('window');

class Map extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  state = {
    markers: [
      {
        coordinate: {
          latitude: 53.835927,
          longitude: -1.776978,
        },
        title: 'Shipley',
        description: 'Center of the universe',
      },
    ],
    location: false,
  };
  componentDidMount () {
    console.warn ('on mount', this.props.location);
    const {latitude, longitude} = this.props.location.coords;
    this.setState ({
      markers: [
        {
          coordinate: {
            latitude,
            longitude,
            title: 'last location',
            description: 'current or most recent location',
          },
        },
      ],
    });
  }

  setLocation = location => this.setState ({location});
  render () {
    const {markers} = this.state;
    return (
      <View style={{flex: 1, width, height}}>
        <View
          style={{
            padding: 10,
            position: 'absolute',
            top: 50,
            width,
            height: 100,
            flex: 1,
            zIndex: 1,
          }}
        >
          <Input
            labelStyle={{backgroundColor: 'white'}}
            label="Where to?"
            raised
            inputContainerStyle={{backgroundColor: 'white'}}
          />
        </View>
        <MapHome markers={markers} setLocation={this.setLocation} />
      </View>
    );
  }
}

export default withUserLocation (Map);
