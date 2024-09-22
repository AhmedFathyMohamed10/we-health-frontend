export default {
  data() {
    return {
      custodyParams: {
        url: "",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchCustody(event, url,assetsType) {
      console.log(url)
      console.log("event",event)
      try {

        let filterParams = {}
        if(assetsType == 1){

          filterParams = { pageNumber: 1, rows: 1000000, name_en: event.query, group_id: '' };
        }else if(assetsType == 2){
          filterParams = { pageNumber: 1, rows: 1000000, name_en: event.query, group: '' };
        }
        await this.$store
          .dispatch(url, 
            filterParams
          )
          .then((res) => {
            console.log(res)
            if(res.hasOwnProperty("data")){
              this.custodyParams.suggestions = [...res.data]
            }else{

              this.custodyParams.suggestions = [...res.results];
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
