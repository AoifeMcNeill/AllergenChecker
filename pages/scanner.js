//Ignores false errors
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

//Import react into this file
import React, {Component} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
//import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

//Import the android camera & its utilities
import {CameraKitCameraScreen} from 'react-native-camera-kit';

import {allergens} from '../storage';

//Imports the basic components for react-native
//Text/View/StyleSheet for UI
//Linking for URL interaction
//TouchableHighlight for URL link to "pop up"
//PermissionsAndroid for asking users for permission to use the camera
//Platform for recognizing android platform
import {
  Text,
  View,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

//URL for the Online DataBase (ODB), latter half to be included later
const apiUrl = 'https://world.openfoodfacts.org';

//const Drawer = createDrawerNavigator();

//Intiialization of the program
export default class scanner extends Component {
  constructor() {
    super();
    //Sets default state
    this.state = {
      scanValue: '', //Default is empty
      openScanner: false, //Default is off
      resultValue: null, //Default is null
    };
  }
  //End

  //If link is opened, do this.
  onOpenlink() {
    Linking.openURL(this.state.scanValue); //Open link attached to scanned value
  }
  //After scanner used, grab json info from api via url
  onGetInfoFromApi(scanValue) {
    //scanned value is the barcode number
    //rest of earlier url link, as this part will change per barcode
    const url = apiUrl + '/api/v0/product/' + scanValue + '.json';
    let that = this;
    console.log(url);
    //fetch & return json
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => this.onParseInfo(data)) //returns value
      .catch(response => that.onParseInfo('Error', scanValue)); //if response returns null, return error
  }

  //Get specific info from ODB api
  onParseInfo(json, scanValue) {
    //If there is json, do this
    //if (json.status !== 0 && json.code && json.code.length > 0) {
    console.log(json);
    let jsonProduct = json.product;
    //returns the specific info wanted
    this.setState({
      resultValue: {
        product_name: jsonProduct.product_name_en || jsonProduct.product_name,
        brands: jsonProduct.brands,
        ingredients: (
          jsonProduct.ingredients_text_with_allergens_en ||
          jsonProduct.ingredients_text_with_allergens ||
          ''
        )
          .split(',')
          .map(x => x.trim()),
        traces: jsonProduct.traces_from_ingredients,
        labels: jsonProduct.labels,
        origins: jsonProduct.origins,
      },
    });
    //If no json, return empty
    //} else {
    //this.setState({resultValue: {}});
    //}
  }
  //After scanner is used, do this.
  onBarcodeScan(scanValue) {
    //Reset to default
    this.setState({scanValue: scanValue});
    this.setState({openScanner: false});
    //intiialize the grabber for ODB api info
    this.onGetInfoFromApi(scanValue);
  }
  //If scanner is opened, do this.
  onOpenScanner() {
    var that = this;
    //If platform is android, ask for camera permission
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          //If waiting for user decision, do this.
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Allergen Checker App Camera Permission',
              message: 'AllergenChecker App would like access to your camera',
            },
          );
          //If permission is granted, do this.
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.setState({scanValue: ''}); //Value remains null ready for scanned info
            that.setState({openScanner: true}); //Scanner is on
          } else {
            //Otherwise permission is denied
            alert('Permission denied');
          }
          //If permission error occurs, do this.
        } catch (err) {
          alert('Camera permission error', err);
          console.warn(err);
        }
      }
      //Calling the permission prompt
      requestCameraPermission();
    } else {
      //If permission is previously granted, just go through
      that.setState({scanValue: ''});
      that.setState({openScanner: true});
    }
  }
  //UI view
  render() {
    console.log(allergens)
    //If scanValue is not empty, then return this
    if (this.state.resultValue != null) {
      return (
        <ScrollView>
          <Text style={styles.headingText}>Brand:</Text>
          <Text style={styles.simpleText}>{this.state.resultValue.brands}</Text>
          <Text style={styles.headingText}>Product:</Text>
          <Text style={styles.simpleText}>
            {this.state.resultValue.product_name}
          </Text>
          <Text style={styles.headingText}>Ingredients:</Text>
          <Text style={styles.simpleText}>
            {this.state.resultValue.ingredients.join(', ')}
          </Text>
          <Text style={styles.headingText}>Traces:</Text>
          <Text style={styles.simpleText}>{this.state.resultValue.traces}</Text>
          <Text style={styles.headingText}>Labels:</Text>
          <Text style={styles.simpleText}>{this.state.resultValue.labels}</Text>
          <Text style={styles.headingText}>Origins:</Text>
          <Text style={styles.simpleText}>
            {this.state.resultValue.origins}
          </Text>
          <Text style={styles.simpleText}>
            {this.state.resultValue
              ? 'Debug: ' + JSON.stringify(this.state.resultValue) //displays resultValue from ODB api
              : ''}
          </Text>
          if (this.state.resultValue.ingredients == allergens){
            Alert.alert(
              'Results:',
              'This is not safe to eat',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
          }
          else{
            Alert.alert(
              'Results:',
              'This is safe to eat',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
          }
        </ScrollView>
      );
    } else if (!this.state.openScanner) {
      //If scanner is not open, display this.
      return (
        //Default is empty, will be filled after scan.
        <View style={styles.container}>
          <Text style={styles.heading}>Start Scanning!</Text>
          <Text style={styles.simpleText}>
            {this.state.scanValue
              ? 'Scanned QR code: ' + this.state.scanValue //displays scanned barcode value
              : ''}
          </Text>
          {this.state.scanValue.includes('http') ? ( //If scanned item contains a URL link, do this.
            <TouchableHighlight
              onPress={() => this.onOpenlink()}
              style={styles.button}>
              <Text style={{color: '#FFFFFF', fontSize: 12}}>Open Link</Text>
            </TouchableHighlight>
          ) : null}
          <TouchableHighlight
            onPress={() => this.onOpenScanner()} //displays the button to open camera for scanning purposes
            style={styles.button}>
            <Text style={{color: '#FFFFFF', fontSize: 12}}>Open Scanner</Text>
          </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}

//UI design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width: 300,
  },
  headingText: {
    color: 'black',
    fontSize: 24,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  simpleText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
});
