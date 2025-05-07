import { Text, View, StyleSheet, Dimensions } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#E78B48",
    padding: deviceWidth < 380 ? 12 : 24,
    margin: 24,
    alignItems: "center",
    borderRadius: 8,
  },
  numberText: {
    color: "#E78B48",
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
