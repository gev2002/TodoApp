import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

function Wrapper(props) {
  const { children } = props;
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: '100%',

  },
});
Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,
};
export default Wrapper;
