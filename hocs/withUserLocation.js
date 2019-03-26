
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';


const withUserLocation = WrappedComponent =>{

     class UserLocation extends Component {
        state = {
            location: false,
            errorMessage: null,
        };

        componentWillMount() {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                this.setState({
                    errorMessage: 'Location doesn\'t work on an Android emulator. Try it on a compiled app or device emulator.',
                });
            } else {
                this._getLocationAsync();
            }
        }

        _getLocationAsync = async () => {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                this.setState({
                    errorMessage: 'Permission to access location was denied',
                });
            }
            let location = await Location.getCurrentPositionAsync({});
            this.setState({ location });
        };

        render(){
            
            return this.state.location ? 
                <WrappedComponent
                    errorMessage={this.state.errorMessage}
                    location={this.state.location}
                />: null;
            
        }
        
    }
    return UserLocation;
}

export default withUserLocation;




