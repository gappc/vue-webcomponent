import { defineCustomElement } from "vue";
import HelloWorld from "./components/HelloWorld.ce.vue";

const helloWorld = defineCustomElement(HelloWorld);
customElements.define("hello-world", helloWorld);
