import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { colors, fonts } from 'styles';

const ArticleView = ({ route }) => {
  const { title, desc, url } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.articleContainer}>
        <WebView
          source={{
            uri:
              'https://www.polygon.com/gaming/2020/4/3/21206077/animal-crossing-new-horizons-doom-eternal-coronavirus-lockdown',
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{title}</Text>
      </View>
    </View>
  );
};

export default ArticleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articleContainer: {
    flex: 1,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.main,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
});
