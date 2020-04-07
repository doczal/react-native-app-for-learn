import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';
import { fakeFetch } from 'shared/utils';
import { colors, fonts } from 'styles';
import VerticalNewsList from 'components/VerticalNewsList';
import NewsItem from 'components/NewsItem';
import newsData from 'mockData/news.json';
import { useDispatch, useSelector } from 'react-redux';
import { setThing } from 'redux/actions';

const mockData = [
  {
    id: 1,
    title: 'Regrant',
    description: 'Pseudobulbar affect',
    date: '2019-05-30T21:39:39Z',
    url: 'http://dummyimage.com/232x103.bmp/cc0000/ffffff',
  },
  {
    id: 2,
    title: 'Poop',
    description: 'Pseudobulbar affect',
    date: '2019-05-30T21:39:39Z',
    url: 'http://dummyimage.com/232x103.bmp/cc0000/ffffff',
  },
];

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

const renderNewsItem = ({ item }) => (
  <NewsItem
    key={item.id}
    title={item.title}
    desc={item.description}
    date={item.date}
    url={item.url}
  />
);

const NewsList = () => {
  const [news, setNews] = useState(newsData.slice(0, 1));
  const [count, setCount] = useState(0);
  const newsRedux = useSelector((state) => state.news);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(count);
  //   // fakeFetch(newsData).then((res) => {
  //   //   setNews(res.slice(0, count + 1));
  //   // });
  //   setNews(newsData.slice(0, count + 1));
  // }, [count]);
  // useEffect(() => {
  //   setNews(newsData.slice(0, 3));
  // }, [count]);

  const handleClick = React.useCallback(() => {
    const newCount = count + 1;
    dispatch(setThing(['poop']));
    // setCount(newCount);
    // console.log(count);
    // setNews(newsData.slice(0, newCount));
  }, [count]);

  console.log('newsfeed rerenderzz', news);
  return (
    <View style={styles.viewContainer}>
      <Button onPress={handleClick} title="click me" />
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={renderNewsItem}
      />
      {/* <VerticalNewsList data={mockData} /> */}
      {/* <SectionList
        // extraData={news}
        sections={[
          {
            title: 'Articles',
            data: mockData,
            renderItem: ({ item }) => <VerticalNewsList data={item} />,
          },
        ]}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section: { title } }) =>
          title === 'Recommended Articles' ? (
            <SectionHeader title={title} />
          ) : null
        }
        keyExtractor={(item, index) => {
          return item + index;
        }}
      /> */}
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
