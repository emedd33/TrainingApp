import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import SideMenu from "react-native-side-menu";
import MenuBar from "../components/molecules/MenuBar";
import { List, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

function HomeScreen(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = <MenuBar navigation={props.navigation} />;
  return (
    <SideMenu
      menu={menu}
      isOpen={isMenuOpen}
      onChange={(e) => setIsMenuOpen(e)}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.headerBar}>
            <View style={styles.headerBarIconContainer}>
              <TouchableOpacity
                style={{ margins: 0, padding: 0 }}
                onPress={() => setIsMenuOpen(true)}
              >
                <Icon
                  style={styles.headerBarIcon}
                  name="list"
                  size={30}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerBarTitleContainer}>
              <Text style={styles.headerTitle}>Home screen</Text>
            </View>
          </View>
        </View>
        {/* <Button
          style={styles.navigationButton}
          title="Go to Exercise"
          onPress={() => props.navigation.navigate("Exercise")}
        />
        <Button
          style={styles.navigationButton}
          title="Go to Routines"
          onPress={() => props.navigation.navigate("Routine", { item: "name" })}
        /> */}
      </View>
    </SideMenu>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "white", height: "100%" },
  headerBar: {
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingBottom: 5,

    elevation: 5,
    display: "flex",
    flexDirection: "row",
  },
  headerBarTitleContainer: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
  },
  headerBarIconContainer: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
  },
  headerBarIcon: {
    marginTop: 40,
  },
  headerTitle: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
  },
  navigationButton: {
    margin: "10px",
  },
  inputButton: {
    margin: "auto",
  },
});

export default HomeScreen;
