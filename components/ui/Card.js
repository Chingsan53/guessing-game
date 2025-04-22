import { StyleSheet, Text, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#7AE2CF",
    borderRadius: 8,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#077A7D",
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
