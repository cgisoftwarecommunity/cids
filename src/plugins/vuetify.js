import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { pt } from "vuetify/locale";
import "@mdi/font/css/materialdesignicons.css";

const cgi = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#FFFFFF",
    primary: "#354565",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const dark = {
  dark: true,
  colors: {
    primary: "#4d79bb",
  },
};

export default createVuetify({
  locale: {
    locale: "pt",
    fallback: "pt",
    messages: { pt },
  },
  components: {
    ...components,
    ...directives,
  },
  theme: {
    defaultTheme: "cgi",
    themes: {
      cgi,
      dark,
    },
  },
  defaults: {
    VBtn: { color: "primary", size: "small", variant: "tonal" },
    VList: { density: "compact" },
    VToolbar: { density: "compact" },
    VSelect: { density: "compact", variant: "underlined" },
    VAutocomplete: {
      density: "compact",
      variant: "underlined",
      color: "primary",
    },
    VTextField: { density: "compact", variant: "underlined", color: "primary" },
    VIcon: { size: "small" },
    VCheckbox: { density: "compact", color: "primary" },
    VRadio: { density: "compact", color: "primary" },
    VRadioGroup: { density: "compact", color: "primary" },
    VTextarea: { density: "compact", variant: "underlined" },
    VSwitch: { color: "primary", flat: true },
    VRow: { dense: true },
  },
});
