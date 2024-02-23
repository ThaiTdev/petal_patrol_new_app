import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../../../../constants/themes";

const FormInput = (props) => {
  const { placeholder, label, color, error } = props;

  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
          width: "90%",
        }}
      >
        <Text style={{ fontWeight: "500", color: color }}>{label}</Text>
        {error ? (
          <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput
        {...props}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            color: "black",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    backgroundColor: COLORS.white,
    height: 45,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 10,
    width: "90%",
  },
});

export default FormInput;
