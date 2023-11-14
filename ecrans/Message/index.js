import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'


const Message = ({item}) => {
    
    const isMine = () => {
        return item.user.id === 1
    }


  return (
    <View style={[
        styles.container,
        {backgroundColor: isMine() ? '#DFC8C5' : 'white'},
        {alignSelf: isMine() ? 'flex-end' : 'flex-start'}
    ]}>
      <Text>{item.msg}</Text>
      <Text>{dayjs(item.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message