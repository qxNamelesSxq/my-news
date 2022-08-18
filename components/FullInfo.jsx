import { Text, View,Image,StyleSheet} from 'react-native';
import { gStyle } from '../styles/style';


export default function FullInfo({route}) {
    // const loadScene = () =>
    // {
    //     navigation.goBack();

    // }
   
   
    return (
      <View style={gStyle.main}>
         <Image style = {styles.images} source={{ uri:route.params.img}} />
        <Text style={[gStyle.title,styles.header]}>{route.params.name}</Text>
        <Text style = {styles.full}>{route.params.full}</Text>
       
      </View>

    );
  }

  const styles = StyleSheet.create({

    full:{
      fontFamily:'dyna-bold',
      fontSize:16,
      textAlign:'left',
      marginTop:20,
      color:'#6c01ef'
    },
    header:{
      fontSize:25,
      marginTop:25
    }, 
    images:{
      width:'100%',
       height:200,
    }
  
    });