import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from 'styles';

/**
 * Clickable news article
 * @param {string} props.title - Article title
 * @param {string} props.desc - Article description
 * @param {string} props.date - Article date
 * @param {string} props.url - Article thumbnail url
 * @param {boolean} props.isFluid - whether it has fixed size
 */
const NewsItem = ({ title, desc, date, url, isFluid = true }) => {
  return (
    <View style={[styles.container, isFluid ? null : styles.containerFixed]}>
      <View style={styles.articleHeader}>
        <Text style={styles.headerText}>{date}</Text>
      </View>
      <View style={styles.articleThumb} />
      <View style={styles.articleInfo}>
        <Text style={styles.articleTitleText}>{title}</Text>
        <Text style={styles.articleDescText}>{desc}</Text>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.article,
    borderRadius: 4,
    elevation: 4,
    marginBottom: 8,
  },
  containerFixed: {
    width: 260,
  },
  articleHeader: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
});
