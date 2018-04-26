/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList
} from "react-native";
import { Header } from "react-native-elements";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : " ";
    return <Text>{display}</Text>;
  }
}

class Greeting extends Component {
  render() {
    return <Text style={styles.welcome}>Hello {this.props.name}!</Text>;
  }
}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#767D81" }}
          centerComponent={{ text: "ListFolio", style: { color: "#767D81" } }}
          rightComponent={{ icon: "home", color: "#767D81" }}
          outerContainerStyles={{
            backgroundColor: "#3E4448",
            borderBottomColor: "#41474B"
          }}
        />
        <Greeting name="Rexxar" />
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text style={styles.welcome}>Welcome to React Native! Ivan</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>Hey there!</Text>
        <Blink text="I love to blink" />
        <Text style={{ padding: 10, fontSize: 42 }}>{this.state.text}</Text>
        <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
        >
          <Text style={styles.TextStyle}> VIEW PORTFOLIO </Text>
        </TouchableOpacity>

        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22282C"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  },
  instructions: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 5
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1
  },
  TextStyle: {
    color: "#FFFFFF"
  }
});
