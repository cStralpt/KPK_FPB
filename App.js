import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  const [myAngka, setMyAngka] = useState('0');
  const panjangChar = myAngka.length;
  const [angkaContainer, setAngkaContainer] = useState([]);
  const addsAngka = myAngka => {
    setAngkaContainer([...angkaContainer, myAngka]);
    setMyAngka(0);
  };
  // console.warn(angkaContainer);
  const renderNList = ({item}) => {
    return <Text style={styles.executionCont}>{item}</Text>;
  };
  const inputNumbers = numbers => {
    if (numbers === 9) {
      if (myAngka == 0) {
        setMyAngka('9');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '9');
      }
    } else if (numbers === 8) {
      if (myAngka == 0) {
        setMyAngka('8');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '8');
      }
    } else if (numbers === 7) {
      if (myAngka == 0) {
        setMyAngka('7');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '7');
      }
    } else if (numbers === 6) {
      if (myAngka == 0) {
        setMyAngka('6');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '6');
      }
    } else if (numbers === 5) {
      if (myAngka == 0) {
        setMyAngka('5');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '5');
      }
    } else if (numbers === 4) {
      if (myAngka == 0) {
        setMyAngka('4');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '4');
      }
    } else if (numbers === 3) {
      if (myAngka == 0) {
        setMyAngka('3');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '3');
      }
    } else if (numbers === 2) {
      if (myAngka == 0) {
        setMyAngka('2');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '2');
      }
    } else if (numbers === 1) {
      if (myAngka == 0) {
        setMyAngka('1');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '1');
      }
    } else if (numbers === 0) {
      if (myAngka == 0) {
        setMyAngka('0');
      } else if (myAngka > 0) {
        setMyAngka(myAngka + '0');
      }
    }
  };
  useEffect(() => {
    const angkaSaya = parseInt(myAngka);
    if (angkaSaya > 0) {
      setMyAngka(angkaSaya);
    }
    if (panjangChar == 7) {
      console.warn('angka yg dimasukkan terlalu banyak');
    }
  });
  return (
    <View>
      <View style={styles.ResultsContainer}>
        <FlatList
          data={angkaContainer}
          horizontal
          keyExtractor={({id}) => id}
          renderItem={renderNList}
        />
        <View style={styles.valueCont}>
          <Text style={styles.inValue}>{myAngka}</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          borderWidth: 5,
          borderColor: '#ff7',
        }}
        style={{flexGrow: 1}}>
        <View style={styles.ButtonsContainer}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(9)}>
            <Text style={styles.numValue}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(8)}>
            <Text style={styles.numValue}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(7)}>
            <Text style={styles.numValue}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(6)}>
            <Text style={styles.numValue}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(5)}>
            <Text style={styles.numValue}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(4)}>
            <Text style={styles.numValue}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(3)}>
            <Text style={styles.numValue}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(2)}>
            <Text style={styles.numValue}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(1)}>
            <Text style={styles.numValue}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#36eeff"
            style={styles.numBtn}
            onPress={() => inputNumbers(0)}>
            <Text style={styles.numValue}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#FE7E6D"
            style={styles.addBtn}
            onPress={() => addsAngka(myAngka)}>
            <Text style={styles.numValue}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#F5F5F5"
            style={styles.resultsBtn}
            onPress={() =>
              navigation.navigate('CalcResultScreen', {
                dataAngka: angkaContainer,
              })
            }>
            <Text style={[styles.numValue, styles.specialBtn]}>=</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#F5F5F5"
            style={styles.resultsBtn}
            onPress={() =>
              navigation.navigate('CalcResultScreen', {
                dataAngka: angkaContainer,
              })
            }>
            <Text style={[styles.numValue, styles.specialBtn]}>C</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};
function beginCalculations(datanya) {
  // Calc FPB
  function fpb(datas) {
    let dataC,
      a = datas[0],
      b = datas[1];
    while (b != 0) {
      dataC = a % b;
      a = b;
      b = dataC;
    }
    if (b == 0) {
      return a;
    }
  }
  // Calc KPK
  function kpk() {
    return (datanya[0] * datanya[1]) / fpb(datanya);
  }
  return [fpb(datanya), kpk()];
}
console.log(10 % 2);
const CalcResultScreen = ({route}) => {
  const {dataAngka} = route.params;
  // console.log('hasilnya: ' + beginCalculations(dataAngka));
  const [dataAContainer, setDataAContainer] = useState(0);
  // console.warn(dataAngka);
  return (
    <View style={styles.calcContainer}>
      {/* <Text>{dataAngka}</Text> */}
      <View style={styles.KPKresultsContParent}>
        <View style={styles.KPKresultsHeaderCont}>
          <Text style={styles.KPKresultsHeader}>Hasil KPKnya Adalah:</Text>
        </View>
        <View style={styles.KPKresultsCont}>
          <Text style={styles.KPKresults}>
            {beginCalculations(dataAngka)[0]}
          </Text>
        </View>
      </View>
      <View style={[styles.FPBresultsContParent]}>
        <View style={styles.FPBresultsHeaderCont}>
          <Text style={styles.FPBresultsHeader}>Hasil FPBnya Adalah:</Text>
        </View>
        <View style={styles.FPBresultsCont}>
          <Text style={styles.FPBresults}>
            {beginCalculations(dataAngka)[1]}
          </Text>
        </View>
      </View>
    </View>
  );
};
const CalcResultStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <CalcResultStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <CalcResultStack.Screen name="Home" component={Home} />
        <CalcResultStack.Screen
          name="CalcResultScreen"
          component={CalcResultScreen}
        />
      </CalcResultStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  numBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9e7',
    width: 70,
    height: 70,
    margin: 20,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  addBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5959',
    width: 70,
    height: 70,
    margin: 20,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  resultsBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(223, 211, 195, .5)',
    width: 70,
    height: 70,
    margin: 20,
    borderRadius: 40,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    borderWidth: 2,
    borderColor: '#C7B198',
  },
  ResultsContainer: {
    backgroundColor: '#DB6B97',
    height: 200,
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },
  ButtonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numValue: {
    color: 'whitesmoke',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inValue: {
    fontSize: 90,
    color: 'whitesmoke',
  },
  executionCont: {
    fontSize: 20,
  },
  valueCont: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  specialBtn: {
    color: '#C7B198',
  },
  calcContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  KPKresultsContParent: {
    display: 'flex',
    margin: 20,
    backgroundColor: '#e8f9ff',
    // padding: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  KPKresultsHeaderCont: {
    display: 'flex',
    // height: 200,
  },
  KPKresultsHeader: {
    fontSize: 25,
    // width: '100%',
    padding: 20,
    color: '#357eeb',
    fontFamily: 'times new roman',
  },
  KPKresultsCont: {
    display: 'flex',
    backgroundColor: '#357eeb',
    padding: 20,
    alignItems: 'flex-end',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  KPKresults: {
    color: '#e8f9ff',
    fontSize: 20,
  },
  FPBresultsContParent: {
    display: 'flex',
    margin: 20,
    backgroundColor: '#e8f9ff',
    // padding: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  FPBresultsHeader: {
    fontSize: 25,
    // width: '100%',
    padding: 20,
    color: '#63c089',
    fontFamily: 'times new roman',
  },
  FPBresultsCont: {
    display: 'flex',
    backgroundColor: '#63c089',
    padding: 20,
    alignItems: 'flex-end',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  FPBresults: {
    color: '#e8f9ff',
    fontSize: 20,
  },
});
