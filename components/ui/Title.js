import { Text, View, StyleSheet } from "react-native";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
