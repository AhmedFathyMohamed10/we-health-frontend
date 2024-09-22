<template>
  <div class="form">
    <EditDialog :display="display" @close="cancelForm" :min-width="'80'"
      :max-width="'100'" 
      :footer="false"
      :header="header"
      >
    <div class="row">
      <!-- Group -->
      <div class="col-md-5" :class="switchUnsetPaddingClassBasedOnLang()" v-if="displayGroupStructure == true">
        <Base :title="headerGroup" :icon="'fa-solid fa-layer-group'" :showBreadCrumb="false" :showToggleContent="false"
          :showFullScreen="false">
        <!-- general All -->
        <div class="all">
          <Button label="All" class="p-button-text w-100 mb-1" @click="allItems">
            <i class="pi pi-folder d-flex align-items-center m-2"></i>
            <label for="" class="form-label">{{ $t("btns.all") }}</label>
          </Button>
        </div>
        <!-- tree -->
        <!-- isSelectedNode(slotProps.node) ? 'custom-hover-style': '', -->
        <slot name="groups"></slot>
        <vue-tree-list
              @click="onClick"
              @drop="move"
              @drop-before="drop_before"
              @drop-after="drop_after"
              :model="nodes"
              class="animate__animated"
              :class="[isMovingGroup ? 'animate__shakeY' : '']"
              :default-expanded="false"
              >
              <template v-slot:leafNameDisplay="slotProps">
                <!-- {{ selectedNode }} -->
                <!--  -->
                <div
                :expanded="slotProps.expanded = true"
                :draggable="[isDrage ?slotProps.model.dragDisabled = false:slotProps.model.dragDisabled = true]"

                  class="d-flex me-5 "
                  :class="[
                    !slotProps.model.children ? 'custom-margin-left1' : 'custom-margin-left1',
                  ]"
                >
                  <div
                    class="arrow"
                    :class="[locale == 'ar' ? 'arrow-ar' : 'arrow-en']"
                    v-if="slotProps.model.parent_id && slotProps.model.pid"
                  ></div>
                  <span class="icon">
                    <i class="pi pi-folder-open me-1"> </i>
                  </span>
                  <div class="">
                    {{ slotProps.model.name_en }}
                    {{ slotProps.model.department_name }}
                    <span class="muted">#{{ slotProps.model.id }} </span>
                  </div>
                  <div
                    class="edit-button-custom-class"
                    :class="[isSelect ? '' : '']"
                  >
                    <EditButton  @edit="openEditGroup(slotProps.model)">
                    </EditButton>
                  </div>
                
                </div>
              </template>
              <!-- <span class="arrow" slot="treeNodeIcon" :class="[locale == 'ar' ? 'arrow-ar' : 'arrow-en']" 
          ></span> -->
            </vue-tree-list>
        <!-- isSelectedNode(slotProps.node) ? 'custom-hover-style': '', -->
          <!-- <Tree :value="nodes" selectionMode="single" @node-select="onNodeSelect"
          :selectionKeys.sync="selectedKey1"
          :expandedKeys="expandedKeys1"
            class="custom-tree p-treenode-selected animate__animated"
            :class="[isMovingGroup ? 'animate__shakeY' : '']">
            <template #default="slotProps">
              <div :class="[
                      'd-flex',
                      'justify-content-between',
                      'align-items-center',
                      locale == 'ar' ? 'custom-margin-right' : 'custom-margin-left',
                    ]"
                @mouseover="showIcon(slotProps.node.id)"
                @mouseout="hideIcon()"
                @click="onNodeSelect(slotProps.node)">
                <div :class="[locale == 'ar' ? 'arrow-ar' : 'arrow-en']" 
                  class="arrow" v-if="slotProps.node.parent_id"></div>
                <i class="pi pi-folder-open"></i>
                <b class="p-2 flex-grow-1">{{
                  slotProps.node.name_en
                }}</b>
                <EditButton class="" v-if="hoveredItemId === slotProps.node.id ||
                    selectedNodeKey === slotProps.node
                    " @edit="openEditGroup(slotProps.node)"></EditButton>

              </div>
            </template>
          </Tree> -->
        <!-- general Footer -->
        <template v-slot:footer>
          <div class="row">
            <div class="col-6">
              <SplitButton :label="$t('btns.add')" @click="addMainGroup" :model="items" icon="pi pi-plus"
                class="btn-success-gradient p-component w-100"></SplitButton>
            </div>
            <div class="col-6">
              <button
                    class="btn btn-pill btn-secondary-gradient w-100"
                    @click="moveGroupAction"
                  >
                    <span
                      ><i
                        class="pi"
                        :class="[isMovingGroup ? 'pi-check' : 'pi-arrows-v']"
                      ></i
                    ></span>
                    <span class="mx-2">{{
                      isMovingGroup ? $t("btns.save") : $t("btns.move")
                    }}</span>
                  </button>
            </div>
          </div>
        </template>
        </Base>
      </div>
      <!-- Items -->
      <div :class="displayGroupStructure ? 'col-md-7' : 'col-12'">

        <Base :title="headerItems" :icon="'fa-solid fa-list'" :showToggleShow="true"  @showGroup="showGroup">
        <!-- <InputSwitch v-model="displayGroupStructure" /> -->
        <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-pill btn-success-gradient" @click="addNewItem">
              <i class="fa fa-plus fa-md"></i>
              {{ $t("btns.add") }}
            </button>
            <button class="btn btn-pill btn-danger-gradient" @click="openDeleteItem">
              <i class="fa fa-trash"></i>
              {{ $t("btns.delete") }}
            </button>
            <button class="btn btn-pill btn-secondary-gradient" @click="moveItem">
              <span><i class="pi pi-arrows-v"></i></span>
              <span class="mx-2">{{
                $t("btns.move")
              }}</span>

            </button>
          </div>
        </div>
        </Base>
        <slot name="items"></slot>
        </Base>
      </div>
    </div>
    </EditDialog>
  </div>
