/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie : null, //这里放自己定义的state以及初始值
    };
  }

  componentDidMount() {
    this.fethData();
  }

  fethData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        movies: responseData.movies, 
      });
      
    })
    .done();
  }


  render() {
    if(!this.state.movies){
      return this.renderLoadingView();
    }

    var movie = this.state.movies[0];
      return this.renderMovie(movie);
}
  
  renderLoadingView() {
    return (
      <View style = {styles.container}>
        <Text>
        正在加载电影数据……
        </Text>
      </View>
      );
  }

  renderMovie(movie) {
    return (

      <View style = {styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />

        <View style = {styles.rightContainer}>
          <Text style = {styles.title}>{movie.title}</Text>
          <Text style = {styles.year}>{movie.year}</Text>
        </View>
      </View>
      );
  };

};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },


  thumbnail: {
    width: 53,
    height: 81,
  },

  
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
