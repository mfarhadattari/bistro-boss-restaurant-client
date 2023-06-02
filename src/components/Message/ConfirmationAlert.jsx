import Swal from "sweetalert2";

const ConfirmationAlert = (message) => {
  return Swal.fire({
    icon: "question",
    title: message,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });
};

export default ConfirmationAlert;
