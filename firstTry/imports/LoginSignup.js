import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Iphone1312ProMax11 extends Component {

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
    <ScrollView data-layer="25c7151f-3b33-4fad-bf35-d29e97db3b86" style={styles.iphone1312ProMax11}>
        <View data-layer="acd1cb58-0e3f-45e7-a567-54cfb48cd561" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark}>
            <View data-layer="6c097bb7-8120-4d51-8578-c6e33a06884f" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_bg}></View>
            <View data-layer="5dca82eb-ea12-4d70-8b33-8edfaa22c417" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar}>
                <View data-layer="e7d156ec-f93d-4735-9428-61d9b0ef295c" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground}></View>
                <View data-layer="d37cd321-4733-4be5-a468-d67319d8fff4" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery}>
                    <View data-layer="ce451289-dfcf-4a32-8fb4-c71e136a49ba" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery_border}></View>
                    <Svg data-layer="2fdabfed-cee2-442f-9423-31de172baaa8" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="89457180-1afb-4564-980e-be54e35027a8" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="9476dedd-dba9-43af-8c2d-f7527090db73" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 17.5 12.978271484375" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 7.768504619598389 11.38155555725098 L 5.675182819366455 9.271328926086426 C 5.610383033752441 9.208407402038574 5.574695587158203 9.121068000793457 5.577513217926025 9.029973030090332 C 5.579391479492188 8.939816474914551 5.617895603179932 8.854354858398438 5.685513496398926 8.793312072753906 C 7.021895408630371 7.663538932800293 8.979043006896973 7.663538932800293 10.31542587280273 8.793312072753906 C 10.38304328918457 8.854354858398438 10.42154693603516 8.939816474914551 10.42342567443848 9.029973030090332 C 10.42530345916748 9.121068000793457 10.38961696624756 9.208407402038574 10.32481670379639 9.271328926086426 L 8.232434272766113 11.38155555725098 C 8.171391487121582 11.44353771209717 8.087808609008789 11.47828578948975 8.000469207763672 11.47828578948975 C 7.913130283355713 11.47828578948975 7.829547882080078 11.44353771209717 7.768504619598389 11.38155555725098 Z M 11.45177268981934 7.68607759475708 C 10.50606918334961 6.830530166625977 9.275808334350586 6.357208251953125 8.000469207763672 6.357208251953125 C 6.726069927215576 6.358147144317627 5.496747970581055 6.831469535827637 4.551982879638672 7.68607759475708 C 4.424261093139648 7.807225704193115 4.222348213195801 7.805347442626953 4.098382949829102 7.680443286895752 L 2.888782978057861 6.458634376525879 C 2.82492208480835 6.394773483276367 2.789235353469849 6.30837345123291 2.79017448425293 6.218216896057129 C 2.791113615036011 6.127121448516846 2.827739715576172 6.041660308837891 2.893478631973267 5.978738784790039 C 5.771913051605225 3.30315637588501 10.2309045791626 3.30315637588501 13.11027717590332 5.978738784790039 C 13.17507839202881 6.041660308837891 13.21264266967773 6.127121448516846 13.21358203887939 6.218216896057129 C 13.21452140808105 6.30837345123291 13.17883491516113 6.394773483276367 13.11497402191162 6.458634376525879 L 11.90537261962891 7.680443286895752 C 11.84196090698242 7.743855953216553 11.75896739959717 7.775555610656738 11.67588138580322 7.775547981262207 C 11.59531116485596 7.77554178237915 11.51465225219727 7.745719909667969 11.45177268981934 7.68607759475708 Z M 14.23723411560059 4.873382568359375 C 12.55431270599365 3.274982452392578 10.32199954986572 2.383747577667236 8.000469207763672 2.383747577667236 C 5.678939342498779 2.383747577667236 3.445687532424927 3.274982452392578 1.762765645980835 4.873382568359375 C 1.636922240257263 4.997347354888916 1.434069991111755 4.995469570159912 1.309165716171265 4.869626045227051 L 0.09768763929605484 3.64875602722168 C 0.03476590663194656 3.584895372390747 -0.0009210471762344241 3.499434471130371 1.808320484997239e-05 3.409278154373169 C 0.0009572135750204325 3.320060729980469 0.03664416819810867 3.234599828720093 0.100505031645298 3.171677827835083 C 4.517234802246094 -1.057225942611694 11.48370361328125 -1.057225942611694 15.89949512481689 3.171677827835083 C 15.96335601806641 3.234599828720093 15.99904251098633 3.320060729980469 15.99998188018799 3.409278154373169 C 16.00091934204102 3.499434471130371 15.96523380279541 3.584895372390747 15.90231227874756 3.64875602722168 L 14.69083404541016 4.869626045227051 C 14.62767314910889 4.933261871337891 14.54483699798584 4.965198040008545 14.46196460723877 4.965193271636963 C 14.38095378875732 4.965188980102539 14.29990577697754 4.934660911560059 14.23723411560059 4.873382568359375 Z"  /></Svg>
                <Svg data-layer="8486a4f5-02ba-4e24-b04f-6f44a9315560" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 12.16680908203125" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 15.00030040740967 10.6668004989624 C 14.44770050048828 10.6668004989624 14.00040054321289 10.21860027313232 14.00040054321289 9.666900634765625 L 14.00040054321289 0.9999000430107117 C 14.00040054321289 0.4473000168800354 14.44770050048828 0 15.00030040740967 0 L 16.00020027160645 0 C 16.55190086364746 0 17.00010108947754 0.4473000168800354 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.21860027313232 16.55190086364746 10.6668004989624 16.00020027160645 10.6668004989624 L 15.00030040740967 10.6668004989624 Z M 10.33290004730225 10.6668004989624 C 9.781200408935547 10.6668004989624 9.333000183105469 10.21860027313232 9.333000183105469 9.666900634765625 L 9.333000183105469 3.333600044250488 C 9.333000183105469 2.781000137329102 9.781200408935547 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33370018005371 2.333699941635132 C 11.88539981842041 2.333699941635132 12.33360004425049 2.781000137329102 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.21860027313232 11.88539981842041 10.6668004989624 11.33370018005371 10.6668004989624 L 10.33290004730225 10.6668004989624 Z M 5.666399955749512 10.6668004989624 C 5.114700317382812 10.6668004989624 4.666500091552734 10.21860027313232 4.666500091552734 9.666900634765625 L 4.666500091552734 5.666399955749512 C 4.666500091552734 5.114700317382812 5.114700317382812 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218900203704834 4.666500091552734 7.667099952697754 5.114700317382812 7.667099952697754 5.666399955749512 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.21860027313232 7.218900203704834 10.6668004989624 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 Z M 0.9999000430107117 10.6668004989624 C 0.4473000168800354 10.6668004989624 0 10.21860027313232 0 9.666900634765625 L 0 7.667099952697754 C 0 7.114500045776367 0.4473000168800354 6.666300296783447 0.9999000430107117 6.666300296783447 L 1.999800086021423 6.666300296783447 C 2.5524001121521 6.666300296783447 2.99970006942749 7.114500045776367 2.99970006942749 7.667099952697754 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.21860027313232 2.5524001121521 10.6668004989624 1.999800086021423 10.6668004989624 L 0.9999000430107117 10.6668004989624 Z"  /></Svg>
                <View data-layer="afee1a4f-753c-488f-9874-6c1f28083f0d" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle}>
                    <View data-layer="5bf2a3c4-f0ce-419b-b181-66da51f47297" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark}>
                        <View data-layer="29b92cae-31c2-4fcb-a5da-4abe20050864" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground}></View>
                        <Text data-layer="49811f18-2618-43c2-a122-ff8368bd920a" style={styles.iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time}>9:41</Text>
                    </View>
                </View>
            </View>
        </View>
        <Svg data-layer="ee171a6b-9d75-41bc-8861-7abd7362e9e8" style={styles.iphone1312ProMax11_path1} preserveAspectRatio="none" viewBox="-2.25 -2.25 334.5 105.5" fill="rgba(125, 182, 186, 1)"><SvgPath d="M 36 0 L 288 0 C 307.8822631835938 0 324 16.11774826049805 324 36 L 324 49 C 324 68.88224792480469 307.8822631835938 85 288 85 L 36 85 C 16.11774826049805 85 0 68.88224792480469 0 49 L 0 36 C 0 16.11774826049805 16.11774826049805 0 36 0 Z"  /></Svg>
        <Svg data-layer="d545fba6-3a56-448c-88c6-7b07ea12d978" style={styles.iphone1312ProMax11_path2} preserveAspectRatio="none" viewBox="-2.25 -2.25 334.5 105.5" fill="rgba(244, 244, 244, 1)"><SvgPath d="M 32 0 L 292 0 C 309.6731262207031 0 324 14.3268871307373 324 32 L 324 53 C 324 70.67311096191406 309.6731262207031 85 292 85 L 32 85 C 14.3268871307373 85 0 70.67311096191406 0 53 L 0 32 C 0 14.3268871307373 14.3268871307373 0 32 0 Z"  /></Svg>
        <Svg data-layer="97c7debb-daf8-49b4-a503-b0211bb124c6" style={styles.iphone1312ProMax11_ellipse1} preserveAspectRatio="none" viewBox="-4.5 -4.5 152 152" fill="transparent"><SvgPath d="M 71.5 0 C 110.9883575439453 0 143 32.01164245605469 143 71.5 C 143 110.9883575439453 110.9883575439453 143 71.5 143 C 32.01164245605469 143 0 110.9883575439453 0 71.5 C 0 32.01164245605469 32.01164245605469 0 71.5 0 Z"  /></Svg>
        <Text data-layer="c5f372a9-16cf-4f6b-9b0e-4386d5e0ba7d" style={styles.iphone1312ProMax11_catFish}>Cat-Fish</Text>
        <Text data-layer="33e672b8-25f7-4149-86a1-e102ea97da21" style={styles.iphone1312ProMax11_signUp}>Sign Up</Text>
        <Text data-layer="ac35fdc9-2dde-4ea6-aff1-306e9ec28519" style={styles.iphone1312ProMax11_login}>Login</Text>
    </ScrollView>
    );
  }
}

