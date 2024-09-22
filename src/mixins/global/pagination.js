export default {
    data(){
        return{
          pagination: {
            offset: 0,
            rows: 10,
            pageNumber: 0,
            rowsOptions:[10,20,30]
          },
        }
    },
    methods:{
      calculateTableIndexing(index) {
        return (this.pagination.pageNumber) * this.pagination.rows + (index+1);
      },
    }
}