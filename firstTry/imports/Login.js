import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Iphone1312ProMax12 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="32a2f523-0663-4271-9b92-4ecf6185f5d3" style={styles.iphone1312ProMax12}>
        <ReactImage data-layer="1ad7ed8c-cf63-4c06-b94c-417dfefbd806" source={require('./assets/alecFavaleIvzo69e18nkUnsplash.png')} style={styles.iphone1312ProMax12_alecFavaleIvzo69e18nkUnsplash} />
        <View data-layer="0ef4a722-9eae-4378-8953-0986a0579dfd" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark}>
            <View data-layer="3ba68939-82b1-4e05-938e-5a60e8265f03" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_bg}></View>
            <View data-layer="bbaf9eee-4538-4d25-81ad-775371bd7285" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar}>
                <View data-layer="8f725510-8f34-4312-a271-4633d1ad02fd" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground}></View>
                <View data-layer="dd7c425f-f9d4-4c58-bff1-7ddee5bf0436" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery}>
                    <View data-layer="3abd17d3-5a63-49f1-ba16-eb62ecb9ad54" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery_border}></View>
                    <Svg data-layer="e5101b36-008e-4f69-97ee-8c21d90c6329" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="6c68da9a-cce4-43a6-b901-32a1a8aa1ccc" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="1ea7c0c1-6a3e-4036-acff-f412941a6fd3" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 17.5 12.978271484375" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 7.768504619598389 11.38155555725098 L 5.675182819366455 9.271328926086426 C 5.610383033752441 9.208407402038574 5.574695587158203 9.121068000793457 5.577513217926025 9.029973030090332 C 5.579391479492188 8.939816474914551 5.617895603179932 8.854354858398438 5.685513496398926 8.793312072753906 C 7.021895408630371 7.663538932800293 8.979043006896973 7.663538932800293 10.31542587280273 8.793312072753906 C 10.38304328918457 8.854354858398438 10.42154693603516 8.939816474914551 10.42342567443848 9.029973030090332 C 10.42530345916748 9.121068000793457 10.38961696624756 9.208407402038574 10.32481670379639 9.271328926086426 L 8.232434272766113 11.38155555725098 C 8.171391487121582 11.44353771209717 8.087808609008789 11.47828578948975 8.000469207763672 11.47828578948975 C 7.913130283355713 11.47828578948975 7.829547882080078 11.44353771209717 7.768504619598389 11.38155555725098 Z M 11.45177268981934 7.68607759475708 C 10.50606918334961 6.830530166625977 9.275808334350586 6.357208251953125 8.000469207763672 6.357208251953125 C 6.726069927215576 6.358147144317627 5.496747970581055 6.831469535827637 4.551982879638672 7.68607759475708 C 4.424261093139648 7.807225704193115 4.222348213195801 7.805347442626953 4.098382949829102 7.680443286895752 L 2.888782978057861 6.458634376525879 C 2.82492208480835 6.394773483276367 2.789235353469849 6.30837345123291 2.79017448425293 6.218216896057129 C 2.791113615036011 6.127121448516846 2.827739715576172 6.041660308837891 2.893478631973267 5.978738784790039 C 5.771913051605225 3.30315637588501 10.2309045791626 3.30315637588501 13.11027717590332 5.978738784790039 C 13.17507839202881 6.041660308837891 13.21264266967773 6.127121448516846 13.21358203887939 6.218216896057129 C 13.21452140808105 6.30837345123291 13.17883491516113 6.394773483276367 13.11497402191162 6.458634376525879 L 11.90537261962891 7.680443286895752 C 11.84196090698242 7.743855953216553 11.75896739959717 7.775555610656738 11.67588138580322 7.775547981262207 C 11.59531116485596 7.77554178237915 11.51465225219727 7.745719909667969 11.45177268981934 7.68607759475708 Z M 14.23723411560059 4.873382568359375 C 12.55431270599365 3.274982452392578 10.32199954986572 2.383747577667236 8.000469207763672 2.383747577667236 C 5.678939342498779 2.383747577667236 3.445687532424927 3.274982452392578 1.762765645980835 4.873382568359375 C 1.636922240257263 4.997347354888916 1.434069991111755 4.995469570159912 1.309165716171265 4.869626045227051 L 0.09768763929605484 3.64875602722168 C 0.03476590663194656 3.584895372390747 -0.0009210471762344241 3.499434471130371 1.808320484997239e-05 3.409278154373169 C 0.0009572135750204325 3.320060729980469 0.03664416819810867 3.234599828720093 0.100505031645298 3.171677827835083 C 4.517234802246094 -1.057225942611694 11.48370361328125 -1.057225942611694 15.89949512481689 3.171677827835083 C 15.96335601806641 3.234599828720093 15.99904251098633 3.320060729980469 15.99998188018799 3.409278154373169 C 16.00091934204102 3.499434471130371 15.96523380279541 3.584895372390747 15.90231227874756 3.64875602722168 L 14.69083404541016 4.869626045227051 C 14.62767314910889 4.933261871337891 14.54483699798584 4.965198040008545 14.46196460723877 4.965193271636963 C 14.38095378875732 4.965188980102539 14.29990577697754 4.934660911560059 14.23723411560059 4.873382568359375 Z"  /></Svg>
                <Svg data-layer="6da3efee-bd8b-4670-9972-316a853f2122" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 12.16680908203125" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 15.00030040740967 10.6668004989624 C 14.44770050048828 10.6668004989624 14.00040054321289 10.21860027313232 14.00040054321289 9.666900634765625 L 14.00040054321289 0.9999000430107117 C 14.00040054321289 0.4473000168800354 14.44770050048828 0 15.00030040740967 0 L 16.00020027160645 0 C 16.55190086364746 0 17.00010108947754 0.4473000168800354 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.21860027313232 16.55190086364746 10.6668004989624 16.00020027160645 10.6668004989624 L 15.00030040740967 10.6668004989624 Z M 10.33290004730225 10.6668004989624 C 9.781200408935547 10.6668004989624 9.333000183105469 10.21860027313232 9.333000183105469 9.666900634765625 L 9.333000183105469 3.333600044250488 C 9.333000183105469 2.781000137329102 9.781200408935547 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33370018005371 2.333699941635132 C 11.88539981842041 2.333699941635132 12.33360004425049 2.781000137329102 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.21860027313232 11.88539981842041 10.6668004989624 11.33370018005371 10.6668004989624 L 10.33290004730225 10.6668004989624 Z M 5.666399955749512 10.6668004989624 C 5.114700317382812 10.6668004989624 4.666500091552734 10.21860027313232 4.666500091552734 9.666900634765625 L 4.666500091552734 5.666399955749512 C 4.666500091552734 5.114700317382812 5.114700317382812 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218900203704834 4.666500091552734 7.667099952697754 5.114700317382812 7.667099952697754 5.666399955749512 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.21860027313232 7.218900203704834 10.6668004989624 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 Z M 0.9999000430107117 10.6668004989624 C 0.4473000168800354 10.6668004989624 0 10.21860027313232 0 9.666900634765625 L 0 7.667099952697754 C 0 7.114500045776367 0.4473000168800354 6.666300296783447 0.9999000430107117 6.666300296783447 L 1.999800086021423 6.666300296783447 C 2.5524001121521 6.666300296783447 2.99970006942749 7.114500045776367 2.99970006942749 7.667099952697754 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.21860027313232 2.5524001121521 10.6668004989624 1.999800086021423 10.6668004989624 L 0.9999000430107117 10.6668004989624 Z"  /></Svg>
                <View data-layer="51726d89-c1eb-407b-8852-8d1399898cb7" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle}>
                    <View data-layer="32bab52d-e899-42ff-b53d-a6466e9a7d60" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark}>
                        <View data-layer="fb9b92fa-8b71-413e-a2d5-fcb2ef3831ac" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground}></View>
                        <Text data-layer="be1cff85-baab-4d5e-9e68-574eb88d4ce7" style={styles.iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time}>9:41</Text>
                    </View>
                </View>
            </View>
        </View>
        <Svg data-layer="c2ec8551-20e1-46e7-a042-d53d479f68d7" style={styles.iphone1312ProMax12_line1} preserveAspectRatio="none" viewBox="-0.00146484375 -0.5 364.0029296875 2" fill="transparent"><SvgPath d="M 0 0 L 364 1"  /></Svg>
        <Svg data-layer="c26c60ab-e87f-4baf-b39d-a14ce38d12e8" style={styles.iphone1312ProMax12_line2} preserveAspectRatio="none" viewBox="0 -0.5 364 1" fill="transparent"><SvgPath d="M 0 0 L 364 0"  /></Svg>
        <Svg data-layer="44c09db8-699f-43b0-a7bd-02c381531cc5" style={styles.iphone1312ProMax12_path27} preserveAspectRatio="none" viewBox="0 0 232 63" fill="rgba(125, 182, 186, 1)"><SvgPath d="M 20 0 L 212 0 C 223.0457000732422 0 232 8.954304695129395 232 20 L 232 43 C 232 54.04569625854492 223.0457000732422 63 212 63 L 20 63 C 8.954304695129395 63 0 54.04569625854492 0 43 L 0 20 C 0 8.954304695129395 8.954304695129395 0 20 0 Z"  /></Svg>
        <Text data-layer="baa6f497-d133-4d13-aa99-8d1be0b97e28" style={styles.iphone1312ProMax12_login}>Login </Text>
        <Text data-layer="e4df265b-af9d-4a5a-b13f-83573a0b4002" style={styles.iphone1312ProMax12_forgotPassword}>Forgot Password ? </Text>
        <Text data-layer="5ba12421-500e-4334-8e92-395a4f5ac443" style={styles.iphone1312ProMax12_password}>Password</Text>
        <Text data-layer="52ea0fc4-3667-4afa-bca0-bb89dce656b4" style={styles.iphone1312ProMax12_username}>Username </Text>
        <Text data-layer="f853e79d-974b-4305-a72a-f9f7352635e5" style={styles.iphone1312ProMax12_dontHaveAnAccountSignUpHere}>Don’t have an account?  Sign up here  </Text>
        <View data-layer="7eca309d-7a7b-475c-9c34-09383466e6f0" style={styles.iphone1312ProMax12_group6}>
            <Svg data-layer="84bcaa44-235f-4995-848e-266e0711786b" style={styles.iphone1312ProMax12_group6_line30} preserveAspectRatio="none" viewBox="-1.060546875 -1.0606689453125 15.341552734375 15.341705322265625" fill="transparent"><SvgPath d="M 0 13.22037220001221 L 13.22037220001221 0"  /></Svg>
            <Svg data-layer="0efffb48-2281-4d25-9c3e-a52d365f3b4d" style={styles.iphone1312ProMax12_group6_line31} preserveAspectRatio="none" viewBox="-1.060546875 -1.0606689453125 15.341552734375 15.341705322265625" fill="transparent"><SvgPath d="M 0 13.22037220001221 L 13.22037220001221 0"  /></Svg>
            <Svg data-layer="0d5d0db1-0362-4df6-b181-fee88f2d008b" style={styles.iphone1312ProMax12_group6_line32} preserveAspectRatio="none" viewBox="-1.060546875 -1.0606689453125 15.341552734375 15.341705322265625" fill="transparent"><SvgPath d="M 0 0 L 13.22037220001221 13.22037220001221"  /></Svg>
        </View>
    </ScrollView>
    );
  }
}

