/* eslint no-use-before-define: ["error", { "variables": false }] */

import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Color from './Color';
import ParsedText from 'react-native-parsed-text';

export default function SystemMessage({ currentMessage, containerStyle, wrapperStyle, textStyle, systemMessageParsePatterns }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.wrapper, wrapperStyle]}>
        <ParsedText
          style={[styles.text, textStyle]}
          parse={[
            ...systemMessageParsePatterns(currentMessage),
          ]}
        >
          {currentMessage.text}
        </ParsedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.defaultColor,
    fontSize: 12,
    fontWeight: '300',
  },
});

SystemMessage.defaultProps = {
  currentMessage: {
    system: false,
  },
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
};

SystemMessage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};
