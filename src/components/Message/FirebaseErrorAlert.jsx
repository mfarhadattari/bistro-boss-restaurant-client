import Swal from "sweetalert2";
import { makeSentenceCase } from "../../utilities/utilities";

const FirebaseErrorAlert = (errorMessage) => {
  const message = errorMessage.split("/")[1].slice(0, -2).split("-").join(" ");

  return Swal.fire({
    icon: "error",
    title: makeSentenceCase(message),
    showConfirmButton: false,
    timer: 5000,
  });
};

export default FirebaseErrorAlert;
