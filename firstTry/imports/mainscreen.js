import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Mainscreen extends Component {

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
    <ScrollView data-layer="baf36c5f-733a-4b90-b61a-bfa419b8509b" style={styles.mainscreen}>
        <View data-layer="ab38931d-248f-4d91-bf48-35e301f1b7d2" style={styles.mainscreen_statusBarIphoneCompactDark}>
            <View data-layer="9cb2ec21-502f-40e1-8704-aa90cc25cba0" style={styles.mainscreen_statusBarIphoneCompactDark_bg}></View>
            <View data-layer="ae8e5492-084d-45be-81c0-1b849c3ae98f" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar}>
                <View data-layer="9ad14b63-51a5-4a00-9e26-b8d64eb6fd5f" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground}></View>
                <View data-layer="b24a32a1-7ba7-411e-8f39-f1a5c46cd2d8" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_battery}>
                    <View data-layer="98b2b737-1eac-4ed0-abe3-30ad061eb9a7" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_battery_border}></View>
                    <Svg data-layer="62b2af43-7bae-4ab8-97a1-f18f3077662c" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="2f50e2f6-a9f6-41bc-bb2f-4f7c5228bba8" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="f604ad7c-57a1-4a03-b24a-0998768b7c74" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 17.5 12.978271484375" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 7.768504619598389 11.38155555725098 L 5.675182819366455 9.271328926086426 C 5.610383033752441 9.208407402038574 5.574695587158203 9.121068000793457 5.577513217926025 9.029973030090332 C 5.579391479492188 8.939816474914551 5.617895603179932 8.854354858398438 5.685513496398926 8.793312072753906 C 7.021895408630371 7.663538932800293 8.979043006896973 7.663538932800293 10.31542587280273 8.793312072753906 C 10.38304328918457 8.854354858398438 10.42154693603516 8.939816474914551 10.42342567443848 9.029973030090332 C 10.42530345916748 9.121068000793457 10.38961696624756 9.208407402038574 10.32481670379639 9.271328926086426 L 8.232434272766113 11.38155555725098 C 8.171391487121582 11.44353771209717 8.087808609008789 11.47828578948975 8.000469207763672 11.47828578948975 C 7.913130283355713 11.47828578948975 7.829547882080078 11.44353771209717 7.768504619598389 11.38155555725098 Z M 11.45177268981934 7.68607759475708 C 10.50606918334961 6.830530166625977 9.275808334350586 6.357208251953125 8.000469207763672 6.357208251953125 C 6.726069927215576 6.358147144317627 5.496747970581055 6.831469535827637 4.551982879638672 7.68607759475708 C 4.424261093139648 7.807225704193115 4.222348213195801 7.805347442626953 4.098382949829102 7.680443286895752 L 2.888782978057861 6.458634376525879 C 2.82492208480835 6.394773483276367 2.789235353469849 6.30837345123291 2.79017448425293 6.218216896057129 C 2.791113615036011 6.127121448516846 2.827739715576172 6.041660308837891 2.893478631973267 5.978738784790039 C 5.771913051605225 3.30315637588501 10.2309045791626 3.30315637588501 13.11027717590332 5.978738784790039 C 13.17507839202881 6.041660308837891 13.21264266967773 6.127121448516846 13.21358203887939 6.218216896057129 C 13.21452140808105 6.30837345123291 13.17883491516113 6.394773483276367 13.11497402191162 6.458634376525879 L 11.90537261962891 7.680443286895752 C 11.84196090698242 7.743855953216553 11.75896739959717 7.775555610656738 11.67588138580322 7.775547981262207 C 11.59531116485596 7.77554178237915 11.51465225219727 7.745719909667969 11.45177268981934 7.68607759475708 Z M 14.23723411560059 4.873382568359375 C 12.55431270599365 3.274982452392578 10.32199954986572 2.383747577667236 8.000469207763672 2.383747577667236 C 5.678939342498779 2.383747577667236 3.445687532424927 3.274982452392578 1.762765645980835 4.873382568359375 C 1.636922240257263 4.997347354888916 1.434069991111755 4.995469570159912 1.309165716171265 4.869626045227051 L 0.09768763929605484 3.64875602722168 C 0.03476590663194656 3.584895372390747 -0.0009210471762344241 3.499434471130371 1.808320484997239e-05 3.409278154373169 C 0.0009572135750204325 3.320060729980469 0.03664416819810867 3.234599828720093 0.100505031645298 3.171677827835083 C 4.517234802246094 -1.057225942611694 11.48370361328125 -1.057225942611694 15.89949512481689 3.171677827835083 C 15.96335601806641 3.234599828720093 15.99904251098633 3.320060729980469 15.99998188018799 3.409278154373169 C 16.00091934204102 3.499434471130371 15.96523380279541 3.584895372390747 15.90231227874756 3.64875602722168 L 14.69083404541016 4.869626045227051 C 14.62767314910889 4.933261871337891 14.54483699798584 4.965198040008545 14.46196460723877 4.965193271636963 C 14.38095378875732 4.965188980102539 14.29990577697754 4.934660911560059 14.23723411560059 4.873382568359375 Z"  /></Svg>
                <Svg data-layer="5b989e4d-ec09-4193-9bbd-7b68742ae499" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 12.16680908203125" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 15.00030040740967 10.6668004989624 C 14.44770050048828 10.6668004989624 14.00040054321289 10.21860027313232 14.00040054321289 9.666900634765625 L 14.00040054321289 0.9999000430107117 C 14.00040054321289 0.4473000168800354 14.44770050048828 0 15.00030040740967 0 L 16.00020027160645 0 C 16.55190086364746 0 17.00010108947754 0.4473000168800354 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.21860027313232 16.55190086364746 10.6668004989624 16.00020027160645 10.6668004989624 L 15.00030040740967 10.6668004989624 Z M 10.33290004730225 10.6668004989624 C 9.781200408935547 10.6668004989624 9.333000183105469 10.21860027313232 9.333000183105469 9.666900634765625 L 9.333000183105469 3.333600044250488 C 9.333000183105469 2.781000137329102 9.781200408935547 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33370018005371 2.333699941635132 C 11.88539981842041 2.333699941635132 12.33360004425049 2.781000137329102 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.21860027313232 11.88539981842041 10.6668004989624 11.33370018005371 10.6668004989624 L 10.33290004730225 10.6668004989624 Z M 5.666399955749512 10.6668004989624 C 5.114700317382812 10.6668004989624 4.666500091552734 10.21860027313232 4.666500091552734 9.666900634765625 L 4.666500091552734 5.666399955749512 C 4.666500091552734 5.114700317382812 5.114700317382812 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218900203704834 4.666500091552734 7.667099952697754 5.114700317382812 7.667099952697754 5.666399955749512 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.21860027313232 7.218900203704834 10.6668004989624 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 Z M 0.9999000430107117 10.6668004989624 C 0.4473000168800354 10.6668004989624 0 10.21860027313232 0 9.666900634765625 L 0 7.667099952697754 C 0 7.114500045776367 0.4473000168800354 6.666300296783447 0.9999000430107117 6.666300296783447 L 1.999800086021423 6.666300296783447 C 2.5524001121521 6.666300296783447 2.99970006942749 7.114500045776367 2.99970006942749 7.667099952697754 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.21860027313232 2.5524001121521 10.6668004989624 1.999800086021423 10.6668004989624 L 0.9999000430107117 10.6668004989624 Z"  /></Svg>
                <View data-layer="2492dcdb-48cc-4b66-aff9-c6aeaa8a9a72" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle}>
                    <View data-layer="096e733c-1b3e-4544-af74-a4ee6207a904" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark}>
                        <View data-layer="b7f8543c-86d7-47c3-b726-87398610ad5c" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground}></View>
                        <Text data-layer="fcf076a7-c1d3-4e83-b85c-47d87bdd0964" style={styles.mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time}>9:41</Text>
                    </View>
                </View>
            </View>
        </View>
        <Svg data-layer="d73a06c0-c2cd-4322-a75e-6a59593e00e6" style={styles.mainscreen_path3} preserveAspectRatio="none" viewBox="-0.75 -0.75 346.44921875 559.209228515625" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-path3" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/path3.png')} x="0" y="0" width="334.95px" height="527.71px" /></Pattern></Defs><SvgPath d="M 33.3872184753418 0 L 301.5619812011719 0 C 320.0012512207031 0 334.94921875 18.58925628662109 334.94921875 41.52027130126953 L 334.94921875 486.1889953613281 C 334.94921875 509.1199340820312 320.0012512207031 527.709228515625 301.5619812011719 527.709228515625 L 33.3872184753418 527.709228515625 C 14.94796562194824 527.709228515625 0 509.1199340820312 0 486.1889953613281 L 0 41.52027130126953 C 0 18.58925628662109 14.94796562194824 0 33.3872184753418 0 Z" fill="url(#img-path3)" /></Svg>
        <ReactImage data-layer="373a7147-a54d-4496-a62a-5d545d8901bb" source={require('./assets/rectangle4.png')} style={styles.mainscreen_rectangle4} />
        <Text data-layer="3bdf2b41-8468-4b4c-beaa-b68dd7c02a2a" style={styles.mainscreen_nameXx}>Name,  XX</Text>
        <Text data-layer="1e9ea1a8-af10-44f0-8e5c-8b18266c22af" style={styles.mainscreen_location}>Location</Text>
        <Svg data-layer="d976c6f1-f080-4b00-86d5-e0d30b82691a" style={styles.mainscreen_line14} preserveAspectRatio="none" viewBox="0 -0.5 47 1" fill="transparent"><SvgPath d="M 0 0 L 47 0"  /></Svg>
        <Svg data-layer="d11d61ec-e0c9-43b4-b9d4-b8472179cbfc" style={styles.mainscreen_line13} preserveAspectRatio="none" viewBox="0 -0.5 35 1" fill="transparent"><SvgPath d="M 0 0 L 35 0"  /></Svg>
        <Svg data-layer="be499579-c314-4f00-8b00-b625d10838bc" style={styles.mainscreen_ellipse2} preserveAspectRatio="none" viewBox="-1.5 -1.5 73.21142578125 78.284912109375" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 31.10565948486328 0 C 48.28483963012695 0 62.21131896972656 14.39066886901855 62.21131896972656 32.1424560546875 C 62.21131896972656 49.89424133300781 48.28483963012695 64.284912109375 31.10565948486328 64.284912109375 C 13.92647933959961 64.284912109375 0 49.89424133300781 0 32.1424560546875 C 0 14.39066886901855 13.92647933959961 0 31.10565948486328 0 Z"  /></Svg>
        <View data-layer="fbafeca9-df4e-4d1e-a5b0-b5a80a65dfae" style={styles.mainscreen_x}>
            <Svg data-layer="4436f1ac-667f-4cbe-b399-67a3382ca47d" style={styles.mainscreen_x_line3} preserveAspectRatio="none" viewBox="-3.53564453125 -3.5355224609375 32.07861328125 32.078369140625" fill="transparent"><SvgPath d="M 0 0 L 25.00730133056641 25.00725364685059"  /></Svg>
            <Svg data-layer="b3f0bc03-1661-4ed0-9821-eb24d60ef0d9" style={styles.mainscreen_x_line4} preserveAspectRatio="none" viewBox="-3.53564453125 -3.5355224609375 32.07861328125 32.078369140625" fill="transparent"><SvgPath d="M 0 25.00725364685059 L 25.00730133056641 0"  /></Svg>
        </View>
        <Svg data-layer="3ba1208a-e398-44c0-b054-c5275165d1a0" style={styles.mainscreen_ellipse18} preserveAspectRatio="none" viewBox="-1.5 -1.5 73.21142578125 78.284912109375" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 31.10565948486328 0 C 48.28483963012695 0 62.21131896972656 14.39066886901855 62.21131896972656 32.1424560546875 C 62.21131896972656 49.89424133300781 48.28483963012695 64.284912109375 31.10565948486328 64.284912109375 C 13.92647933959961 64.284912109375 0 49.89424133300781 0 32.1424560546875 C 0 14.39066886901855 13.92647933959961 0 31.10565948486328 0 Z"  /></Svg>
        <Svg data-layer="07cb33a6-687b-4e19-a0b4-7e9a45bf498a" style={styles.mainscreen_ellipse19} preserveAspectRatio="none" viewBox="-1.5 -1.5 92.21142578125 103.284912109375" fill="rgba(125, 182, 186, 1)"><SvgPath d="M 41.60565948486328 0 C 64.58383178710938 0 83.21131896972656 19.31553649902344 83.21131896972656 43.1424560546875 C 83.21131896972656 66.96937561035156 64.58383178710938 86.284912109375 41.60565948486328 86.284912109375 C 18.62748908996582 86.284912109375 0 66.96937561035156 0 43.1424560546875 C 0 19.31553649902344 18.62748908996582 0 41.60565948486328 0 Z"  /></Svg>
        <Text data-layer="d88b78d6-d129-47f5-93c5-809e2521e630" style={styles.mainscreen_discovery}>Discovery</Text>
    </ScrollView>
    );
  }
}

