import { Ref } from "vue";
import VueCookies from "vue-cookies";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "../store/global";

export let loggedInRef: Ref<boolean>;

export function setLoggedInRef(value: boolean) {
  loggedInRef.value = value;
}

export function setup() {
  const { loggedIn } = storeToRefs(useGlobalStore());

  loggedInRef = loggedIn;
}

export function checkAuthentication(cookies: any) {
  if (cookies.get("auth") != null) {
    loggedInRef.value = true;
    return true;
  }
  loggedInRef.value = false;
  return false;
}

export function logout(cookies: any, _router: any) {
  console.log(cookies);

  cookies.remove("auth");
  loggedInRef.value = false;

  _router.push("/login");
}
