import { ref } from 'vue';

//typically we name this funcions with
// useNameFuncion
export default function useAlert(startingVisibility = false) {
  const alertIsVisible = ref(startingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  //we can return whatever thing in this case
  //we return an object
  return [alertIsVisible, showAlert, hideAlert];
}
