import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Footer = () => (
  <View style={styles.inline}>
    <Text>Show: </Text>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </View>
)

const styles = StyleSheet.create({
  inline: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Footer
