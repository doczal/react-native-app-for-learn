import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import itemData from '../mockData/items';
import Item from '../Item';
import BoxItem from '../BoxItem';
import FloatingButton from '../FloatingButton';
import FloatingButtonNative from '../FloatingButtonNative';

const Home = () => (
  <View style={styles.container}>
    <View style={styles.headerTop} />
    <View style={styles.header}>
      <Text style={styles.headerText}>Item List</Text>
    </View>
    <FlatList
      style={styles.boxList}
      data={itemData.slice(30, 35)}
      renderItem={({ item }) => <BoxItem text={item.title} />}
      keyExtractor={item => item.id.toString()}
      horizontal
    />
    <FlatList
      style={styles.itemList}
      data={itemData.slice(0, 20)}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={<View style={{ paddingBottom: 10 }} />}
    />
    <FloatingButtonNative />
    {/* <FloatingButton /> */}
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTop: {
    height: 15,
    backgroundColor: '#002984',
    borderBottomWidth: 1,
    borderBottomColor: '#757de8',
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#3f51b5',
    padding: 10,
    paddingVertical: 20,
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
  item: {
    color: 'green',
  },
  itemList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  boxList: {
    // flex: 1,
    // flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    backgroundColor: '#3d3d3d',
  },
});
