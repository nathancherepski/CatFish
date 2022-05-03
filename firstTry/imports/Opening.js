import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Iphone1312ProMax10 extends Component {

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
    <ScrollView data-layer="c11d573d-c2ff-45a4-a1b2-44b6a2324fa5" style={styles.iphone1312ProMax10}>
        <View data-layer="1a41b915-b914-49d4-9d7f-17eee0ed2faa" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark}>
            <View data-layer="d2d8ee3c-7164-4a5e-a949-ab1072708f7d" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_bg}></View>
            <View data-layer="1019b806-d25d-4dbf-94ba-78ccde1a2a69" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar}>
                <View data-layer="50caae5e-348e-49d7-8ffb-459d4786ce71" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground}></View>
                <View data-layer="4f543804-5cbe-4020-9893-39f7aff83b16" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery}>
                    <View data-layer="60200d57-076a-469a-bc76-130c9cfcf4e1" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery_border}></View>
                    <Svg data-layer="85df3c8d-1bc8-4f67-b3e6-a9a58d382513" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="a0f12b3f-316c-41ab-a5af-f27da88bbf5b" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="7cc0ac63-c580-4763-a723-a40c896638cc" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 17.5 12.978271484375" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 7.768504619598389 11.38155555725098 L 5.675182819366455 9.271328926086426 C 5.610383033752441 9.208407402038574 5.574695587158203 9.121068000793457 5.577513217926025 9.029973030090332 C 5.579391479492188 8.939816474914551 5.617895603179932 8.854354858398438 5.685513496398926 8.793312072753906 C 7.021895408630371 7.663538932800293 8.979043006896973 7.663538932800293 10.31542587280273 8.793312072753906 C 10.38304328918457 8.854354858398438 10.42154693603516 8.939816474914551 10.42342567443848 9.029973030090332 C 10.42530345916748 9.121068000793457 10.38961696624756 9.208407402038574 10.32481670379639 9.271328926086426 L 8.232434272766113 11.38155555725098 C 8.171391487121582 11.44353771209717 8.087808609008789 11.47828578948975 8.000469207763672 11.47828578948975 C 7.913130283355713 11.47828578948975 7.829547882080078 11.44353771209717 7.768504619598389 11.38155555725098 Z M 11.45177268981934 7.68607759475708 C 10.50606918334961 6.830530166625977 9.275808334350586 6.357208251953125 8.000469207763672 6.357208251953125 C 6.726069927215576 6.358147144317627 5.496747970581055 6.831469535827637 4.551982879638672 7.68607759475708 C 4.424261093139648 7.807225704193115 4.222348213195801 7.805347442626953 4.098382949829102 7.680443286895752 L 2.888782978057861 6.458634376525879 C 2.82492208480835 6.394773483276367 2.789235353469849 6.30837345123291 2.79017448425293 6.218216896057129 C 2.791113615036011 6.127121448516846 2.827739715576172 6.041660308837891 2.893478631973267 5.978738784790039 C 5.771913051605225 3.30315637588501 10.2309045791626 3.30315637588501 13.11027717590332 5.978738784790039 C 13.17507839202881 6.041660308837891 13.21264266967773 6.127121448516846 13.21358203887939 6.218216896057129 C 13.21452140808105 6.30837345123291 13.17883491516113 6.394773483276367 13.11497402191162 6.458634376525879 L 11.90537261962891 7.680443286895752 C 11.84196090698242 7.743855953216553 11.75896739959717 7.775555610656738 11.67588138580322 7.775547981262207 C 11.59531116485596 7.77554178237915 11.51465225219727 7.745719909667969 11.45177268981934 7.68607759475708 Z M 14.23723411560059 4.873382568359375 C 12.55431270599365 3.274982452392578 10.32199954986572 2.383747577667236 8.000469207763672 2.383747577667236 C 5.678939342498779 2.383747577667236 3.445687532424927 3.274982452392578 1.762765645980835 4.873382568359375 C 1.636922240257263 4.997347354888916 1.434069991111755 4.995469570159912 1.309165716171265 4.869626045227051 L 0.09768763929605484 3.64875602722168 C 0.03476590663194656 3.584895372390747 -0.0009210471762344241 3.499434471130371 1.808320484997239e-05 3.409278154373169 C 0.0009572135750204325 3.320060729980469 0.03664416819810867 3.234599828720093 0.100505031645298 3.171677827835083 C 4.517234802246094 -1.057225942611694 11.48370361328125 -1.057225942611694 15.89949512481689 3.171677827835083 C 15.96335601806641 3.234599828720093 15.99904251098633 3.320060729980469 15.99998188018799 3.409278154373169 C 16.00091934204102 3.499434471130371 15.96523380279541 3.584895372390747 15.90231227874756 3.64875602722168 L 14.69083404541016 4.869626045227051 C 14.62767314910889 4.933261871337891 14.54483699798584 4.965198040008545 14.46196460723877 4.965193271636963 C 14.38095378875732 4.965188980102539 14.29990577697754 4.934660911560059 14.23723411560059 4.873382568359375 Z"  /></Svg>
                <Svg data-layer="58d984b8-b8ae-4a59-94da-1b6f6b2a524d" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 12.16680908203125" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 15.00030040740967 10.6668004989624 C 14.44770050048828 10.6668004989624 14.00040054321289 10.21860027313232 14.00040054321289 9.666900634765625 L 14.00040054321289 0.9999000430107117 C 14.00040054321289 0.4473000168800354 14.44770050048828 0 15.00030040740967 0 L 16.00020027160645 0 C 16.55190086364746 0 17.00010108947754 0.4473000168800354 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.21860027313232 16.55190086364746 10.6668004989624 16.00020027160645 10.6668004989624 L 15.00030040740967 10.6668004989624 Z M 10.33290004730225 10.6668004989624 C 9.781200408935547 10.6668004989624 9.333000183105469 10.21860027313232 9.333000183105469 9.666900634765625 L 9.333000183105469 3.333600044250488 C 9.333000183105469 2.781000137329102 9.781200408935547 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33370018005371 2.333699941635132 C 11.88539981842041 2.333699941635132 12.33360004425049 2.781000137329102 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.21860027313232 11.88539981842041 10.6668004989624 11.33370018005371 10.6668004989624 L 10.33290004730225 10.6668004989624 Z M 5.666399955749512 10.6668004989624 C 5.114700317382812 10.6668004989624 4.666500091552734 10.21860027313232 4.666500091552734 9.666900634765625 L 4.666500091552734 5.666399955749512 C 4.666500091552734 5.114700317382812 5.114700317382812 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218900203704834 4.666500091552734 7.667099952697754 5.114700317382812 7.667099952697754 5.666399955749512 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.21860027313232 7.218900203704834 10.6668004989624 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 Z M 0.9999000430107117 10.6668004989624 C 0.4473000168800354 10.6668004989624 0 10.21860027313232 0 9.666900634765625 L 0 7.667099952697754 C 0 7.114500045776367 0.4473000168800354 6.666300296783447 0.9999000430107117 6.666300296783447 L 1.999800086021423 6.666300296783447 C 2.5524001121521 6.666300296783447 2.99970006942749 7.114500045776367 2.99970006942749 7.667099952697754 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.21860027313232 2.5524001121521 10.6668004989624 1.999800086021423 10.6668004989624 L 0.9999000430107117 10.6668004989624 Z"  /></Svg>
                <View data-layer="c33c8efd-5871-4a81-8465-9b356066f9d5" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle}>
                    <View data-layer="b5c7789e-a9e7-4de3-9e09-e963ad0b47e8" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark}>
                        <View data-layer="e4218287-022d-41b8-aab2-87ab3d4595c2" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground}></View>
                        <Text data-layer="07fe75f4-a59f-48cd-bada-9ef8c48aa2af" style={styles.iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time}>9:41</Text>
                    </View>
                </View>
            </View>
        </View>
        <Svg data-layer="5afbd90f-39e2-41a2-bf39-d8a9c2e7298e" style={styles.iphone1312ProMax10_ellipse12} preserveAspectRatio="none" viewBox="-4.5 -4.5 152 152" fill="transparent"><SvgPath d="M 71.5 0 C 110.9883575439453 0 143 32.01164245605469 143 71.5 C 143 110.9883575439453 110.9883575439453 143 71.5 143 C 32.01164245605469 143 0 110.9883575439453 0 71.5 C 0 32.01164245605469 32.01164245605469 0 71.5 0 Z"  /></Svg>
    </ScrollView>
    );
  }
}

Iphone1312ProMax10.propTypes = {

}

Iphone1312ProMax10.defaultProps = {

}


const styles = StyleSheet.create({
  "iphone1312ProMax10": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_bg": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery_border": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery_cap": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_battery_capacity": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_wifi": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_cellularConnection": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground": {
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
  "iphone1312ProMax10_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time": {
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
  "iphone1312ProMax10_ellipse12": {
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
    "top": 392
  }
});