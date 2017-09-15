'use strict';

import React, { Component } from 'react';

import { InternalLink, Text } from '../reactNativeShim';

import globalStyles from '../globalStyles';


export default class GuestItem extends Component {

  render() {
    let guest = global.con_data.guests.filter(g => (g.guest_id === this.props.guest_id))[0];
    if (!guest) {
      throw new Error("Guest not found");
    }
    return (
      <InternalLink style={[globalStyles.floatingListItem,styles.item]} onPress={ () => navigate("GuestDetail", { guest_id: guest.guest_id }) }>
        <Text style={ styles.text }>{ guest.name }</Text>
      </InternalLink>
    );
  }

}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 16
  },
  text: {
    fontSize: 16,
  }
});