</template>

<i18n src="@/lang/erp/accounts/finalAccount.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import SplitButton from "primevue/splitbutton";
import EditButton from "@/components/global/utilities/EditButton.vue";
import Button from "primevue/button";
import toast from "@/mixins/global/toast";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
import { mapGetters, mapActions } from "vuex";
export default {
  mixins: [toast],
  components: {
    Base,
    SplitButton,
    Button,
    EditButton,
    EditDialog,
  },
  props: {
    selectedKey:{
      type: Object,
    },
    headerGroup: {
      type: String,
      default() {
        return "";
      },
    },
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    header: {
      type: String,
    },
    headerItems: {
      type: String,
      default() {
        return "";
      },
    },
    groups: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    groups(value) {
      if (value.length > 0) {
        this.nodes = new Tree(value);
      }
      else{
        this.nodes = new Tree([]);
      }
    },
    selectedKey(value){
      if(value){
        
      this.onClick(value)
        
        
      }
    }
    
  },
  data() {
    return {
      newTree: {},
      data: new Tree([
        {
          name: "Node 1",
          id: 1,
          pid: 0,
          dragDisabled: true,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
          children: [
            {
              name: "Node 1-2",
              id: 2,
              isLeaf: true,
              pid: 1,
            },
          ],
        },
        {
          name: "Node 2",
          id: 3,
          pid: 0,
          disabled: true,
        },
        {
          name: "Node 3",
          id: 4,
          pid: 0,
        },
      ]),
      dragArry:[],
      isExpand:false,
      isDrage:false,
      nodes:new Tree(this.groups),
      isSelect: false,
      previousNodeId: null,
      displayGroupStructure: true,
      selectedNodeKey: null,
      selectedNode:this.selectedKey,
      expandedKeys: {},
      hoveredItemId: false,
      isMovingGroup: false,
      items: [
        {
          label: "Main",
          icon: "pi pi-refresh",
          command: () => {
            this.addGroup(1);
          },
        },
        {
          label: "Sub",
          icon: "pi pi-times",
          command: () => {
            this.addGroup(2);
          },
        },
      ],
    };
  },
  computed: {
    selectedKey1:{
      get() {
        // return this.expandedKeys(this.selectedNodeKey)s
        if(this.selectedNode){
        // let selectedNodeKey = this.groups.find(obj => obj.id === this.selectedNode.id);
        return this.selectedNode
        // return selectedNodeKey
      }else{
        return {}
      }
    },
    set(value) {
      this.selectedNode = value
      // Update the underlying data that the computed property depends on
      // ...
    }
     
    },
    expandedKeys1:{
      get() {
        // return this.expandedKeys(this.selectedNodeKey)s
      if(this.selectedKey){
        
        return {[this.selectedKey.parent_id]:true}
        // return selectedNodeKey
      }else{
        return {}
      }
    },
    set(value) {
      // Update the underlying data that the computed property depends on
      // ...
    }
     
    },
   
  },
  methods: {
    onDel(node) {
      console.log(node);
      node.remove();
    },

    onChangeName(params) {
      console.log(params);
    },

    onAddNode(params) {
      console.log(params);
    },
    move(node, src, target){
      console.log("drop")
      console.log(node)
      console.log(this.groups)
      // this.isMovingGroup = !this.isMovingGroup;
      let parent = this.groups.find(obj => obj.id === node.node.pid);
      console.log(parent)
      if(parent){

        this.dragArry.push({'code':node.node.code,'parent':parent.code,'case': 1})
      }
      else{
        this.dragArry.push({'code':node.node.code,'parent':"",'case': 1})
      }
      // this.$emit("moveGroup", this.isMovingGroup,this.dragArry);
      
      // this.isMovingGroup = !this.isMovingGroup;
      // this.$emit("moveGroup", this.isMovingGroup);
    },
    drop_before(node){
      console.log("drop before")
      console.log(node)
      // console.log(this.groups)
      // this.isMovingGroup = !this.isMovingGroup;
     
      let parent = this.groups.find(obj => obj.id === node.node.pid);
      console.log(parent)
      if(parent){

        this.dragArry.push({'code':node.node.code,'parent':parent.code,'case': 1})
      }
      else{
        this.dragArry.push({'code':node.node.code,'parent':"",'case': 1})
      }
      // this.$emit("moveGroup", this.isMovingGroup,this.dragArry);
      
    },
    drop_after(node, src, target){
      console.log("drop after")
      // this.isMovingGroup = !this.isMovingGroup;
      console.log(node)
      console.log(this.groups)
      // this.isMovingGroup = !this.isMovingGroup;
      let parent = this.groups.find(obj => obj.id === node.node.pid);
      console.log(parent)
      if(parent){

        this.dragArry.push({'code':node.node.code,'parent':parent.code,'case': 1})
      }
      else{
        this.dragArry.push({'code':node.node.code,'parent':"",'case': 1})
      }
      // this.$emit("moveGroup", this.isMovingGroup,this.dragArry);
      
      // this.$emit("moveGroup", this.isMovingGroup);
    },
    onClick(params) {
      console.log(params)
      if (this.previousNodeId) {
        $("#" + this.previousNodeId)
          .children()
          .next()
          .css("background", "unset"); // Revert background color
        $("#" + this.previousNodeId)
          .children()
          .next()
          .css("color", "#205072"); // Revert text color
          $("#" + this.previousNodeId).children().next().children(".vtl-node-content").children().children('.arrow').css({
        'border-bottom': '1px solid #56C596',
    'border-left': '1px solid #56C596'
      }) 
     
      $("#" + this.previousNodeId).children().next().children(".vtl-node-content").children().children('.edit-button-custom-class').css("visibility", "hidden") 
      
    
    }


      $(".vtl-node-main").css("background", "white");
      $("#" + params.id)
        .children()
        .next().css("background","linear-gradient(180deg, #56C596 0%, #2B634B 100%)")
        // .css("background-color", "#56C596");
      $("#" + params.id)
        .children()
        .next()
        .css("color", "white");
      $(".vtl-border").css("background", "transparent");
      $(".vtl-border.vtl-up").css("background", "transparent");

      // vtl-border vtl-up
      $("#" + params.id)
        .children()
        .next().children(".vtl-node-content") // Select children with class 'vtl-node-content'
    .children(".arrow") // Select children with class 'arrow'
        .css("color", "white");
      $(".vtl-border").css("background", "transparent");
      $(".vtl-border.vtl-up").css("background", "transparent");
       $("#" + params.id).children().next().children(".vtl-node-content").children().children('.arrow').css({
        'border-bottom': '1px solid white',
    'border-left': '1px solid white'
      }) 
      $("#" + params.id).children().next().children(".vtl-node-content").children().children('.edit-button-custom-class').css("visibility", "visible") 
      
      // console.log($('#' + params.id).children().children().next().next().children().children().children())
      this.previousNodeId = params.id;
      console.log("////////////////////");
      this.$emit("onNodeSelect", params);
      this.isSelect = true;
      this.selectedNode = params
      delete params.parent
      this.selectedNodeKey = params
    },

    addNode() {
      var node = new TreeNode({ name: "new node", isLeaf: false });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },
    // dragStart(e) {
    //   console.log(e)
    //   if (!(this.model.dragDisabled || this.model.disabled)) {
    //     compInOperation = this
    //     // for firefox
    //     e.dataTransfer.setData('data', 'data')
    //     e.dataTransfer.effectAllowed = 'move'
    //     return true
    //   }
    //   return false
    // },

    getNewTree() {
      var vm = this;
      function _dfs(oldNode) {
        var newNode = {};

        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }

      vm.newTree = _dfs(vm.data);
    },
    // expandNode(node) {
    //   if(node){

    //     let selectedNode = this.nodes.find(obj => obj.id === node.id);
    //     this.expandedKeys[selectedNode.key] = true;
    //     if (selectedNode.children && selectedNode.children.length) {
    //         for (let child of selectedNode.children) {
    //             this.expandNode(child);
    //         }
    //     }
    //   }
    //     },
    cancelForm() {
      this.selectedNodeKey = null;
      this.$emit("close");
    },
    onNodeSelect(node) {
      this.selectedNodeKey = node;
      this.selectedNode = node
      this.$emit("onNodeSelect",node)
    },
    showIcon(itemId) {
      this.hoveredItemId = itemId;
    },
    hideIcon() {
      this.hoveredItemId = null;
    },
    isSelectedNode(node) {
      return this.selectedNodeKey === node;
    },
    showGroup(value) {
      this.displayGroupStructure = value;
    },
    ///////////// All items ///////////////////
    allItems() {
      this.$emit("getAllItems");
    },
    //////////// Add Items //////////////////
    addNewItem() {
      this.$emit("addItem");
    },
    ////////  Delete Items //////////////////
    openDeleteItem() {
      this.$emit("deleteItem");
    },
    ////////////  Move Item ///////////////////
    moveItem() {
    console.log("moveitem")
      this.$emit("moveItem");
    },
    //////////// Move Group ////////////////
    moveGroupAction(){
      this.isMovingGroup = !this.isMovingGroup;
      this.isExpand =  !this.isExpand
      if(this.isMovingGroup){
        this.moveGroup()
      }else if(!this.isMovingGroup && this.dragArry){
        this.saveMoveGroup()
      }
    },
    moveGroup() {
      console.log("moveGroup")
      this.isMovingGroup = true;
     
      this.isDrage = true
    },
    saveMoveGroup() {
      console.log("Save moveGroup")
      this.isMovingGroup = false;
      this.isDrage = false
      this.$emit("moveGroup", this.isMovingGroup,this.dragArry);
      this.dragArry = []
    },
    /////////// Add Group //////////////
    addMainGroup() {
      this.addGroup(1);
    },
    addGroup(type) {
      this.$emit("openFormGroup", type, this.selectedNodeKey);
    },
    /////////// Edit Group //////////////
    openEditGroup(item) {
     this.$emit("openFormEditGroup", item);
    },
    /////////////////////////////////////
    switchUnsetPaddingClassBasedOnLang() {
      if (this.locale == 'ar') {
        return 'custom-padding-ar-lang'
      }
      else {
        return 'custom-padding-en-lang'
      }
    }
  },
};
</script>
<style lang="scss" scoped>

