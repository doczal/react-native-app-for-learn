import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import { fakeFetch } from 'shared/utils';
import { colors, fonts } from 'styles';
import NewsItem from 'components/NewsItem';
import VerticalNewsList from 'components/VerticalNewsList';
import HorizontalNewsList from 'components/HorizontalNewsList';
import newsData from 'mockData/news.json';

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

const NewsList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fakeFetch(newsData).then(() => {
      setNews(newsData);
    });
  }, []);
  return (
    <View style={styles.viewContainer}>
      {news.length < 1 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.main} />
        </View>
      ) : (
        <SectionList
          sections={[
            {
              title: 'Articles',
              data: [news.slice(0, 5)],
              renderItem: ({ item }) => <VerticalNewsList data={item} />,
            },
            {
              title: 'Recommended Articles',
              data: [news.slice(5, 10)],
              renderItem: ({ item }) => <HorizontalNewsList data={item} />,
            },
            {
              title: 'Articles Continued',
              data: [news.slice(20, 30)],
              renderItem: ({ item }) => <VerticalNewsList data={item} />,
            },
          ]}
          stickySectionHeadersEnabled={true}
          renderSectionHeader={({ section: { title } }) =>
            title === 'Recommended Articles' ? (
              <SectionHeader title={title} />
            ) : null
          }
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.bg.main,
    flex: 1,
  },
  loader: {
    marginTop: 32,
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: colors.bg.main,
  },
  sectionHeaderText: {
    color: 'white',
    fontFamily: fonts.bold,
    fontSize: 24,
  },
});