Mainscreen.propTypes = {

}

Mainscreen.defaultProps = {

}


const styles = StyleSheet.create({
  "mainscreen": {
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
  "mainscreen_statusBarIphoneCompactDark": {
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
  "mainscreen_statusBarIphoneCompactDark_bg": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_battery": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_battery_border": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_battery_cap": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_battery_capacity": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_wifi": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_cellularConnection": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground": {
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
  "mainscreen_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time": {
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
  "mainscreen_path3": {
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
      "height": 20
    },
    "shadowRadius": 10,
    "width": 344.95,
    "height": 557.71,
    "left": 46.53,
    "top": 137
  },
  "mainscreen_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 31,
    "borderTopRightRadius": 31,
    "borderBottomLeftRadius": 31,
    "borderBottomRightRadius": 31,
    "width": 334,
    "height": 86,
    "left": 47,
    "top": 579
  },
  "mainscreen_nameXx": {
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
    "width": 98,
    "height": 28,
    "left": 72,
    "top": 611
  },
  "mainscreen_location": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
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
    "width": 60,
    "height": 22,
    "left": 283,
    "top": 628
  },
  "mainscreen_line14": {
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
    "width": 47,
    "height": 1,
    "left": 186,
    "top": 647.33
  },
  "mainscreen_line13": {
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
    "width": 35,
    "height": 1,
    "left": 191.5,
    "top": 655.33
  },
  "mainscreen_ellipse2": {
    "opacity": 0.6811370253562927,
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
      "height": 3
    },
    "shadowRadius": 8,
    "width": 70.21,
    "height": 75.28,
    "left": 58.79,
    "top": 708.49
  },
  "mainscreen_x": {
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
    "width": 25.01,
    "height": 25.01,
    "left": 77.67,
    "top": 728.76
  },
  "mainscreen_x_line3": {
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
    "width": 32.08,
    "height": 32.08,
    "left": -3.54,
    "top": -3.54
  },
  "mainscreen_x_line4": {
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
    "width": 32.08,
    "height": 32.08,
    "left": -3.54,
    "top": -3.54
  },
  "mainscreen_ellipse18": {
    "opacity": 0.6811370253562927,
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
      "height": 3
    },
    "shadowRadius": 8,
    "width": 70.21,
    "height": 75.28,
    "left": 311.89,
    "top": 708.49
  },
  "mainscreen_ellipse19": {
    "opacity": 0.6811370253562927,
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
      "height": 8
    },
    "shadowRadius": 6,
    "width": 89.21,
    "height": 100.28,
    "left": 172.39,
    "top": 698.12
  },
  "mainscreen_discovery": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 45,
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
    "width": 171,
    "height": 54,
    "left": 129,
    "top": 61
  }
});