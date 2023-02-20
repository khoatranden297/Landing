import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,ScrollView,Pressable} from 'react-native'
import aA from '../assets/img/AA.png'
import lock from '../assets/img/Lock.png'
import tailai from '../assets/img/Refresh.png'
import menu from '../assets/img/fi_menu.png'
import login from '../assets/img/login.png'
import logo from '../assets/img/logo.png'
import locxoay from '../assets/img/locxoay.png'
import text from '../assets/img/text.png'
import thanhhang from '../assets/img/thanhhang.png'
 const Home =({navigation})=> {
  
    return (
      <View style={styles.container} >
        <Image style={styles.imgA} source={aA}/>
        <Image style={styles.imgLock} source={lock}/>
        <Text style={styles.imgTxt}>aquafina</Text>
        <Image style={styles.imgRf} source={tailai}/>
        <View style={styles.container2}>
        <Image style={styles.imgmenu} source={menu}/>
        <Image style={styles.imglogo} source={logo}/>
        <Image style={styles.imglogin} source={login}/>
        
          <View style={styles.bck}>
              <Image style={styles.locxoay} source={locxoay}/>
              <Image style={styles.text} source={text}/>
              <Image style={styles.talent} source={thanhhang}/>
            <Pressable style={styles.btn1}>
              <Text style={styles.txtbtn}> Tìm hiểu thêm </Text>
            </Pressable>
          </View>
      
        </View>
       
      </View>
      
    )
  
}
export default Home

const styles = StyleSheet.create({
container:{
    position:"absolute",
    marginLeft:8,
    width:400,
    height:35,
    backgroundColor:"#E3E3E3",
    borderRadius:20,
},
imgA:{
  position:"absolute",
  width:20,
  height:15,
  marginLeft:10,
  marginTop:10,
},
imgLock:{
  position:"absolute",
  width:13,
  height:18,
  marginLeft:150,
  marginTop:10,
  alignItems:"center",
},
  imgTxt:{
    width:75,
    height:20,
    marginLeft:170,
    marginTop:5,
    fontStyle:"normal",
    fontWeight:"400",
    fontSize:20,
    textAlign:"center",
    color:"#202124",
  },
  imgRf:{
    position:"absolute",
    width:20,
    height:22,
    marginLeft:370,
    marginTop:5,
    alignItems:"center",
  },
  container2:{
    position:"absolute",
    marginLeft:1,
    width:400,
    height:50,
    backgroundColor:"#FFFFFF",
    marginTop:40,
   
  },
  imgmenu:{
    position:"absolute",
    width:40,
    height:30,
    marginLeft:10,
    marginTop:11,
    
  },
  imglogin:{
    position:"absolute",
    width:40,
    height:35,
    marginLeft:350,
    marginTop:8,
  },
  imglogo:{
    position:"absolute",
    width:100,
    height:30,
    marginLeft:150,
    marginTop:10,
  },
  bck:{
    position:"absolute",
    width:400,
    height:710,
    marginTop:50,
    backgroundColor:"#e8edf2",
  },
  scr:{
    marginHorizontal:20,
  },
  locxoay:{
    position:"absolute",
    width:500,
    height:400,
    marginTop:5,
  },
  text:{
    position:"absolute",
    width:300,
    height:105,
    marginLeft:70,
    marginTop:31,
  },
  talent:{
    position:"absolute",
    width:370,
    height:520,
    marginLeft:39,
    marginTop:170,
  },
  btn1:{
    width:150,
    height:45,
    position:"absolute",
    marginLeft:130,
    marginTop:600,
    borderRadius:10,
    backgroundColor: "#0047BA",
    boxShadow: "0px 0px 17.8665px #C3CEDF",
    shadowColor: "rgba(155, 192, 255, 0.77)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3,
    shadowRadius: 3.84,
  
    elevation: 5,
  },
  txtbtn:{
    position:"absolute",
    fontStyle:"normal",
    fontWeight:"450",
    fontSize:20,
    color:"#FFFFFF",
    marginTop:7,
    marginLeft:5,
  },
})