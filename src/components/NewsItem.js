import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { colors, fonts } from 'styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import GamesIcon from 'img/games.svg';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';

/**
 * Clickable news article
 * @param {string} props.title - Article title
 * @param {string} props.desc - Article description
 * @param {string} props.date - Article date
 * @param {string} props.url - Article thumbnail url
 * @param {boolean} props.isFluid - whether it has fixed size
 */
const NewsItem = (props) => {
  const { title, desc, date, url, isFluid = true, isSwipeable = true } = props;
  const navigation = useNavigation();
  // const newsRedux = useSelector((state) => state.news);
  console.log('news item re-render', title);

  return (
    <View style={[styles.container, isFluid ? null : styles.containerFixed]}>
      <Swipeable
        renderRightActions={isSwipeable ? RightActions : null}
        overshootRight={false}
      >
        <View style={styles.articleHeader}>
          <Text style={styles.headerText}>{date}</Text>
        </View>
        {/* <WebView
          style={{ aspectRatio: 16 / 9 }}
          source={{
            uri: 'https://www.youtube.com/embed/BkPpgMwPss0',
          }}
        /> */}
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('ArticleView', { title, desc, url })
          }
        >
          <View style={styles.articleInfo}>
            <Text style={styles.articleTitleText}>{title}</Text>
            <Text style={styles.articleDescText}>{desc}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </View>
  );
};

const RightActions = () => (
  <View style={styles.rightActions}>
    <GamesIcon width={32} height={32} />
  </View>
);

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.article,
    borderRadius: 4,
    elevation: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  containerFixed: {
    width: 260,
  },
  articleHeader: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.bg.article,
  },
  headerText: {
    color: 'white',
    fontFamily: fonts.main,
  },
  articleThumb: {
    backgroundColor: colors.bg.lite,
    aspectRatio: 16 / 9,
  },
  articleInfo: {
    padding: 16,
    backgroundColor: colors.bg.article,
  },
  articleTitleText: {
    color: 'white',
    fontFamily: fonts.extraBold,
    fontSize: 20,
    marginBottom: 8,
  },
  articleDescText: {
    color: 'white',
    fontFamily: 'fonts.main',
    fontSize: 14,
  },
  rightActions: {
    width: '20%',
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
