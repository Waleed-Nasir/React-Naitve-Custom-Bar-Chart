import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
 ////////////////LinearGradient or Use React Native LinearGradient//////////////////////
import { LinearGradient } from 'expo'
import viewStyles from "../styles/view-styles";
import Calender from './Calender';
let height = Dimensions.get('window').height;
const legendData = [
  {
    name: "Humidity(%)",
    symbol: {
      type: "circle",
      fill: "green"
    }
  },
  {
    name: "Temperature(F)",
    symbol: {
      type: "circle",
      fill: "red"
    }
  }];


const legendStyle = { border: { size: 20, stroke: "black" }, title: { fontSize: 20 } };
let screenWidth = Dimensions.get('window').width;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
class BarChart extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor() {
    super();
    ///////////////////////////number only user fore graph Poll height//////////////////////////////////
    this.state = {
      Range: [
        { feel: [2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 5, 5, 5, 4, 5, 5, 6, 6], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 5, 4, 4, 5, 5] },
        { feel: [2, 2, 3, 3, 4, 3, 3, 3, 3], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 45, 4, 4, 5, 5, 5,] },
        { feel: [2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 5, 5, 5, 4, 5, 5, 6, 6, 2, 1, 1, 1], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 45, 4, 4, 5, 5, 5,] },
        { feel: [2, 2, 3, 3, 4, 3, 3, 3, 3], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 4,] },
        { feel: [2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 5, 5, 5, 4, 5, 5, 6, 6, 2, 1, 1, 1], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 45, 4, 4, 5, 5, 5,] },
        { feel: [2, 2, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 4, 3, 3, 3] },
        { feel: [2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 5, 5, 5, 4, 5, 5, 6, 6], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 5, 4, 4, 5, 5] },
        { feel: [2, 2, 3, 3, 4, 3, 3, 3, 3], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 45, 4, 4, 5, 5, 5,] },
        { feel: [2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 5, 5, 5, 4, 5, 5, 6, 6, 2, 1, 1, 1], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 45, 4, 4, 5, 5, 5,] },
        { feel: [2, 2, 3, 3, 4, 3, 3, 3, 3], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 4,] },
        { feel: [2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 5, 5, 5, 4, 5, 5, 6, 6, 2, 1, 1, 1], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 45, 4, 4, 5, 5, 5,] },
        { feel: [2, 2, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3], feelSec: [2, 3, 4, 4, 2, 3, 3, 3, 2, 4, 4, 4, 3, 3, 3] }
      ],
    }
  }

  render() {
    return (
      <View style={viewStyles.container}>
       <View style={{ flex: 5 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ height: (height - 200) * .8 }}>

              <View style={{ height: "100%" }}>
                <View style={{ position: "absolute", top: 0, width: "100%", height: "80%" }}>
                  {([...Array(7)]).map((val, i) => (
                    <View key={i} style={{ width: 32, flexDirection: "row", alignItems: "flex-end", position: "absolute", bottom: `${i * 12}%` }}>
                      <Text style={{ marginHorizontal: 8, fontSize: 8, }}>{i + 1}00</Text>
                    </View>
                  ))}
                </View>
                <View style={{ height: "80%", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingLeft: 28 }}>


                  {([...Array(12)]).map((item, i) => {
                    if (this.state.Range && this.state.Range[i]) {
                      var feel = Number(this.state.Range[i].feel.slice(this.state.Range[i].feel.length - 1)) * 2;
                      var feel2 = Number(this.state.Range[i].feelSec.slice(this.state.Range[i].feelSec.length - 1)) * 2;
                      return (
                        <View key={i} style={{ flexDirection: 'row', height: '100%', marginLeft: 9, marginRight: 9, width: screenWidth / 26 - 5, justifyContent: "flex-end", alignItems: 'flex-end' }}>
                          <View key={i} style={{ marginLeft: 6, marginRight: 2, height: `${(feel * (height - 200)) / 80}%`, width: screenWidth / 26 - 5, alignItems: "center", justifyContent: "space-around" }}>
                            <LinearGradient colors={['#ff5b59', '#ff132b']} key={i} style={{ height: "100%", width: screenWidth / 26 - 5, borderRadius: 5 }}  ></LinearGradient>
                          </View>
                          <View key={i} style={{ height: `${(feel2 * (height - 200)) / 100}%`, width: screenWidth / 26 - 5, alignItems: "center", justifyContent: "space-around" }}>
                            <LinearGradient colors={['#81c5e2', '#456888', '#0a0d31']} key={i} style={{ height: "100%", width: screenWidth / 26 - 5, borderRadius: 5 }}  ></LinearGradient>
                          </View>
                        </View>
                      )
                    }
                    else {
                      return (<View key={i} style={{ flexDirection: 'row', height: '100%', marginLeft: 9, marginRight: 9, width: screenWidth / 26 - 5, justifyContent: "flex-end", alignItems: 'flex-end' }}>
                        <View key={i} style={{ marginLeft: 6, marginRight: 2, height: 10, width: screenWidth / 26 - 5, alignItems: "center", justifyContent: "space-around" }}>
                          <View key={i} style={{ height: "100%", width: screenWidth / 26 - 5, borderRadius: 5 }}  ></View>
                        </View>
                        <View key={i} style={{ height: 10, width: screenWidth / 26 - 5, alignItems: "center", justifyContent: "space-around" }}>
                          <View key={i} style={{ height: "100%", width: screenWidth / 26 - 5, borderRadius: 5 }}  ></View>
                        </View>
                      </View>)
                    }

                  })}
                </View>

                <View style={{ flexDirection: "row", height: "15%", paddingLeft: 20 }}>
                  {monthNames.map((item, index) => {
                    return (
                      <View key={index} style={{ height: "100%", width: screenWidth / 13, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ color: "#000", textAlign: "center", flexWrap: "wrap", fontSize: 8, width: "90%" }}>
                          {item}</Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TextContainer: {
    flexDirection: 'column',
    padding: 20
  },
  TextHTContainer: {
    flexDirection: 'column',
    padding: 20,
    alignItems: 'flex-end'
  },
  TextStateContainer: {
    flexDirection: 'column',
  },
  Text: {
    // flex: 1,
    width: '88%',
    // justifyContent: 'start',
    flexDirection: 'row'
  },
  HomeText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default BarChart;
