import React from 'react';
import { StyleSheet, Button, ScrollView, View, Text, TextInput, Image } from 'react-native';
import CoolButton from '../components/CoolButton';
import ImageLoader from "../components/ImageLoader";
import styles from '../components/styles';

function Messages({ route, navigation }) {
    /* 2. Get the param */
    const { image, name, status, description, messages, messageCount, areMatched } = route.params;

    const list = []

    const webpage = []

    for (var i = 0; i < messageCount; i++) {
        list.push(<View style={backgroundStyles.inputView}>
            <Text
            id = "message"
            style={backgroundStyles.TextInput}>{messages[i].text}</Text>
            </View>)
    }

    function checkAreMatched()
    {
        if(areMatched == "true")
        {
            webpage.push(
                <View>
                <Text>{list}</Text>
                <View style={backgroundStyles.inputView}>
                    <TextInput
                    id = "message"
                    style={backgroundStyles.TextInput}
                    placeholder="Insert Message Here"
                    placeholderTextColor="#003f5c"
                    />
                </View>
                </View>
            )
        }
        else
        {
            webpage.push(
                    <View>
                    <Button style={buttonStyles.container} title={"Match"} onPress={() => navigation.navigate('Messages', {
                      image: image,
                      name: name,
                      status: status,
                      description: description,
                      messages: messages,
                      messageCount: messageCount,
                      areMatched: "true"
                    })}></Button>
                    </View>
            )
        }
    }
    
    checkAreMatched();

    return (
        <ScrollView contentContainerStyle={styles.containerCardItem}>
            <View>
            <Image  source={image} />
          </View>
            <Text style={styles.descriptionCardItem}>{name} - {status}</Text>
            <Text style={styles.message}>{description}</Text>
            <View>{webpage}</View>
           </ScrollView>
       
      );
  }



const buttonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'center',
      height: 10,
    },
    image: {
      marginTop: 5
    },
    text: {
        marginHorizontal: 0,
        marginVertical: 5
    }
    }
  );

const subtitles = StyleSheet.create({
    
        title: { 
          flex: 3, 
          alignItems: 'center', 
          justifyContent: "space-around", 
          color: 'black', 
          fontSize: 48, 
          fontStyle: 'italic', 
          fontWeight: 'bold', 
          backgroundColor: '#A083B6',
          borderWidth: 3,
          borderColor: "thistle",
      }
})

const small = StyleSheet.create({
    
    title: { 
      flex: 3, 
      alignItems: 'center', 
      justifyContent: "space-around", 
      color: 'black', 
      fontSize: 32, 
      fontStyle: 'italic', 
      fontWeight: 'bold', 
      backgroundColor: '#A083B6',
      borderWidth: 3,
      borderColor: "thistle",
  }
})

const button = StyleSheet.create({
    
    but: { 
        position: 'absolute',
        bottom:0,
        left:0,
  }
})



const backgroundStyles = StyleSheet.create(
     {
        container: { flex: 1, alignItems: 'center', backgroundColor: '#9FA8DA'
        },
        image1: {
          flex: 1,
          width: 100,
          height: 125,
          marginTop: 0,
          marginLeft: 0,
          
        },

        inputView: {
        
            backgroundColor: "#9FA8DA",
            borderRadius: 30,
            width: "50%",
            height: 45,
            marginBottom: 0,
            justifyContent:"space-evenly",
        
            alignItems: "center",
        },
        
        TextInput: {
            width: 300,
            height: "70%",
            flex: 1,
            padding: 5,
            marginLeft: 0,
            textAlign: 'center',
            alignItems: "center",
  },
});

const anotherBackground = StyleSheet.create(
  {
    container: { 
      flex: 4, 
      alignItems: 'center', 
      justifyContent: 'space-evenly', 
      backgroundColor: '#9FA8DA',
      borderWidth: 3,
      borderColor: "thistle",
    },

 }
);

const titleStyles = StyleSheet.create(
    {
      title: { 
        flex: 3, 
        alignItems: 'center', 
        justifyContent: "space-evenly", 
        color: 'black', 
        fontSize: 64, 
        fontStyle: 'italic', 
        fontWeight: 'bold', 
        backgroundColor: '#A083B6',
        borderWidth: 3,
        borderColor: "thistle",
    }
  }

   
);

export default Messages;