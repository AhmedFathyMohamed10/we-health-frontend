export default {
    namespaced: true,
    state: {
        gynecologyObject: {
            patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
            obstetric: {
                pregFollowUp: [],
                womanHealth: [],
                antenatal: []
            },
            gyn: {
                infertility: {
                    infertility: [],
                    hormones: []
                },
                folliculometry:[],
                pid:[],
                contraception: [],
                pBleeding: [],
                pmBleeding: []
            },
            borns:[],
            usMedia:{
                pregnancy:{
                    fetus:{
                        number:"",
                        fhm:"",
                        lie:"",
                        congenitalAnomalies:"",
                        fl:"",
                        crl:"",
                        fw:"",
                        fetalAge:"",
                        movements:"",
                        viability:"",
                        presentation:"",
                        bpd:"",
                        gs:"",
                        hcAc:"",
                        fhr:"",
                    },
                    amnioticFluid:{
                        amount:"",
                        afIndex:"",
                        turbidity:"",
                        deepestPocket:"",
                    },
                    placentaMyometrium:{
                        site:"",
                        retroAbnormalities:"",
                        ovaries:"",
                        grade:"",
                        myometrialMasses:"",
                    },
                    other:"",
                    media:[]
                },
            },
        },
    },
    mutations: {
        // obstetric
        'Set_PregFollowUp': (state, payload) => {
            state.gynecologyObject.obstetric.pregFollowUp = JSON.parse(
                JSON.stringify(payload)
            );
        },
        'Set_WomanHealth': (state, payload) => {
            state.gynecologyObject.obstetric.womanHealth = JSON.parse(
                JSON.stringify(payload)
            );
        },
        'Set_Antenatal': (state, payload) => {
            state.gynecologyObject.obstetric.antenatal = JSON.parse(
                JSON.stringify(payload)
            );
        },
        //////////////// Gyn

        // Infertility
        'Set_Infertility': (state, payload) => {
            state.gynecologyObject.gyn.infertility.infertility = JSON.parse(
                JSON.stringify(payload)
            );
        },
        // Hormones
        'Set_Hormones': (state, payload) => {
            state.gynecologyObject.gyn.infertility.hormones = JSON.parse(
                JSON.stringify(payload)
            );
        },
        // Folliculometry
        'Set_Folliculometry': (state, payload) => {
            state.gynecologyObject.gyn.folliculometry = JSON.parse(
                JSON.stringify(payload)
            );
        },
        'Set_Pid': (state, payload) => {
            state.gynecologyObject.gyn.pid = JSON.parse(
                JSON.stringify(payload)
            );
        },
        'Set_P_Bleeding': (state, payload) => {
            state.gynecologyObject.gyn.pBleeding = JSON.parse(
                JSON.stringify(payload)
            );
        },
        'Set_Pm_Bleeding': (state, payload) => {
            state.gynecologyObject.gyn.pmBleeding = JSON.parse(
                JSON.stringify(payload)
            );
        },
        'Set_Contraception': (state, payload) => {
            state.gynecologyObject.gyn.contraception = JSON.parse(
                JSON.stringify(payload)
            );
        },
        // Borns
        'Set_Borns': (state, payload) => {
            state.gynecologyObject.borns = JSON.parse(
                JSON.stringify(payload)
            );
        },
        // usMedia
        'Set_Pregnancy': (state, payload) => {
            state.gynecologyObject.usMedia.pregnancy = JSON.parse(
                JSON.stringify(payload)
            );
        },
           //********************** */ Reset_Gynecology *******************//
    'Reset_Gynecology': (state) => {
        state.gynecologyObject= {
            patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
            obstetric: {
                pregFollowUp: [],
                womanHealth: [],
                antenatal: []
            },
            gyn: {
                infertility: {
                    infertility: [],
                    hormones: []
                },
                folliculometry:[],
                pid:[],
                contraception: [],
                pBleeding: [],
                pmBleeding: []
            },
            borns:[],
            usMedia:{
                pregnancy:{
                    fetus:{
                        number:"",
                        fhm:"",
                        lie:"",
                        congenitalAnomalies:"",
                        fl:"",
                        crl:"",
                        fw:"",
                        fetalAge:"",
                        movements:"",
                        viability:"",
                        presentation:"",
                        bpd:"",
                        gs:"",
                        hcAc:"",
                        fhr:"",
                    },
                    amnioticFluid:{
                        amount:"",
                        afIndex:"",
                        turbidity:"",
                        deepestPocket:"",
                    },
                    placentaMyometrium:{
                        site:"",
                        retroAbnormalities:"",
                        ovaries:"",
                        grade:"",
                        myometrialMasses:"",
                    },
                    other:"",
                    media:[]
                },
            },
        }
    },
    
    },
    actions: {
        //////// obstetric /////////

        // pregFollowUp 
        setPregFollowUp(context, payload) {
            context.commit("Set_PregFollowUp", payload);
        },
        // WomanHealth 
        setWomanHealth(context, payload) {
            context.commit("Set_WomanHealth", payload);
        },
        // Antenatal 
        setAntenatal(context, payload) {
            context.commit("Set_Antenatal", payload);
        },

        //////// Gyn ///////////

        // Infertility
        setInfertility(context, payload) {
            context.commit("Set_Infertility", payload);
        },
        setHormones(context, payload) {
            context.commit("Set_Hormones", payload);
        },
        // Folliculometry
        setFolliculometry(context, payload) {
            context.commit("Set_Folliculometry", payload);
        },
        // PID
        setPid(context, payload) {
            context.commit("Set_Pid", payload);
        },
        // pBleeding
        setPBleeding(context, payload) {
            context.commit("Set_P_Bleeding", payload);
        },
        // pmBleeding
        setPmBleeding(context, payload) {
            context.commit("Set_Pm_Bleeding", payload);
        },
        // Contraception
        setContraception(context, payload) {
            context.commit("Set_Contraception", payload);
        },

        // Borns
        setBorns(context, payload) {
            context.commit("Set_Borns", payload);
        },

        // usMedia
        setPregnancy(context, payload) {
            context.commit("Set_Pregnancy", payload);
        },
        /////////resetOphthalmic/////////
        resetGynecology(context){
            context.commit("Reset_Gynecology");
          },
    },
    getters: {
        getGynecologyObject(state) {
            return state.gynecologyObject;
        },
        // obstetric

        getPregFollowUp(state) {
            return state.gynecologyObject.obstetric.pregFollowUp;
        },
        getAntenatal(state) {
            return state.gynecologyObject.obstetric.antenatal;
        },
        getWomanHealth(state) {
            return state.gynecologyObject.obstetric.womanHealth;
        },

        // gyn

        getInfertility(state) {
            return state.gynecologyObject.gyn.infertility.infertility;
        },
        getHormones(state) {
            return state.gynecologyObject.gyn.infertility.hormones;
        },
        getFolliculometry(state) {
            return state.gynecologyObject.gyn.folliculometry;
        },
        getPid(state) {
            return state.gynecologyObject.gyn.pid;
        },
        getPBleeding(state) {
            return state.gynecologyObject.gyn.pBleeding;
        },
        getPmBleeding(state) {
            return state.gynecologyObject.gyn.pmBleeding;
        },
        getContraception(state) {
            return state.gynecologyObject.gyn.contraception;
        },

        // Borns

        getBorns(state) {
            return state.gynecologyObject.borns;
        },
        // usMedia

        getPregnancy(state) {
            return state.gynecologyObject.usMedia.pregnancy;
        },
    },
};