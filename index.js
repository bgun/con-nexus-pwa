'use strict';
import React, { Component } from 'react';

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

ReactDom.render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('root')
);


import {
  AppRegistry
} from 'react-native';


import MainView from './views/MainView';


const ConNexusApp = MainView;

AppRegistry.registerComponent('jcon2017', () => ConNexusApp);