Iphone1312ProMax12.propTypes = {

}

Iphone1312ProMax12.defaultProps = {

}


const styles = StyleSheet.create({
  "iphone1312ProMax12": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 926,
    "left": 0,
    "top": 0
  },
  "iphone1312ProMax12_alecFavaleIvzo69e18nkUnsplash": {
    "opacity": 0.1457349956035614,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 644,
    "height": 967,
    "left": -111,
    "top": -20
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 427,
    "height": 47,
    "left": -0.5,
    "top": -0.5
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 427,
    "height": 47,
    "left": -0.5,
    "top": -0.5
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24.5,
    "height": 12,
    "left": 385,
    "top": 18.39
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery_border": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(7, 5, 5, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 2.67,
    "borderTopRightRadius": 2.67,
    "borderBottomLeftRadius": 2.67,
    "borderBottomRightRadius": 2.67,
    "width": 22.17,
    "height": 12,
    "left": 0,
    "top": 0
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery_cap": {
    "opacity": 0.4000000059604645,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 3.33,
    "height": 6,
    "left": 22.17,
    "top": 3
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_battery_capacity": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(7, 5, 5, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 1.33,
    "borderTopRightRadius": 1.33,
    "borderBottomLeftRadius": 1.33,
    "borderBottomRightRadius": 1.33,
    "width": 17,
    "height": 7,
    "left": 1.5,
    "top": 1.5
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_wifi": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 18,
    "height": 13.48,
    "left": 362,
    "top": 17.38
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_cellularConnection": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19,
    "height": 12.67,
    "left": 332.12,
    "top": 18.73
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 21,
    "left": 28,
    "top": 13
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 21,
    "left": 0,
    "top": 0
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 53,
    "height": 20,
    "left": -0.5,
    "top": -0.5
  },
  "iphone1312ProMax12_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(7, 5, 5, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "SF Pro",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 18,
    "left": 0,
    "top": 2
  },
  "iphone1312ProMax12_line1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 364,
    "height": 2,
    "left": 28.5,
    "top": 389
  },
  "iphone1312ProMax12_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 364,
    "height": 1,
    "left": 28.5,
    "top": 486
  },
  "iphone1312ProMax12_path27": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 10
    },
    "shadowRadius": 8,
    "width": 232,
    "height": 63,
    "left": 95,
    "top": 543
  },
  "iphone1312ProMax12_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 24,
    "fontWeight": "100",
    "fontStyle": "normal",
    "fontFamily": "Bodoni 72",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 58,
    "height": 28,
    "left": 182,
    "top": 561
  },
  "iphone1312ProMax12_forgotPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(125, 182, 186, 1)",
    "fontSize": 16,
    "fontWeight": "100",
    "fontStyle": "normal",
    "fontFamily": "Bodoni 72",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 113,
    "height": 19,
    "left": 278,
    "top": 504
  },
  "iphone1312ProMax12_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(125, 182, 186, 1)",
    "fontSize": 25,
    "fontWeight": "100",
    "fontStyle": "normal",
    "fontFamily": "Bodoni 72",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 88,
    "height": 30,
    "left": 32,
    "top": 411
  },
  "iphone1312ProMax12_username": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(125, 182, 186, 1)",
    "fontSize": 25,
    "fontWeight": "100",
    "fontStyle": "normal",
    "fontFamily": "Bodoni 72",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 100,
    "height": 30,
    "left": 29,
    "top": 305
  },
  "iphone1312ProMax12_dontHaveAnAccountSignUpHere": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(253, 247, 247, 1)",
    "fontSize": 20,
    "fontWeight": "100",
    "fontStyle": "normal",
    "fontFamily": "Bodoni 72",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 284,
    "height": 24,
    "left": 80,
    "top": 659
  },
  "iphone1312ProMax12_group6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 13.47,
    "height": 25.74,
    "left": 33.05,
    "top": 62.26
  },
  "iphone1312ProMax12_group6_line30": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15.34,
    "height": 15.34,
    "left": -1.06,
    "top": -1.06
  },
  "iphone1312ProMax12_group6_line31": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15.34,
    "height": 15.34,
    "left": -1.06,
    "top": -1.06
  },
  "iphone1312ProMax12_group6_line32": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15.34,
    "height": 15.34,
    "left": -0.81,
    "top": 11.46
  }
});