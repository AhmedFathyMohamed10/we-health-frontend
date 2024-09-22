export default {
  data() {
      return {
        branchTypes: [
          {
            arabic: "عيادة",
            english: "clinic",
          },
          {
            arabic: "مركز",
            english: "center",
          },
        ],
        titleTypes: [
          {
            ar: "استاذ",
            en: "professor",
          },
          {
            ar: "محاضر",
            en: "lecturer",
          },
          {
            ar: "استشاري",
            en: "consultant",
          },
          {
            ar: "اخصائي",
            en: "specialist",
          },
          {
            ar: "استاذ مساعد",
            en: "assistant lecturer",
          },
        ],
        serviceTypes: [
          {
            ar: "زيارة الفرع",
            en: "Branch Visit",
          },
          {
            ar: "الرعاية الصحية عن بعد",
            en: "Telehealth",
          },
          {
            ar: "زيارة منزلية",
            en: "Home Visit",
          },
        ],
        subOptions:[
            {
                "en": "Genital Dermatology",
                "ar": "امراض تناسلية"
            },
            {
                "en": "Adult Dermatology",
                "ar": "جلدية بالغين"
            },
            {
                "en": "Pediatric Dermatology",
                "ar": "جلدية اطفال"
            },
            {
                "en": "Cosmetic Dermatology and Laser",
                "ar": "تجميل وليزر"
            }
        ],
      }
  },
}