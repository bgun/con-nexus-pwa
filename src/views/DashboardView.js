'use strict';

import _ from 'lodash';
import React, { Component } from 'react';

import { InternalLink, Text, View } from '../reactNativeShim';

import dataStore from '../dataStore';
import EventItem from '../components/EventItem';


export default class DashboardView extends Component {

  constructor(props) {
    super();
    this.state = {
      con_data: global.con_data || {},
      todosArray: [],
      todoCount: 999
    };
    this.getTodos();
  }

  componentWillReceiveProps() {
    this.getTodos();
  }

  getTodos() {
    if (global.con_data) {
      dataStore.fetchTodos()
        .then(todos => {
          let todosArray = Array.from(todos);
          todosArray = _(todosArray).map(todo => {
            return _.find(global.con_data.events, e => e.event_id === todo);
          }).sortBy("datetime").value();

          this.setState({
            todosArray: todosArray,
            todoCount: todosArray.length
          });
        }).done();
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image style={{ flex: 1, height: 333, width: window.width }} src={ require('../img/dashboard.png') } />
        <View style={ styles.todoTitleText }>MY TO-DO LIST</Text>
        { this.state.todoCount > 0 ? (
          <ul>
            { this.state.todosArray.map(item => (
              <EventItem event_id={ item.event_id } >
            ) }
          </ul>
        ) : (
          <View style={ styles.todoEmpty }>
            <Text style={ styles.todoEmptyText }>
              Your to-do list is empty. Select events from the Schedule to add them here.
            </Text>
          </View>
        ) }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#DDE',
    flex: 1,
    justifyContent: 'center'
  },
  todoTitleText: {
    color: '#778',
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 6
  },
  todoEmpty: {
    backgroundColor: 'white',
    borderTopColor: '#AAA',
    borderBottomColor: '#AAA',
    alignItems: 'center',
    flex: 1,
    height: 100,
    padding: 30,
    width: window.width
  },
  todoEmptyText: {
    color: '#777',
    textAlign: 'center'
  }
});