/deep/.p-tree .p-tree-container .p-treenode .p-treenode-content {
  border: 1px solid $border;
  border-radius: 3rem;
  padding: 0px;
  position: relative;
  background: $white;
  overflow: hidden;
  .arrow {
    width: 15px;
    height: 25px;
    border-bottom: 1px solid $primary;
    margin-top: -30px;
    margin-right: 5px;
  }
  .arrow-ar {
     border-right: 1px solid $primary;
     margin-right:-12px;
  }
  .arrow-en {
    border-left: 1px solid $primary;
  }
}
/deep/ .p-tree{
  background-color: blueviolet;
}
/deep/.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0rem;
  }

/deep/.p-tree {
  border: 0px solid var(--gray);
  background: $background;
  color: $secondary;
  padding: 1rem;
  border-radius: 3px;
}

/deep/.p-tree .p-treenode-children {
  padding: 0;
}

/deep/.p-treenode-label {
  width: 100%;
}

/deep/ .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
  color: $background;
  background: $success;
  .arrow {
    width: 15px;
    height: 25px;
    border-bottom: 1px solid $white;
    margin-top: -30px;
    margin-right: 5px;
  }
  .arrow-ar {
    border-right: 1px solid $white;
     margin-right:-12px;
 }
 .arrow-en {
   border-left: 1px solid $white;
 }
}
/deep/ .x-is-1.p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
  /* Your new styles for when x equals 1 and the element is hovered */
  /* For example: */
  border: 2px solid red;
}
.custom-hover-style {
    color: $background;
    background: $success;
  }
