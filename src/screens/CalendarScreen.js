import React, { useState, useCallback } from 'react';
import {
  StyleSheet, TextInput, View, Text, TouchableOpacity, Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { addTodo } from '../store/actions/todos';
import Wrapper from '../components/Wrapper';

function CalendarScreen() {
  const [date, setDate] = useState(new Date().toDateString());
  const [form, setForm] = useState({
    task: '',
    description: '',
    isDone: false,
    isPin: false,
    time: '12:00',

  });
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => {
    if (date && form.task.length > 5) {
      dispatch(addTodo({ ...form, id: uuidV4().replaceAll('-', ''), day: date }));
    }
  }, [form]);
  return (
    <Wrapper>
      <LinearGradient
        style={{ flex: 1, paddingTop: 100 }}
        colors={['#1253AA', '#05243E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <KeyboardAwareScrollView
          viewIsInsideTabBar
          extraHeight={150}
          enableOnAndroid
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.calendarStyle}>
            <CalendarPicker
              textStyle={{ color: '#fff' }}
              selectedDayStyle={{ backgroundColor: '#56d9d4', color: '#fff' }}
              onDateChange={(e) => setDate(e.toString().substring(0, 15))}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>
              Set task for
              {date}
            </Text>
            <View style={styles.inputAndSubmitView}>
              <TextInput
                style={styles.input}
                value={form.task}
                onChangeText={(text) => setForm({ ...form, task: text })}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.submitButton}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAwareScrollView>

      </LinearGradient>

    </Wrapper>
  );
}

const styles = StyleSheet.create({
  calendarStyle: {
    backgroundColor: 'rgba(65,65,65,0)',
    borderRadius: 10,
    opacity: 0.9,
    height: 350,
  },
  inputView: {
    marginTop: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    height: 100,
    paddingHorizontal: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    marginTop: 10,
    marginBottom: 5,

  },
  input: {
    backgroundColor: '#05243E',
    borderRadius: 5,
    width: 250,
    color: 'white',
    paddingLeft: 30,
  },
  submitButton: {
    width: 60,
    backgroundColor: '#17A1FA',
    height: 50,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 15,
    marginLeft: 5,
  },
  inputAndSubmitView: {
    flexDirection: 'row',
  },
});
export default CalendarScreen;
