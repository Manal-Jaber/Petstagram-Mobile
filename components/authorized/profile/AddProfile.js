import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import ProfilePicker from './ProfilePicker';

import profile from '../../../assets/profile.jpg'

export default function EditProfile({render,setRender}) {

  const navigation = useNavigation();

    const categories = [
        {
            id : 0,
            name : 'Cat',
        },
        {
            id : 1,
            name : 'Dog'
        }
    ]
    const [category, setCategory] = useState(categories[0]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{alignSelf:'flex-end'}}>
            <ProfilePicker render={render} setRender={setRender}/>
        </View>
        <View style={{alignItems:'center'}}>
            <Image source={profile} style={styles.bigProfile}/>
            <Text style={styles.ProfileText}>Add Profile Pic</Text>
        </View>
        <View style={{margin:10}}>
            <Text style={styles.ProfileInfo}>Username</Text>
            <TextInput style={styles.ProfileInput} placeholder='Username'/>
        </View>
        <View style={{margin:10}}>
            <Text style={styles.ProfileInfo}>Category</Text>
            <Picker
                selectedValue={category.id}
                onValueChange={(e) => setCategory(e)}
                >
                <Picker.Item label={categories[0].name} value={categories[0].id} />
                <Picker.Item label={categories[1].name} value={categories[1].id} />
                {/* {categories.map((cat)=>{
                    <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
                    {console.log(cat.name)}
                })} */}
            </Picker>
        </View>
        <View style={{margin:10}}>
            <Text style={styles.ProfileInfo}>Bio</Text>
            <TextInput style={styles.BioInput} placeholder='Bio'/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('ViewProfile')}>
            <Text style={[styles.ProfileInfo, {color:'rgba(0,0,0,0.8)', textAlign: 'center',}]}>Add</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto"/>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  bigProfile: {
    height:70,
    width:70,
    borderRadius: 70
  },
  ProfileText: {
    fontSize:15,
    paddingVertical:6,
    fontFamily: 'Salsa_400Regular',
  },
  ProfileInfo: {
    fontSize:30,
    paddingVertical:6,
    fontFamily: 'Cookie_400Regular',
    color: 'rgba(0,0,0,0.7)'
  },
  ProfileInput: {
    fontSize:20,
    paddingVertical:6,
    fontFamily: 'Salsa_400Regular',
    borderBottomColor:'black',
    borderBottomWidth: 1,
  },
  BioInput: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)',
    borderBottomColor:'black',
    borderBottomWidth: 1,
  },
  Button: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#EBD4BD',
    padding: 5,
    width: 150,
    alignSelf: 'center'
  },
});