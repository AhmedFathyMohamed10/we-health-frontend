<template>
  <div class="container">
    <ConfirmPopup></ConfirmPopup>
    <Button @click="confirm" icon="pi pi-check" label="Confirm"></Button>
    <!-- Example with Custom Header -->
    <BaseWrapper
      :showBreadCrumb="true"
      :home="breadcrumbHome"
      :items="breadcrumbItems"
      :showToggleContent="false"
      :showFullScreen="false"
    >
    <template v-slot:header>
        <div>
          <h2 class="text-center">Hello From Custom header</h2>
        </div>
      </template>
      <div>
        Your component-specific content
      </div>
      <template v-slot:footer>
        <div>
          Your custom footer content
        </div>
      </template>
    </BaseWrapper>
    <!-- Example with Default Header -->
    <BaseWrapper
      :title="componentTitle"
      :showBreadCrumb="true"
      :home="breadcrumbHome"
      :items="breadcrumbItems"
      :showToggleContent="true"
      :showFullScreen="true"
    >
      <div>
        Your component-specific content
      </div>
      <template v-slot:footer>
        <div>
          Your custom footer content
        </div>
      </template>
    </BaseWrapper>
    <!-- Example with Default and No Actions Header -->
    <BaseWrapper
      :title="componentTitle"
      :icon="'pi pi-bars'"
      :showBreadCrumb="false"
      :showToggleContent="false"
      :showFullScreen="false"
    >
      <div>
        Your component-specific content
      </div>
      <template v-slot:footer>
        <div>
          Your custom footer content
        </div>
      </template>
    </BaseWrapper>
    <BaseWrapper>
      <div>
        Your component-specific content
      </div>
    </BaseWrapper>
    <!-- Example with Default and Base Item -->
    <BaseWrapper
      :title="componentTitle"
      :icon="'pi pi-bars'"
      :showBreadCrumb="false"
      :showToggleContent="false"
      :showFullScreen="false"
    >
    <div class="d-flex gap-3">
      <BaseItem title="Fixed Assets" icon="pi pi-book" :active="true" />

      <BaseItem title=" Charts Of Items" icon="pi pi-globe" :active="false" />
      <BaseItem title="Fixed Assets" :active="false">
        <template #icon>
          <i class="pi pi-book fs-2"></i>
        </template>
      </BaseItem>
      <BaseItem :active="false">
        <template #icon>
          <i class="pi pi-book fs-2"></i>
        </template>
        <template #title>
          Fixed Assets
        </template>
      </BaseItem>

    </div>
      <template v-slot:footer>
        <div>
          Your custom footer content
        </div>
      </template>
    </BaseWrapper>   

