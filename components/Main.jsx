
import React,{useState} from 'react';
import { Text, View,TouchableOpacity,FlatList,Image,StyleSheet,Modal} from 'react-native';
import { gStyle } from '../styles/style';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';



export default function Main({navigation}) {
    
    // const loadScene = () =>
    // {
    //     navigation.navigate('Contacts');

    // }

const [news,setNews]= useState([
{name:'Bucky',anons:'Bucky Speed Season 4',full:'Bucky got super speed in season 4',key:'1',img:"https://kartinkin.net/uploads/posts/2022-03/1646472921_1-kartinkin-net-p-boets-baki-kartinki-1.jpg"},
{name:'Hunmas Anger',anons:'Father Buckys Anger',full:'Anger....',key:'2',img:"https://kartinkin.net/uploads/posts/2022-03/1646472889_8-kartinkin-net-p-boets-baki-kartinki-9.jpg"},
{name:'The Demon of Hanma',anons:'Demonic Power',full:'The Demonic Power of the Hanma Family ',key:'3',img:"https://kartinkin.net/uploads/posts/2022-03/1646472931_13-kartinkin-net-p-boets-baki-kartinki-14.png"},
]);
    

const [modalWindow,setModalWindow] = useState(false)

//Добавление статьи и возвращаем уже существующие
const addArticle = (article) =>{
setNews((list =>{

  article.key = Math.random().toString();
  return[
    article,
    ...list
  ]

}))
setModalWindow(false) // после добавления модальное окно будет скрываться
}



    
    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>

        <Ionicons name="close" size={24} color="black"style={styles.iconClose} onPress ={() => setModalWindow(false)} />
        <View>
          <Text style ={styles.title}>Adding a new article</Text>
          <Form addArticle ={addArticle} />
        </View>

        </Modal>

        <Ionicons name="add-circle" size={34} color="black" style={styles.iconAdd} onPress ={() => setModalWindow(true)}/>
        <Text style={[gStyle.title,styles.header]}>Main</Text>

        <FlatList data = {news} renderItem={({item})=>(
        <TouchableOpacity style ={styles.item} onPress ={()=>navigation.navigate('FullInfo',item)}>
            <Image style ={styles.images} source={{uri:item.img}} />
            
            <Text style ={styles.title}>{item.name}</Text>
            <Text style ={styles.anons}>{item.anons}</Text>

        </TouchableOpacity>

        )}/>
    {/* <StatusBar theme='auto'/> */}
      </View>

    );
  }

const styles = StyleSheet.create({
  iconClose:{
    textAlign:'center',
  },
  
  
  iconAdd:
  {
    textAlign:'center',
    marginBottom:10
  
  },
header:{
marginBottom:30
},

item:
{
  width:'100%',
  marginBottom:30,

},
title:{
fontFamily:'dyna-semi-bold',
fontSize:22,
textAlign:'center',
marginTop:20,
color:'#474747'
},
anons:{
  fontFamily:'dyna-bold',
  fontSize:16,
  textAlign:'left',
  marginTop:5,
  color:'#474747'
  },
  images:
  {
    width:'100%',
    height:200,
  },
  
});
  




