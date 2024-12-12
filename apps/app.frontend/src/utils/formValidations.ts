

const validateForm = (name: string, value: string, formValues: any = {}) => {
  const errors: Record<string, string> = {};

  let error;

  switch (name) {
    case "name":
      if (!value) error = "Name is required";
      break;
    case "address":
      if (!value) error = "Address is required";
      break;
    case "description":
      if (!value) error = "Description is required";
      break;
    case "price":
      if (!value || isNaN(Number(value)) || Number(value) <= 0) {
        error = "Price must be a positive number";
      }
      break;
    case "firstName":
      if (!value) error = "First name is required";
      break;
    case "lastName":
      if (!value) error = "Last name is required";
      break;
    case "email":
      if (!value || !/\S+@\S+\.\S+/.test(value))
        error = "Invalid email address";
      break;
    case "password":
      if (!value || value.length < 6)
        error = "Password must be at least 6 characters";
      break;
    case "confirmPassword":
      if (value !== formValues.password)
        error = "Passwords do not match";
      break;
    case "phone":
      if (!value || !/^\d{10,15}$/.test(value))
        error = "Phone number is invalid";
      break;
    case "address":
      if (!value) error = "Address is required";
      break;
    case "city":
      if (!value) error = "City is required";
      break;
    case "country":
      if (!value) error = "Country is required";
      break;
    default:
      break;
  }

  return error;
};

export default validateForm;
