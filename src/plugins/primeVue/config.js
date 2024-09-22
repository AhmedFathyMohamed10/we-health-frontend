import Vue from "vue";
import PrimeVue from 'primevue/config';
import Ripple from "primevue/ripple";
import Tooltip from 'primevue/tooltip';
import { lang } from "./lang";
if (localStorage.getItem('locale')) {
  if (localStorage.getItem("locale") == "ar")
    Vue.use(PrimeVue, {
      locale: lang.ar,
      ripple:true,
      ToastService:true
    });
  else
  Vue.use(PrimeVue, {
      locale: lang.en,
      ripple:true,
      ToastService:true,
    });
} 
else
Vue.use(PrimeVue, {ripple: true ,tooltip:true });
Vue.directive("ripple", Ripple); 
Vue.directive('tooltip', Tooltip);
  // so i can use ripple.directive in my own components as below
  /* 
    <div class="p-ripple purple" v-ripple></div>
    .p-ripple.purple .p-ink {
        background: rgba(256,39,176,.3);
    }
  */

    
///////////////////// ToastService ///////////////////////////////////////
import ToastService from 'primevue/toastservice';
Vue.use(ToastService);
import Toast from 'primevue/toast';
Vue.component('Toast', Toast);
//////////////////////////////////////////////////////////////////////////
import BadgeDirective from 'primevue/badgedirective';
Vue.directive('badge',BadgeDirective);
//////////////////////////////////////////////////////////////////////////
import ConfirmationService from 'primevue/confirmationservice';
Vue.use(ConfirmationService);

//////////////// IMPORT PRIMEVUE COMPONENTS //////////////////////////////
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Paginator from 'primevue/paginator';
import Skeleton from 'primevue/skeleton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import AutoComplete from "primevue/autocomplete";
import InputSwitch from 'primevue/inputswitch';
import RadioButton from 'primevue/radiobutton';
import SplitButton from 'primevue/splitbutton';
import Carousel from 'primevue/carousel';
import Chart  from "primevue/chart";
import Slider from 'primevue/slider';
import OverlayPanel from "primevue/overlaypanel";
import SelectButton from 'primevue/selectbutton';
import Timeline from 'primevue/timeline';
import InputMask from 'primevue/inputmask';
import Message from 'primevue/message';
import Tag from 'primevue/tag';
import Badge from 'primevue/badge';
import InlineMessage from 'primevue/inlinemessage';
import Avatar from 'primevue/avatar';
import ConfirmPopup from 'primevue/confirmpopup';
import MultiSelect from 'primevue/multiselect';
import Textarea from 'primevue/textarea';
import Chip from 'primevue/chip';
import Steps from "primevue/steps";
import AvatarGroup from 'primevue/avatargroup';
import Rating from 'primevue/rating';
import Knob from 'primevue/knob';
import ScrollPanel from 'primevue/scrollpanel';
import FileUpload from 'primevue/fileupload';
import TreeTable from 'primevue/treetable';
import Tree from 'primevue/tree';
// import Column from 'primevue/column';
// import Divider from 'primevue/Divider';


import InputNumber from 'primevue/inputnumber';
import Galleria from 'primevue/galleria';
import Sidebar from 'primevue/sidebar';
import Breadcrumb from 'primevue/breadcrumb';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Menu from 'primevue/menu';



Vue.component('InputNumber', InputNumber);
Vue.component('Dialog', Dialog);
Vue.component('Button', Button);
Vue.component('InputText', InputText);
Vue.component('Password', Password);
Vue.component('Paginator', Paginator);
Vue.component('Skeleton', Skeleton);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('Dropdown', Dropdown);
Vue.component('Calendar', Calendar);
Vue.component('Checkbox', Checkbox);
Vue.component('AutoComplete', AutoComplete);
Vue.component('InputSwitch', InputSwitch);
Vue.component('RadioButton', RadioButton);
Vue.component('SplitButton', SplitButton);
Vue.component('Carousel', Carousel);
Vue.component('Chart', Chart);
Vue.component('Slider', Slider);
Vue.component('OverlayPanel', OverlayPanel);
Vue.component('SelectButton', SelectButton);
Vue.component('Timeline', Timeline);
Vue.component('InputMask', InputMask);
Vue.component('Message', Message);
Vue.component('Tag', Tag);
Vue.component('Badge', Badge); 
Vue.component('InlineMessage', InlineMessage);
Vue.component('Avatar', Avatar);
Vue.component('ConfirmPopup', ConfirmPopup);
Vue.component('MultiSelect', MultiSelect);
Vue.component('Textarea', Textarea);
Vue.component('Chip', Chip);
Vue.component('Steps', Steps);
Vue.component('AvatarGroup', AvatarGroup);
Vue.component('Rating', Rating);
Vue.component('Knob', Knob);
Vue.component('ScrollPanel', ScrollPanel);
Vue.component('Galleria', Galleria);
Vue.component('Sidebar', Sidebar  );
Vue.component('FileUpload', FileUpload);
Vue.component('TreeTable', TreeTable);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Tree', Tree);
Vue.component('Accordion', Accordion);
Vue.component('AccordionTab', AccordionTab);
Vue.component('Menu', Menu);

// Vue.component('Divider', Divider);





//////////////////////////////////////////////////////////////////////////


//////////////////////////// primevue css /////////////////////////////////////////
import "primevue/resources/primevue.min.css"; //core css
import "primevue/resources/themes/saga-green/theme.css"; //theme
import "primeicons/primeicons.css"; //icons
import './customTheme.css';  //my-theme
/////////////////////////////////////////////////////////////////////