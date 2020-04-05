import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NewsItem from 'components/NewsItem';

const VerticalNewsList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
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
          />
        )}
      />
    </View>
  );
};

export default VerticalNewsList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  separator: {
    marginBottom: 16,
  },
});
