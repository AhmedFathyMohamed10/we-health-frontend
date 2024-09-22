import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      
      // drugNameOptions: [
      //   { english: "New York", arabic: "New York" },
      //   { english: "Rome", arabic: "Rome" },
      //   { english: "London", arabic: "London" },
      //   { english: "Istanbul", arabic: "Istanbul" },
      //   { english: "Paris", arabic: "Paris" },
      // ],

      // eyeOptions: [
      //   { english: "OS", arabic: "OS" },
      //   { english: "OD", arabic: "OD" },
      //   { english: "OU", arabic: "OU" },
      // ],

      // permissionOptions: [
      //   { en: "Replace", ar: "Replace", key: "replace" },
      //   { en: "Call Me", ar: "Call Me", key: "callMe" },
      //   { en: "Don't Replace", ar: "Don't Replace", key: "don'tReplace" },
      // ],

      // drugFormOptions: [
      //   { en: "AEROSOL", ar: "AEROSOL", key: "AEROSOL" },
      //   { en: "AEROSOL,FOAM", ar: "AEROSOL,FOAM", key: "AEROSOL,FOAM" },
      //   {
      //     en: "AEROSOL, METERED",
      //     ar: "AEROSOL, METERED",
      //     key: "AEROSOL, METERED",
      //   },
      //   {
      //     en: "AEROSOL, POWDER",
      //     ar: "AEROSOL, POWDER",
      //     key: "AEROSOL, POWDER",
      //   },
      //   { en: "AEROSOL, SPRAY", ar: "AEROSOL, SPRAY", key: "AEROSOL, SPRAY" },
      //   { en: "BAR, CHEWABLE", ar: "BAR, CHEWABLE", key: "BAR, CHEWABLE" },
      //   { en: "BEAD", ar: "BEAD", key: "BEAD" },
      //   { en: "CAPSULE", ar: "CAPSULE", key: "CAPSULE" },
      //   {
      //     en: "CAPSULE, COATED",
      //     ar: "CAPSULE, COATED",
      //     key: "CAPSULE, COATED",
      //   },
      //   {
      //     en: "CAPSULE, COATED PELLETS",
      //     ar: "CAPSULE, COATED PELLETS",
      //     key: "CAPSULE, COATED PELLETS",
      //   },
      //   {
      //     en: "CAPSULE, COATED, EXTENDED RELEASE",
      //     ar: "CAPSULE, COATED, EXTENDED RELEASE",
      //     key: "CAPSULE, COATED, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "CAPSULE, DELAYED RELEASE",
      //     ar: "CAPSULE, DELAYED RELEASE",
      //     key: "CAPSULE, DELAYED RELEASE",
      //   },
      //   {
      //     en: "CAPSULE, DELAYED RELEASE PELLETS",
      //     ar: "CAPSULE, DELAYED RELEASE PELLETS",
      //     key: "CAPSULE, DELAYED RELEASE PELLETS",
      //   },
      //   {
      //     en: "CAPSULE, EXTENDED RELEASE",
      //     ar: "CAPSULE, EXTENDED RELEASE",
      //     key: "CAPSULE, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "CAPSULE, FILM COATED, EXTENDED RELEASE",
      //     ar: "CAPSULE, FILM COATED, EXTENDED RELEASE",
      //     key: "CAPSULE, FILM COATED, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "CAPSULE, GELATIN COATED",
      //     ar: "CAPSULE, GELATIN COATED",
      //     key: "CAPSULE, GELATIN COATED",
      //   },
      //   { en: "CAPSULE, LIQUID FILLED", ar: "CAPSULE, LIQUID FILLED" , key: "CAPSULE, LIQUID FILLED"},
      //   { en: "CELLULAR SHEET", ar: "CELLULAR SHEET" , key: "CELLULAR SHEET"},
      //   { en: "CHEWABLE", ar: "CHEWABLE" , key: "CHEWABLE"},
      //   { en: "CLOTH", ar: "CLOTH" , key: "CLOTH"},
      //   { en: "CONCENTRATE", ar: "CONCENTRATE" , key: "CONCENTRATE"},
      //   { en: "CREAM", ar: "CREAM" , key: "CREAM" },
      //   { en: "CREAM, AUGMENTED", ar: "CREAM, AUGMENTED" , key: "CREAM, AUGMENTED"},
      //   { en: "CRYSTAL", ar: "CRYSTAL" , key: "CRYSTAL" },
      //   { en: "DISC", ar: "DISC" , key: "DISC"},
      //   { en: "DOUCHE", ar: "DOUCHE" , key: "DOUCHE"},
      //   { en: "DRESSING", ar: "DRESSING" , key: "DRESSING" },
      //   { en: "ELIXIR", ar: "ELIXIR" , key: "ELIXIR" },
      //   { en: "EMULSION", ar: "EMULSION" , key: "EMULSION"},
      //   { en: "ENEMA", ar: "ENEMA" , key: "ENEMA" },
      //   { en: "EXTRACT", ar: "EXTRACT" , key: "EXTRACT"},
      //   {
      //     en: "FIBER, EXTENDED RELEASE",
      //     ar: "FIBER, EXTENDED RELEASE",
      //     key: "FIBER, EXTENDED RELEASE",
      //   },
      //   { en: "FILM", ar: "FILM" , key: "FILM"},
      //   { en: "FILM, EXTENDED RELEASE", ar: "FILM, EXTENDED RELEASE" , key: "FILM, EXTENDED RELEASE"},
      //   { en: "FILM, SOLUBLE", ar: "FILM, SOLUBLE" , key: "FILM, SOLUBLE"},
      //   { en: "FOR SOLUTION", ar: "FOR SOLUTION" , key: "FOR SOLUTION"},
      //   { en: "FOR SUSPENSION", ar: "FOR SUSPENSION" , key: "FOR SUSPENSION" },
      //   {
      //     en: "FOR SUSPENSION, EXTENDED RELEASE",
      //     ar: "FOR SUSPENSION, EXTENDED RELEASE",
      //     key: "FOR SUSPENSION, EXTENDED RELEASE",
      //   },
      //   { en: "GAS", ar: "GAS" , key: "GAS"},
      //   { en: "GEL", ar: "GEL" , key: "GEL"},
      //   { en: "GEL, METERED", ar: "GEL, METERED" , key: "GEL, METERED" },
      //   { en: "GLOBULE", ar: "GLOBULE" , key: "GLOBULE" },
      //   { en: "GRANULE", ar: "GRANULE" , key: "GRANULE" },
      //   {
      //     en: "GRANULE, DELAYED RELEASE",
      //     ar: "GRANULE, DELAYED RELEASE",
      //     key: "GRANULE, DELAYED RELEASE",
      //   },
      //   { en: "GRANULE, FOR SOLUTION", ar: "GRANULE, FOR SOLUTION", key: "GRANULE, FOR SOLUTION" },
      //   {
      //     en: "GRANULE, FOR SUSPENSION",
      //     ar: "GRANULE, FOR SUSPENSION",
      //     key: "GRANULE, FOR SUSPENSION",
      //   },
      //   {
      //     en: "GRANULE, FOR SUSPENSION, EXTENDED RELEASE",
      //     ar: "GRANULE, FOR SUSPENSION, EXTENDED RELEASE",
      //     key: "GRANULE, FOR SUSPENSION, EXTENDED RELEASE",
      //   },
      //   { en: "GUM, CHEWING", ar: "GUM, CHEWING", key: "GUM, CHEWING" },
      //   { en: "IMPLANT", ar: "IMPLANT" , key: "IMPLANT" },
      //   { en: "INHALANT", ar: "INHALANT", key: "INHALANT" },
      //   { en: "INJECTABLE FOAM", ar: "INJECTABLE FOAM" , key: "INJECTABLE FOAM" },
      //   { en: "INJECTABLE, LIPOSOMAL", ar: "INJECTABLE, LIPOSOMAL", key: "INJECTABLE, LIPOSOMAL" },
      //   { en: "INJECTION", ar: "INJECTION" , key: "INJECTION" },
      //   { en: "INJECTION, EMULSION", ar: "INJECTION, EMULSION", key: "INJECTION, EMULSION" },
      //   {
      //     en: "INJECTION, LIPID COMPLEX",
      //     ar: "INJECTION, LIPID COMPLEX",
      //     key: "INJECTION, LIPID COMPLEX",
      //   },
      //   {
      //     en: "INJECTION, POWDER, FOR SOLUTION",
      //     ar: "INJECTION, POWDER, FOR SOLUTION",
      //     key: "INJECTION, POWDER, FOR SOLUTION",
      //   },
      //   {
      //     en: "INJECTION, POWDER, FOR SUSPENSION",
      //     ar: "INJECTION, POWDER, FOR SUSPENSION",
      //     key: "INJECTION, POWDER, FOR SUSPENSION",
      //   },
      //   {
      //     en: "INJECTION, POWDER, FOR SUSPENSION, EXTENDED RELEASE",
      //     ar: "INJECTION, POWDER, FOR SUSPENSION, EXTENDED RELEASE",
      //     key: "INJECTION, POWDER, FOR SUSPENSION, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "INJECTION, POWDER, LYOPHILIZED, FOR LIPOSOMAL SUSPENSION",
      //     ar: "INJECTION, POWDER, LYOPHILIZED, FOR LIPOSOMAL SUSPENSION",
      //     key: "INJECTION, POWDER, LYOPHILIZED, FOR LIPOSOMAL SUSPENSION",
      //   },
      //   {
      //     en: "INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION",
      //     ar: "INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION",
      //     key: "INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION",
      //   },
      //   {
      //     en: "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION",
      //     ar: "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION",
      //     key: "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION",
      //   },
      //   {
      //     en: "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION, EXTENDED RELEASE",
      //     ar: "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION, EXTENDED RELEASE",
      //     key: "INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION, EXTENDED RELEASE",
      //   },
      //   { en: "INJECTION, SOLUTION", ar: "INJECTION, SOLUTION", key: "INJECTION, SOLUTION" },
      //   {
      //     en: "INJECTION, SOLUTION, CONCENTRATE",
      //     ar: "INJECTION, SOLUTION, CONCENTRATE",
      //     key: "INJECTION, SOLUTION, CONCENTRATE",
      //   },
      //   { en: "INJECTION, SUSPENSION", ar: "INJECTION, SUSPENSION" , key: "INJECTION, SUSPENSION"},
      //   {
      //     en: "INJECTION, SUSPENSION, EXTENDED RELEASE",
      //     ar: "INJECTION, SUSPENSION, EXTENDED RELEASE",
      //     key: "INJECTION, SUSPENSION, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "INJECTION, SUSPENSION, LIPOSOMAL",
      //     ar: "INJECTION, SUSPENSION, LIPOSOMAL",
      //     key: "INJECTION, SUSPENSION, LIPOSOMAL",
      //   },
      //   {
      //     en: "INJECTION, SUSPENSION, SONICATED",
      //     ar: "INJECTION, SUSPENSION, SONICATED",
      //     key: "INJECTION, SUSPENSION, SONICATED",
      //   },
      //   { en: "INSERT", ar: "INSERT" , key: "INSERT"},
      //   {
      //     en: "INSERT, EXTENDED RELEASE",
      //     ar: "INSERT, EXTENDED RELEASE",
      //     key: "INSERT, EXTENDED RELEASE",
      //   },
      //   { en: "INTRAUTERINE DEVICE", ar: "INTRAUTERINE DEVICE" ,key:"INTRAUTERINE DEVICE"},
      //   { en: "IRRIGANT", ar: "IRRIGANT" ,key:"IRRIGANT"},
      //   { en: "JELLY", ar: "JELLY" ,key:"JELLY"},
      //   { en: "KIT", ar: "KIT" ,key:"KIT"},
      //   { en: "LINIMENT", ar: "LINIMENT" ,key:"LINIMENT"},
      //   { en: "LIPSTICK", ar: "LIPSTICK" ,key:"LIPSTICK"},
      //   { en: "LIQUID", ar: "LIQUID" ,key:"LIQUID"},
      //   {
      //     en: "LIQUID, EXTENDED RELEASE",
      //     ar: "LIQUID, EXTENDED RELEASE",
      //     key: "LIQUID, EXTENDED RELEASE",
      //   },
      //   { en: "LOTION", ar: "LOTION" ,key:"LOTION"},
      //   { en: "LOTION, AUGMENTED", ar: "LOTION, AUGMENTED" ,key:"LOTION, AUGMENTED"},
      //   { en: "LOTION/SHAMPOO", ar: "LOTION/SHAMPOO" ,key:"LOTION/SHAMPOO"},
      //   { en: "LOZENGE", ar: "LOZENGE" ,key:"LOZENGE"},
      //   { en: "MOUTHWASH", ar: "MOUTHWASH" ,key:"MOUTHWASH"},
      //   { en: "NOT APPLICABLE", ar: "NOT APPLICABLE" ,key:"NOT APPLICABLE"},
      //   { en: "OIL", ar: "OIL" ,key:"OIL"},
      //   { en: "OINTMENT", ar: "OINTMENT" ,key:"OINTMENT"},
      //   { en: "OINTMENT, AUGMENTED", ar: "OINTMENT, AUGMENTED" ,key:"OINTMENT, AUGMENTED"},
      //   { en: "PASTE", ar: "PASTE" ,key:"PASTE"},
      //   { en: "PASTE, DENTIFRICE", ar: "PASTE, DENTIFRICE" ,key:"PASTE, DENTIFRICE"},
      //   { en: "PASTILLE", ar: "PASTILLE" ,key:"PASTILLE"},
      //   { en: "PATCH", ar: "PATCH" ,key:"PATCH"},
      //   {
      //     en: "PATCH, EXTENDED RELEASE",
      //     ar: "PATCH, EXTENDED RELEASE",
      //     key: "PATCH, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "PATCH, EXTENDED RELEASE, ELECTRICALLY CONTROLLED",
      //     ar: "PATCH, EXTENDED RELEASE, ELECTRICALLY CONTROLLED",
      //     key: "PATCH, EXTENDED RELEASE, ELECTRICALLY CONTROLLED",
      //   },
      //   { en: "PELLET", ar: "PELLET" , key: "PELLET"},
      //   { en: "PELLET, IMPLANTABLE", ar: "PELLET, IMPLANTABLE", key: "PELLET, IMPLANTABLE" },
      //   {
      //     en: "PELLETS, COATED, EXTENDED RELEASE",
      //     ar: "PELLETS, COATED, EXTENDED RELEASE",
      //     key: "PELLETS, COATED, EXTENDED RELEASE",
      //   },
      //   { en: "PILL", ar: "PILL" ,key: "PILL" },
      //   { en: "PLASTER", ar: "PLASTER" , key: "PLASTER"},
      //   { en: "POULTICE", ar: "POULTICE" ,key: "POULTICE" },
      //   { en: "POWDER", ar: "POWDER" ,key: "POWDER"},
      //   { en: "POWDER, DENTIFRICE", ar: "POWDER, DENTIFRICE" ,key: "POWDER, DENTIFRICE"},
      //   { en: "POWDER, FOR SOLUTION", ar: "POWDER, FOR SOLUTION" ,key: "POWDER, FOR SOLUTION" },
      //   { en: "POWDER, FOR SUSPENSION", ar: "POWDER, FOR SUSPENSION" ,key: "POWDER, FOR SUSPENSION"},
      //   { en: "POWDER, METERED", ar: "POWDER, METERED" ,key: "POWDER, METERED" },
      //   { en: "RING", ar: "RING" ,key: "RING"},
      //   { en: "RINSE", ar: "RINSE" ,key: "RINSE"},
      //   { en: "SALVE", ar: "SALVE" ,key: "SALVE" },
      //   { en: "SHAMPOO", ar: "SHAMPOO" ,key: "SHAMPOO"},
      //   { en: "SHAMPOO, SUSPENSION", ar: "SHAMPOO, SUSPENSION" ,key: "SHAMPOO, SUSPENSION"},
      //   { en: "SOAP", ar: "SOAP" ,key: "SOAP" },
      //   { en: "SOLUTION", ar: "SOLUTION" ,key: "SOLUTION" },
      //   { en: "SOLUTION CONCENTRATE", ar: "SOLUTION, CONCENTRATE" ,key: "SOLUTION, CONCENTRATE"},
      //   { en: "SOLUTION, FOR SLUSH", ar: "SOLUTION, FOR SLUSH" ,key: "SOLUTION, FOR SLUSH"},
      //   {
      //     en: "SOLUTION GEL FORMING / DROPS",
      //     ar: "SOLUTION, GEL FORMING / DROPS",
      //     key: "SOLUTION, GEL FORMING / DROPS",
      //   },
      //   {
      //     en: "SOLUTION GEL FORMING, EXTENDED RELEASE",
      //     ar: "SOLUTION, GEL FORMING, EXTENDED RELEASE",
      //     key: "SOLUTION, GEL FORMING, EXTENDED RELEASE",
      //   },
      //   { en: "SOLUTION/ DROPS", ar: "SOLUTION/ DROPS" ,key: "SOLUTION/ DROPS" },
      //   { en: "SPONGE", ar: "SPONGE" ,key: "SPONGE"},
      //   { en: "SPRAY", ar: "SPRAY" ,key: "SPRAY"},
      //   { en: "SPRAY, METERED", ar: "SPRAY, METERED" , key: "SPRAY, METERED"},
      //   { en: "SPRAY, SUSPENSION", ar: "SPRAY, SUSPENSION" ,key: "SPRAY, SUSPENSION"},
      //   { en: "STICK", ar: "STICK" , key: "STICK" },
      //   { en: "STRIP", ar: "STRIP" ,key: "STRIP" },
      //   { en: "SUPPOSITORY", ar: "SUPPOSITORY" ,key: "SUPPOSITORY"},
      //   {
      //     en: "SUPPOSITORY, EXTENDED RELEASE",
      //     ar: "SUPPOSITORY, EXTENDED RELEASE",
      //     key: "SUPPOSITORY, EXTENDED RELEASE",
      //   },
      //   { en: "SUSPENSION", ar: "SUSPENSION",key: "SUSPENSION" },
      //   {
      //     en: "SUSPENSION, EXTENDED RELEASE",
      //     ar: "SUSPENSION, EXTENDED RELEASE",
      //     key: "SUSPENSION, EXTENDED RELEASE",
      //   },
      //   { en: "SUSPENSION/ DROPS", ar: "SUSPENSION/ DROPS" ,key: "SUSPENSION/ DROPS"},
      //   { en: "SWAB", ar: "SWAB" ,key: "SWAB" },
      //   { en: "SYRUP", ar: "SYRUP" ,key: "SYRUP"},
      //   { en: "SYSTEM", ar: "SYSTEM" ,key: "SYSTEM"},
      //   { en: "TABLET", ar: "TABLET" , key: "TABLET" },
      //   { en: "TABLET, CHEWABLE", ar: "TABLET, CHEWABLE" , key: "TABLET, CHEWABLE" },
      //   {
      //     en: "TABLET, CHEWABLE, EXTENDED RELEASE",
      //     ar: "TABLET, CHEWABLE, EXTENDED RELEASE",
      //     key: "TABLET, CHEWABLE, EXTENDED RELEASE",
      //   },
      //   { en: "TABLET, COATED", ar: "TABLET, COATED",key: "TABLET, COATED"  },
      //   {
      //     en: "TABLET, COATED PARTICLES",
      //     ar: "TABLET, COATED PARTICLES",
      //     key: "TABLET, COATED PARTICLES",
      //   },
      //   {
      //     en: "TABLET, DELAYED RELEASE",
      //     ar: "TABLET, DELAYED RELEASE",
      //     key: "TABLET, DELAYED RELEASE",
      //   },
      //   {
      //     en: "TABLET, DELAYED RELEASE PARTICLES",
      //     ar: "TABLET, DELAYED RELEASE PARTICLES",
      //     key: "TABLET, DELAYED RELEASE PARTICLES",
      //   },
      //   { en: "TABLET, EFFERVESCENT", ar: "TABLET, EFFERVESCENT",key: "TABLET, EFFERVESCENT" },
      //   {
      //     en: "TABLET, EXTENDED RELEASE",
      //     ar: "TABLET, EXTENDED RELEASE",
      //     key: "TABLET, EXTENDED RELEASE",
      //   },
      //   { en: "TABLET, FILM COATED", ar: "TABLET, FILM COATED",key: "TABLET, FILM COATED" },
      //   {
      //     en: "TABLET, FILM COATED, EXTENDED RELEASE",
      //     ar: "TABLET, FILM COATED, EXTENDED RELEASE",
      //     key: "TABLET, FILM COATED, EXTENDED RELEASE",
      //   },
      //   { en: "TABLET, FOR SOLUTION", ar: "TABLET, FOR SOLUTION" ,key: "TABLET, FOR SOLUTION" },
      //   { en: "TABLET, FOR SUSPENSION", ar: "TABLET, FOR SUSPENSION" ,key: "TABLET, FOR SUSPENSION"},
      //   { en: "TABLET, MULTILAYER", ar: "TABLET, MULTILAYER" ,key: "TABLET, MULTILAYER"},
      //   {
      //     en: "TABLET, MULTILAYER, EXTENDED RELEASE",
      //     ar: "TABLET, MULTILAYER, EXTENDED RELEASE",
      //     key: "TABLET, MULTILAYER, EXTENDED RELEASE",
      //   },
      //   {
      //     en: "TABLET, ORALLY DISINTEGRATING",
      //     ar: "TABLET, ORALLY DISINTEGRATING",
      //     key: "TABLET, ORALLY DISINTEGRATING",
      //   },
      //   {
      //     en: "TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE",
      //     ar: "TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE",
      //     key: "TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE",
      //   },
      //   { en: "TABLET, SOLUBLE", ar: "TABLET, SOLUBLE" ,key: "TABLET, SOLUBLE"},
      //   { en: "TABLET, SUGAR COATED", ar: "TABLET, SUGAR COATED" ,key: "TABLET, SUGAR COATED"},
      //   { en: "TABLET WITH SENSOR", ar: "TABLET WITH SENSOR" ,key: "TABLET WITH SENSOR"},
      //   { en: "TAMPON", ar: "TAMPON" ,key: "TAMPON"},
      //   { en: "TAPE", ar: "TAPE" ,key: "TAPE"},
      //   { en: "TINCTURE", ar: "TINCTURE" ,key: "TINCTURE"},
      //   { en: "TROCHE", ar: "TROCHE" ,key: "TROCHE"},
      //   { en: "WAFER", ar: "WAFER" ,key: "WAFER"},
      // ],
      // periodUnitOptions: [
      //   { en: "days", ar: "days" ,key: "days"},
      //   { en: "weeks", ar: "weeks" , key: "weeks" },
      //   { en: "months", ar: "months" ,key: "months"},
      //   { en: "years", ar: "years" ,key: "years"},
      //   { en: "life time", ar: "life time" ,key: "life time"},
      // ],
      // strengthUnitOptions: [
      //   { en: "AU", ar: "AU" ,key: "AU"},
      //   { en: "Amba1U", ar: "Amba1U" ,key: "Amba1U"},
      //   { en: "BAU", ar: "BAU" ,key: "BAU"},
      //   { en: "arbU", ar: "arbU" ,key: "arbU"},
      //   { en: "CCID_50", ar: "CCID_50" ,key: "CCID_50"},
      //   { en: "CFU", ar: "CFU" ,key: "CFU"},
      //   { en: "Ci", ar: "Ci" ,key: "Ci"},
      //   { en: "d", ar: "d" ,key: "d"},
      //   { en: "DagU", ar: "DagU" ,key: "DagU"},
      //   { en: "dL", ar: "dL" ,key: "dL"},
      //   { en: "FFU", ar: "FFU" ,key: "FFU"},
      //   { en: "g", ar: "g" ,key: "g"},
      //   { en: "hp_C", ar: "hp_C" ,key: "hp_C"},
      //   { en: "kp_C", ar: "kp_C" ,key: "kp_C"},
      //   { en: "hp_M", ar: "hp_M" ,key: "hp_M"},
      //   { en: "hp_Q", ar: "hp_Q" ,key: "hp_Q"},
      //   { en: "hp_X", ar: "hp_X" ,key: "hp_X"},
      //   { en: "h", ar: "h" ,key: "h"},
      //   { en: "iU", ar: "iU" ,key: "iU"},
      //   { en: "kg", ar: "kg" ,key: "kg"},
      //   { en: "Lf", ar: "Lf" ,key: "Lf"},
      //   { en: "L", ar: "L" ,key: "L"},
      //   { en: "uCi", ar: "uCi" ,key: "uCi"},
      //   { en: "ug", ar: "ug" ,key: "ug"},
      //   { en: "uL", ar: "uL" ,key: "uL"},
      //   { en: "umol", ar: "umol" ,key: "umol"},
      //   { en: "um", ar: "um" ,key: "um"},
      //   { en: "mCi", ar: "mCi" ,key: "mCi"},
      //   { en: "meq", ar: "meq" ,key: "meq"},
      //   { en: "mg", ar: "mg" ,key: "mg"},
      //   { en: "mL", ar: "mL" ,key: "mL"},
      //   { en: "mm", ar: "mm" ,key: "mm"},
      //   { en: "mmol", ar: "mmol" ,key: "mmol"},
      //   { en: "min", ar: "min" ,key: "min"},
      //   { en: "mol", ar: "mol" ,key: "mol"},
      //   { en: "mo", ar: "mo" ,key: "mo"},
      //   { en: "ng", ar: "ng" ,key: "ng"},
      //   { en: "nmol", ar: "nmol" ,key: "nmol"},
      //   { en: "PFU", ar: "PFU" ,key: "PFU"},
      //   { en: "PNU", ar: "PNU" ,key: "PNU"},
      //   { en: "s", ar: "s" ,key: "s"},
      //   { en: "cm2", ar: "cm2" ,key: "cm2"},
      //   { en: "TCID_50", ar: "TCID_50" ,key: "TCID_50"},
      //   { en: "U", ar: "U" ,key: "U"},
      //   { en: "USP U", ar: "USP U" ,key: "USP U"},
      //   { en: "VP", ar: "VP" ,key: "VP"},
      //   { en: "wk", ar: "wk" ,key: "wk"},
      //   { en: "a", ar: "a" ,key: "a"},
      // ],
      // doseTypeOptions: [
      //   { en: "liquid", ar: "liquid" ,key: "liquid"},
      //   { en: "tablet", ar: "tablet" ,key: "tablet"},
      //   { en: "capsules", ar: "capsules" ,key: "capsules"},
      //   { en: "topical", ar: "topical" ,key: "topical"},
      //   { en: "suppositories", ar: "suppositories" ,key: "suppositories"},
      //   { en: "drops", ar: "drops" ,key: "drops"},
      //   { en: "inhalers", ar: "inhalers" ,key: "inhalers"},
      //   { en: "injections", ar: "injections" ,key: "injections"},
      //   { en: "implants", ar: "implants" ,key: "implants"},
      //   { en: "patches", ar: "patches" ,key: "patches"},
      // ],
      // routeOptions: [
      //   { en: "BUCCAL", ar: "BUCCAL" ,key: "BUCCAL"},
      //   { en: "CONJUNCTIVAL", ar: "CONJUNCTIVAL" ,key: "CONJUNCTIVAL"},
      //   { en: "CUTANEOUS", ar: "CUTANEOUS" ,key: "CUTANEOUS"},
      //   { en: "DENTAL", ar: "DENTAL" ,key: "DENTAL"},
      //   { en: "ELECTRO-OSMOSIS", ar: "ELECTRO-OSMOSIS",key: "ELECTRO-OSMOSIS" },
      //   { en: "ENDOCERVICAL", ar: "ENDOCERVICAL" ,key: "ENDOCERVICAL"},
      //   { en: "ENDOSINUSIAL", ar: "ENDOSINUSIAL" ,key: "ENDOSINUSIAL"},
      //   { en: "ENDOTRACHEAL", ar: "ENDOTRACHEAL" ,key: "ENDOTRACHEAL"},
      //   { en: "ENTERAL", ar: "ENTERAL" ,key: "ENTERAL"},
      //   { en: "EPIDURAL", ar: "EPIDURAL" ,key: "EPIDURAL"},
      //   { en: "EXTRA-AMNIOTIC", ar: "EXTRA-AMNIOTIC",key: "EXTRA-AMNIOTIC" },
      //   { en: "EXTRACORPOREAL", ar: "EXTRACORPOREAL" ,key: "EXTRACORPOREAL"},
      //   { en: "HEMODIALYSIS", ar: "HEMODIALYSIS" ,key: "HEMODIALYSIS"},
      //   { en: "INFILTRATION", ar: "INFILTRATION" ,key: "INFILTRATION"},
      //   { en: "INTERSTITIAL", ar: "INTERSTITIAL" ,key: "INTERSTITIAL"},
      //   { en: "INTRA-ABDOMINAL", ar: "INTRA-ABDOMINAL" ,key: "INTRA-ABDOMINAL"},
      //   { en: "INTRA-AMNIOTIC", ar: "INTRA-AMNIOTIC" ,key: "INTRA-AMNIOTIC"},
      //   { en: "INTRA-ARTERIAL", ar: "INTRA-ARTERIAL" ,key: "INTRA-ARTERIAL"},
      //   { en: "INTRA-ARTICULAR", ar: "INTRA-ARTICULAR" ,key: "INTRA-ARTICULAR"},
      //   { en: "INTRABILIARY", ar: "INTRABILIARY" ,key: "INTRABILIARY"},
      //   { en: "INTRABRONCHIAL", ar: "INTRABRONCHIAL" ,key: "INTRABRONCHIAL"},
      //   { en: "INTRABURSAL", ar: "INTRABURSAL" ,key: "INTRABURSAL"},
      //   { en: "INTRACAMERAL", ar: "INTRACAMERAL" ,key: "INTRACAMERAL"},
      //   { en: "INTRACANALICULAR", ar: "INTRACANALICULAR" ,key: "INTRACANALICULAR"},
      //   { en: "INTRACARDIAC", ar: "INTRACARDIAC" ,key: "INTRACARDIAC"},
      //   { en: "INTRACARTILAGINOUS", ar: "INTRACARTILAGINOUS" ,key: "INTRACARTILAGINOUS"},
      //   { en: "INTRACAUDAL", ar: "INTRACAUDAL" ,key: "INTRACAUDAL"},
      //   { en: "INTRACAVERNOUS", ar: "INTRACAVERNOUS" ,key: "INTRACAVERNOUS"},
      //   { en: "INTRACAVITARY", ar: "INTRACAVITARY" ,key: "INTRACAVITARY"},
      //   { en: "INTRACEREBRAL", ar: "INTRACEREBRAL" ,key: "INTRACEREBRAL"},
      //   { en: "INTRACISTERNAL", ar: "INTRACISTERNAL" ,key: "INTRACISTERNAL"},
      //   { en: "INTRACORNEAL", ar: "INTRACORNEAL" ,key: "INTRACORNEAL"},
      //   { en: "INTRACORONAL, DENTAL", ar: "INTRACORONAL, DENTAL" ,key: "INTRACORONAL, DENTAL"},
      //   { en: "INTRACORONARY", ar: "INTRACORONARY",key: "INTRACORONARY" },
      //   { en: "INTRACORPORUS CAVERNOSUM", ar: "INTRACORPORUS CAVERNOSUM",key: "INTRACORPORUS CAVERNOSUM"},
      //   { en: "INTRACRANIAL", ar: "INTRACRANIAL" ,key: "INTRACRANIAL"},
      //   { en: "INTRADERMAL", ar: "INTRADERMAL" ,key: "INTRADERMAL"},
      //   { en: "INTRADISCAL", ar: "INTRADISCAL" ,key: "INTRADISCAL"},
      //   { en: "INTRADUCTAL", ar: "INTRADUCTAL" ,key: "INTRADUCTAL"},
      //   { en: "INTRADUODENAL", ar: "INTRADUODENAL" ,key: "INTRADUODENAL"},
      //   { en: "INTRADURAL", ar: "INTRADURAL" ,key: "INTRADURAL"},
      //   { en: "INTRAEPICARDIAL", ar: "INTRAEPICARDIAL" ,key: "INTRAEPICARDIAL"},
      //   { en: "INTRAEPIDERMAL", ar: "INTRAEPIDERMAL" ,key: "INTRAEPIDERMAL"},
      //   { en: "INTRAESOPHAGEAL", ar: "INTRAESOPHAGEAL" ,key: "INTRAESOPHAGEAL"},
      //   { en: "INTRAGASTRIC", ar: "INTRAGASTRIC" ,key: "INTRAGASTRIC"},
      //   { en: "INTRAGINGIVAL", ar: "INTRAGINGIVAL" ,key: "INTRAGINGIVAL"},
      //   { en: "INTRAHEPATIC", ar: "INTRAHEPATIC" ,key: "INTRAHEPATIC"},
      //   { en: "INTRAILEAL", ar: "INTRAILEAL" ,key: "INTRAILEAL"},
      //   { en: "INTRALESIONAL", ar: "INTRALESIONAL" ,key: "INTRALESIONAL"},
      //   { en: "INTRALINGUAL", ar: "INTRALINGUAL" ,key: "INTRALINGUAL"},
      //   { en: "INTRALUMINAL", ar: "INTRALUMINAL" ,key: "INTRALUMINAL"},
      //   { en: "INTRALYMPHATIC", ar: "INTRALYMPHATIC" ,key: "INTRALYMPHATIC"},
      //   { en: "INTRAMAMMARY", ar: "INTRAMAMMARY" ,key: "INTRAMAMMARY"},
      //   { en: "INTRAMEDULLARY", ar: "INTRAMEDULLARY" ,key: "INTRAMEDULLARY"},
      //   { en: "INTRAMENINGEAL", ar: "INTRAMENINGEAL" ,key: "INTRAMENINGEAL"},
      //   { en: "INTRAMUSCULAR", ar: "INTRAMUSCULAR" ,key: "INTRAMUSCULAR"},
      //   { en: "INTRANODAL", ar: "INTRANODAL" ,key: "INTRANODAL"},
      //   { en: "INTRAOCULAR", ar: "INTRAOCULAR" ,key: "INTRAOCULAR"},
      //   { en: "INTRAOMENTUM", ar: "INTRAOMENTUM" ,key: "INTRAOMENTUM"},
      //   { en: "INTRAOVARIAN", ar: "INTRAOVARIAN" ,key: "INTRAOVARIAN"},
      //   { en: "INTRAPERICARDIAL", ar: "INTRAPERICARDIAL" ,key: "INTRAPERICARDIAL"},
      //   { en: "INTRAPERITONEAL", ar: "INTRAPERITONEAL" ,key: "INTRAPERITONEAL"},
      //   { en: "INTRAPLEURAL", ar: "INTRAPLEURAL" ,key: "INTRAPLEURAL"},
      //   { en: "INTRAPROSTATIC", ar: "INTRAPROSTATIC" ,key: "INTRAPROSTATIC"},
      //   { en: "INTRAPULMONARY", ar: "INTRAPULMONARY" ,key: "INTRAPULMONARY"},
      //   { en: "INTRARUMINAL", ar: "INTRARUMINAL" ,key: "INTRARUMINAL"},
      //   { en: "INTRASINAL", ar: "INTRASINAL" ,key: "INTRASINAL"},
      //   { en: "INTRASPINAL", ar: "INTRASPINAL" ,key: "INTRASPINAL"},
      //   { en: "INTRASYNOVIAL", ar: "INTRASYNOVIAL" ,key: "INTRASYNOVIAL"},
      //   { en: "INTRATENDINOUS", ar: "INTRATENDINOUS" ,key: "INTRATENDINOUS"},
      //   { en: "INTRATESTICULAR", ar: "INTRATESTICULAR" ,key: "INTRATESTICULAR"},
      //   { en: "INTRATHECAL", ar: "INTRATHECAL" ,key: "INTRATHECAL"},
      //   { en: "INTRATHORACIC", ar: "INTRATHORACIC" ,key: "INTRATHORACIC"},
      //   { en: "INTRATUBULAR", ar: "INTRATUBULAR" ,key: "INTRATUBULAR"},
      //   { en: "INTRATUMOR", ar: "INTRATUMOR" ,key: "INTRATUMOR"},
      //   { en: "INTRATYMPANIC", ar: "INTRATYMPANIC" ,key: "INTRATYMPANIC"},
      //   { en: "INTRAUTERINE", ar: "INTRAUTERINE" ,key: "INTRAUTERINE"},
      //   { en: "INTRAVASCULAR", ar: "INTRAVASCULAR" ,key: "INTRAVASCULAR"},
      //   { en: "INTRAVENOUS", ar: "INTRAVENOUS" ,key: "INTRAVENOUS"},
      //   { en: "INTRAVENTRICULAR", ar: "INTRAVENTRICULAR" ,key: "INTRAVENTRICULAR"},
      //   { en: "INTRAVESICAL", ar: "INTRAVESICAL" ,key: "INTRAVESICAL"},
      //   { en: "INTRAVITREAL", ar: "INTRAVITREAL" ,key: "INTRAVITREAL"},
      //   { en: "IONTOPHORESIS", ar: "IONTOPHORESIS" ,key: "IONTOPHORESIS"},
      //   { en: "IRRIGATION", ar: "IRRIGATION" ,key: "IRRIGATION"},
      //   { en: "LARYNGEAL", ar: "LARYNGEAL" ,key: "LARYNGEAL"},
      //   { en: "NASAL", ar: "NASAL" ,key: "NASAL"},
      //   { en: "NASOGASTRIC", ar: "NASOGASTRIC" ,key: "NASOGASTRIC"},
      //   { en: "NOT APPLICABLE", ar: "N APPLICABLE",key: "N APPLICABLE" },
      //   { en: "OCCLUSIVE DRESSING TECHNIQUE", ar: "OCCLUSIVE DRESSI,TECHNIQUE",key: "OCCLUSIVE DRESSI,TECHNIQUE" },
      //   { en: "OPHTHALMIC", ar: "OPHTHALMIC" ,key: "OPHTHALMIC"},
      //   { en: "ORAL", ar: "ORAL" ,key: "ORAL"},
      //   { en: "OROPHARYNGEAL", ar: "OROPHARYNGEAL" ,key: "OROPHARYNGEAL"},
      //   { en: "PARENTERAL", ar: "PARENTERAL" ,key: "PARENTERAL"},
      //   { en: "PERCUTANEOUS", ar: "PERCUTANEOUS" ,key: "PERCUTANEOUS"},
      //   { en: "PERIARTICULAR", ar: "PERIARTICULAR" ,key: "PERIARTICULAR"},
      //   { en: "PERIDURAL", ar: "PERIDURAL" ,key: "PERIDURAL"},
      //   { en: "PERINEURAL", ar: "PERINEURAL" ,key: "PERINEURAL"},
      //   { en: "PERIODONTAL", ar: "PERIODONTAL" ,key: "PERIODONTAL"},
      //   { en: "RECTAL", ar: "RECTAL" ,key: "RECTAL"},
      //   { en: "RESPIRATORY (INHALATION)", ar: "RESPIRATOR(INHALATION)",key: "RESPIRATOR(INHALATION)" },
      //   { en: "RETROBULBAR", ar: "RETROBULBAR" ,key: "RETROBULBAR"},
      //   { en: "SOFT TISSUE", ar: "SO TISSUE" ,key: "SOFT TISSUE"},
      //   { en: "SUBARACHNOID", ar: "SUBARACHNOID" ,key: "SUBARACHNOID"},
      //   { en: "SUBCONJUNCTIVAL", ar: "SUBCONJUNCTIVAL" ,key: "SUBCONJUNCTIVAL"},
      //   { en: "SUBCUTANEOUS", ar: "SUBCUTANEOUS" ,key: "SUBCUTANEOUS"},
      //   { en: "SUBGINGIVAL", ar: "SUBGINGIVAL" ,key: "SUBGINGIVAL"},
      //   { en: "SUBLINGUAL", ar: "SUBLINGUAL" ,key: "SUBLINGUAL"},
      //   { en: "SUBMUCOSAL", ar: "SUBMUCOSAL" ,key: "SUBMUCOSAL"},
      //   { en: "SUBRETINAL", ar: "SUBRETINAL" ,key: "SUBRETINAL"},
      //   { en: "TOPICAL", ar: "TOPICAL" ,key: "TOPICAL"},
      //   { en: "TRANSDERMAL", ar: "TRANSDERMAL" ,key: "TRANSDERMAL"},
      //   { en: "TRANSENDOCARDIAL", ar: "TRANSENDOCARDIAL" ,key: "TRANSENDOCARDIAL"},
      //   { en: "TRANSMUCOSAL", ar: "TRANSMUCOSAL" ,key: "TRANSMUCOSAL"},
      //   { en: "TRANSPLACENTAL", ar: "TRANSPLACENTAL" ,key: "TRANSPLACENTAL"},
      //   { en: "TRANSTRACHEAL", ar: "TRANSTRACHEAL" ,key: "TRANSTRACHEAL"},
      //   { en: "TRANSTYMPANIC", ar: "TRANSTYMPANIC" ,key: "TRANSTYMPANIC"},
      //   { en: "URETERAL", ar: "URETERAL" ,key: "URETERAL"},
      //   { en: "URETHRAL", ar: "URETHRAL" ,key: "URETHRAL"},
      //   { en: "VAGINAL", ar: "VAGINAL" ,key: "VAGINAL"},
      // ],
      
      staticTemplate: [
        {
          drugName: {
            selection: { english: "New York", arabic: "New York" },
            manualInsertion: "",
          },
          frequency: ["3 Times", "Day", "After", "Meals"],
          form:"AEROSOL",
          route:"DENTAL",
          strength: {
            selection:"Amba1U" ,
            value: "5",
          },
          dose: {
            selection:"liquid",
            value: "5",
          },
          period: {
            selection:"weeks",
            value: "5",
          },
          permission:"replace",
          note: "Test Test Test Test ",
        },
        {
          drugName: {
            selection: { english: "New York", arabic: "New York" },
            manualInsertion: "",
          },
          frequency: ["3 Times", "Day", "After", "Meals"],
          form:"AEROSOL",
          route:"DENTAL",
          strength: {
            selection:"Amba1U" ,
            value: "5",
          },
          dose: {
            selection:"liquid",
            value: "5",
          },
          period: {
            selection:"weeks",
            value: "5",
          },
          permission:"replace",
          note: "Test Test Test Test ",
        },
      ],

      frequencyOptions:{
          en: [
          {
            name: "1 Time",
            value: "1 Time",
            children: [
              {
                name: "Day",
                value: "Day",
                children: [
                  {
                    name: "Before",
                    value: "Before",
                    children: [
                      { name: "Breakfast", value: "Breakfast" },
                      { name: "Dinner", value: "Dinner" },
                      { name: "Lunch", value: "Lunch" },
                      { name: "Sleep", value: "Sleep" },
                    ],
                  },
                  {
                    name: "After",
                    value: "After",
                    children: [
                      { name: "Breakfast", value: "Breakfast" },
                      { name: "Dinner", value: "Dinner" },
                      { name: "Lunch", value: "Lunch" },
                    ],
                  },
                  { name: "Random", value: "Random" },
                ],
              },
              {
                name: "2 Day",
                value: "2 Day",
                children: [
                  {
                    name: "Before",
                    value: "Before",
                    children: [
                      { name: "Breakfast", value: "Breakfast" },
                      { name: "Dinner", value: "Dinner" },
                      { name: "Lunch", value: "Lunch" },
                      { name: "Sleep", value: "Sleep" },
                    ],
                  },
                  {
                    name: "After",
                    value: "After",
                    children: [
                      { name: "Breakfast", value: "Breakfast" },
                      { name: "Dinner", value: "Dinner" },
                      { name: "Lunch", value: "Lunch" },
                    ],
                  },
                  { name: "Random", value: "Random" },
                ],
              },
              {
                name: "Week",
                value: "Week",
                children: [{ name: "Random", value: "Random" }],
              },
              {
                name: "Month",
                value: "Month",
                children: [{ name: "Random", value: "Random" }],
              },
              {
                name: "Every 2 Months",
                value: "Every 2 Months",
                children: [{ name: "Random", value: "Random" }],
              },
              {
                name: "Every 3 Months",
                value: "Every 3 Months",
                children: [{ name: "Random", value: "Random" }],
              },
              {
                name: "Every 6 Months",
                value: "Every 6 Months",
                children: [{ name: "Random", value: "Random" }],
              },
              {
                name: "Year",
                value: "Year",
                children: [{ name: "Random", value: "Random" }],
              },
            ],
          },
          {
            name: "2 Times",
            value: "2 Times",
            children: [
              {
                name: "Day",
                value: "Day",
                children: [
                  {
                    name: "Before",
                    value: "Before",
                    children: [
                      {
                        name: "Breakfast and Lunch",
                        value: "Breakfast and Lunch",
                      },
                      {
                        name: "Breakfast and Dinner",
                        value: "Breakfast and Dinner",
                      },
                      { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                    ],
                  },
                  {
                    name: "After",
                    value: "After",
                    children: [
                      {
                        name: "Breakfast and Lunch",
                        value: "Breakfast and Lunch",
                      },
                      {
                        name: "Breakfast and Dinner",
                        value: "Breakfast and Dinner",
                      },
                      { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                    ],
                  },
                  { name: "Morning/Night", value: "Morning/Night" },
                  { name: "Random", value: "Random" },
                ],
              },
            ],
          },
          {
            name: "3 Times",
            value: "3 Times",
            children: [
              {
                name: "Day",
                value: "Day",
                children: [
                  {
                    name: "Before",
                    value: "Before",
                    children: [{ name: "Meals", value: "Meals" }],
                  },
                  {
                    name: "After",
                    value: "After",
                    children: [{ name: "Meals", value: "Meals" }],
                  },
                  {
                    name: "Random",
                    value: "Random",
                  },
                ],
              },
            ],
          },
          {
            name: "4 Times",
            value: "4 Times",
            children: [
              {
                name: "Day",
                value: "Day",
                children: [{ name: "Random", value: "Random" }],
              },
            ],
          },
          {
            name: "5 Times",
            value: "5 Times",
            children: [
              {
                name: "Day",
                value: "Day",
                children: [{ name: "Random", value: "Random" }],
              },
            ],
          },
          {
            name: "6 Times",
            value: "6 Times",
            children: [
              {
                name: "Day",
                value: "Day",
                children: [{ name: "Random", value: "Random" }],
              },
            ],
          },
          ],
        ar: [
        {
          name: "1 Time",
          value: "1 Time",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                    { name: "Sleep", value: "Sleep" },
                  ],
                },
                {
                  name: "After",
                  value: "After",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                  ],
                },
                { name: "Random", value: "Random" },
              ],
            },
            {
              name: "2 Day",
              value: "2 Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                    { name: "Sleep", value: "Sleep" },
                  ],
                },
                {
                  name: "After",
                  value: "After",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                  ],
                },
                { name: "Random", value: "Random" },
              ],
            },
            {
              name: "Week",
              value: "Week",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Month",
              value: "Month",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Every 2 Months",
              value: "Every 2 Months",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Every 3 Months",
              value: "Every 3 Months",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Every 6 Months",
              value: "Every 6 Months",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Year",
              value: "Year",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        {
          name: "2 Times",
          value: "2 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [
                    {
                      name: "Breakfast and Lunch",
                      value: "Breakfast and Lunch",
                    },
                    {
                      name: "Breakfast and Dinner",
                      value: "Breakfast and Dinner",
                    },
                    { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                  ],
                },
                {
                  name: "After",
                  value: "After",
                  children: [
                    {
                      name: "Breakfast and Lunch",
                      value: "Breakfast and Lunch",
                    },
                    {
                      name: "Breakfast and Dinner",
                      value: "Breakfast and Dinner",
                    },
                    { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                  ],
                },
                { name: "Morning/Night", value: "Morning/Night" },
                { name: "Random", value: "Random" },
              ],
            },
          ],
        },
        {
          name: "3 Times",
          value: "3 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [{ name: "Meals", value: "Meals" }],
                },
                {
                  name: "After",
                  value: "After",
                  children: [{ name: "Meals", value: "Meals" }],
                },
                {
                  name: "Random",
                  value: "Random",
                },
              ],
            },
          ],
        },
        {
          name: "4 Times",
          value: "4 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        {
          name: "5 Times",
          value: "5 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        {
          name: "6 Times",
          value: "6 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        ],
      },

      drugNameParams:{
        url: "example/drugName",
        suggestions:[]
      }
    };
  },
  computed:{
    //////////////// search Diagnosis //////////////////
    //////////////// * Static Options //////////////////
    // ...mapGetters('ophthalmicStaticData',['medicalRx']),
    // rxOptions () {
    //   return this.$store.getters['generalStaticData/rx']['rx']
    // },
    formOptions(){
      if(this.rxOptions["form"]){
        return this.rxOptions["form"]
      }
      else return [];
    }, 
    routeOptions(){
      if(this.rxOptions["route"]){
        return this.rxOptions["route"]
      }
      else return [];
    }, 
    
    doseTypeOptions(){
      if(this.rxOptions["dose"]){
        return this.rxOptions["dose"]
      }
      else return [];
    }, 
    strengthUnitOptions(){
      if(this.rxOptions["strength"]){
        return this.rxOptions["strength"]
      }
      else return [];
    }, 
    periodUnitOptions(){
      if(this.rxOptions["period"]){
        return this.rxOptions["period"]
      }
      else return [];
    }, 
    permissionOptions(){
      if(this.rxOptions["Substituentpermission"]){
        return this.rxOptions["Substituentpermission"]
      }
      else return [];
    }, 
    // frequencyOptions(){
    //   // if(this.rxOptions["frequency"]){
    //   //   return this.rxOptions["frequency"]
    //   // }
    //   // else return [];
    //   return []
    // }, 
    eyeOptions(){
      if(this.rxOptions["eye"]){
        return this.rxOptions["eye"]
      }
      else return [];
    }, 
    
    ///////////////////////medicalRx/////////////// 
      // ...mapGetters('ophthalmicStaticData',['medicalRx']),
      ///////////////////////medicalRx///////////////////////
      // eyeOptions(){
      //   return this.$store.getters['ophthalmicStaticData/medicalRx'].eye
      // }, 
     //////////////////////////////////

  },
  methods:{
    async search(event,params) {
      console.log(event.query)
      try {
        await this.$store.dispatch('detailsGeneral/generalSuggestions/search',{url:params.url,s:event.query})
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
};
