import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Messages extends Component {

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
    <ScrollView data-layer="663400cd-1919-4181-bcec-3163aa1617db" style={styles.messages}>
        <View data-layer="53b7c91d-e274-4e2d-b6f8-91e5a7311101" style={styles.messages_statusBarIphoneCompactDark}>
            <View data-layer="11f913e8-69e6-4a69-ad57-5fed33a6c3b9" style={styles.messages_statusBarIphoneCompactDark_bg}></View>
            <View data-layer="1143e278-336a-4e2e-b766-d3fdfb7aff65" style={styles.messages_statusBarIphoneCompactDark_statusBar}>
                <View data-layer="5d4620a9-166f-406e-a336-5d4efc98c457" style={styles.messages_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground}></View>
                <View data-layer="29277498-4186-466c-816c-7467a0f1c4f1" style={styles.messages_statusBarIphoneCompactDark_statusBar_battery}>
                    <View data-layer="935dc983-28e6-4947-a908-2af68f8d126c" style={styles.messages_statusBarIphoneCompactDark_statusBar_battery_border}></View>
                    <Svg data-layer="6d5a8d1e-d6cc-42a1-b1d8-effbf738873d" style={styles.messages_statusBarIphoneCompactDark_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="7fa8e984-9dba-438c-9feb-8b067e4bfbc5" style={styles.messages_statusBarIphoneCompactDark_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="cc210807-e9dc-4d97-ba38-40adf6dc34e9" style={styles.messages_statusBarIphoneCompactDark_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 17.5 12.978271484375" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 7.768504619598389 11.38155555725098 L 5.675182819366455 9.271328926086426 C 5.610383033752441 9.208407402038574 5.574695587158203 9.121068000793457 5.577513217926025 9.029973030090332 C 5.579391479492188 8.939816474914551 5.617895603179932 8.854354858398438 5.685513496398926 8.793312072753906 C 7.021895408630371 7.663538932800293 8.979043006896973 7.663538932800293 10.31542587280273 8.793312072753906 C 10.38304328918457 8.854354858398438 10.42154693603516 8.939816474914551 10.42342567443848 9.029973030090332 C 10.42530345916748 9.121068000793457 10.38961696624756 9.208407402038574 10.32481670379639 9.271328926086426 L 8.232434272766113 11.38155555725098 C 8.171391487121582 11.44353771209717 8.087808609008789 11.47828578948975 8.000469207763672 11.47828578948975 C 7.913130283355713 11.47828578948975 7.829547882080078 11.44353771209717 7.768504619598389 11.38155555725098 Z M 11.45177268981934 7.68607759475708 C 10.50606918334961 6.830530166625977 9.275808334350586 6.357208251953125 8.000469207763672 6.357208251953125 C 6.726069927215576 6.358147144317627 5.496747970581055 6.831469535827637 4.551982879638672 7.68607759475708 C 4.424261093139648 7.807225704193115 4.222348213195801 7.805347442626953 4.098382949829102 7.680443286895752 L 2.888782978057861 6.458634376525879 C 2.82492208480835 6.394773483276367 2.789235353469849 6.30837345123291 2.79017448425293 6.218216896057129 C 2.791113615036011 6.127121448516846 2.827739715576172 6.041660308837891 2.893478631973267 5.978738784790039 C 5.771913051605225 3.30315637588501 10.2309045791626 3.30315637588501 13.11027717590332 5.978738784790039 C 13.17507839202881 6.041660308837891 13.21264266967773 6.127121448516846 13.21358203887939 6.218216896057129 C 13.21452140808105 6.30837345123291 13.17883491516113 6.394773483276367 13.11497402191162 6.458634376525879 L 11.90537261962891 7.680443286895752 C 11.84196090698242 7.743855953216553 11.75896739959717 7.775555610656738 11.67588138580322 7.775547981262207 C 11.59531116485596 7.77554178237915 11.51465225219727 7.745719909667969 11.45177268981934 7.68607759475708 Z M 14.23723411560059 4.873382568359375 C 12.55431270599365 3.274982452392578 10.32199954986572 2.383747577667236 8.000469207763672 2.383747577667236 C 5.678939342498779 2.383747577667236 3.445687532424927 3.274982452392578 1.762765645980835 4.873382568359375 C 1.636922240257263 4.997347354888916 1.434069991111755 4.995469570159912 1.309165716171265 4.869626045227051 L 0.09768763929605484 3.64875602722168 C 0.03476590663194656 3.584895372390747 -0.0009210471762344241 3.499434471130371 1.808320484997239e-05 3.409278154373169 C 0.0009572135750204325 3.320060729980469 0.03664416819810867 3.234599828720093 0.100505031645298 3.171677827835083 C 4.517234802246094 -1.057225942611694 11.48370361328125 -1.057225942611694 15.89949512481689 3.171677827835083 C 15.96335601806641 3.234599828720093 15.99904251098633 3.320060729980469 15.99998188018799 3.409278154373169 C 16.00091934204102 3.499434471130371 15.96523380279541 3.584895372390747 15.90231227874756 3.64875602722168 L 14.69083404541016 4.869626045227051 C 14.62767314910889 4.933261871337891 14.54483699798584 4.965198040008545 14.46196460723877 4.965193271636963 C 14.38095378875732 4.965188980102539 14.29990577697754 4.934660911560059 14.23723411560059 4.873382568359375 Z"  /></Svg>
                <Svg data-layer="45168116-d7ff-4743-988a-1a0b2be1f163" style={styles.messages_statusBarIphoneCompactDark_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.75 18.5 12.16680908203125" fill="rgba(7, 5, 5, 1)"><SvgPath d="M 15.00030040740967 10.6668004989624 C 14.44770050048828 10.6668004989624 14.00040054321289 10.21860027313232 14.00040054321289 9.666900634765625 L 14.00040054321289 0.9999000430107117 C 14.00040054321289 0.4473000168800354 14.44770050048828 0 15.00030040740967 0 L 16.00020027160645 0 C 16.55190086364746 0 17.00010108947754 0.4473000168800354 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.21860027313232 16.55190086364746 10.6668004989624 16.00020027160645 10.6668004989624 L 15.00030040740967 10.6668004989624 Z M 10.33290004730225 10.6668004989624 C 9.781200408935547 10.6668004989624 9.333000183105469 10.21860027313232 9.333000183105469 9.666900634765625 L 9.333000183105469 3.333600044250488 C 9.333000183105469 2.781000137329102 9.781200408935547 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33370018005371 2.333699941635132 C 11.88539981842041 2.333699941635132 12.33360004425049 2.781000137329102 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.21860027313232 11.88539981842041 10.6668004989624 11.33370018005371 10.6668004989624 L 10.33290004730225 10.6668004989624 Z M 5.666399955749512 10.6668004989624 C 5.114700317382812 10.6668004989624 4.666500091552734 10.21860027313232 4.666500091552734 9.666900634765625 L 4.666500091552734 5.666399955749512 C 4.666500091552734 5.114700317382812 5.114700317382812 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218900203704834 4.666500091552734 7.667099952697754 5.114700317382812 7.667099952697754 5.666399955749512 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.21860027313232 7.218900203704834 10.6668004989624 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 Z M 0.9999000430107117 10.6668004989624 C 0.4473000168800354 10.6668004989624 0 10.21860027313232 0 9.666900634765625 L 0 7.667099952697754 C 0 7.114500045776367 0.4473000168800354 6.666300296783447 0.9999000430107117 6.666300296783447 L 1.999800086021423 6.666300296783447 C 2.5524001121521 6.666300296783447 2.99970006942749 7.114500045776367 2.99970006942749 7.667099952697754 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.21860027313232 2.5524001121521 10.6668004989624 1.999800086021423 10.6668004989624 L 0.9999000430107117 10.6668004989624 Z"  /></Svg>
                <View data-layer="41101519-d79a-44dc-a52a-2f4612efa7b1" style={styles.messages_statusBarIphoneCompactDark_statusBar_timeStyle}>
                    <View data-layer="097c3841-2180-41cc-97ec-e8ed82eab958" style={styles.messages_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark}>
                        <View data-layer="145fb5ef-9cf2-450c-a2e7-ff665fcc6987" style={styles.messages_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground}></View>
                        <Text data-layer="b8fb6d38-4e35-4e6d-8ba4-8225bcbf5086" style={styles.messages_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time}>9:41</Text>
                    </View>
                </View>
            </View>
        </View>
        <Svg data-layer="bd5aa6a4-0447-4bce-b42a-4ee02b2c9951" style={styles.messages_ellipse12} preserveAspectRatio="none" viewBox="-2.25 -2.25 62.5 62.5" fill="transparent"><SvgPath d="M 29 0 C 45.01625823974609 0 58 12.98374366760254 58 29 C 58 45.01625823974609 45.01625823974609 58 29 58 C 12.98374366760254 58 0 45.01625823974609 0 29 C 0 12.98374366760254 12.98374366760254 0 29 0 Z"  /></Svg>
        <Svg data-layer="3c48f874-9b35-452e-aa1d-57b310ffddba" style={styles.messages_ellipse26} preserveAspectRatio="none" viewBox="-2.25 -2.25 62.5 62.5" fill="transparent"><SvgPath d="M 29 0 C 45.01625823974609 0 58 12.98374366760254 58 29 C 58 45.01625823974609 45.01625823974609 58 29 58 C 12.98374366760254 58 0 45.01625823974609 0 29 C 0 12.98374366760254 12.98374366760254 0 29 0 Z"  /></Svg>
        <Svg data-layer="43e1d38c-a153-4968-87dc-d55ffb6271ab" style={styles.messages_ellipse27} preserveAspectRatio="none" viewBox="-2.25 -2.25 62.5 62.5" fill="transparent"><SvgPath d="M 29 0 C 45.01625823974609 0 58 12.98374366760254 58 29 C 58 45.01625823974609 45.01625823974609 58 29 58 C 12.98374366760254 58 0 45.01625823974609 0 29 C 0 12.98374366760254 12.98374366760254 0 29 0 Z"  /></Svg>
        <Svg data-layer="9fff57c9-e4e7-46f5-9cec-a282a480663f" style={styles.messages_ellipse28} preserveAspectRatio="none" viewBox="-2.25 -2.25 62.5 62.5" fill="transparent"><SvgPath d="M 29 0 C 45.01625823974609 0 58 12.98374366760254 58 29 C 58 45.01625823974609 45.01625823974609 58 29 58 C 12.98374366760254 58 0 45.01625823974609 0 29 C 0 12.98374366760254 12.98374366760254 0 29 0 Z"  /></Svg>
        <Svg data-layer="b8705d09-0594-47df-80a4-9ac9bfd136f8" style={styles.messages_ellipse29} preserveAspectRatio="none" viewBox="-2.25 -2.25 62.5 62.5" fill="transparent"><SvgPath d="M 29 0 C 45.01625823974609 0 58 12.98374366760254 58 29 C 58 45.01625823974609 45.01625823974609 58 29 58 C 12.98374366760254 58 0 45.01625823974609 0 29 C 0 12.98374366760254 12.98374366760254 0 29 0 Z"  /></Svg>
        <Svg data-layer="e1307bdd-99db-4434-8702-66f9a80255ce" style={styles.messages_line22} preserveAspectRatio="none" viewBox="-9 -0.5 377 36" fill="transparent"><SvgPath d="M 0 0 L 353 0"  /></Svg>
        <Svg data-layer="0db443ec-4417-4980-ab9d-398a21ab09be" style={styles.messages_line23} preserveAspectRatio="none" viewBox="-9 -0.5 377 36" fill="transparent"><SvgPath d="M 0 0 L 353 0"  /></Svg>
        <Svg data-layer="608e1702-60eb-4f22-80e8-ee01e17e2220" style={styles.messages_line24} preserveAspectRatio="none" viewBox="-9 -0.5 377 36" fill="transparent"><SvgPath d="M 0 0 L 353 0"  /></Svg>
        <Svg data-layer="f113cb05-763c-4357-9e55-0a2d553cfc8e" style={styles.messages_line25} preserveAspectRatio="none" viewBox="-9 -0.5 377 36" fill="transparent"><SvgPath d="M 0 0 L 353 0"  /></Svg>
        <Svg data-layer="c0df4538-ac2e-4a9b-8997-fc0b435790e9" style={styles.messages_line26} preserveAspectRatio="none" viewBox="-9 -0.5 377 36" fill="transparent"><SvgPath d="M 0 0 L 353 0"  /></Svg>
        <Text data-layer="f813417b-6cd7-4f0c-999c-add241af144d" style={styles.messages_messagesb1cac76b}>Messages</Text>
        <View data-layer="e9b53107-49af-49b8-acfb-3d2f8a79c127" style={styles.messages_rectangle9}></View>
        <Text data-layer="11117067-d7ef-4464-8cd0-f0f72be5b308" style={styles.messages_search}>Search</Text>
        <Text data-layer="414d050b-5f37-4d8f-a00d-19ccd0609dc9" style={styles.messages_name6104a3c1}>Name</Text>
        <Text data-layer="16e5f49d-b499-4fda-9894-c01c9c74e2db" style={styles.messages_name5ee4d078}>Name</Text>
        <Text data-layer="ab6f121a-5cd2-42db-b11a-e7e5c53bdb40" style={styles.messages_name36f86d53}>Name</Text>
        <Text data-layer="098c2f81-5f4e-499f-a6d5-eb4c15995e41" style={styles.messages_namee62c61b2}>Name</Text>
        <Text data-layer="fb8b3cce-589a-41a3-99fa-54e5aa874d76" style={styles.messages_name}>Name</Text>
        <Text data-layer="cc8d4666-8cc9-4b65-9e3d-91af42c8ded4" style={styles.messages_dayXxd3133d02}>Day xx</Text>
        <Text data-layer="ef6b727d-02d2-4dc2-af22-a92b34a77c97" style={styles.messages_dayXx71696150}>Day xx</Text>
        <Text data-layer="786c8342-cddb-4dc9-9d45-85de91e2775a" style={styles.messages_dayXx52ff69aa}>Day xx</Text>
        <Text data-layer="e47af196-c3a4-4b0f-bbbf-4956dd6cd39f" style={styles.messages_dayXx3c0a263e}>Day xx</Text>
        <Text data-layer="46e345d5-a0e2-4137-aac4-ee4a9ed61dff" style={styles.messages_dayXx}>Day xx</Text>
        <View data-layer="5f5e19cd-bd7b-4538-a35b-31c6ef5aecfc" style={styles.messages_group6}>
            <Svg data-layer="ea3d0485-63b6-43af-a11f-d9c57c617803" style={styles.messages_group6_line30} preserveAspectRatio="none" viewBox="-1.060546875 -1.0606689453125 15.341796875 15.3416748046875" fill="transparent"><SvgPath d="M 0 13.22037220001221 L 13.22037220001221 0"  /></Svg>
            <Svg data-layer="a027d82a-5913-4ccc-bb60-f158f149e8d6" style={styles.messages_group6_line31} preserveAspectRatio="none" viewBox="-1.060546875 -1.0606689453125 15.341796875 15.3416748046875" fill="transparent"><SvgPath d="M 0 13.22037220001221 L 13.22037220001221 0"  /></Svg>
            <Svg data-layer="ebf8f665-eeea-410c-9d3a-5ca6bd0f2630" style={styles.messages_group6_line32} preserveAspectRatio="none" viewBox="-1.060546875 -1.0606689453125 15.341796875 15.3416748046875" fill="transparent"><SvgPath d="M 0 0 L 13.22037220001221 13.22037220001221"  /></Svg>
        </View>
    </ScrollView>
    );
  }
}

Messages.propTypes = {

}

Messages.defaultProps = {

}


const styles = StyleSheet.create({
  "messages": {
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
  "messages_statusBarIphoneCompactDark": {
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
  "messages_statusBarIphoneCompactDark_bg": {
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
  "messages_statusBarIphoneCompactDark_statusBar": {
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
  "messages_statusBarIphoneCompactDark_statusBar_barsstatusBarsiphonedarkBackground": {
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
  "messages_statusBarIphoneCompactDark_statusBar_battery": {
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
  "messages_statusBarIphoneCompactDark_statusBar_battery_border": {
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
  "messages_statusBarIphoneCompactDark_statusBar_battery_cap": {
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
  "messages_statusBarIphoneCompactDark_statusBar_battery_capacity": {
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
  "messages_statusBarIphoneCompactDark_statusBar_wifi": {
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
  "messages_statusBarIphoneCompactDark_statusBar_cellularConnection": {
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
  "messages_statusBarIphoneCompactDark_statusBar_timeStyle": {
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
  "messages_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark": {
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
  "messages_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_timeLightBackground": {
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
  "messages_statusBarIphoneCompactDark_statusBar_timeStyle_timeDark_time": {
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
  "messages_ellipse12": {
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
    "width": 58,
    "height": 58,
    "left": 36.75,
    "top": 231
  },
  "messages_ellipse26": {
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
    "width": 58,
    "height": 58,
    "left": 36.75,
    "top": 663
  },
  "messages_ellipse27": {
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
    "width": 58,
    "height": 58,
    "left": 36.75,
    "top": 555
  },
  "messages_ellipse28": {
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
    "width": 58,
    "height": 58,
    "left": 36.75,
    "top": 447
  },
  "messages_ellipse29": {
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
    "width": 58,
    "height": 58,
    "left": 36.75,
    "top": 339
  },
  "messages_line22": {
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
    "width": 377,
    "height": 36,
    "left": 28.25,
    "top": 315
  },
  "messages_line23": {
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
    "width": 377,
    "height": 36,
    "left": 29.25,
    "top": 423
  },
  "messages_line24": {
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
    "width": 377,
    "height": 36,
    "left": 29.25,
    "top": 747
  },
  "messages_line25": {
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
    "width": 377,
    "height": 36,
    "left": 29.25,
    "top": 531
  },
  "messages_line26": {
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
    "width": 377,
    "height": 36,
    "left": 29.25,
    "top": 639
  },
  "messages_messagesb1cac76b": {
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
    "width": 160,
    "height": 54,
    "left": 134,
    "top": 75
  },
  "messages_rectangle9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "width": 299,
    "height": 32,
    "left": 65,
    "top": 163
  },
  "messages_search": {
    "opacity": 0.606715977191925,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
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
    "width": 46,
    "height": 22,
    "left": 93,
    "top": 168
  },
  "messages_name6104a3c1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
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
    "width": 39,
    "height": 22,
    "left": 106,
    "top": 249
  },
  "messages_name5ee4d078": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
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
    "width": 39,
    "height": 22,
    "left": 106,
    "top": 684
  },
  "messages_name36f86d53": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
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
    "width": 39,
    "height": 22,
    "left": 106,
    "top": 576
  },
  "messages_namee62c61b2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
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
    "width": 39,
    "height": 22,
    "left": 106,
    "top": 468
  },
  "messages_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
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
    "width": 39,
    "height": 22,
    "left": 106,
    "top": 360
  },
  "messages_dayXxd3133d02": {
    "opacity": 0.5961549878120422,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 12,
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
    "width": 31,
    "height": 14,
    "left": 340,
    "top": 237
  },
  "messages_dayXx71696150": {
    "opacity": 0.5961549878120422,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 12,
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
    "width": 31,
    "height": 14,
    "left": 340,
    "top": 656
  },
  "messages_dayXx52ff69aa": {
    "opacity": 0.5961549878120422,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 12,
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
    "width": 31,
    "height": 14,
    "left": 340,
    "top": 548
  },
  "messages_dayXx3c0a263e": {
    "opacity": 0.5961549878120422,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 12,
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
    "width": 31,
    "height": 14,
    "left": 340,
    "top": 440
  },
  "messages_dayXx": {
    "opacity": 0.5961549878120422,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 12,
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
    "width": 31,
    "height": 14,
    "left": 340,
    "top": 332
  },
  "messages_group6": {
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
  "messages_group6_line30": {
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
  "messages_group6_line31": {
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
  "messages_group6_line32": {
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