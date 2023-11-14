import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import homeStyle from './style'
import { FakeActivity, FakeSymptomes } from '../../fakeData/fakeActivity'
import SVG_HOSPITAL from '../../assets/hospitalImg.svg'
import { fakeSymptomes } from '../../fakeData/fakeSymptomes'
import { fakeDoctor } from '../../fakeData/fakeDoctor'

const Home = () => {
  return (
    <ScrollView>
    {/* debut du header */}
      <View style={homeStyle.header}>
        <Text style={homeStyle.userName}>Fred Duc</Text>
        <Image source={require('./../../assets/profile.png')} style={homeStyle.userImg}/>
      </View>


      {/* liste des activites */}
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={FakeActivity}
        keyExtractor={item=>item.id}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={homeStyle.itemsScrolle}>
              <SVG_HOSPITAL width={60} height={60} />
              <Text style={homeStyle.mainText}> { item.mainText } </Text>
              <Text style={homeStyle.subText}> { item.sudText } </Text>
            </TouchableOpacity>
          )
        }}
        style={homeStyle.listScrolle}
        />

      {/* liste des symptomes */}
      <View style={homeStyle.title}>
        <Text style={homeStyle.titleBold}>Quels symptomes avez vous</Text>
      </View>

      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={ fakeSymptomes }
        keyExtractor={item=>item.id}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={homeStyle.itemsSympto}>
              <SVG_HOSPITAL width={60} height={60} style={homeStyle.ItemImg}/>
              <Text> { item.libelle } </Text>
            </TouchableOpacity>
          )
        }}
        style={homeStyle.listScrolle}
        />

      {/* liste des docteurs */}
      <View style={homeStyle.title_dr}>
        <Text>Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={homeStyle.lien}>Affichez tout</Text>
        </TouchableOpacity>
      </View>

      <View style={homeStyle.Drs}>
        {
          fakeDoctor.map((doctor, index)=>{
            return(
              <TouchableOpacity key={doctor.id} style={homeStyle.doctorCard}>
                <Image source={{ uri:`${doctor.img}` }} style={homeStyle.doctorImg}/>
                <View style={homeStyle.doctorInfo}>
                  <Text style={homeStyle.doctorName}>{doctor.fullname}</Text>
                  <Text style={homeStyle.doctorSpe}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>

    </ScrollView>
  )
}

export default Home