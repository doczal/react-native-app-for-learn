import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fakeFetch } from 'shared/utils';
import newsData from 'mockData/news.json';

const DisplayNews = ({ news }) => (
  <>
    {news.map((article) => (
      <View key={article.id}>
        <Text>{article.title}</Text>
      </View>
    ))}
  </>
);

const NewsList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fakeFetch(newsData).then(() => {
      setNews(newsData);
    });
  }, []);
  return (
    <View>
      {news.length < 1 ? <Text>Loading...</Text> : <DisplayNews news={news} />}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({});
