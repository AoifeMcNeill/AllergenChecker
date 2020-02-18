import React, {Component} from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//import ScreenName from 'AllergenChecker/components/ScreenName.js';

//import Header from 'AllergenChecker/components/Header.js';

export default class addAllergen extends Component {
  constructor(props) {
    super(props);
    (this.array = [])(
      (this.state = {
        arrayHolder: [],
        textInput_Holder: '',
      }),
    );
  }

  //static navigationOptions = {};

  ComponentDidMount() {
    this.setState({arrayHolder: [this.array]});
  }

  joinData = () => {
    this.array.push({title: this.state.textInput_Holder});
    this.setState({arrayHolder: [...this.array]});
  };

  FlatListItemsSeparator = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  getItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter value here"
          onChangeText={data => this.setState({textInput_Holder: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
        //<React.Fragment>
          //<Header />
          //<View style={styles.container}>
            //<ScreenName name={'Add Allergen'} />
          //</View>
        //</React.Fragment>
        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Add values to FlatList</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.arrayHolder}
          width="100%"
          extraData={this.state.arrayHolder}
          keyExtractor={index => index.toString()}
          ItemSeparatorComponent={this.FlatListItemsSeparator}
          renderItem={({item}) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.title)}>
              {' '}
              {item.title}{' '}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
