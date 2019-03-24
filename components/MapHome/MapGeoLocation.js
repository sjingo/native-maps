
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

export default class App extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Pan, zoom, and tap on the map!
        </Text>

        {
          this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
                <Text>Map region doesn't exist.</Text> :
                <MapView
                  style={{ alignSelf: 'stretch', height: 400 }}
                  region={this.state.mapRegion}
                  onRegionChange={this._handleMapRegionChange}
                />
        }

        <Text>
          Location: {this.state.locationResult}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

/* import React from 'react';
import {Dimensions, Platform } from 'react-native';
import {Constants, MapView  } from 'expo';
import {uniqueId} from 'lodash';
const { height, width } = Dimensions.get('window');

class MapHome extends React.Component{

    // state = {
    //   location: null
    // }

    // componentWillMount() {
    //   if (Platform.OS === 'android' && !Constants.isDevice) {
    //     this.setState({
    //       errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
    //     });
    //   } else {
    //     this._getLocationAsync();
    //   }
    // }
    // _getLocationAsync = async () => {
    //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //   if (status !== 'granted') {
    //     this.setState({
    //       errorMessage: 'Permission to access location was denied',
    //     });
    //   }

    //   let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    //   this.setState({ location });
    //   this.props.setLocation(location)
    // };


  render(){

    return  (     
        <MapView
          style={{ flex: 1, width, height }}
          initialRegion={{
            latitude: 53.835927,
            longitude: -1.776978,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.props.markers.map( marker=>    
          <MapView.Marker 
          key={uniqueId}
          coordinate={marker.coordinate} 
          title={marker.title} 
          description={marker.description} />)
          }
        </MapView>) 

    
  }  


}   
export default MapHome;
 */