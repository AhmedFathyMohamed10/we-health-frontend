export default {
    data(){
        return{
            drugOptions: [
                { english: "Benoxinate + Fluorescein", arabic: "Benoxinate + Fluorescein" },
                { english: "Proparacaine + Fluorescein", arabic: "Proparacaine + Fluorescein" },
                { english: "Proparacaine", arabic: "Proparacaine" },
                { english: "other", arabic: "other" },
              ],
              testOptions: [
                { english: "Goldman / ATN", arabic: "Goldman / ATN" },
                { english: "Air Puff / NCT", arabic: "Air Puff / NCT" },
                { english: "Perkins", arabic: "Perkins" },
                { english: "Tactile", arabic: "Tactile" },
                { english: "other", arabic: "other" },
              ],
              viterousOptions: [
                { english: "Clear", arabic: "Clear" },
                { english: "Floaters", arabic: "Floaters" },
                { english: "PVD", arabic: "PVD" },
                { english: "Syneresis", arabic: "Syneresis" },
                { english: "other", arabic: "other" },
              ],
              irisOptions: [
                { english: "Anisocoria", arabic: "Anisocoria" },
                { english: "Flat-Clear", arabic: "Flat-Clear" },
                { english: "Narrow Periph", arabic: "Narrow Periph" },
                { english: "other", arabic: "other" },
              ],
              eyeColourOptions: [
                { english: "Blepharitis", arabic: "Blepharitis" },
                { english: "Chalazion", arabic: "Chalazion" },
                { english: "Districhiasis", arabic: "Districhiasis" },
                { english: "GPC", arabic: "GPC" },
                { english: "Hordeolum", arabic: "Hordeolum" },
                { english: "Meibomianitis", arabic: "Meibomianitis" },
                { english: "Trichiasis", arabic: "Trichiasis" },
                { english: "other", arabic: "other" },
              ],
              keys:[
                {
                    label:{english:"Lid/Lashes",arabic:"Lid/Lashes"},
                    placeholder:{english:"WNL",arabic:"WNL"},
                    objKey:'lid',
                    copyController:true,
                },
                {
                    label:{english:"Conjunctiva",arabic:"Conjunctiva"},
                    placeholder:{english:"WNL",arabic:"WNL"},
                    objKey:'conjunctiva',
                    copyController:true,
                },
                {
                    label:{english:"Cornea",arabic:"Cornea"},
                    placeholder:{english:"Clear",arabic:"Clear"},
                    objKey:'cornea',
                    copyController:false,
                },
                {
                    label:{english:"AC",arabic:"AC"},
                    placeholder:{english:"D&Q",arabic:"D&Q"},
                    objKey:'ac',
                    copyController:false,
                },
                {
                    label:{english:"Vitreous",arabic:"Vitreous"},
                    placeholder:{english:"Clear",arabic:"Clear"},
                    objKey:'viterous',
                    copyController:false,
                },
                {
                    label:{english:"Iris",arabic:"Iris"},
                    placeholder:{english:"Flat/Clear",arabic:"Flat/Clear"},
                    objKey:'iris',
                    copyController:false,
                },
                {
                    label:{english:"Eye Colour",arabic:"Eye Colour"},
                    placeholder:{english:"Status",arabic:"Status"},
                    objKey:'eyeColour',
                    copyController:false,
                },
                {
                    label:{english:"Lens",arabic:"Lens"},
                    placeholder:{english:"Clear",arabic:"Clear"},
                    objKey:'lens',
                    copyController:false,
                },
                {
                    label:{english:"Angle",arabic:"Angle"},
                    placeholder:{english:">4",arabic:">4"},
                    objKey:'angle',
                    copyController:false,
                },
                {
                    label:{english:"TBUT",arabic:"TBUT"},
                    placeholder:{english:"WNL",arabic:"WNL"},
                    objKey:'tbut',
                    copyController:false,
                },
                {
                    label:{english:"TVOL",arabic:"TVOL"},
                    placeholder:{english:"Status",arabic:"Status"},
                    objKey:'tvol',
                    copyController:false,
                },
            ],
            dropdownOptions: [
              { english: "CB", arabic: "CB" },
              { english: "TM", arabic: "TM" },
              { english: "SS", arabic: "SS" },
              { english: "SL", arabic: "SL" },
            ],
            gonioscopyOptions:[
              {english:"3 mirror",arabic:"3 mirror"},
              {english:"4 mirror",arabic:"4 mirror"},
              {english:"other",arabic:"other"},
            ],
            irisOptions:[
              {english:"Concave",arabic:"Concave"},
              {english:"Convex",arabic:"Convex"},
              {english:"Flat",arabic:"Flat"},
              {english:"other",arabic:"other"},
            ],
            lensOptions:[
                {english:"3 mirror",arabic:"3 mirror"},
                {english:"4 mirror",arabic:"4 mirror"},
                {english:"other",arabic:"other"},
              ],
        }
    }
}