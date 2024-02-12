import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../../../../constants/themes";

const FormInput2 = (props) => {
  const { placeholder, label, color, error } = props;

  return (
    <View style={{ alignItems: "center" }}>
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
        multiline={true} // Ajout de la propriété multiline
        style={[
          styles.input,
          {
            color: "black",
            textAlignVertical: "top", // Texte aligné en haut
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
    height: 120,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 10,
    width: "90%",
  },
});

export default FormInput2;
