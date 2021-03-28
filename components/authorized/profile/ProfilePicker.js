import React, {useState} from 'react';
import { Text, Image, View, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import fluffy from '../../../assets/profile.jpg';
import mishka from '../../../assets/mishka.jpg'

export default function ProfilePicker () {
  const profiles = [
    {
      id:0,
      username: 'Fluffy',
      profile_pic: fluffy,
    },
    {
      id:1,
      username: 'Mishka',
      // profile_pic: require('../../../assets/mishka.jpg'),
      profile_pic: mishka,
    }
      
  ]
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(profiles[0]);

  // handle showing the dropdown
  showDropDown = () => {
    setShow(true)
  }
  
  // hide the dropdown
  hideDropDown = (item) => {

    setProfile(profiles[item])
    setShow(false)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDropDown} style={styles.profileHead}>
        <Image source={profile.profile_pic} style={styles.profile}/>
        <Text style={styles.headProfileText}>{profile.username}</Text>
      </TouchableOpacity>
      {show&&
      <TouchableWithoutFeedback onPress={() => hideDropDown(profile.id)}>
      <View style={styles.menu}>
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <TouchableOpacity style={styles.profileHead} onPress={() => hideDropDown(item.id)}>
              <Image source={item.profile_pic} style={styles.profile}/>
              <Text style={styles.headProfileText}>{item.username}</Text>
            </TouchableOpacity>
          }
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </TouchableWithoutFeedback>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white'
  },
  menu: {
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    // top: 50
  },
  profileHead: {
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    width: 120,
  },
  headProfileText: {
    fontSize:15,
    paddingVertical:6,
    fontFamily: 'Salsa_400Regular',
  },
  profile: {
    height:30,
    width:30,
    borderRadius: 30
  },
});