/deep/.p-tree .p-tree-container .p-treenode .p-treenode-content:focus {
  background: $success;
  color: $background;
}
// /deep/.p-tree .p-tree-container .p-treenode .p-treenode-content::selection {
//   background: $success;
//   color: $background;
// }

/deep/.p-highlight{
  background-color:$success !important;
  color: $background !important;
  .arrow {
    width: 15px !important;
    height: 25px !important;
    border-bottom: 1px solid $white !important;
    margin-top: -30px !important;
    margin-right: 5px !important;
  }
  .arrow-ar {
    border-right: 1px solid $white !important;
 }
 .arrow-en {
   border-left: 1px solid $white !important;
 }
}
/deep/.p-splitbutton {
  border-radius: 2rem;
}
/deep/.p-splitbutton .p-splitbutton-defaultbutton  {
  border-radius: 10rem;
  border: 0rem;
}
/deep/.p-splitbutton-menubutton{
  border-radius: 10rem;
  border: 0rem;
  padding: 0.5rem 1rem;
}
  .custom-margin-left {
      margin-left: -1rem;
    }
  .custom-margin-right {
    margin-right: -1rem;
  }

/deep/.p-menu {
  border-radius: 1rem !important;
  top: 42px !important;
}
</style>
<style lang="less" rel="stylesheet/less" scoped>
.vtl-border {
  height: 5px !important;
  &.vtl-up {
    margin-top: -5px !important;
    background-color: white !important;
  }
  &.vtl-bottom {
    background-color: white !important;
  }
  &.vtl-active {
    border-bottom: 3px dashed blue !important;
    /*background-color: blue;*/
  }
}
.arrow {
  width: 15px;
  height: 15px;
  border-bottom: 1px solid #56c596;
  margin-left: -9px;
  position: absolute;
}
.arrow-ar {
  border-right: 1px solid #56c596;
  margin-right:-12px;
}
.arrow-en {
  border-left: 1px solid #56c596;
}
/deep/.vtl-active {
  background-color: #56c596 !important;
  color: white !important;
}
/deep/.vtl-icon {
  margin-left: 20px;
}
/deep/:dir(rtl).vtl-icon {
  margin: 20px;
}
/deep/.vtl-node-main {
  display: flex;
  position: relative;
  align-items: center;
  padding: 5px 0 5px 1rem;
  background-color: white;
  margin: 5px;
  border-radius: 3rem;
  &.vtl-active {
    outline: 2px dashed pink;
  }
  .vtl-node-content .edit-button-custom-class {
    visibility: hidden;
  }
}

