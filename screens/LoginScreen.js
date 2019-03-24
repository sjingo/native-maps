import react from 'React';
import {Dimensions, View,Text } from 'react-native'; 

const { height, width } = Dimensions.get('window');

const LoginScreen = props => <View style={{flex: 1,justifyContent: 'center', width,height}}><Text style={{width, height: 100, fontSize: 50, alignSelf:'center'}}>Login</Text></View>

export default LoginScreen;