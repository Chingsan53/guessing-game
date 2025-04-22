import { StyleSheet, Text, View } from "react-native";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: "#7C4585",
    fontSize: 32,
    fontFamily: "open-sans",
  },
});