/deep/.vtl-icon-caret-down:before {
  content: "\e901";
  width: 2rem;
  height: 2rem;
  color: #205072;
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
/deep/:dir(rtl).vtl-icon-caret-left:before {
  content: "\e900";
  width: 3rem;
  height: 3rem;
  color: #205072;
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

/deep/.vtl-node-main:hover {
  background: linear-gradient(180deg, #56C596 0%, #2B634B 100%) !important;
  color: white !important;

  .vtl-node-content .edit-button-custom-class {
    visibility: visible;
  }
  .vtl-node-content .arrow {
    border-bottom: 1px solid white !important;
  }
  .arrow-ar {
    border-right: 1px solid white !important;
  }
  .arrow-en {
    border-left: 1px solid white !important;
  }
}
.custom-margin-right {
  margin-right: 40px;
}
.custom-back-ground {
  background-color: #56c596 !important;
  color: white !important;
}
/deep/.vtl-operation {
  display: none !important;
}
/deep/.vtl-icon-file:before {
  content: "";
}
/deep/.vtl-icon-folder:before {
  content: "";
  display: none !important;
}

/deep/.vtl-icon-edit:before {
  content: "";
}
/deep/.vtl-icon-folder-plus-e:before {
  content: "";
}
/deep/.vtl-icon-plus:before {
  content: "";
}
/deep/.vtl-icon-trash:before {
  content: "";
}
/deep/.vtl-node-content {
  width: 100%;
  margin-right: 15px;
}
.custom-margin-left1 {
  margin-left: -1rem;
}
.edit-button-custom-class {
  margin-left: auto;
  margin-right: -2.7rem;
}

:dir(rtl) .edit-button-custom-class {
  margin-right: auto;
  margin-left: -1.7rem;
}
.hovered-arrow {
  border-bottom: 1px solid white;
  
  border-left: 1px solid white;
}
/deep/.vtl-icon .vtl-menu-icon{
  display: none !important;
}
/deep/:dir(rtl).vtl-icon-folder{
display: none;
}

/deep/:dir(rtl) .vtl-node-main .vtl-caret{
  margin-left :-2.5rem
  }
.custom-padding-ar-lang {
  padding-left: 0px !important;
  padding-right: 1.3rem;
}
.custom-padding-en-lang {
  padding-right: 0px !important;
}
</style>