<!-- 
    <TreeTable :value="nodes" responsiveLayout="scroll">
        <Column field="name" header="Name" :expander="true"></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
    </TreeTable> -->

    <div class="table-responsive">
      <TreeTable :value="nodes2" responsiveLayout="scroll">
      <Column field="reason" header="Reason" :expander="true"></Column>
      <Column field="result" header="Result"></Column>
      <Column field="to_date" header="To Date"></Column>
      <Column field="location" header="Location"></Column>
      <Column field="from_date" header="From Date"></Column>
      <Column field="location_name" header="Location Name"></Column>
      <Column field="title" header="Title" ></Column>
      <Column field="receipt_date" header="Receipt Date" ></Column>
      <Column field="delivery_date" header="Delivery Date" ></Column>
      <Column field="code" header="Code" ></Column>
      <Column field="number" header="Number" ></Column>
      <Column field="actions" header="Actions">
        <template #body="rowData">
          <div class="d-flex gap-2">
            <Button label="+" @click="createChildRecord(rowData)" />
            <Button label="*" @click="updateRecord(rowData)" />
            <Button label="-" @click="deleteRecord(rowData)" />
          </div>
        </template>
      </Column>
  
      </TreeTable>
    </div>
  <!-- background-image: linear-gradient(180deg, #F1FAF7, #E0EBE8);     -->
  <Button @click="showSuccessToast">success Toast</Button>
  <Button @click="showInfoToast">info Toast</Button>
</div>
</template>

<script>
import  BaseWrapper  from "@/components/global/UI/base/BaseWrapper";
import  BaseItem  from "@/components/global/UI/base/BaseItem.vue";
import ConfirmPopup from 'primevue/confirmpopup';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

import toast  from '@/mixins/global/toast'
export default {
  mixins:[toast],
  components: {
    BaseWrapper,
    BaseItem,
    ConfirmPopup,
    TreeTable,
    Column,
  },
  data() {
    return {
      componentTitle: "Example Title",
      breadcrumbHome: { icon: "pi pi-home", to: "/" },
      breadcrumbItems: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
        { label: "Backpacks" },
        { label: "Item" },
      ],
      items: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
        { label: "Backpacks" },
        { label: "Item" },
      ],

      nodes2: [
        {
          "key": "0",
          "data": {
            "id": 10,
            "reason": "hkhjk",
            "result": "",
            "to_date": "2023-11-02T10:07:09+00:00",
            "location": "hgjhg",
            "from_date": "2023-11-04T10:07:09+00:00",
            "location_name": "jhgjgh"
          }
        },
        {
          "key": "1",
          "data": {
            "id": 20,
            "reason": "test",
            "result": "",
            "to_date": "2023-11-03T09:51:39+00:00",
            "location": "jkjkh",
            "from_date": "2023-11-01T09:51:39+00:00",
            "location_name": "khjk"
          },
        },
        {
          "key": "2",
          "data": {
            "id": 30,
            "reason": "jjjj",
            "result": "",
            "to_date": "2023-11-06T10:26:32+00:00",
            "location": "banh",
            "from_date": "2023-11-01T09:26:32+00:00",
            "location_name": "banha"
          },
          "children": [
            {
              "key": "2-0",
              "data": {
                "id": 1,
                "title": "title1",
                "receipt_date": "2023-11-15",
                "delivery_date": "2023-11-15"
              },
              "children": [
                {
                  "key": "2-0-0",
                  "data": {
                    "id": 1,
                    "code": "b9d2017c-aa44-473b-89f4-57032942859f",
                    "number": 11111
                  },
                },
                {
                  "key": "2-0-1",
                  "data": {
                    "id": 2,
                    "code": "5e90c93e-4abc-43eb-af6c-99204e143926",
                    "number": 2000
                  },
                }
              ]
            }
          ]
        }
      ],


      nodes:[
              {
                  "key": "0",
                  "data":{
                      "name":"Applications",
                      "size":"100kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "0-0",
                          "data":{
                              "name":"Vue",
                              "size":"25kb",
                              "type":"Folder"
                          },
                          "children":[
                              {
                                  "key": "0-0-0",
                                  "data":{
                                      "name":"Vue.app",
                                      "size":"10kb",
                                      "type":"Application"
                                  }
                              },
                              {
                                  "key": "0-0-1",
                                  "data":{
                                      "name":"native.app",
                                      "size":"10kb",
                                      "type":"Application"
                                  }
                              },
                              {
                                  "key": "0-0-2",
                                  "data":{
                                      "name":"mobile.app",
                                      "size":"5kb",
                                      "type":"Application"
                                  }
                              }
                          ]
                      },
                      {
                          "key": "0-1",
                          "data":{
                              "name":"editor.app",
                              "size":"25kb",
                              "type":"Application"
                          }
                      },
                      {
                          "key": "0-2",
                          "data":{
                              "name":"settings.app",
                              "size":"50kb",
                              "type":"Application"
                          }
                      }
                  ]
              },
              {
                  "key": "1",
                  "data":{
                      "name":"Cloud",
                      "size":"20kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "1-0",
                          "data":{
                              "name":"backup-1.zip",
                              "size":"10kb",
                              "type":"Zip"
                          }
                      },
                      {
                          "key": "1-1",
                          "data":{
                              "name":"backup-2.zip",
                              "size":"10kb",
                              "type":"Zip"
                          }
                      }
                  ]
              },
              {
                  "key": "2",
                  "data": {
                      "name":"Desktop",
                      "size":"150kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "2-0",
                          "data":{
                              "name":"note-meeting.txt",
                              "size":"50kb",
                              "type":"Text"
                          }
                      },
                      {
                          "key": "2-1",
                          "data":{
                              "name":"note-todo.txt",
                              "size":"100kb",
                              "type":"Text"
                          }
                      }
                  ]
              },
              {
                  "key": "3",
                  "data":{
                      "name":"Documents",
                      "size":"75kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "3-0",
                          "data":{
                              "name":"Work",
                              "size":"55kb",
                              "type":"Folder"
                          },
                          "children":[
                              {
                                  "key": "3-0-0",
                                  "data":{
                                      "name":"Expenses.doc",
                                      "size":"30kb",
                                      "type":"Document"
                                  }
                              },
                              {
                                  "key": "3-0-1",
                                  "data":{
                                      "name":"Resume.doc",
                                      "size":"25kb",
                                      "type":"Resume"
                                  }
                              }
                          ]
                      },
                      {
                          "key": "3-1",
                          "data":{
                              "name":"Home",
                              "size":"20kb",
                              "type":"Folder"
                          },
                          "children":[
                              {
                                  "key": "3-1-0",
                                  "data":{
                                      "name":"Invoices",
                                      "size":"20kb",
                                      "type":"Text"
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "key": "4",
                  "data": {
                      "name":"Downloads",
                      "size":"25kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "4-0",
                          "data": {
                              "name":"Spanish",
                              "size":"10kb",
                              "type":"Folder"
                          },
                          "children":[
                              {
                                  "key": "4-0-0",
                                  "data":{
                                      "name":"tutorial-a1.txt",
                                      "size":"5kb",
                                      "type":"Text"
                                  }
                              },
                              {
                                  "key": "4-0-1",
                                  "data":{
                                      "name":"tutorial-a2.txt",
                                      "size":"5kb",
                                      "type":"Text"
                                  }
                              }
                          ]
                      },
                      {
                          "key": "4-1",
                          "data":{
                              "name":"Travel",
                              "size":"15kb",
                              "type":"Text"
                          },
                          "children":[
                              {
                                  "key": "4-1-0",
                                  "data":{
                                      "name":"Hotel.pdf",
                                      "size":"10kb",
                                      "type":"PDF"
                                  }
                              },
                              {
                                  "key": "4-1-1",
                                  "data":{
                                      "name":"Flight.pdf",
                                      "size":"5kb",
                                      "type":"PDF"
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "key": "5",
                  "data": {
                      "name":"Main",
                      "size":"50kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "5-0",
                          "data":{
                              "name":"bin",
                              "size":"50kb",
                              "type":"Link"
                          }
                      },
                      {
                          "key": "5-1",
                          "data":{
                              "name":"etc",
                              "size":"100kb",
                              "type":"Link"
                          }
                      },
                      {
                          "key": "5-2",
                          "data":{
                              "name":"var",
                              "size":"100kb",
                              "type":"Link"
                          }
                      }
                  ]
              },
              {
                  "key": "6",
                  "data":{
                      "name":"Other",
                      "size":"5kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "6-0",
                          "data":{
                              "name":"todo.txt",
                              "size":"3kb",
                              "type":"Text"
                          }
                      },
                      {
                          "key": "6-1",
                          "data":{
                              "name":"logo.png",
                              "size":"2kb",
                              "type":"Picture"
                          }
                      }
                  ]
              },
              {
                  "key": "7",
                  "data":{
                      "name":"Pictures",
                      "size":"150kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "7-0",
                          "data":{
                              "name":"barcelona.jpg",
                              "size":"90kb",
                              "type":"Picture"
                          }
                      },
                      {
                          "key": "7-1",
                          "data":{
                              "name":"primevue.png",
                              "size":"30kb",
                              "type":"Picture"
                          }
                      },
                      {
                          "key": "7-2",
                          "data":{
                              "name":"prime.jpg",
                              "size":"30kb",
                              "type":"Picture"
                          }
                      }
                  ]
              },
              {
                  "key": "8",
                  "data":{
                      "name":"Videos",
                      "size":"1500kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "key": "8-0",
                          "data":{
                              "name":"primefaces.mkv",
                              "size":"1000kb",
                              "type":"Video"
                          }
                      },
                      {
                          "key": "8-1",
                          "data":{
                              "name":"intro.avi",
                              "size":"500kb",
                              "type":"Video"
                          }
                      }
                  ]
              }
      ]
    };
  },
  computed: {
    hasNestedData() {
      // Check if the first item in nodes2 has the nested data
      return this.nodes2.length > 0 && this.nodes2[0].children && this.nodes2[0].children.length > 0;
    }
  },
  methods:{
    confirm(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
        },
        reject: () => {
            this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
        }
      });
    },
    openMaximizable() {
        this.displayMaximizable = true;
    },
    closeMaximizable() {
        this.displayMaximizable = false;
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
    showSuccessToast() {
      this.successToast('Success Message','Success Message Details');
    },        
    showInfoToast() {
      this.infoToast(undefined,'Info Message Details');
    }        
  },
};
</script>

<style lang="scss">

  /deep/.p-confirm-popup{
      z-index: 1000;
  }     
</style>