import { Text, View, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default PrimaryButton;
