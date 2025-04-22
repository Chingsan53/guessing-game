import { Text, View, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#E78B48",
    padding: 24,
    margin: 24,
    alignItems: "center",
    borderRadius: 8,
  },
  numberText: {
    color: "#E78B48",
    fontSize: 36,
    fontWeight: "bold",
  },
});
