import { View, Image, FlatList, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { fakeChat } from '../../fakeData/fakeChat'
import messagesStyles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Messages = ({navigation}) => {
  return (
    <FlatList 
      data={fakeChat} 
      keyExtractor={item=>item.id} 
      style={messagesStyles.root}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return (
          <TouchableOpacity 
          navigation={navigation}
            style={messagesStyles.msgContain}
            onPress={()=>navigation.navigate('MessageDetails', {item})}
            >
              <Image source={{ uri:'https://c4.wallpaperflare.com/wallpaper/787/854/424/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg'}}
                style={messagesStyles.msgImg}
              />

              <View style={messagesStyles.msgInfo}>
                <View style={messagesStyles.dateName}>
                  <Text style={messagesStyles.name}>{item.fullname}</Text>
                  <Text>{dayjs(item.date).fromNow(true)}</Text>
                </View>
                <Text>{item.last_message}</Text>
              </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default Messages