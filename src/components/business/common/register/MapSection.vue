<template>
    <div class="location-section">
        <div class="map p-0 m-0">
            <Base  :title="$t('form.location.map')"   :icon="'fa-solid fa-map-location-dot'">
                <label>
                    <span class="text-success fw-bold">{{$t('form.location.hint.label')}} : </span> 
                    <span>{{$t('form.location.hint.content')}}</span>
                    <small class="p-invalid" v-if="!form.location.coordinates.lg||!form.location.coordinates.lt"> {{$t('form.location.hint.required')}}</small>
                </label>
                <gmap-map :zoom="14" :center="center">
                    <gmap-marker
                        :position="center"
                        :draggable="true"
                        @dragstart="getLocation($event)"
                        @dragend="getLocation($event)"
                        ref="marker"
                        :icon="{ url: require('@/assets/icons/business/register/android-icon-48x48.png')}"
                        size="24"
                    >
                    </gmap-marker>
                </gmap-map>
            </Base>
        </div>
    </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue"
import { mapGetters,mapActions } from "vuex";

export default {
    props: { 
        v:{
            type:Object,
        },
    },
    components:{
        Base,
    },
    data(){
      return{
        center: { 
          lat: 30.0444,
          lng: 31.2357
        },
      }
    },
    computed:{
      ...mapGetters('business/register', {
          getForm: 'getForm',
      }),
      form: {
        get() {
            return this.getForm;
        },
        set(value) {
            this.setForm(value);
        }
      },
    },
    mounted(){
      this.locateGeoLocation();
    },
    methods:{
    ...mapActions('business/register',{
      setForm:'setForm',
    }),
      locateGeoLocation() {
        navigator.geolocation.getCurrentPosition(res => {
          this.center = {
              lat: res.coords.latitude,
              lng: res.coords.longitude
          };
          this.form.location.coordinates.lg = this.center.lng ;
          this.form.location.coordinates.lt = this.center.lat ;
        });
      },
      getLocation(event){
        this.center = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };
        console.log(this.center);
        this.form.location.coordinates.lg = this.center.lng ;
        this.form.location.coordinates.lt = this.center.lat ;
      },
    }
}
</script>
<style lang="scss" scoped>
/deep/ .pi{
    z-index: 10;
}
.location-section{
    .map{
        .vue-map-container{
            width: 100%;
            height: 250px ;
        }
    }
}
</style>