import Swal from "sweetalert2";

const ErrorAlert = (message) => {
  return Swal.fire({
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

export default ErrorAlert;
