const formatInputToNumber = (input: string): number => {
  // Remove commas and any whitespace
  const formattedInput = input.replace(/[\s,]/g, "");
  // Parse the formatted input to a number
  const number = parseFloat(formattedInput);

  // Return the number if valid, otherwise NaN
  return isNaN(number) ? NaN : number;
};

export default formatInputToNumber;
