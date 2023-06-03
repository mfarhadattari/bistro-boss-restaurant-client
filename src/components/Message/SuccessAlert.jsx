import Swal from "sweetalert2";

const SuccessAlert = (message) => {
  return Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

export default SuccessAlert;
