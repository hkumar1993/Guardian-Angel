import { AsyncStorage } from 'react-native';

export function getAllMessages() {
  return async (dispatch) => {
    try {
      await AsyncStorage.fetchAllMessages();
      return dispatch({
        type: 'GET_ALL_MESSAGES'
      })
    } catch(e) {
      throw e;
    }
  }
}

export function getLastMessage() {
  return {
    type: 'GET_LAST_MESSAGE',
  }
}

export function createMessage(message) {
  return {
    type: 'CREATE_MESSAGE',
    message
  }
}
