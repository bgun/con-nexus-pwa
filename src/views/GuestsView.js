'use strict';

import React from 'react';


import {
  ListView,
  StyleSheet,
  Text,
  View
} from '../reactNativeShim';

import GuestItem from '../components/GuestItem';


export default class GuestsView extends Component {

  constructor(props) {
    super();
    this._sortedGuests = _.sortBy(global.con_data.guests, 'name');
  }

  render() {
    return (
      <ul className="guestsView">
        this._sortedGuests.map(g => (
          <GuestItem guest_id={ g.guest_id } />
        ));
      </ul>
    );
  }

}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFFFFF',
    flex: 1
  }
});
