import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function App(): JSX.Element {
  return (
    <SafeAreaView style = {styles.safeAreaView}>

      <View style = {styles.sectionsView}>
        <View style = {styles.sectionItemCard}>
          <Image source={require('./resources/images/info.png')}/>
          <View style = {styles.sectionItemCardSpaceSmall}/>
          <Text style = {styles.topIconText}>Information</Text>
        </View>
        <View style = {styles.sectionItemCardSpaceLarge}/>
        <View style = {styles.sectionItemCard}>
            <View>
              <View style = {styles.notificationRedCircle}/>
              <Image source={require('./resources/images/bell.png')}/>
            </View>
            <View style = {styles.sectionItemCardSpaceSmall}/>
            <Text style = {styles.topIconText}>Notification</Text>
        </View>
      </View>

      <View style = {styles.carCard}>
        <View style = {styles.carCardContent}>
          <View style = {styles.carTextView}>
            <Text style = {styles.nearestCarText}>NEAREST CAR</Text>
          </View>
          <View style = {styles.carImageView}>
            <Image style = {styles.carImage} source= {require('./resources/images/vehicle.png')}/>
          </View>
          <View style = {styles.carTextView}>
            <Text style = {styles.carNameText}>Fortuner GR</Text>
          </View>
          <View style = {styles.carDetailsView}>
            <View style = {styles.carDetailsDataView}>
              <View style = {styles.carDetailsData}>
                <Image source = {require('./resources/images/grey-location.png')}/>
                <Text style = {styles.carDetailsText}>{" > 870 KM"}</Text>
              </View>
              <View style = {styles.carDetailsSpaceView}/>
              <View style = {styles.carDetailsData}>
                <Image source = {require('./resources/images/grey-pump.png')}/>
                <Text style = {styles.carDetailsText}>{" 50 L"}</Text>
              </View>
            </View>
            <Text style = {styles.carAmount}>$ 45,00/h</Text>
          </View>
        </View>
      </View>

      <View style = {styles.profileAndMapSection}>
        <View style = {styles.profileCard}>
          <Image source={require('./resources/images/man.png')}/>
          <Text style = {styles.personNameText}>Jane Cooper</Text>
          <Text style = {styles.personAmountText}>$ 4,253</Text>
        </View>
        <View style = {styles.mapCard}>
          <Image style = {styles.mapImage} source={require('./resources/images/map.png')}/>
        </View>
      </View>

      <View style = {styles.moreCarsSection}>
        <View style = {styles.moreCarsCard}>
          <View style = {styles.moreCarsTextCard}>
            <Text style = {styles.moreCarsText}>More Cars</Text>
            <Image source={require('./resources/images/dots.png')}/>
          </View>
          <View style = {styles.carNameCard}>
            <View style = {styles.carNameDetailsCard}>
              <Text style = {styles.carNameTextBottomCard}>Corolla Cross</Text>
              <View style = {styles.carInfo}>
                <View style = {styles.carDetailsData}>
                  <Image source={require('./resources/images/white-location.png')}/>
                  <Text style = {styles.carDetailsBottomText}>{" > 4 KM"}</Text>
                </View>
                <View style = {styles.carDetailsSpaceView}/>
                <View style = {styles.carDetailsData}>
                  <Image source={require('./resources/images/white-pump.png')}/>
                  <Text style = {styles.carDetailsBottomText}>{" 50 L"}</Text>
                </View>
              </View> 
            </View>
            <View style = {styles.arrowBg}>
              <Image source={require('./resources/images/arrow.png')}/>
            </View>
          </View>
          <View style = {styles.line}/>
          <View style = {styles.carNameCard}>
            <View style = {styles.carNameDetailsCard}>
              <Text style = {styles.carNameTextBottomCard}>Ionic 5</Text>
              <View style = {styles.carInfo}>
                <View style = {styles.carDetailsData}>
                  <Image source={require('./resources/images/white-location.png')}/>
                  <Text style = {styles.carDetailsBottomText}>{" > 8 KM"}</Text>
                </View>
                <View style = {styles.carDetailsSpaceView}/>
                <View style = {styles.carDetailsData}>
                  <Image source={require('./resources/images/white-battery.png')}/>
                  <Text style = {styles.carDetailsBottomText}>{" 80%"}</Text>
                </View>
              </View> 
            </View>
            <View style = {styles.arrowBg}>
              <Image source={require('./resources/images/arrow.png')}/>
            </View>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
      flex:1,
      backgroundColor:"#FFFCFC",
      paddingVertical:windowHeight*0.03,
      width:'90%',
      alignSelf:'center'
    },
    sectionsView: {
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignSelf:'center',
      width:'80%',
      paddingBottom:windowHeight*0.015
    },
    sectionItemCard: {
      flexDirection:'row'
    },
    topIconText: {
      fontFamily:'Barlow-SemiBold',
      fontSize:18,
      color:'#000000',
      includeFontPadding:false
    },
    sectionItemCardSpaceSmall: {
      width:windowWidth*0.015
    },
    sectionItemCardSpaceLarge: {
      width:windowWidth*0.03
    },
    notificationRedCircle: {
      backgroundColor:'red',
      width:'40%',
      height:'40%',
      position:'absolute',
      borderRadius:30,
      right:0
    },
    carCard : {
      width:'100%',
      height:windowHeight*0.35,
      backgroundColor:'#F3F3F3F3',
      borderRadius:20,
      marginBottom:windowHeight*0.015
    },
    carCardContent :{
      flexDirection:'column',
      flex:6,
      paddingHorizontal:'3.5%'
    },
    carTextView: {
      flex:1,
      justifyContent:'center'
    },
    carImageView: {
      flex:3,
      alignItems:'center',
      justifyContent:'center'
    },
    carDetailsView: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    nearestCarText: {
      fontFamily:'Barlow-Regular',
      letterSpacing:3,
      fontSize:16,
      color:'#78787878'
    },
    carImage: {
      width:'100%',
      height:'100%'
    },
    carNameText: {
      fontFamily:'Barlow-SemiBold',
      fontSize:22,
      color:'#2c2b34'
    },
    carDetailsDataView: {
      height:'100%',
      justifyContent:'center',
      flexDirection:'row'
    },
    carAmount: {
      fontFamily:'Barlow-SemiBold',
      fontSize:16,
      color:'#000000'
    },
    carDetailsData: {
      flexDirection:'row',
      alignItems:'center'
    },
    carDetailsText: {
      fontFamily:'Barlow-Regular',
      fontSize:16,
      color:'#787878'
    },
    carDetailsSpaceView: {
      width:windowWidth*0.05
    },
    profileAndMapSection: {
      height:windowHeight*0.22,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:windowHeight*0.015
    },
    mapCard: {
      width:'45%',
      height:'100%'
    },
    profileCard: {
      width:'45%',
      height:'100%',
      backgroundColor:'#f3f3f3f3',
      borderRadius:20,
      padding:20,
      justifyContent:'space-around',
      alignItems:'center'
    },
    personNameText: {
      fontFamily:'Barlow-Medium',
      fontSize:18,
      color:'#000000'
    },
    personAmountText: {
      fontFamily:'Barlow-Bold',
      fontSize:16,
      color:'#000000'
    },
    mapImage: {
      width:'100%',
      height:'100%',
      borderRadius:20,
    },
    moreCarsSection: {
      width:'100%',
      height:windowHeight*0.3,
      backgroundColor:'#282931',
      borderRadius:20,
      padding:20
    },
    moreCarsCard: {
      flex:5
    },
    moreCarsTextCard:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    carNameCard: {
      flex:2,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center'
    },
    moreCarsText: {
      fontFamily:'Barlow-Regular',
      fontSize:16,
      color:'#d4d4d4'
    },
    arrowBg: {
      backgroundColor:'#FFFFFF',
      padding:10,
      borderRadius:30
    },
    carNameDetailsCard: {
      flexDirection:'column',
      flex:2,
      justifyContent:'space-evenly',
      height:'100%'
    },
    carNameTextBottomCard: {
      fontFamily:'Barlow-Bold',
      fontSize:22,
      color:'#ffffff',
      includeFontPadding:false
    },
    carInfo: {
      flexDirection:'row'
    },
    carDetailsBottomText: {
      fontFamily:'Barlow-Regular',
      fontSize:16,
      color:'#ffffff',
      includeFontPadding:false
    },
    line: {
      backgroundColor:'#4b4b4b',
      width:'100%',
      height:windowHeight*0.001
    }



});

export default App;