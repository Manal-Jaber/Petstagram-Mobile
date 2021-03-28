import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import ProfilePicker from './ProfilePicker';

import profile from '../../../assets/profile.jpg';

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
            <Text style={styles.ProfileText}>Change Profile Pic</Text>
        </View>
        <View style={{margin:10}}>
            <Text style={styles.ProfileInfo}>Username</Text>
            <TextInput style={styles.ProfileInput} value={'Fluffy'}/>
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
            <TextInput style={styles.BioInput} value={'I am the cutest cat ever. You can get me at Peanuts.'}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={{flex: 1, justifySelf:'center', alignSelf: 'center'}}>
            <Text style={[styles.ProfileInfo, {color:'green', textAlign: 'center', fontSize: 20}]}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button, { alignSelf: 'center'}]} onPress={()=>navigation.navigate('AddProfile')}>
            <Text style={[styles.ProfileInfo, {color:'rgba(0,0,0,0.8)', textAlign: 'center',}]}>AddProfile +</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, alignSelf:'flex-end'}}>
            <TouchableOpacity>
              <Text style={[styles.ProfileInfo, {color:'#750404', textAlign: 'center', fontSize: 20}]}>Delete Profile</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.ProfileInfo, {color:'#750404', textAlign: 'center', fontSize: 15}]}>Delete Account</Text>
          </TouchableOpacity>

          </View>
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