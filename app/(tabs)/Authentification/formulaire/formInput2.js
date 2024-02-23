import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../../../../constants/themes";

const FormInput2 = (props) => {
  const { placeholder, label, color, error, width, height } = props;

  return (
    <View
      style={{
        alignItems: "center",
        width: 20,
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
          width: "90%",
        }}
      >
        <TextInput
          {...props}
          placeholder={placeholder}
          multiline={true} // Ajout de la propriété multiline
          style={[
            styles.input,
            {
              color: "black",
              // textAlignVertical: "top",
              width: width,
              height: height,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    backgroundColor: COLORS.white,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default FormInput2;
