export default {
    data() {
        return {
            clinics: [
                {
                    "en": "Dermatology",
                    "ar": "الجلدية",
                    "specialties": [
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
                    "icon": "body.svg",
                    id: 0
                },
                {
                    "en": "Dentistry",
                    "ar": "طب الأسنان",
                    "specialties": [{
                            "en": "Pediatric Dentistry",
                            "ar": "اسنان اطفال"
                        },
                        {
                            "en": "Adult Dentistry",
                            "ar": "اسنان بالغين"
                        },
                        {
                            "en": "Cosmetic Dentistry",
                            "ar": "تجميل اسنان"
                        },
                        {
                            "en": "Endodontics",
                            "ar": "حشو وعلاج الجذور والاعصاب"
                        },
                        {
                            "en": "Periodontics",
                            "ar": "علاج اللثة"
                        },
                        {
                            "en": "Oral and Maxillofacial Surgery",
                            "ar": "جراحة وجه وفكين"
                        },
                        {
                            "en": "Orthodontics",
                            "ar": "تقويم اسنان"
                        },
                        {
                            "en": "Prosthodontics",
                            "ar": "تركيبات اسنان"
                        },
                        {
                            "en": "Elder Dentisiry",
                            "ar": "اسنان مسنين"
                        },
                        {
                            "en": "Oral Radiology",
                            "ar": "اشعة الاسنان"
                        },
                        {
                            "en": "Implantology",
                            "ar": "زراعة اسنان"
                        }
                    ],
                    "icon": "tooth.svg",
                    id: 1
                },
                {
                    "en": "Psychiatry",
                    "ar": "الطب النفسي",
                    "specialties": [{
                            "en": "Toxicology",
                            "ar": "علاج السموم"
                        },
                        {
                            "en": "Addiction",
                            "ar": "علاج الادمان"
                        },
                        {
                            "en": "Family Counseling",
                            "ar": "استشارات أسرية"
                        },
                        {
                            "en": "Pediatric Psychiatry",
                            "ar": "نفسي اطفال"
                        },
                        {
                            "en": "Adult Psychiatry",
                            "ar": "نفسي بالغين"
                        },
                        {
                            "en": "Adolescent Psychiatry",
                            "ar": "نفسي مراهقين"
                        }
                    ],
                    "icon": "psychology.svg",
                    id: 2
                },
                {
                    "en": "Pediatrics and New Born",
                    "ar": "اطفال وحديثي الولادة",
                    "specialties": [{
                            "en": "Pediatric Cardiology",
                            "ar": "قلب اطفال"
                        },
                        {
                            "en": "Pediatric Diabetes and Endocrinology",
                            "ar": "سكر وغدد صماء اطفال"
                        },
                        {
                            "en": "Pediatric Hepatology",
                            "ar": "كبد اطفال"
                        },
                        {
                            "en": "Pediatric Nephrology",
                            "ar": "كلى اطفال"
                        },
                        {
                            "en": "Pediatrics",
                            "ar": "اطفال"
                        },
                        {
                            "en": "New Born",
                            "ar": "حديثي الولادة"
                        },
                        {
                            "en": "Pediatric Urology",
                            "ar": "مسالك بولية اطفال"
                        },
                        {
                            "en": "Pediatric Psychiatry",
                            "ar": "نفسي اطفال"
                        },
                        {
                            "en": "Pediatric Hematology",
                            "ar": "امراض دم اطفال"
                        },
                        {
                            "en": "Pediatric Allergy and Immunology",
                            "ar": "حساسية ومناعة اطفال"
                        },
                        {
                            "en": "Pediatric Neurology",
                            "ar": "مخ واعصاب اطفال"
                        },
                        {
                            "en": "Pediatric Rheumatology",
                            "ar": "روماتيزم اطفال"
                        },
                        {
                            "en": "Pediatric Dietitian and Nutrition",
                            "ar": "تخسيسي وتغذية اطفال"
                        },
                        {
                            "en": "Pediatric Gastroenterology and Endoscopy",
                            "ar": "جهاز هضمي ومناظير اطفال"
                        },
                        {
                            "en": "Natural Breast Feeding",
                            "ar": "رضاعة طبيعية"
                        },
                        {
                            "en": "Special Needs",
                            "ar": "احتياجات خاصة"
                        }
                    ],
                    "icon": "pediatrics.svg",
                    id: 3
                },
                {
                    "en": "Neurology",
                    "ar": "مخ وأعصاب",
                    "specialties": [{
                            "en": "Adult Neurology",
                            "ar": "مخ واعصاب بالغين"
                        },
                        {
                            "en": "Pediatric Neurology",
                            "ar": "مخ واعصاب اطفال"
                        }
                    ],
                    "icon": "neurology.svg",
                    id: 4
                },
                {
                    "en": "Orthopedics",
                    "ar": "طب العظام",
                    "specialties": [{
                            "en": "Arthroscopy and sports injuries",
                            "ar": "اصابات ملاعب ومناظير مفاصل"
                        },
                        {
                            "en": "Adult Spine Surgery",
                            "ar": "جراحة عمود فقري بالغين"
                        },
                        {
                            "en": "Bone Defomities",
                            "ar": "تشوهات عظام"
                        },
                        {
                            "en": "Foot and Ankle Orthopedics",
                            "ar": "عظام القدم والكاحل"
                        },
                        {
                            "en": "Joint Replacement",
                            "ar": "تغيير المفاصل"
                        },
                        {
                            "en": "Adult Orthopedics",
                            "ar": "عظام بالغين"
                        },
                        {
                            "en": "Osteopathic Medicine",
                            "ar": "تقويم عظام"
                        },
                        {
                            "en": "Hand and Upper Limb Surgery",
                            "ar": "عظام اليد والكتف"
                        },
                        {
                            "en": "Microscopic Surgery",
                            "ar": "جراحة الاعصاب الطرفية"
                        },
                        {
                            "en": "Pediatric Orthopedics",
                            "ar": "عظام اطفال"
                        },
                        {
                            "en": "Orthopedics Spine Surgery",
                            "ar": "جراحة عمود فقري اطفال"
                        },
                        {
                            "en": "Adult Orthopedics Surgery",
                            "ar": "جراحة عظام بالغين"
                        },
                        {
                            "en": "Pediatric Orthopedics Surgery",
                            "ar": "جراحة عظام اطفال"
                        }
                    ],
                    "icon": "orthopaedics.svg",
                    id: 5
                },
                {
                    "en": "Gynaecology & Infertility",
                    "ar": "أمراض نساءوتوليد",
                    "specialties": [{
                            "en": "Gynaecology",
                            "ar": "امراض نساء وتوليد"
                        },
                        {
                            "en": "Gynaecologic Oncological Surgery",
                            "ar": "جراحة اورام نسائية"
                        },
                        {
                            "en": "Gynaecological Cosmetic Surgery",
                            "ar": "جراحة تجميل نسائية"
                        },
                        {
                            "en": "Obsterics",
                            "ar": "ولادة"
                        }
                    ],
                    "icon": "obstetricsmonia.svg",
                    id: 6
                },
                {
                    "en": "Ear, Nose & throat",
                    "ar": "أنف وأذن وحنجرة",
                    "specialties": [{
                            "en": "Hearing and Balance Disorder",
                            "ar": "اضطراب السمع والتوازن"
                        },
                        {
                            "en": "Adult Ear,Nose and Throat",
                            "ar": "انف واذن وحنجرة بالغين"
                        },
                        {
                            "en": "Adult Ear,Nose and Throat Surgery",
                            "ar": "جراحة انف واذن وحنجرة بالغين"
                        },
                        {
                            "en": "Pediatric Ear,Nose and Throat",
                            "ar": "انف واذن وحنجرة اطفال"
                        },
                        {
                            "en": "Pediatric Ear,Nose and Throat Surgery",
                            "ar": "جراحة انف واذن وحنجرة اطفال"
                        }
                    ],
                    "icon": "ears_nose_and_throat.svg",
                    id: 7
                },
                {
                    "en": "Cardiology & Vascular Disease",
                    "ar": "طب القلب و أمراض الأوعية الدموية",
                    "specialties": [{
                            "en": "Pediatric Cardiology",
                            "ar": "قلب اطفال"
                        },
                        {
                            "en": "Adult Cardiology",
                            "ar": "قلب يالغين"
                        },
                        {
                            "en": "Adult Vascular diseases",
                            "ar": "اوعية دموية بالغين"
                        },
                        {
                            "en": "Pediatric Vascular diseases",
                            "ar": "اوعية دموية اطفال"
                        }
                    ],
                    "icon": "cardiology.svg",
                    id: 8
                },
                {
                    "en": "Hematology",
                    "ar": "امراض دم",
                    "specialties": [{
                            "en": "Bone Marrow Transplantation",
                            "ar": "زرع خلايا جزعية"
                        },
                        {
                            "en": "Adult Hematology",
                            "ar": "امراض دم بالغين"
                        },
                        {
                            "en": "Pediatric Hematology",
                            "ar": "امراض دم اطفال"
                        }
                    ],
                    "icon": "hematology.svg",
                    id: 9
                },
                {
                    "en": "Oncology",
                    "ar": "اورام",
                    "specialties": [{
                            "en": "Adult Oncology",
                            "ar": "اورام بالغين"
                        },
                        {
                            "en": "Pediatric Oncology",
                            "ar": "اورام اطفال"
                        },
                        {
                            "en": "Radiation Oncology",
                            "ar": "علاج اورام بالاشعاع"
                        }
                    ],
                    "icon": "oncology.svg",
                    id: 10
                },
                {
                    "en": "Internal Medicine",
                    "ar": "باطنة",
                    "specialties": [{
                            "en": "Adult Internal Medicine",
                            "ar": "باطنة عامة"
                        },
                        {
                            "en": "Infectious Diseases",
                            "ar": "أمراض معدية"
                        }
                    ],
                    "icon": "stomach.svg",
                    id: 11
                },
                {
                    "en": "Nutrition and Dietitian",
                    "ar": "تخسيس وتغذية",
                    "specialties": [{
                            "en": "Adult Nutrition and Dietitian",
                            "ar": "تخسيس وتعذية بالغين"
                        },
                        {
                            "en": "Pediatric Nutrition and Dietitian",
                            "ar": "تخسيس وتعذية اطفال"
                        }
                    ],
                    "icon": "weight.svg",
                    id: 12
                },
                {
                    "en": "Pediatric Surgery",
                    "ar": "جراحة اطفال",
                    "specialties": [{
                            "en": "Pediatric General Surgery",
                            "ar": "جراحة عامة اطفال"
                        },
                        {
                            "en": "Pediatric Urology Surgery",
                            "ar": "جراحة مسالك بولية اطفال"
                        },
                        {
                            "en": "Pediatric Neurosurgery",
                            "ar": "جراحة مخ وأعصاب اطفال"
                        },
                        {
                            "en": "Pediatric Oncology Surgery",
                            "ar": "جراحة اورام اطفال"
                        },
                        {
                            "en": "Pediatric Thoracic Surgery",
                            "ar": "جراحة صدر اطفال"
                        },
                        {
                            "en": "Pediatric Cardiology Surgery",
                            "ar": "جراحة قلب اطفال"
                        },
                        {
                            "en": "Pediatric Gastroenterological Surgery",
                            "ar": "جراحة جهاز هضمي ومناظير اطفال"
                        },
                        {
                            "en": "Pediatric Defomities and Birth Defects Surgery",
                            "ar": "جراحة تشوهات اطفال وعيوب خلقية"
                        }
                    ],
                    "icon": "pediatric_surgery.svg",
                    id: 13
                },
                {
                    "en": "Oncology Surgery",
                    "ar": "جراحة اورام",
                    "specialties": [{
                            "en": "Gynaecologic Oncology Surgery",
                            "ar": "جراحة اورام نسائية"
                        },
                        {
                            "en": "Adult Oncology Surgery",
                            "ar": "جراحة اورام بالغين"
                        },
                        {
                            "en": "Brain Oncology Surgery",
                            "ar": "جراحة اورام المخ"
                        },
                        {
                            "en": "Breast Oncology Surgery",
                            "ar": "جراحة اورام الثدي"
                        },
                        {
                            "en": "Colon Tumor",
                            "ar": "جراحة اورام القولون"
                        },
                        {
                            "en": "Liver Tumor",
                            "ar": "جراحة اورام الكبد"
                        },
                        {
                            "en": "Lung Tumors",
                            "ar": "جراحة اورام الرئة"
                        },
                        {
                            "en": "Orthopedics Tumor",
                            "ar": "جراحة اورام العظام"
                        },
                        {
                            "en": "Pediatric Oncology Surgery",
                            "ar": "جراحة اورام اطفال"
                        },
                        {
                            "en": "Prostate Tumor",
                            "ar": "جراحة اورام البروستاتا"
                        },
                        {
                            "en": "Sotmach Tumor",
                            "ar": "جراحة اورام المعدة"
                        }
                    ],
                    "icon": "surgical_sterilization.svg",
                    id: 14
                },
                {
                    "en": "Vescular Surgery",
                    "ar": "جراحة اوعية دموية",
                    "specialties": [{
                            "en": "Pediatric Vescular Surgery",
                            "ar": "جراحة اوعية دموية اطفال"
                        },
                        {
                            "en": "Adult Vescular Surgery",
                            "ar": "جراحة اوعية دموية بالغين"
                        },
                        {
                            "en": "Diabetic Foot Treatment",
                            "ar": "علاج قدم سكري"
                        }
                    ],
                    "icon": "surgical_sterilization.svg",
                    id: 15
                },
                {
                    "en": "Plastic Surgery",
                    "ar": "جراحة تجميل",
                    "specialties": [{
                            "en": "Facial Plastic Surgery",
                            "ar": "جراحة تحميل الوجه"
                        },
                        {
                            "en": "Cosmetic Dermatology and laser",
                            "ar": "تجميل وليزر"
                        },
                        {
                            "en": "Burn Surgery",
                            "ar": "جراحة تحميل الحروق"
                        },
                        {
                            "en": "Eyes Cosmetic Surgery",
                            "ar": "جراحة تحميل العيون"
                        },
                        {
                            "en": "Hand Surgery",
                            "ar": "جراحة تحميل اليد"
                        },
                        {
                            "en": "Rhinoplastic Surgery",
                            "ar": "جراحة تحميل الانف"
                        }
                    ],
                    "icon": "mouth.svg",
                    id: 16
                },
                {
                    "en": "Obesity and Laparoscopic Surgery",
                    "ar": "جراحة سمنة ومناظير",
                    "specialties": [{
                        "en": "Obesity Surgery",
                        "ar": "جراحة سمنة وتخسيس"
                    }],
                    "icon": "overweight.svg",
                    id: 17
                },
                {
                    "en": "General Surgery",
                    "ar": "جراحة عامة ",
                    "specialties": [{
                            "en": "Pediatric Genral Surgery",
                            "ar": "جراحة عامة اطفال"
                        },
                        {
                            "en": "Abdominal Surgery",
                            "ar": "جراحة بطن"
                        },
                        {
                            "en": "Endocrinal Surgery",
                            "ar": "جراحة غدد صماء"
                        },
                        {
                            "en": "Adult Gastroenterological Surgery",
                            "ar": "جراحة جهاز هضمي ومناظير بالغين"
                        },
                        {
                            "en": "Trauma and Accident Surgery",
                            "ar": "جراحة اصابات وحوادث"
                        },
                        {
                            "en": "Gynaeocologic Oncological Surgery",
                            "ar": "جراحة اورام نسائية"
                        },
                        {
                            "en": "Adult Oncology Surgery",
                            "ar": "جراحة اورام بالغين"
                        },
                        {
                            "en": "Brain Tumor",
                            "ar": "جراحة اورام المخ"
                        },
                        {
                            "en": "Breast Tumor",
                            "ar": "جراحة اورام الثدي"
                        },
                        {
                            "en": "Colon Tumor",
                            "ar": "جراحة اورام القولون"
                        },
                        {
                            "en": "Liver Tumor",
                            "ar": "جراحة اورام الكبد"
                        },
                        {
                            "en": "Lung Tumor",
                            "ar": "جراحة اورام الرئة"
                        },
                        {
                            "en": "Orthopedics Tumor",
                            "ar": "جراحة اورام العظام"
                        },
                        {
                            "en": "Pediatric Oncology Surgery",
                            "ar": "جراحة اورام اطفال"
                        },
                        {
                            "en": "Prostate Tumor",
                            "ar": "جراحة اورام البروستاتا"
                        },
                        {
                            "en": "Stomach Tumor",
                            "ar": "جراحة اورام المعدة"
                        },
                        {
                            "en": "Adult General Surgery",
                            "ar": "جراحة عامة بالغين"
                        },
                        {
                            "en": "Pediatric Gastroenterological Surgery",
                            "ar": "جراحة جهاز هضمي ومناظير"
                        }
                    ],
                    "icon": "surgical_sterilization.svg",
                    id: 18
                },
                {
                    "en": "Spinal Surgery",
                    "ar": "جراحة عمود فقري ",
                    "specialties": [{
                            "en": "Adult Spine Surgery",
                            "ar": "جراحة عمود فقري بالغين "
                        },
                        {
                            "en": "Bone Deformities",
                            "ar": "تشوهات عظام"
                        },
                        {
                            "en": "Foot and Ankle Orthopedics",
                            "ar": "عظام القدم والكاحل"
                        },
                        {
                            "en": "Joint Replacement",
                            "ar": "تغير المفاصل"
                        },
                        {
                            "en": "Osteopathic Medicine",
                            "ar": "تقويم عظام"
                        },
                        {
                            "en": "Hand and Upper Limb Surgery",
                            "ar": "عظام اليد والكتف"
                        },
                        {
                            "en": "Microscopic Surgery",
                            "ar": "جراحة الاعصاب الطرفية"
                        },
                        {
                            "en": "Pediatric Spine Surgery",
                            "ar": "جراحة عمود فقري اطفال"
                        },
                        {
                            "en": "Adult Orthopedic Surgery",
                            "ar": "جراحة عظام بالغين"
                        },
                        {
                            "en": "Pediatric Orthopedic Surgery",
                            "ar": "جراحة عظام اطفال"
                        }
                    ],
                    "icon": "orthopaedics.svg",
                    id: 19
                },
                {
                    "en": "Cardiology & Thoracic Surgery",
                    "ar": "جراحة القلب والصدر",
                    "specialties": [{
                            "en": "Adult Thoracic Surgery",
                            "ar": "جراحة صدر بالغين"
                        },
                        {
                            "en": "Pediatric Thoracic Surgery",
                            "ar": "جراحة صدر اطفال"
                        },
                        {
                            "en": "Adult Cardiology Surgery",
                            "ar": "جراحة قلب بالغين"
                        },
                        {
                            "en": "Pediatric Cardiology Surgery",
                            "ar": "جراحة قلب اطفال"
                        }
                    ],
                    "icon": "lungs.svg",
                    id: 20
                },
                {
                    "en": "Neurosurgery",
                    "ar": "جراحة مخ وأعصاب",
                    "specialties": [{
                            "en": "Adult Spine Surgery",
                            "ar": "جراحة عمود فقري بالغين"
                        },
                        {
                            "en": "Pediatric Neurosurgery",
                            "ar": "جراحة مخ واعصاب اطفال"
                        },
                        {
                            "en": "Adult Neurology",
                            "ar": "مخ واعصاب بالغين"
                        },
                        {
                            "en": "Pediatric Neurology",
                            "ar": "مخ واعصاب اطفال"
                        },
                        {
                            "en": "Adult Neurosurgery",
                            "ar": "جراحة مخ واعصاب بالغين"
                        },
                        {
                            "en": "Pediatric Spine Surgery",
                            "ar": "جراحة عمود فقري اطفال"
                        }
                    ],
                    "icon": "neurology.svg",
                    id: 21
                },
                {
                    "en": "Gastroenterology & Endoscopy",
                    "ar": "جهاز هضمي ومناظير",
                    "specialties": [{
                            "en": "Adult Gastroenterology and Endoscopy",
                            "ar": "جهاز هضمي ومناظير بالغين"
                        },
                        {
                            "en": "Pediatric Gastroenterology and Endoscopy",
                            "ar": "جهاز هضمي ومناظير اطفال"
                        }
                    ],
                    "icon": "gastroenterology.svg",
                    id: 22
                },
                {
                    "en": "Immunology & Allergy",
                    "ar": "المناعة والحساسية",
                    "specialties": [{
                            "en": "Adult Allergy and Immunology",
                            "ar": "حساسية ومناعة بالغين"
                        },
                        {
                            "en": "Autoimmune Allergy",
                            "ar": "امراض المناعة الذاتية"
                        },
                        {
                            "en": "Ophthalmologic Allergy",
                            "ar": "حساسية العيون"
                        },
                        {
                            "en": "Pediatric Allergy and Immunology",
                            "ar": "حساسية ومناعة اطفال"
                        },
                        {
                            "en": "Respiratory Tract Allergy",
                            "ar": "حساسية الجهاز التنفسي"
                        },
                        {
                            "en": "Skin Allergy",
                            "ar": "حساسية الجلد "
                        }
                    ],
                    "icon": "allergies.svg",
                    id: 23
                },
                {
                    "en": "IVF and Infertility",
                    "ar": "حقن مجهري وأطفال انابيب",
                    "specialties": [{
                            "en": "IVF",
                            "ar": "حقن مجهري وعقم"
                        },
                        {
                            "en": "Gynaecologic Oncological Surgery",
                            "ar": "جراحة اورام نسائية"
                        }
                    ],
                    "icon": "agriculture.svg",
                    id: 24
                },
                {
                    "en": "Andrology & Male Infertility",
                    "ar": "أمراض الذكورة والعقم",
                    "specialties": [{
                        "en": "Andrology",
                        "ar": "أمراض ذكورة"
                    }],
                    "icon": "sperm.svg",
                    id: 25
                },
                {
                    "en": "Rheumatology",
                    "ar": "روماتيزم",
                    "specialties": [{
                            "en": "Adult Rheumatology",
                            "ar": "روماتيزم بالغين"
                        },
                        {
                            "en": "Pediatric Rheumatology",
                            "ar": "روماتيزم اطفال"
                        }
                    ],
                    "icon": "joints.svg",
                    id: 26
                },
                {
                    "en": "Endocrinology and Diabetes",
                    "ar": "سكر وغدد صماء",
                    "specialties": [{
                            "en": "Adult Endocrinology and Diabetes",
                            "ar": "سكر وغدد صماء بالغين"
                        },
                        {
                            "en": "Pediatric Endocrinology and Diabetes",
                            "ar": "سكر وغدد صماء اطفال"
                        }
                    ],
                    "icon": "diabetes.svg",
                    id: 27
                },
                {
                    "en": "Audiology",
                    "ar": "سمعيات",
                    "specialties": [{
                            "en": "Hearing and Balance Disorder",
                            "ar": "اضطراب السمع والتوازن"
                        },
                        {
                            "en": "Adult Audiology",
                            "ar": "سمعيات بالغين"
                        },
                        {
                            "en": "Pediatric Audiology",
                            "ar": "سمعيات اطفال"
                        }
                    ],
                    "icon": "ear.svg",
                    id: 28
                },
                {
                    "en": "Chest and Respiratory",
                    "ar": "صدر وجهاز تنفسي",
                    "specialties": [{
                            "en": "Adult Chest and Respiratory",
                            "ar": "صدر وجهاز تنفسي بالغين"
                        },
                        {
                            "en": "Pediatric Chest and Respiratory",
                            "ar": "صدر وجهاز تنفسي اطفال"
                        }
                    ],
                    "icon": "lungs.svg",
                    id: 29
                },
                {
                    "en": "Family Medicine",
                    "ar": "طب الاسرة",
                    "specialties": [{
                            "en": "Adult Internal Medicine",
                            "ar": "باطنة عامة"
                        },
                        {
                            "en": "Pediatrics",
                            "ar": "اطفال"
                        },
                        {
                            "en": "Chronic Disease Care",
                            "ar": "معالجة الامراض المزمنة"
                        },
                        {
                            "en": "Gastrointestinal",
                            "ar": "امراض الجهاز الهضمي"
                        },
                        {
                            "en": "Chest Diseases",
                            "ar": "امراض الصدر"
                        }
                    ],
                    "icon": "family_medicine.svg",
                    id: 30
                },
                {
                    "en": "Geriatrics",
                    "ar": "طب المسنين",
                    "specialties": [{
                            "en": "Elder Memory",
                            "ar": "ذاكرة مسنين"
                        },
                        {
                            "en": "Elder Movements",
                            "ar": "حركة مسنين"
                        },
                        {
                            "en": "Elder Nutrition",
                            "ar": "تغذية مسنين"
                        }
                    ],
                    "icon": "elderly.svg",
                    id: 31
                },
                {
                    "en": "Osteopathy",
                    "ar": "طب تقويمي",
                    "specialties": [{
                            "en": "Sport Inguries",
                            "ar": "اصابات ملاعب"
                        },
                        {
                            "en": "Adult Osteopathy",
                            "ar": "طب تقويمي بالغين"
                        },
                        {
                            "en": "Pediatric Osteopathy",
                            "ar": "طب تقويمي اطفال"
                        }
                    ],
                    "icon": "stethoscope.svg",
                    id: 32
                },
                {
                    "en": "Pain Management",
                    "ar": "علاج الآلام",
                    "specialties": [{
                            "en": "Adult Pain Management",
                            "ar": "علاج الآلام بالغين"
                        },
                        {
                            "en": "Pediatric Pain Management",
                            "ar": "علاج الآلام اطفال"
                        }
                    ],
                    "icon": "syringe.svg",
                    id: 33
                },
                {
                    "en": "Physiotherapy and Sport Injuries",
                    "ar": "علاج طبيعي واصابات ملاعب",
                    "specialties": [{
                            "en": "Adult Physiotherapy",
                            "ar": "علاج طبيعي بالغين"
                        },
                        {
                            "en": "Pediatric Physiotherapy",
                            "ar": "علاج طبيعي اطفال"
                        },
                        {
                            "en": "Sport Injuries",
                            "ar": "اصابات ملاعب"
                        },
                        {
                            "en": "Rehabilitation",
                            "ar": "تأهيل"
                        }
                    ],
                    "icon": "physical_therapy.svg",
                    id: 34
                },
                {
                    "en": "Ophthalmology",
                    "ar": "عيون",
                    "specialties": [{
                            "en": "Adult Ophthalmology",
                            "ar": "عيون بالغين"
                        },
                        {
                            "en": "Visual Rehabilitation",
                            "ar": "تأهيل بصري"
                        },
                        {
                            "en": "Lasik, Vision Correction and Cataract",
                            "ar": "ليزك وتصحيح الابصار والمياة البيضاء"
                        },
                        {
                            "en": "Pediatric Ophthalmology",
                            "ar": "عيون اطفال"
                        },
                        {
                            "en": "Vitreous Body ad Retinal Surgery",
                            "ar": "جراحة شبكية وجسم زجاجي"
                        }
                    ],
                    "icon": "eye.svg",
                    id: 35
                },
                {
                    "en": "Hepatology",
                    "ar": "كبد",
                    "specialties": [{
                            "en": "Adult Hepatology",
                            "ar": "كبد بالغين"
                        },
                        {
                            "en": "Pediatric Hepatology",
                            "ar": "كبد اطفال"
                        }
                    ],
                    "icon": "liver.svg",
                    id: 36
                },
                {
                    "en": "Nephrology",
                    "ar": "كلى",
                    "specialties": [{
                            "en": "Adult Nephrology",
                            "ar": "كلى بالغين"
                        },
                        {
                            "en": "Pediatric Nephrology",
                            "ar": "كلى اطفال"
                        }
                    ],
                    "icon": "kidneys.svg",
                    id: 37
                },
                {
                    "en": "Urology",
                    "ar": "مسالك بولية",
                    "specialties": [{
                            "en": "Pediatric Urology Surgery",
                            "ar": "جراحة مسالك بولية اطفال"
                        },
                        {
                            "en": "Pediatric Urology",
                            "ar": "مسالك بولية اطفال"
                        },
                        {
                            "en": "Adult Urology",
                            "ar": "مسالك بولية بالغين"
                        },
                        {
                            "en": "Adult Urology Surgery",
                            "ar": "جراحة مسالك بولية بالغين"
                        }
                    ],
                    "icon": "bladder.svg",
                    id: 38
                },
                {
                    "en": "General Practice",
                    "ar": "ممارسة عامة",
                    "specialties": [{
                            "en": "Adult General Practice",
                            "ar": "ممارسة عامة بالغين"
                        },
                        {
                            "en": "Pediatric General Practice",
                            "ar": "ممارسة عامة اطفال"
                        }
                    ],
                    "icon": "stethoscope.svg",
                    id: 39
                },
                {
                    "en": "Phoniatrics",
                    "ar": "نطق وتخاطب",
                    "specialties": [{
                            "en": "Adult Phoniatrics",
                            "ar": "نطق وتخاطب بالغين"
                        },
                        {
                            "en": "Pediatric Phoniatrics",
                            "ar": "نطق وتخاطب اطفال"
                        }
                    ],
                    "icon": "speech_language_therapy.svg",
                    id: 40
                }
            ],
        };
    },
};