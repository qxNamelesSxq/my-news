import React from 'react';
import { TextInput, View,StyleSheet,Button} from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({addArticle}) {
    // const loadScene = () =>
    // {
    //     navigation.goBack();

    // }
   
   //values - значения которые мы получаем от пользователя из всех полей которые находяться в форме
   //multilane - принимает несколько строчек 
   return (
        <View>

        <Formik initialValues={{name:'',anons:'',full:'',img:''}} onSubmit={(values,action)=>{

        addArticle(values);
        action.resetForm();

        }}>

        {(props)=>(
            <View>
                <TextInput style ={styles.input} value={props.values.name}  placeholder='Enter a name'
                 onChangeText ={props.handleChange('name')} />

            <TextInput style ={styles.input} value={props.values.anons} 
                multiline
                placeholder='Enter Announcement'
                 onChangeText ={props.handleChange('anons')} />

                <TextInput style ={styles.input} value={props.values.full}
                multiline
                placeholder='Enter complete information'
                 onChangeText ={props.handleChange('full')} />

            <TextInput style ={styles.input} value={props.values.img}  placeholder='Please specify the photo'
                 onChangeText ={props.handleChange('img')} />
                
            <Button title ='Send' onPress={props.handleSubmit}/>

            </View>

        )}

        
             
        </Formik>



        </View>

    );
  }

  const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        marginTop:15,
        padding:15,
        borderColor:'silver',
        borderRadius:5,
        fontFamily:'dyna-semi-bold'

    }


    });