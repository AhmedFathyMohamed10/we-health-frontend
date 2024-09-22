import {destructOptionsList} from "@/helpers/utilities"
export default {
  data() {
    return {
      // vaccineNameOptions: [
      //   {
      //     en: "Dengue vaccine (DEN4CYD)",
      //     ar: "Dengue vaccine (DEN4CYD)",
      //     key: "Dengue vaccine (DEN4CYD)",
      //   },
      //   {
      //     en:"Diphtheria, tetanus, and acellular pertussis vaccine (DTaP)",
      //     ar: "Diphtheria, tetanus, and acellular pertussis vaccine (DTaP)",
      //     key: "Diphtheria, tetanus, and acellular pertussis vaccine (DTaP)",
      //   },
      //   {
      //     en: "Diphtheria, tetanus vaccine (DT)",
      //     ar: "Diphtheria, tetanus vaccine (DT)",
      //     key: "Diphtheria, tetanus vaccine (DT)",
      //   },
      //   {
      //     en:"Haemophilus influenzae type B vaccine [Hib (PRP-T),Hib (PRP-OMP)]",
      //     ar:"Haemophilus influenzae type B vaccine [Hib (PRP-T),Hib (PRP-OMP)]",
      //     key:"Haemophilus influenzae type B vaccine [Hib (PRP-T),Hib (PRP-OMP)]",
      //   },
      //   {
      //     en: "Hepatitis A vaccine (HepA)",
      //     ar: "Hepatitis A vaccine (HepA)",
      //     key: "Hepatitis A vaccine (HepA)",
      //   },
      //   {
      //     en: "Hepatitis B vaccine (HepB)",
      //     ar: "Hepatitis B vaccine (HepB)",
      //     key: "Hepatitis B vaccine (HepB)",
      //   },
      //   {
      //     en: "Human papillomavirus vaccine (HPV)",
      //     ar: "Human papillomavirus vaccine (HPV)",
      //     key: "Human papillomavirus vaccine (HPV)",
      //   },
      //   {
      //     en: "Influenza vaccine (inactivated) (IIV4)",
      //     ar: "Influenza vaccine (inactivated) (IIV4)",
      //     key: "Influenza vaccine (inactivated) (IIV4)",
      //   },
      //   {
      //     en: "Influenza vaccine (live, attenuated) (LAIV4)",
      //     ar: "Influenza vaccine (live, attenuated) (LAIV4)",
      //     key: "Influenza vaccine (live, attenuated) (LAIV4)",
      //   },
      //   {
      //     en: "Measles, mumps, and rubella vaccine (MMR)",
      //     ar: "Measles, mumps, and rubella vaccine (MMR)",
      //     key: "Measles, mumps, and rubella vaccine (MMR)",
      //   },
      //   {
      //     en:"Meningococcal serogroups A, C, W, Y vaccine [MenACWY-D,MenACWY-CRM,MenACWY-TT]",
      //     ar:"Meningococcal serogroups A, C, W, Y vaccine [MenACWY-D,MenACWY-CRM,MenACWY-TT]",
      //     key:"Meningococcal serogroups A, C, W, Y vaccine [MenACWY-D,MenACWY-CRM,MenACWY-TT]",
      //   },
      //   {
      //     en: "Meningococcal serogroup B vaccine [MenB-4C,MenB-FHbp]",
      //     ar: "Meningococcal serogroup B vaccine [MenB-4C,MenB-FHbp]",
      //     key: "Meningococcal serogroup B vaccine [MenB-4C,MenB-FHbp]",
      //   },
      //   {
      //     en: "Pneumococcal 13-valent conjugate vaccine (PCV13)",
      //     ar: "Pneumococcal 13-valent conjugate vaccine (PCV13)",
      //     key: "Pneumococcal 13-valent conjugate vaccine (PCV13)",
      //   },
      //   {
      //     en: "Pneumococcal 23-valent polysaccharide vaccine (PPSV23)",
      //     ar: "Pneumococcal 23-valent polysaccharide vaccine (PPSV23)",
      //     key: "Pneumococcal 23-valent polysaccharide vaccine (PPSV23)",
      //   },
      //   {
      //     en: "Poliovirus vaccine (inactivated) (IPV)",
      //     ar: "Poliovirus vaccine (inactivated) (IPV)",
      //     key: "Poliovirus vaccine (inactivated) (IPV)",
      //   },
      //   {
      //     en: "Rotavirus vaccine [RV1,RV5]",
      //     ar: "Rotavirus vaccine [RV1,RV5]",
      //     key: "Rotavirus vaccine [RV1,RV5]",
      //   },
      //   {
      //     en: "Tetanus, diphtheria, and acellular pertussis vaccin (Tdap)",
      //     ar: "Tetanus, diphtheria, and acellular pertussis vaccin (Tdap)",
      //     key: "Tetanus, diphtheria, and acellular pertussis vaccin (Tdap)",
      //   },
      //   {
      //     en: "Tetanus and diphtheria vaccine (Td)",
      //     ar: "Tetanus and diphtheria vaccine (Td)",
      //     key: "Tetanus and diphtheria vaccine (Td)",
      //   },
      //   {
      //     en: "Varicella vaccine (VAR)",
      //     ar: "Varicella vaccine (VAR)",
      //     key: "Varicella vaccine (VAR)",
      //   },
      //   {
      //     en:"DTaP, hepatitis B, and inactivated poliovirus vaccine (DTaP-HepB-IPV)",
      //     ar:"DTaP, hepatitis B, and inactivated poliovirus vaccine (DTaP-HepB-IPV)",
      //     key:"DTaP, hepatitis B, and inactivated poliovirus vaccine (DTaP-HepB-IPV)",
      //   },
      //   {
      //     en:"DTaP, inactivated poliovirus, and Haemophilus influenzae type B vaccine (DTaP-IPV/Hib)",
      //     ar:"DTaP, inactivated poliovirus, and Haemophilus influenzae type B vaccine (DTaP-IPV/Hib)",
      //     key:"DTaP, inactivated poliovirus, and Haemophilus influenzae type B vaccine (DTaP-IPV/Hib)",
      //   },
      //   {
      //     en: "DTaP and inactivated poliovirus vaccine (DTaP-IPV)",
      //     ar: "DTaP and inactivated poliovirus vaccine (DTaP-IPV)",
      //     key: "DTaP and inactivated poliovirus vaccine (DTaP-IPV)",
      //   },
      //   {
      //     en:"DTaP, inactivated poliovirus, Haemophilus influenzae type b, and hepatitis B vaccine DTaP-IPV-Hib-HepB)",
      //     ar:"DTaP, inactivated poliovirus, Haemophilus influenzae type b, and hepatitis B vaccine DTaP-IPV-Hib-HepB)",
      //     key:"DTaP, inactivated poliovirus, Haemophilus influenzae type b, and hepatitis B vaccine DTaP-IPV-Hib-HepB)",
      //   },
      //   {
      //     en: "Measles, mumps, rubella, and varicella vaccines (MMRV)",
      //     ar: "Measles, mumps, rubella, and varicella vaccines (MMRV)",
      //     key: "Measles, mumps, rubella, and varicella vaccines (MMRV)",
      //   },
      // // ],
      // statusOptions: [
      //   { en: "Requested", ar: "Requested", key: "requested" },
      //   { en: "Done", ar: "Done", key: "done" },
      //   { en: "Missed", ar: "Missed", key: "Missed" },
      // ],
      // tradeNamesOptions: [
      //   { english: "Dengvaxia®", arabic: "Dengvaxia®" },
      //   { english: "Daptacel®", arabic: "Daptacel®" },
      //   { english: "Infanrix®", arabic: "Infanrix®" },
      //   { english: "ActHIB®", arabic: "ActHIB®" },
      //   { english: "Hiberix®", arabic: "Hiberix®" },
      //   { english: "PedvaxHIB®", arabic: "PedvaxHIB®" },
      //   { english: "Havrix®", arabic: "Havrix®" },
      //   { english: "Vaqta®", arabic: "Vaqta®" },
      //   { english: "Engerix-B®", arabic: "Engerix-B®" },
      //   { english: "Recombivax HB®", arabic: "Recombivax HB®" },
      //   { english: "Gardasil 9®", arabic: "Gardasil 9®" },
      //   { english: "FluMist® Quadrivalent", arabic: "FluMist® Quadrivalent" },
      //   { english: "M-M-R® II", arabic: "M-M-R® II" },
      //   { english: "Menactra®", arabic: "Menactra®" },
      //   { english: "Menveo®", arabic: "Menveo®" },
      //   { english: "MenQuadfi®", arabic: "MenQuadfi®" },
      //   { english: "Bexsero®", arabic: "Bexsero®" },
      //   { english: "Trumenba®", arabic: "Trumenba®" },
      //   { english: "Prevnar 13®", arabic: "Prevnar 13®" },
      //   { english: "Pneumovax® 23", arabic: "Pneumovax® 23" },
      //   { english: "IPOL®", arabic: "IPOL®" },
      //   { english: "Rotarix®", arabic: "Rotarix®" },
      //   { english: "RotaTeq®", arabic: "RotaTeq®" },
      //   { english: "Adacel®", arabic: "Adacel®" },
      //   { english: "Boostrix®", arabic: "Boostrix®" },
      //   { english: "Tenivac®", arabic: "Tenivac®" },
      //   { english: "TDvax™", arabic: "TDvax™" },
      //   { english: "Varivax®", arabic: "Varivax®" },
      //   { english: "Pediarix®", arabic: "Pediarix®" },
      //   { english: "Pentacel®", arabic: "Pentacel®" },
      //   { english: "Kinrix®", arabic: "Kinrix®" },
      //   { english: "Quadracel®", arabic: "Quadracel®" },
      //   { english: "Vaxelis®", arabic: "Vaxelis®" },
      //   { english: "ProQuad®", arabic: "ProQuad®" },
      // ],
       vaccinationParams:{
              url: "example/vaccinationParams",
              suggestions:[]
            }
    };
  },
  computed: {
    //////////////// search Diagnosis //////////////////
    //////////////// * Static Options //////////////////
    vaccinationOptions() {
      console.log(this.$store.getters['detailsPediatric/pediatricStaticData/vaccination'])
             
      return this.$store.getters['detailsPediatric/pediatricStaticData/vaccination']['vaccination']
    },
    statusOptions(){
        return this.vaccinationOptions["Status"]
    },
    vaccineNameOptions(){
        return this.vaccinationOptions["vaccineName"]
      },
  },
   methods:{
      async search(event,params) {
        console.log(event.query)
        try {
          await this.$store.dispatch('detailsPediatric/pediatricSuggestions/search',{url:params.url,s:event.query})
          .then((res) => {
              // console.log(res)
              params.suggestions = [...res]
          });
        }
        catch (error) {
          console.error(error)
        }
      },
    }
}
// Vaccines in the Child and Adolescent Immunization Schedule
// https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html#vaccines-schedule