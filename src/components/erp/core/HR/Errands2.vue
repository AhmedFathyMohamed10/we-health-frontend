
<template>
    <div class="Errand">
      <div class="company-wrapper my-2">
        <Base class="my-2">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-danger fw-bold my-4">RedFoxes</h1>
              <h2 class="text-center">Welcome To RedFoxes ERP System</h2>
            </div>
          </div>
        </Base>
      </div>
      <div class="search-wrapper my-2">
        <Base>
          <div class="row">
            <div class="col-12">
              <h4>{{ $t('Errand.header') }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-xxl-3">
                <div class="form-group">
                  <label class="form-label">
                    {{ $t("form.from_date.label") }}
                  </label>
                  <span
                    :class="[
                      locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                    ]"
                  >
                    <i
                      class="pi"
                      :class="[
                        isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                      ]"
                    ></i>
                    <Calendar
                      v-model="from_date"
                      dateFormat="yy-mm-dd"
                      @input="selectFromDate($event)"
                      :showTime="true"
                      @keyup.enter="search"
                      :placeholder="$t('btns.search')"
                    />
                    <!-- <InputText
                          type="text"
                          v-model="searchQuery.due_date"
                          :placeholder="$t('btns.search')"
                          @keyup.enter="search"
                        /> -->
                  </span>
                </div>
              </div>
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.to_date.label") }}
                </label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                    ]"
                  ></i>
                  <Calendar
                    v-model="to_date"
                    dateFormat="yy-mm-dd"
                    @input="selectDate($event)"
                    :showTime="true"
                    @keyup.enter="search"
                    :placeholder="$t('btns.search')"
                  />
                  <!-- <InputText
                        type="text"
                        v-model="searchQuery.due_date"
                        :placeholder="$t('btns.search')"
                        @keyup.enter="search"
                      /> -->
                </span>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-end">
              <div class="form-group">
                <button  class="btn btn-pill btn-success-gradient" @click.prevent="search">
                    <span>
                      <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>         
                    </span>
                    <span class="mx-2">{{$t('btns.search')}}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="d-flex flex-wrap">
                <div class="form-group mb-2 me-2">
                  <button class="btn btn-pill btn-success-gradient" @click="openForm" >
                    <span><i class="fa fa-plus fa-md"></i> </span>
                    <span class="mx-2">{{ $t("btns.new") }}</span>
                  </button>
                </div>
                <div class="form-group mb-2 me-2">
                  <button  class="btn btn-pill btn-secondary-gradient" @click="fetchAll" >
                    <span><i class="bi bi-arrow-clockwise"></i></span>
                    <span class="mx-2">{{ $t("btns.all") }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="table-wrapper">
        <Base>
          <div v-if="listLoading">
            <DataTable :value="[{}, {}, {}, {}]">
              <Column field="id" header="#">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="to_date" header="to_date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="from_date" header="from_date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="location_name" header="Location Name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="location" header="ِLocation">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="result" header="ِResult">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
             
            </DataTable>
          </div>
          <div class="row" v-if="columns.length > 0">



            <TreeTable :value="nodes" responsiveLayout="scroll">
              <!-- <Column field="reason" header="Reason" :expander="true"></Column>
             <Column field="result" header="Result"></Column>
             <Column field="to_date" header="To Date"></Column>
             <Column field="location" header="Location"></Column>
             <Column field="from_date" header="From Date"></Column>
             <Column field="location_name" header="Location Name"></Column>
             <Column field="title" header="Title" ></Column>
             <Column field="receipt_date" header="Receipt Date" ></Column>
             <Column field="delivery_date" header="Delivery Date" ></Column> --> 
             <Column field="id" header="ID" :expander="true"></Column>         
             <Column field="code" header="Code" ></Column>
             <Column field="number" header="Number" ></Column>
             <Column field="actions" header="Actions">
               <template #body="rowData">
                <div class="d-flex justify-content-center align-items-center">
                  <!-- <p>{{ getNodeLevel(rowData.node) }}</p> -->
                  <div v-if="getNodeLevel(rowData.node) == 0"><addCustody></addCustody></div>
                  <DetailButton
                  class="me-2"
                  @details="openDetailsDialog(rowData.node)"
                ></DetailButton>
                  <EditButton class="me-2" @edit="openUpdate(errand)"></EditButton>
                  <DeleteButton @delete="openDeleteDialogSingle(errand.code,4)"></DeleteButton>
                </div>
                 <!-- <div class="d-flex gap-2">
                   <Button label="+" @click="createChildRecord(rowData)" />
                   <Button label="*" @click="updateRecord(rowData)" />
                   <Button label="-" @click="deleteRecord(rowData)" />
                 </div> -->
               </template>
              </Column>
  
            </TreeTable>
            <!-- <TreeTable :value="nodes">
              <Column field="id" header="ID" :expander="true"></Column>
              <Column field="code" header="Code"></Column>
              <Column field="number" header="Number"></Column> -->
    <!-- <Column field="actions" header="Actions">
      <template #body="{rowData}">
        <div class="d-flex gap-2">
          <Button label="+" @click="createChildRecord(rowData)" />
          <Button label="*" @click="updateRecord(rowData)" />
          <Button label="-" @click="deleteRecord(rowData)" />
        </div>
      </template>
    </Column> -->
    <!-- <Column headerStyle="width: 8em" bodyStyle="text-align: center">
        <template #body="{rowData}">
          {{rowData}}
          <div class="d-flex justify-content-center align-items-center">
            <DetailButton
            class="me-2"
            @details="openDetailsDialog(rowData )"
          ></DetailButton>
            <EditButton class="me-2" @edit="openUpdate(nodes )"></EditButton>
            <DeleteButton @delete="openDeleteDialogSingle(errand.code,4)"></DeleteButton>
          </div>
        </template>
    </Column> -->
              <!-- <Column v-for="(column, index) in columns" :key="index" :field="column.field" :header="column.header" :expander="column.field == 'id' ? true :false "> -->
                <!-- <template v-slot="node">
                  {{ node.data }}
                  {{ getColumnValue(node.data, column.field) }}
                </template> -->
              <!-- </Column> -->
              <!-- <Column headerStyle="width: 8em" bodyStyle="text-align: center">
                <template #body="slotProps">
                  {{ slotProps }}
                    <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                    <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                </template>
            </Column> -->
              <!-- Recursive template for nested items -->
              <!-- <template #body="slotProps">
                <div v-if="slotProps.node.children && slotProps.node.children.length">
                  <TreeTable :value="slotProps.node.children" :columns="columns">
                    <Column v-for="(column, index) in columns" :key="index" :field="column.field" :header="column.header">
                      <template v-slot="node">
                        {{ getColumnValue(node.data, column.field) }}
                      </template>
                    </Column>
                  </TreeTable>
                </div>
              </template> -->
            <!-- </TreeTable> -->
            <!-- <TreeTable :value="nodes"> -->
              <!-- <Column field="data.reason" header="Reason"></Column>
              <Column field="data.result" header="Result"></Column>
              <Column field="data.to_date" header="To Date"></Column>
              <Column field="data.location" header="Location"></Column>
              <Column field="data.from_date" header="From Date"></Column>
              <Column field="data.location_name" header="Location Name"></Column> -->
              <!-- Add more columns if needed -->
              <!-- Recursive template for nested items -->
              <!-- <Column v-for="(value, key) in columns" :key="key"
              :field="value.field" :header="value.header" :expander="value.field == 'reason' ? true :false "> -->
              <!-- <template v-slot="data">
                {{ data.data[key] }}
            </template> -->
          <!-- </Column>
          <template #body="slotProps">
            <div v-if="slotProps.rowNode.children && slotProps.rowNode.children.length">
              <p :data="slotProps.rowNode.children"></p>
            </div>
          </template>
            </TreeTable> -->










            <!-- <TreeTable :value="nodes" :columns="columns">
              
              <template #body="slotProps">
                <div v-for="(column, index) in dynamicColumns" :key="index" class="p-cell-data">
                  {{ getColumnValue(slotProps.node.data, column.field) }}
                </div>
              </template>
            </TreeTable> -->
            <!-- <TreeTable :value="nodes" :columns="columns">
              <template v-slot:template="{ node }">
                <td v-for="index,column in columns" :key="index">
                  {{ node.data[column.field] }}
                </td>
      
              </template>
            </TreeTable> -->
            <!-- <TreeTable :value="nodes" :columns="columns">
              <template v-slot:body="slotProps">
                {{ slotProps.data }}
                <TableRow :props="slotProps"/>
              </template>
            </TreeTable> -->
            <!-- <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column> -->
            <!-- <TreeTable :value="nodes">
              {{  nodes[0]}}
              <Column v-for="(value, key) in nodes[0].data" :key="key"
              :field="key" :header="key" :expander="key == 'reason' ? true :false ">
              <template v-slot="data">
                {{ data.data[key] }}
            </template>
            </Column>

            </TreeTable> -->
            
              <!-- <div class="col-12">
                <div class="d-flex justify-content-between flex-wrap">
                  <div class="actions d-flex flex-wrap">
                    <div class="form-group me-2">
                      <button
                        class="btn btn-pill btn-danger-gradient"
                        @click="openDeleteDialogMultiple(4)"
                      >
                        <i class="fa fa-trash"></i>
                        {{ $t("btns.delete") }}
                      </button>
                    </div>
                   
                   
                  </div>
                  <div class="result">
                      <span>{{ $t('messages.resultsfound') }} </span> 
                      <Badge severity="success" :value="totalRecords"></Badge>
                  </div>
                </div>
  
              </div>
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-sm text-center">
                    <thead>
                      <tr>
                        <th scope="col">
                          <input
                            type="checkbox"
                            v-model="selectAll"
                            @click="selectAllRecords"
                            :binary="true"
                          />
                        </th>
                        <th scope="col">{{ $t("table.thead.count") }}</th>
                        <th scope="col">{{ $t("form.location_name.label") }}</th>
                        <th scope="col">{{ $t("form.location.label") }}</th>
                        <th scope="col">{{ $t("form.from_date.label") }}</th>
                        <th scope="col">{{ $t("form.to_date.label") }}</th>
                        <th scope="col">{{ $t("form.result.label") }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(errand, index) in errands" :key="index">
                        <td class="align-middle">
                          <input
                            type="checkbox"
                            :value="errand.code"
                            v-model="selected"
                            :binary="true"
                          />
                        </td>
                        <td class="align-middle">
                          {{ calculateTableIndexing(index) }}
                        </td>
                        <td class="align-middle fw-bold">
                          <span>{{ errand.location_name }}</span>
                        </td>
                        <td class="align-middle fw-bold">
                            <span>{{ errand.location }}</span>
                          </td>
                          <td class="align-middle fw-bold">
                            <span>{{  formateDate(errand.from_date) }}</span>
                          </td>
                        <td class="align-middle fw-bold">
                            <span>{{ formateDate(errand.to_date) }}</span>
                          </td>
                          <td class="align-middle fw-bold">
                            <span>{{ errand.result }}</span>
                          </td>
                       
                        <td class="align-middle">
                          <div class="d-flex justify-content-center align-items-center">
                            <DetailButton
                            class="me-2"
                            @details="openDetailsDialog(errand)"
                          ></DetailButton>
                            <EditButton class="me-2" @edit="openUpdate(errand)"></EditButton>
                            <DeleteButton @delete="openDeleteDialogSingle(errand.code,4)"></DeleteButton>
                          </div>
                        </td>  
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              -->
              <!-- <div class="col-12" :dir="[locale == 'ar' ? 'ltr' : '']">
                <Paginator
                  :first.sync="pagination.offset"
                  :rows.sync="pagination.rows"
                  :totalRecords="totalRecords"
                  :rowsPerPageOptions="pagination.rowsOptions"
                  @page="onPage($event)"
                ></Paginator>
              </div>  -->
          </div>
          <!-- <div v-else>
            Loading or no data message...
          </div> -->
          <!-- <div v-if="!totalRecords && !listLoading">
              <NoResults></NoResults>
          </div> -->
        </Base>
      </div>
  
      <Form v-model="form" :isLoading="upsertLoading"  :displayForm="displayForm" @close="resetForm" @cancel="resetForm" @save="upsert" :error="upsertError" :header="isUpdating?$t('dialog.header.edit'):$t('dialog.header.new')"> 
      </Form>
      <DeleteDialog
        :display="displayDeleteDialog"
        @cancel="closeDeleteDialog"
        @delete="deleteRecords"
        :isLoading="deleteLoading"
  
      />
  
      <DetailsDialog :display="displayDetailsDialog" @hide="closeDetailsDialog" :header="$t('dialog.header.details')">
        <div class="row">
          <div class="col-md-12">
              <div class="table-responsive">
                  <table class="table table-borderless text-nowrap mb-0">
                      <tbody>
                          <tr v-for="(value,key) in recordDetails" :key="key">
                              <td class="">
                                {{$t(`Errand.key.${key}`)}}
                              </td>
                              <td class="">
                                  <span v-if="!value" class="text-muted">------</span>
                                  <span v-if="key!=='status'">{{value}}</span>
                                  <div v-if="key=='status'">
                                    <span v-if="value=='1'">
                                      <Tag severity="success" :value="$t('status.active')" rounded></Tag>
                                    </span>
                                    <span v-if="value=='2'">
                                      <Tag severity="warning" :value="$t('status.suspended')" rounded></Tag>
                                    </span>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      </DetailsDialog>
     
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/hr/errands/errands.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  import DetailButton from "@/components/global/utilities/DetailButton.vue";
  import EditButton from "@/components/global/utilities/EditButton.vue"
  import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
  import Form from '@/components/erp/HR/errands/Form.vue';
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
  import { mapGetters,mapActions  } from 'vuex'
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  import addCustody from "../../HR/errands/addCustody.vue";
  import TableRow from '@/components/erp/HR/errands/TableRow.vue';
  
import { isThisMinute } from "date-fns";
  export default {
    mixins:[pagination,toast],
    components: {
      Base,
      // NoResults,
      EditButton,
      DeleteButton,
      Form,
      DeleteDialog,
      DetailsDialog,
      // TableRow,
      DetailButton,
      addCustody
    },
    data() {
      return {
        displayForm:false,
        // nodes: null,
        to_date:"",
        from_date :"",
        columns: [
        // Define your columns here
        { field: 'id', header: 'id' },
        // { field: 'result', header: 'Result' },
        // { field: 'from_date', header: 'From Date' },
        // { field: 'to_date', header: 'To Date' },
        // { field: 'location', header: 'Location' },
        // { field: 'location_name', header: 'Location Name' },
        // { field: 'title', header: 'title ' },
        // { field: 'receipt_date', header: 'receipt_date ' },
        // { field: 'delivery_date', header: 'delivery_date ' },
        { field: 'code', header: 'code ' },
        { field: 'number', header: 'number ' },
        

        


      ],
        form: {
          to_date : "",
          from_date : "",
          location_name : "",
          location : "",
          reason : "",
          result : "",
          custody : ""
        },
        isUpdating:false,
        ////////////////////
        displayDeleteDialog:false,
        codeToDelete:null,
        selected: [],
        selectAll: false,
        displayStatusDialog: false,
        statusAction: "",
        displayDetailsDialog:false,
        recordDetails:null,
        searchQuery: {
          to_date: "",
          from_date :""
        },
        isPaginating: false,
        isSearching: false,
        searching: false,
      };
    },
    computed: {

   
      
      ...mapGetters("erp/hr/errands", {
        getListResponse: "getListResponse",
        listLoading: "getListLoading",
        getListError: "getListError",
  
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
  
        getDeleteResponse: "getDeleteResponse",
        deleteLoading: "getDeleteLoading",
        getDeleteError: "getDeleteError",
  
      }),
      listResponse() {
        return this.getListResponse;
      },
      errands() {
        if(this.listResponse)
         return this.listResponse.root;
        else return {};
      },
      totalRecords() {
        if(this.listResponse)
          return this.listResponse.count;
        else return 0
      },
      upsertResponse: {
        get() {
          return this.getUpsertResponse;
        },
        set(value) {
          this.setUpsertResponse(value);
        },
      },
      upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
      
      deleteResponse: {
        get() {
          return this.getDeleteResponse;
        },
        set(value) {
          this.setDeleteResponse(value);
        },
      },
      deleteError: {
        get() {
          return this.getDeleteError;
        },
        set(value) {
          this.setDeleteError(value);
        },
      },
      filterParams(){
      return {
        pageNumber:this.pagination.pageNumber+1,
        rows:this.pagination.rows,
        from_date:this.isSearching?this.searchQuery.from_date : "",
        to_date:this.isSearching?this.searchQuery.to_date :""
      }
    },
    nodes(){
      return this.errands
    },
    // columns(){
    //   // console.log(this.nodes[0].data)
    //   // let dynamicColumns  =[]
    //   // if(this.nodes.length > 0){

    //   //   dynamicColumns = Object.keys(this.nodes[0].data).map((field) => ({
    //   //       field,
    //   //       header: field.charAt(0).toUpperCase() + field.slice(1),
    //   //     }));
    //   // }
    //   //   return dynamicColumns
    //   if(this.nodes.length > 0){

    //     return this.getObjectColumns(this.nodes)
    //   }
    //   return []
    // }
    // nodes(){
    //   let data = []
    //   this.errands.forEach(element => {
    //     const {title,to_date,from_date,location_name,location,result,reason,} = element
    //     let res = {title,to_date,from_date,location_name,location,result,reason}
    //     let children =  element.custodies.map(custody =>({
    //       data: custody,
    //     children: []
    //     }))
    //     let obj = {'data' : res,'children' :children}
    //     data.push(obj)
    //     // data.push({title,to_date,from_date,location_name,location,result,reason,custodies})
    //   });
    //   // for(let i = 0; i<10;i++){
    //   //   let node = {
    //   //     data:{

    //   //     }
    //   //   }

    //   // }
    //   // const results = data.map(result => ({
    //   //   data : result,
    //   //   children : result.custodies.map(custody =>({
    //   //     data: custody,
    //   //   children: []
    //   //   }))
    //   // }))

    //   return data
    // },
   
    // parentColumns(){
    //   const firstParentNode = this.nodes.find(node => node.level === 0);
    //   console.log(firstParentNode)
    //   return this.generateColumns(firstParentNode.data)
    // },
    // childColumns (){
    //   const firstChildNode = this.nodes.find(node => node.level === 1);
    //   if(firstChildNode){

    //     return this.generateColumns(firstChildNode.data)
    //   }
    //   else{
    //     return {}
    //   }
    // },
    // columns (){
    //   if (this.childColumns) {
    //     return [...this.parentColumns, ...this.childColumns.filter(col => !this.columns.find(c => c.field === col.field))];
    //   }
    //   return this.parentColumns
    // }
    },
    mounted() { 
      if (!this.errands.length > 0){
        this.list()
      }
    },
    // created() {
    //     let files = [];
    //     for(let i = 0; i < 10; i++) {
    //         let node = {
    //             key: i,
    //             data: {
    //                 name: 'Item ' + i,
    //                 size: Math.floor(Math.random() * 1000) + 1 + 'kb',
    //                 type: 'Type ' + i
    //             },
    //             children: [
    //                 {
    //                     key: i + ' - 0',
    //                     data: {
    //                         name: 'Item ' + i + ' - 0',
    //                         size: Math.floor(Math.random() * 1000) + 1 + 'kb',
    //                         type: 'Type ' + i
    //                     }
    //                 }
    //             ]
    //         };

    //         files.push(node);
    //     }

    //     this.nodes = files;
    // },

    methods: {
      getObjectColumns (obj, parentKey = '') {
  let columns = [];

  for (const key in obj) {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      columns = columns.concat(this.getObjectColumns(obj[key], currentKey));
    } else {
      columns.push({ field: currentKey, header: currentKey });
    }
  }

  return columns;
},
createChildRecord(rowData) {
          // Implement your logic to create a child record
          console.log("Create Child Record:", rowData);
        },
        updateRecord(rowData) {
          // Implement your logic to update the record
          console.log("Update Record:", rowData);
        },
        deleteRecord(rowData) {
          // Implement your logic to delete the record
          console.log("Delete Record:", rowData);
        },  
      getColumnValue(data, fieldName) {
      // Handle nested properties in the column name
      const nestedProperties = fieldName.split('.');
      let value = data;

      nestedProperties.forEach((property) => {
        value = value[property];
      });

      return value;
    },
  
      generateColumns(data) {
      return Object.keys(data).map((field) => {
        return { field, header: field.charAt(0).toUpperCase() + field.slice(1) };
      });
    },
  
      selectDate(event) {
      this.searchQuery.to_date = this.$moment(event).format("YYYY-MM-DD HH:mm:ss")
    },
    selectFromDate(event) {
      this.searchQuery.from_date = this.$moment(event).format("YYYY-MM-DD HH:mm:ss")
    },
    formateDate(date){
        let formated_date = this.$moment(date).format("YYYY-MM-DD HH:mm:ss")
        return formated_date
    },
    getNodeLevel(rowNode) {
      // Calculate the level based on the node's key
      const level = rowNode.key.split('-').length - 1;
      return level;
    },
    
      ...mapActions("erp/hr/errands",
      ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError"]),
      /////////////////////////////////////////
      selectAllRecords() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.errands) {
            this.selected.push(this.errands[i].code);
          }
        }
      },
      ////////// UPSERT ///////////////////
      openForm() {
        this.displayForm=true;
      },
      closeForm() {
        this.displayForm=false;
      },
      openUpdate(item){
        this.isUpdating=true;
        // item["role"] = item.role_id
        item["custody"] = item.custody_id
        item.to_date = this.formateDate(item.to_date)
        item.from_date = this.formateDate(item.from_date)
        console.log(item)
        this.form={...item};
        this.openForm();
      },
      resetForm(){
        // this.to_date = "",
        // this.from_date = "",
        this.form={
          to_date : "",
          from_date : "",
          location_name : "",
          location : "",
          reason : "",
          result : "",
          custody : ""
        }
        this.isUpdating =false;
        this.closeForm();
        this.upsertResponse=null;
        this.upsertError=null;
      },
      create(){
        this.$store.dispatch("erp/hr/errands/create", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          // console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      },
      update(){
       
        this.$store.dispatch("erp/hr/errands/update", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          // console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      },
      upsert() {
        if(this.isUpdating){
          this.update();
        }
        else {
          this.create();
        }
      },
      /////////// DELETE /////////////
      openDeleteDialog() {
        this.displayDeleteDialog = true;
      },
      closeDeleteDialog() {
        this.displayDeleteDialog = false;
        this.statusAction = ""
        this.selected = []
        this.selectAll = false;
      },
      openDeleteDialogSingle(code,status) {
        this.openDeleteDialog();
        this.statusAction = status;
        this.selected =[];
        this.selected.push(code);
      },
      openDeleteDialogMultiple(status) {
        if (this.selected.length) {
            this.statusAction = status;
          this.openDeleteDialog();
        } 
        else {
          this.infoToast(this.$t("toast.select.summery"),this.$t('toast.select.details'))
        }
      },
      deleteRecords() {
        this.$store.dispatch("erp/hr/errands/delete", {'selected':this.selected,'action':this.statusAction})
        .then((res) => {
          if (this.selected.length == this.pagination.rows){
            this.fetchAll()
          }
            this.closeDeleteDialog();
            this.selected=[];
            // console.log(res)
            const summery = res.statusText; 
            const details =  res.data.message;
            this.successToast(summery,details)
            // this.fetchAll()
          })
          .catch((err) => {
            // console.log(err)
            const summery = err.statusText; 
            const details =  err.data.message;
            this.errorToast(summery,details)
          })
      },
      ///////////////// DETAILS /////////////////////////////
       closeDetailsDialog(){
         this.recordDetails = null;
         this.displayDetailsDialog = false;
       },
       openDetailsDialog(record) {
        console.log(record)
        // let dateOfCreation = new Date(record.created_at);
        // record.created_at = dateOfCreation.toLocaleDateString();
        // let update_Date =  new Date(record.updated_at);
        // record.updated_at = update_Date.toLocaleDateString();
        
        // const {to_date,from_date,location_name,location,result,reason,custody_title,created_at,updated_at} = record
        // this.recordDetails = {to_date,from_date,location_name,location,result,reason,custody_title,created_at,updated_at};
        // this.displayDetailsDialog = true;
        const {id,code,number} = record.data
        this.recordDetails =  {id,code,number}
         this.displayDetailsDialog = true;
       }, 
       list() {
       this.$store.dispatch("erp/hr/errands/list", this.filterParams)
       .then(() => { 

        if (!this.isPaginating){
          this.pagination.offset = 0;
          this.pagination.pageNumber = 0;
        }
          this.isSearching = false;
          this.isPaginating= false;
       });
     },
     search(){
      this.isSearching = true;
      if(this.searchQuery.to_date == 'Invalid date'){
          this.searchQuery.to_date = ""
        }
    if(this.searchQuery.from_date == 'Invalid date'){
        this.searchQuery.from_date = ""
    }
      if (this.filterParams.from_date || this.filterParams.to_date) {
        this.filterParams.pageNumber=1;
        this.list();
      } 
      else {
        this.infoToast(this.$t("toast.search.summery"),this.$t('toast.search.details'))
        this.isSearching = false;
      }
    },

    fetchAll() {
        this.from_date = ""
        this.to_date = ""
       this.searchQuery = { from_date: "", to_date: ""};
       this.list();
    },
      onPage(event) {
        this.isPaginating= true;
        this.pagination.pageNumber = event.page;
        this.list();
      },
  
    },
  };
  </script>
  <style></style>
  
  