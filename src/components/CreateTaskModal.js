import React, { useCallback, useState } from 'react';
import {
  Text, StyleSheet, TextInput, TouchableOpacity, View,
} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';
import TaskSvg from '../assets/images/icons/todoListIcons/complate-vector.svg';
import TimeSvg from '../assets/images/icons/todoListIcons/time-vector.svg';
import CalendarSvg from '../assets/images/icons/todoListIcons/calendar-vector.svg';
import DescSvg from '../assets/images/icons/todoListIcons/description-vector.svg';
import { addTodo } from '../store/actions/todos';
import 'react-native-get-random-values';

function CreateTaskModal(props) {
  const { visible, onClose } = props;
  const [date, setDate] = useState({
    day: moment().toDate(),
    time: moment().toDate(),
  });
  const [form, setForm] = useState({
    task: '',
    description: '',
    isPin: false,
    isDone: false,
  });
  const [open, setOpen] = useState({
    time: false,
    day: false,
  });
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => {
    if (form.task.length > 5) {
      dispatch(addTodo({
        ...form, id: uuidV4().replaceAll('-', ''), day: date.day.toString().substring(0, 15), time: date.time.toString().substring(16, 21),
      }));
    }
  }, [form]);
  return (
    <Modal
      style={styles.modalStyle}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={visible}
      onBackButtonPress={onClose}
      onModalHide={onClose}
      onBackdropPress={onClose}
      backdropColor="rgba(255,255,255,0.29)"
    >
      <View style={styles.createTaskView}>
        <View>
          <TaskSvg style={styles.taskIcon} width={20} fill="white" height={20} />
          <TextInput value={form.task} onChangeText={(text) => setForm({ ...form, task: text })} placeholderTextColor="#fff" placeholder="task" style={styles.input} />
        </View>
        <View>
          <DescSvg style={styles.descIcon} width={20} fill="white" height={20} />
          <TextInput value={form.description} onChangeText={(text) => setForm({ ...form, description: text })} style={styles.textArea} placeholderTextColor="#fff" placeholder="Description" />
        </View>
        <View style={styles.dateView}>
          {open.day && (
          <DatePicker
            androidVariant="iosClone"
            modal
            open={open.day}
            date={date.day}
            onConfirm={(d) => {
              setDate({ ...date, day: d });
              setOpen({ ...open, day: false });
            }}
            onCancel={() => setOpen({ ...open, day: false })}
            mode="date"
          />
          )}
          {open.time && (
          <DatePicker
            androidVariant="iosClone"
            modal
            open={open.time}
            date={date.time}
            onConfirm={(time) => {
              setDate({ ...date, time });
              setOpen({ ...open, time: false });
            }}
            onCancel={() => setOpen({ ...open, time: false })}
            mode="time"
          />
          )}
          <TouchableOpacity onPress={() => setOpen({ ...open, day: true })}>
            <View
              style={styles.inputDate}
            >
              <CalendarSvg
                width={20}
                height={20}
              />
              <Text
                style={styles.dateText}
              >
                {date.day.toString().substring(0, 15)}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpen({ ...open, time: true })}>
            <View
              style={styles.inputDate}
            >
              <TimeSvg
                fill="white"
                width={20}
                height={20}
              />
              <Text style={styles.dateText}>
                {date.time.toString().substring(15, 21)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dateView}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.cancelButton}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.createButton}>create</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  createTaskView: {
    minWidth: 350,
    width: '100%',
    height: 350,
    marginBottom: -20,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalStyle: {
    justifyContent: 'flex-end',
  },
  input: {
    marginTop: 25,
    backgroundColor: '#05243E',
    borderRadius: 5,
    width: 330,
    color: 'white',
    paddingLeft: 35,

  },
  textArea: {
    marginTop: 25,
    backgroundColor: '#05243E',
    borderRadius: 5,
    width: 330,
    color: 'white',
    paddingHorizontal: 35,
    height: 60,

  },
  inputDate: {
    paddingTop: 10,
    marginTop: 25,
    backgroundColor: '#05243E',
    borderRadius: 5,
    width: 150,
    paddingLeft: 15,
    color: 'white',
    height: 40,
    fontSize: 13,
  },
  dateView: {
    width: 330,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 50,
    width: 150,
    height: 40,
    borderRadius: 10,

  },
  cancelButton: {
    color: 'black',
    textAlign: 'center',
    paddingVertical: 10,
    borderColor: '#0EA5E9',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  createButton: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#0EA5E9',
    borderRadius: 10,
  },
  dateModalView: {
    position: 'absolute',
    bottom: 350,
  },
  dateText: {
    position: 'absolute',
    top: 12,
    left: 42,
    color: '#fff',
    fontSize: 13,
  },
  taskIcon: {
    position: 'absolute',
    left: 7,
    bottom: 15,
    zIndex: 3,
  },
  descIcon: {
    position: 'absolute',
    left: 7,
    bottom: 20,
    zIndex: 3,
  },
});

CreateTaskModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
CreateTaskModal.defaultProps = {
  onClose: () => {},
};
export default CreateTaskModal;
