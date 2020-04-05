import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NewsItem from 'components/NewsItem';

const HorizontalNewsList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <NewsItem
            key={item.id}
            title={item.title}
            desc={item.description}
            date={item.date}
            url={item.url}
            isFluid={false}
          />
        )}
      />
    </View>
  );
};

export default HorizontalNewsList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  separator: {
    marginRight: 16,
  },
});
