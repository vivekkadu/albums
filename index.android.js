
//import lib to create a components

import React from 'react';
import { AppRegistry,View }from 'react-native';

import Header from './src/components/header';
import AlbumsList from './src/components/AlbumsList';
//create a componet

const App=()=>(

<View style={{flex:1}}>
<Header headerText={'Albums'} />
< AlbumsList />
</ View>


  )


//render it to the device

AppRegistry.registerComponent('albums',()=>App);
