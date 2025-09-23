import { useFormik } from "formik";
import React from "react";

const useHook = () => {
  const formProps = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      alternatePhone: "",
      pinCode: "",
      locality: "",
      city: "",
      state: "",
      type: "home",
      fullAddress: "",
      landmark: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return { ...formProps };
};

export default useHook;
