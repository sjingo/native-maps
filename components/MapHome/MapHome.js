import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {Constants, Permissions, MapView} from 'expo';
import {uniqueId} from 'lodash';
const {height, width} = Dimensions.get ('window');

class MapHome extends React.Component {
  state = {
    location: null,
  };

  componentWillMount () {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState ({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync ();
    }
  }
  _getLocationAsync = async () => {
    try {
      let {status} = await Permissions.askAsync (Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState ({
          errorMessage: 'Permission to access location was denied',
        });
      }

      let location = await Location.getCurrentPositionAsync ({
        enableHighAccuracy: true,
      });
      this.setState ({location});
      this.props.setLocation (location);
    } catch (err) {
      console.log (err);
      this.setState ({
        errorMessage: 'There was an error, sorry',
      });
    }
  };

  render () {
    return (
      <MapView
        style={{flex: 1, width, height}}
        initialRegion={{
          latitude: 53.835927,
          longitude: -1.776978,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {this.props.markers.map (marker => (
          <MapView.Marker
            key={uniqueId}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}
export default MapHome;
