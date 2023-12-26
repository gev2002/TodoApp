import React from 'react';
import {
  Image, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

function TodoSingleButton(props) {
  const { title, icon, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 90,
    height: 80,
    backgroundColor: '#05243E',
    borderColor: '#21c9c9',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginTop: 7,
    textAlign: 'center',
  },
});
TodoSingleButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  onPress: PropTypes.func,

};
TodoSingleButton.defaultProps = {
  icon: '',
  onPress: () => {},
};
export default TodoSingleButton;
