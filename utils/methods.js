export const isValidObjField = (obj) => {
  return Object.values(obj).every(
    (value) => typeof value === "string" && value.trim() !== ""
  );
};

export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

export const isValidEmail = (value) => {
  const emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return emailRegex.test(value);
};
