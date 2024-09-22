<template>
<div class="summery">
        <!-- ////////////////content-general///////////////// -->
        <div class="content-general">
            <!-- ////////////////diagnosis//////////// -->
             <div  v-if="diagnosis.complaints.length > 0 || diagnosis.diagnosis.length > 0"   class="diagnosis  my-2">
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('diagnosis.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" v-if="diagnosis.complaints.length>0" >
                         <div class="row">
                             <div class="col-12 d-flex justify-content-start">
                                 <h5>{{ $t('chiefComplaint.header') }}</h5>
                             </div>
                         </div>
                         <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('chiefComplaint.complaint.label')}}</th>
                                                 <th scope="col">{{$t('chiefComplaint.date.label')}}</th>
                                                 <th scope="col">{{$t('chiefComplaint.comment.label')}}</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in diagnosis.complaints" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.complaint">
                                                     {{val.complaint}}
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.date">
                                                     {{val.date}}
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.comment">
                                                     {{val.comment}}
                                                     </div>
                                                 </td>
                                                 
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>  
                     </div>
                     <div class="table-wrapper my-2" v-if="diagnosis.diagnosis.length>0" >
                         <div class="row">
                             <div class="col-12 d-flex justify-content-start">
                                 <h5>{{ $t('diagnosis.header') }}</h5>
                             </div>
                         </div>
                         <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('diagnosis.diagnose.label')}}</th>
                                                 <th scope="col">{{$t('diagnosis.type.label')}}</th>
                                                 <th scope="col">{{$t('diagnosis.condition.label')}}</th>
                                                 <th scope="col">{{$t('diagnosis.comment.label')}}</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in diagnosis.diagnosis" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.diagnose">
                                                     <span v-if="(typeof val.diagnose == 'object')">{{val.diagnose.value}}</span>
                                                     <span v-else>{{val.diagnose}}</span>
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.type">
                                                     {{val.type.value}}
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.condition">
                                                     {{val.condition.value}}
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <span>{{val.comment}}</span>
                                                 </td>
                                                 
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>    
                         
                     </div>
                      
                </Base>
             </div>
             <!-- ////////////////rx//////////// -->
             <div  v-if="rx.length>0" class="rx my-2">
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('rx.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" >
                         <div class="row ">      
                         <div class="col-12">
                             <div class="table-responsive"  >
                                 <table class="table table-sm text-center">
                                     <thead>
                                         <tr>
                                             <th scope="col">{{$t('table.thead.count')}}</th>
                                             <th scope="col">{{$t('rx.drugName.label')}}</th>
                                             <th scope="col">{{$t('rx.frequency.label')}}</th>
                                             <th scope="col">{{$t('rx.form.label')}}</th>
                                             <th scope="col">{{$t('rx.route.label')}}</th>
                                             <th scope="col">{{$t('rx.dose.label')}}</th>
                                             <th scope="col">{{$t('rx.strength.label')}}</th>
                                             <th scope="col">{{$t('rx.period.label')}}</th>
                                             <th scope="col">{{$t('rx.permission.label')}}</th>
                                             <th scope="col">{{$t('rx.note.label')}}</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         <tr v-for="(val, index) in rx" :key="index">
                                             <td class="align-middle">{{parseInt(index)+1}}</td>
                                             <td class="align-middle">
                                                 <div v-if="val.drugName">
                                                 <span v-if="(typeof val.drugName == 'object')">{{val.drugName.value}}</span>
                                                 <span v-else>{{val.drugName}}</span>
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.frequency.length">{{val.frequency.join("/")}}</div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.form">
                                                     {{val.form.value}}
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.route">
                                                     {{val.route.value}}
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.dose">
                                                 <span v-if="val.dose.selection">{{val.dose.selection.value}}</span>
                                                 /
                                                 <span v-if="val.dose.value">{{val.dose.value}}</span>
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.strength">
                                                 <span v-if="val.strength.selection">{{val.strength.selection.value}}</span>
                                                 /
                                                 <span v-if="val.strength.value">{{val.strength.value}}</span>
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.period">
                                                 <span v-if="val.period.selection">{{val.period.selection.value}}</span>
                                                 /
                                                 <span v-if="val.period.value">{{val.period.value}}</span>
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.permission">
                                                     {{val.permission.value}}
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.note">{{val.note}}</div>
                                             </td>
                                             
                                         </tr>
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                         </div>    
                       
                    </div>
                 </Base>
     
             </div>
             <!-- ////////////////medicalTest//////////// -->
             <div  v-if="medicalTest.length>0" class="medicalTest my-2">
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('medicalTest.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" >
                         <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('medicalTest.name.label')}}</th>
                                                 <th scope="col">{{$t('medicalTest.place.label')}}</th>
                                                 <th scope="col">{{$t('medicalTest.comment.label')}}</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in medicalTest" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                 <div v-if="val.name">
                                                     <span v-if="(typeof val.name == 'object')">{{val.name.value}}</span>
                                                     <span v-else>{{val.name}}</span>
                                                 </div>
                                                 </td>
                                                 <td class="align-middle">
                                                 <div v-if="val.place">
                                                     <span v-if="(typeof val.place == 'object')">{{val.place.value}}</span>
                                                     <span v-else>{{val.place}}</span>
                                                 </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <span>{{val.comment}}</span>
                                                 </td>
                                             
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>     
                     </div>
                 </Base>
             </div>
             <!-- ////////////////diet//////////// -->
             <div v-if="diet.length>0" class="diet  my-2">
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('diet.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" >
                         <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('diet.dietContent.label')}}</th>
                                                 <th scope="col">{{$t('diet.meal.label')}}</th>
                                                 <th scope="col">{{$t('diet.period.label')}}</th>
                                                 <th scope="col">{{$t('diet.comment.label')}}</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in diet" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.dietContent">
                                                         <span v-if="(typeof val.dietContent == 'object')">{{val.dietContent.value}}</span>
                                                         <span v-else>{{val.dietContent}}</span>
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.meal">
                                                         {{val.meal.value}}
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.period">
                                                         <span v-if="val.period.value">
                                                             {{val.period.value}} /
                                                         </span>
                                                         <span v-if="val.period.selection">
                                                             {{val.period.selection.value}}
                                                         </span> 
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <span>{{val.comment}}</span>
                                                 </td>
                                             
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>    
                    </div>
                 </Base>
             </div>
              <!-- ////////////////PhysicalTherapy//////////// -->
            <div  v-if="physicalTherapyData.length>0" class="PhysicalTherapy my-2">
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('physicalTherapy.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" >
                         <div class="row my-2">      
                         <div class="col-12">
                             <div class="table-responsive">
                                 <table class="table table-sm text-center">
                                     <thead>
                                         <tr>
                                             <th scope="col">{{$t('table.thead.count')}}</th>
                                             <th scope="col">{{$t('physicalTherapy.treatmentProgram.label')}}</th>
                                             <th scope="col">{{$t('physicalTherapy.period.label')}}</th>
                                             <th scope="col">{{$t('physicalTherapy.recommendedCenter.label')}}</th>
                                             <th scope="col">{{$t('physicalTherapy.comment.label')}}</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         <tr v-for="(val, index) in physicalTherapyData" :key="index">
                                             <td class="align-middle">{{parseInt(index)+1}}</td>
                                             <td class="align-middle">
                                                 <div v-if="val.treatmentProgram">
                                                     <span v-if="(typeof val.treatmentProgram == 'object')">{{val.treatmentProgram.value}}</span>
                                                     <span v-else>{{val.treatmentProgram}}</span>
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.period">
                                                     <span v-if="val.period.value">
                                                         {{val.period.value}} /
                                                     </span>
                                                     <span v-if="val.period.selection">
                                                         {{val.period.selection.value}}
                                                     </span> 
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <div v-if="val.recommendedCenter">
                                                     <span v-if="(typeof val.recommendedCenter == 'object')">{{val.recommendedCenter.value}}</span>
                                                     <span v-else>{{val.recommendedCenter}}</span>
                                                 </div>
                                             </td>
                                             <td class="align-middle">
                                                 <span>{{val.comment}}</span>
                                             </td>
                                             
                                         </tr>
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                         </div>    
                     </div>
                     
             </Base>
            </div>
             <!-- ////////////////Referral//////////// -->
             <div v-if="referral.length>0" class="referral my-2" >
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('referral.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" >
                            <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('referral.recommendation.label')}}</th>
                                                 <th scope="col">{{$t('referral.comment.label')}}</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in referral" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.recommendation">
                                                         <span v-if="(typeof val.recommendation == 'object')">{{val.recommendation.value}}</span>
                                                         <span v-else>{{val.recommendation}}</span>
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <span>{{val.comment}}</span>
                                                 </td>
                                               
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>    
                     </div>
                 </Base>
     
             </div>
             <!-- ////////////////Surgery//////////// -->
             <div  v-if="surgery.length>0"  class="surgery  my-2">
                 <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('surgery.header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2" >
                         <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('surgery.name.label')}}</th>
                                                 <th scope="col">{{$t('surgery.place.label')}}</th>
                                                 <th scope="col">{{$t('surgery.requirements.label')}}</th>
                                                 <th scope="col">{{$t('surgery.comment.label')}}</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in surgery" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.name">
                                                         <span v-if="(typeof val.name == 'object')">{{val.name.value}}</span>
                                                         <span v-else>{{val.name}}</span>
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.place">
                                                         <span v-if="(typeof val.place == 'object')">{{val.place.value}}</span>
                                                         <span v-else>{{val.place}}</span>
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <span>{{val.requirements}}</span>
                                                 </td>
                                                 <td class="align-middle">
                                                     <span>{{val.comment}}</span>
                                                 </td>
                                                 
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>    
                     </div>
                 </Base>
             </div>
            <!-- ////////////////form//////////// -->
            <div  v-if="form.length>0"  class="form  my-2">
             <Base>
                     <div class="row">
                         <div class="col-12 d-flex justify-content-start text-success">
                             <h4>{{ $t('header') }}</h4>
                         </div>
                     </div>
                     <div class="table-wrapper my-2">
                            <div class="row my-2">      
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-sm text-center">
                                         <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('title.label')}} </th>
                                                 <th scope="col">{{$t('section.label')}}</th>
                                                 <th scope="col">{{$t('status.label')}}</th>
                                                 <th scope="col">{{$t('comment.label')}}</th>
                                                
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr v-for="(val, index) in form" :key="index">
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.title">
                                                         <span>{{val.title}}</span> 
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.section">
                                                         <span>{{val.section.value}}</span>  
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.status">
                                                         <span>{{val.status.value}}</span>    
                                                     </div> 
                                                 </td>
                                              
                                                 <td class="align-middle">
                                                     <div v-if="val.comment">
                                                         <span>{{val.comment}}</span>
                                                     </div>
                                                 </td>
                                               
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>    
                     </div>
                     
     
     
             </Base> 
            </div>
        </div>
       <!-- /////////////content-pediatric/////////// -->
        <div  v-if="readData>0" class="content-pediatric">
            <!-- //////////////Growth Charts/////////////////// -->
        <div v-if="readData.growthCharts.length>0"  class="growth-charts my-2">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-start text-success">
                    <h4>{{ $t('Growth Charts') }}</h4>
                </div>
            </div>
            <div class="table-wrapper my-2" >
                <div class="row my-2">      
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-sm text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">{{$t('table.thead.count')}}</th>
                                        <th scope="col">{{$t('length.label')}}</th>
                                        <th scope="col">{{$t('weight.label')}}</th>
                                        <th scope="col">{{$t('head.period.label')}}</th>
                                        <th scope="col">{{$t('bmi.label')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="align-middle">{{1}}</td>
                                        
                                        <td class="align-middle">
                                            <span>
                                                {{readData.growthCharts.length}}
                                            </span>
                                        </td>
                                        <td class="align-middle">
                                            <span>
                                                {{readData.growthCharts.weight}}
                                            </span>
                                        </td>
                                        <td class="align-middle">
                                            <span>{{readData.growthCharts.head}}</span>
                                        </td>
                                        <td class="align-middle">
                                            <span>{{readData.growthCharts.bmi}}</span>
                                        </td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>    
            </div>
            
        </Base>
        </div>
        <!-- ////////////////Bilirubin Chart/// not work/////////////////// -->
       
         <div v-if="readData.bilirubinChart.length>0"  class="bilirubin-chart my-2">
            <Base>
                <div class="row">
                    <div class="col-12 d-flex justify-content-start text-success">
                        <h4>{{ $t('Bilirubin Chart') }}</h4>
                    </div>
                </div>
                <div class="table-wrapper my-2" >
                    <div class="row my-2">      
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">{{$t('table.thead.count')}}</th>
                                            <th scope="col">{{$t('serum.label')}}</th>
                                            <th scope="col">{{$t('comment.label')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="align-middle">{{1}}</td>
                                            
                                            <td class="align-middle">
                                                <span>
                                                    {{readData.bilirubinChart.serum}}
                                                </span>
                                            </td>
                                            <td class="align-middle">
                                                <span>
                                                    {{readData.bilirubinChart.comment}}
                                                </span>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
                </div>
                
            </Base>
        </div>
       <!-- //////////////feeding/////////////////// -->
       <div v-if="readData.feeding.formula.length>0 || readData.feeding.diet.length>0  || readData.feeding.breast.length>0" class="feeding my-2">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-start text-success">
                    <h4>{{ $t('formula.header') }}</h4>
                </div>
            </div>
            <div  v-if="readData.feeding.formula.length>0  "  class="">
                <div class="row">
                    <div class="col-12 d-flex justify-content-start">
                        <h5>{{ $t('formula.formula.label') }}</h5>
                    </div>
                </div>
                <div class="table-wrapper my-2">
                    <div class="row my-2">      
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">{{$t('table.thead.count')}}</th>
                                            <th scope="col">{{$t('formula.formula.label')}}</th>
                                            <th scope="col">{{$t('formula.meal.label')}}</th>
                                            <th scope="col">{{$t('formula.period.label')}}</th>
                                            <th scope="col">{{$t('formula.dose.label')}}</th>
                                            <th scope="col">{{$t('formula.comment.label')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(val, index) in readData.feeding.formula" :key="index">
                                            <td class="align-middle">{{parseInt(index)+1}}</td>
                                            <td class="align-middle">
                                                <div v-if="val.formula">
                                                    <span v-if="(typeof val.formula == 'object')">{{ val.formula.value }}</span>
                                                    <span v-else>{{ val.formula }}</span>
                                                </div>
                                            </td>
                                            <td class="align-middle">
                                                <div v-if="val.meal">
                                                    {{val.meal.value}}
                                                </div>
                                            </td>
                                            <td class="align-middle">
                                                <span v-if="val.period.value">
                                                    {{val.period.value}} /
                                                </span>
                                                <span v-if="val.period.selection">
                                                    {{val.period.selection.value}}
                                                </span> 
                                            </td>
                                            <td class="align-middle">
                                                <span v-if="val.dose.value">
                                                    {{val.dose.value}} /
                                                </span>
                                                <span v-if="val.dose.selection">
                                                {{val.dose.selection.value}}
                                                </span> 
                                            </td>
                                            <td class="align-middle">
                                                <span>{{val.comment}}</span>
                                            </td>
                                           
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
               </div>

            </div>
            <div  v-if="readData.feeding.diet.length>0  "  class="">
                <div class="row">
                    <div class="col-12 d-flex justify-content-start ">
                        <h5>{{ $t('diet.header') }}</h5>
                    </div>
                </div>
                <div class="table-wrapper my-2" >
                    <div class="row my-2">      
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">{{$t('table.thead.count')}}</th>
                                            <th scope="col">{{$t('diet.dietContent.label')}}</th>
                                            <th scope="col">{{$t('diet.meal.label')}}</th>
                                            <th scope="col">{{$t('diet.period.label')}}</th>
                                            <th scope="col">{{$t('diet.comment.label')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(val, index) in readData.feeding.diet" :key="index">
                                            <td class="align-middle">{{parseInt(index)+1}}</td>
                                            <td class="align-middle">
                                                <div v-if="val.dietContent">
                                                    <span v-if="(typeof val.dietContent == 'object')">{{val.dietContent.value}}</span>
                                                    <span v-else>{{val.dietContent}}</span>
                                                </div>
                                            </td>
                                            <td class="align-middle">
                                                <div v-if="val.meal">
                                                    {{val.meal.value}}
                                                </div>
                                            </td>
                                            <td class="align-middle">
                                                <div v-if="val.period">
                                                    <span v-if="val.period.value">
                                                        {{val.period.value}} /
                                                    </span>
                                                    <span v-if="val.period.selection">
                                                        {{val.period.selection.value}}
                                                    </span> 
                                                </div>
                                            </td>
                                            <td class="align-middle">
                                                <span>{{val.comment}}</span>
                                            </td>
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
               </div>


            </div>
            <div  v-if="readData.feeding.breast.length>0  "  class="">
                <div class="row">
                    <div class="col-12 d-flex justify-content-start ">
                        <h5>{{ $t('breast.label') }}</h5>
                    </div>
                </div>
                <div class="table-wrapper my-2" >
                    <div class="row my-2">      
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">{{$t('table.thead.count')}}</th>
                                            <th scope="col">{{$t('breast.label')}}</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="align-middle">{{1}}</td>
                                         
                                    
                                            <td class="align-middle">
                                                <span>{{readData.feeding.breast}}</span>
                                            </td>
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>     
                </div>


            </div>
          

        </Base>     
       </div>
       <!-- //////////////Vaccination/////////////////// -->
       <div  v-if="readData.vaccination.length>0"  class=" vaccination my-2">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-start text-success">
                    <h4>{{ $t('vaccinationTab') }}</h4>
                </div>
            </div>
            <div class="table-wrapper my-2" >
                <div class="row my-2">
                    <div class="col-12">
                        <div class="table-responsive">
                        <table class="table table-sm text-center">
                            <thead>
                            <tr>
                                <th scope="col">{{ $t("table.thead.count") }}</th>
                                <th scope="col">
                                {{ $t("vaccination.vaccineName.label") }}
                                </th>
                                <th scope="col">{{ $t("vaccination.tradeName.label") }}</th>
                                <th scope="col">{{ $t("vaccination.status.label") }}</th>
                                <th scope="col">{{ $t("table.thead.controls") }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(val, index) in readData.vaccination" :key="index">
                                <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                                <td class="align-middle">
                                <div v-if="val.vaccineName">
                                    {{ val.vaccineName.value }}
                                </div>
                                </td>
                                <td class="align-middle">
                                <div v-if="val.tradeName">
                                    <span v-if="typeof val.tradeName == 'object'">{{
                                    val.tradeName.value
                                    }}</span>
                                    <span v-else>{{ val.tradeName }}</span>
                                </div>
                                </td>
                                <td class="align-middle">
                                <div v-if="val.status">
                                    {{ val.status.value }}
                                </div>
                                </td>
                                <td class="align-middle">
                                <div
                                    class="d-flex justify-content-center align-items-center"
                                >
                                    <EditButton
                                    class="me-2"
                                    @edit="openEditDialog(val, index)"
                                    ></EditButton>
                                    <DeleteButton
                                    @delete="openDeleteDialog(index)"
                                    ></DeleteButton>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </Base>  
       </div>
       <!-- ////////////////physicalExam//////////// -->
       <div  v-if="readData.physicalExam.behavioral.length > 0 || readData.physicalExam.physical.length > 0"   class="physicalExam  my-2">
            <Base>
                <div class="row">
                    <div class="col-12 d-flex justify-content-start text-success">
                        <h4>{{ $t('Physical Exam') }}</h4>
                    </div>
                </div>
                <div class="table-wrapper my-2" v-if="readData.physicalExam.behavioral.length>0" >
                    <div class="row">
                        <div class="col-12 d-flex justify-content-start">
                            <h5>{{ $t('Behavioral') }}</h5>
                        </div>
                    </div>
                    <div class="row my-2">      
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-sm text-center">
                                    <thead>
                                        <tr v-for="(val, index) in readData.physicalExam.behavioral" :key="index">
                                            <th scope="col">{{val.id}}</th>
                                            <th scope="col">{{val.value}}</th>
                                            <th scope="col">{{val.checked}}</th>
                                            <th scope="col">{{val.comment}}</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="table-wrapper my-2" v-if="readData.physicalExam.physical.length>0" >
                    <div class="row">
                        <div class="col-12 d-flex justify-content-start">
                            <h5>{{ $t('physical') }}</h5>
                        </div>
                    </div>
                    <div class="row my-2">      
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-sm text-center">
                                    <thead>
                                        <tr v-for="(val, index) in readData.physicalExam.physical" :key="index">
                                            <th scope="col">{{val.id}}</th>
                                            <th scope="col">{{val.value}}</th>
                                            <th scope="col">{{val.checked}}</th>
                                            <th scope="col">{{val.comment}}</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>    
                    
                </div>
                 
           </Base>
        </div>
        </div>
        <!-- /////////////////////////////////////////// -->


        
</div>
</template>

<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/diagnosis/diagnosis.json"></i18n>
<i18n src="@/lang/mr/global/rx/rx.json"></i18n>
<i18n src="@/lang/mr/global/medical-test/medicalTest.json"></i18n>
<i18n src="@/lang/mr/global/diet/diet.json"></i18n>
<i18n src="@/lang/mr/global/physicalTherapy/physicalTherapy.json"></i18n>
<i18n src="@/lang/mr/global/referral/referral.json"></i18n>
<i18n src="@/lang/mr/global/surgery/surgery.json"></i18n>
<i18n src="@/lang/mr/global/form/form.json"></i18n>
<i18n src="@/lang/mr/pediatric/growthCharts.json"></i18n>
<i18n src="@/lang/mr/pediatric/feeding.json"></i18n>
<i18n src="@/lang/mr/pediatric/vaccination.json"></i18n>

<script>
import Base from "@/components/global/utilities/Base.vue"
import { mapGetters } from 'vuex'
export default {
    props: {
        readData:{
           type:Object,

        },
        value:{
            required:true,
            type: Array,
            default(){
                return []
            }
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components: {
        Base,
    },
    data(){
        return {
            summery: this.value,
        }
    },
    watch: {
        summery: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.summery])
            },
        }, 
    },
    methods: { },
    computed:{
        ...mapGetters("detailsGeneral/general",["getDiagnosis","getRx","getMedicalTest","getDiet","getPhysicalTherapy","getReferral","getSurgery","getForm"]),
       diagnosis: {
            get() {
                return this.getDiagnosis;
            }
       },
       rx: {
            get() {
                return this.getRx;
            }
       },
       medicalTest: {
            get() {
                return this.getMedicalTest;
            }
       },
       diet: {
            get() {
                return this.getDiet;
            }
       },
       physicalTherapyData: {
            get() {
                return this.getPhysicalTherapy;
            }
       },
       referral: {
            get() {
                return this.getReferral;
            }
       },
       surgery: {
            get() {
                return this.getSurgery;
            }
       },
       form: {
            get() {
                return this.getForm;
            }
       },
       ////////////////////////////////////
    }

};
</script>
