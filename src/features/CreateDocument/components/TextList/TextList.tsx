import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TextListProps } from "../sample/ServiceAgreement/types";

const styles = StyleSheet.create({
  text: {
    textIndent: "20px",
    textAlign: "justify",
  },
});

const TextList = ({ data }: TextListProps) => {
  return (
    <View>
      {data.map((elem, index) => {
        return (
          <Text key={index} style={styles.text}>
            {elem}
          </Text>
        );
      })}
    </View>
  );
};

export default TextList;