Iphone1312ProMax11.propTypes = {

}

Iphone1312ProMax11.defaultProps = {

}


const styles = StyleSheet.create({
  "iphone1312ProMax11": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_bg": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery_border": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery_cap": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_battery_capacity": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_wifi": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_cellularConnection": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground": {
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
  "iphone1312ProMax11_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time": {
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
  "iphone1312ProMax11_path1": {
    "opacity": 0.7500140070915222,
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
    "shadowRadius": 6,
    "width": 330,
    "height": 101,
    "left": 52,
    "top": 536
  },
  "iphone1312ProMax11_path2": {
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
    "shadowRadius": 6,
    "width": 330,
    "height": 101,
    "left": 52,
    "top": 667
  },
  "iphone1312ProMax11_ellipse1": {
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
    "width": 143,
    "height": 143,
    "left": 143,
    "top": 159
  },
  "iphone1312ProMax11_catFish": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(125, 182, 186, 1)",
    "fontSize": 40,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Kannada MN",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 167,
    "height": 47,
    "left": 131,
    "top": 375
  },
  "iphone1312ProMax11_signUp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 248, 248, 1)",
    "fontSize": 26,
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
    "width": 79,
    "height": 31,
    "left": 175,
    "top": 563
  },
  "iphone1312ProMax11_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(125, 182, 186, 1)",
    "fontSize": 26,
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
    "width": 59,
    "height": 31,
    "left": 185,
    "top": 694
  }
});