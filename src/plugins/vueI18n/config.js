import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'EGP', notation: 'standard' , currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent' , maximumFractionDigits: 2
    }
  },
  'ar': {
    currency: {
      style: 'currency', currency: 'EGP', notation: 'standard' , currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent' , maximumFractionDigits: 2
    }
  }
}
const i18n = new VueI18n({
  locale: localStorage.getItem("locale")? localStorage.getItem("locale"): "en",
  numberFormats
  // messages: {},
});
// if (i18n.locale == "ar") {
//   document.getElementsByTagName("body")[0].style =
//     "font-family: hacen-tunisia !important";
// }
if (i18n.locale == "ar") {
  document.body.setAttribute('dir', 'rtl')
  document.body.setAttribute('lang', 'ar')
  document.body.setAttribute('style', 'font-family:HacenTunisiaRegular,Helvetica,Tahoma,sans-serif')
  // document.body.setAttribute('style', 'font-family:Cairo,Helvetica,Tahoma,sans-serif')
}
else {
  document.body.setAttribute('dir', 'ltr')
  document.body.setAttribute('lang', 'en')
  document.body.setAttribute('style', 'font-family:Montserrat,Helvetica,Tahoma,sans-serif')
}
export { i18n };
