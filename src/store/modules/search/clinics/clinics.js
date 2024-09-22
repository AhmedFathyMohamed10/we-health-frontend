export default{
    namespaced: true,
    state:{
        searchClinicsObject:{
            doctorId: "ecf849da-399d-11ed-b668-0545ac150005",
            filters:{
                
            },
            infoDoctor:{},
            booking:{},
            map:{},
            photos:{},
            rating:{},

        }

    },
    mutations:{
    'Set_Filters':(state,payload) => {
      state.searchClinicsObject.filters=JSON.parse(JSON.stringify(payload));
    },
    'Set_Info_Doctor':(state,payload) => {
      state.searchClinicsObject.infoDoctor=JSON.parse(JSON.stringify(payload));
    },
    'Set_Booking':(state,payload)=>{
        state.searchClinicsObject.booking = JSON.parse(JSON.stringify(payload));
    },
    'Set_Map':(state,payload)=>{
        state.searchClinicsObject.map = JSON.parse(JSON.stringify(payload));
    },
    'Set_Photos':(state,payload)=>{
        state.searchClinicsObject.photos = JSON.parse(JSON.stringify(payload));
    },
    'Set_Rating':(state,payload)=>{
        state.searchClinicsObject.rating = JSON.parse(JSON.stringify(payload));

    }

    },
    actions:{
        setFilters(context,payload){
            context.commit('Set_Filters',payload);
        },
        setInfoDoctor(context,payload){
            context.commit('Set_Info_Doctor',payload);
        },
        setBooking(context,payload){
            context.commit('Set_Booking',payload);
        },
        setMap(context,payload){
            context.commit('Set_Map',payload);
        },
        setPhotos(context,payload){
            context.commit('Set_photos',payload);
        },
        setRating(context,payload){
            context.commit('Set_Rating',payload);
        }

    },
    getters:{
        getSearchClinicsObject(state){
            return state.searchClinicsObject;
        },
        getFilters(state){
            return state.filters;
        },
        getInfoDoctor(state){
           return state.searchClinicsObject.infoDoctor;
        },
        getMap(state){
            return state.searchClinicsObject.map;
        },
        getPhotos(state){
            return state.searchClinicsObject.photos;
        },
        getRating(state){
            return state.searchClinicsObject.rating;
        }
    }
};