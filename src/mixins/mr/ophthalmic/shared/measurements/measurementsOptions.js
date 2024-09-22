export default {
    data() {
      return {
        sphericalOptions:[['Balance','-','+'],[10,20,30],[0,1,2,3,4,5,6,7,8,9],[.25,.50,.75]],
        cylindricalOptions:[['Balance','-','+'],[10,20,30],[0,1,2,3,4,5,6,7,8,9],[.00,.25,.50,.75]],
        axisOptions:[[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180],[0,1,2,3,4,5,6,7,8,9]],
        addOptions:[[10,20],[0,1,2,3,4,5,6,7,8,9],[.00,.25,.50,.75]],
        prismOptions:[[10,20],['.00','.25','.50','.75'],['In','Out'],[10,20],['.00','.25','.50','.75'],['Up','Down']],
        dvaOptions:[[15,20,25,30,40,50,60,70,80,100,200,400,600],['-3','-2','-1','+1','+2','+3','NLP']],
        nvaOptions:[[15,20,25,30,40,50,60,70,80,100,200,400,600],['-3','-2','-1','+1','+2','+3','NLP','Prothesis']],
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        ampOptions:[[10,20],[0,1,2,3,4,5,6,7,8,9]],
        hOptions:[[10,20,30,40,50],[0,1,2,3,4,5,6,7,8,9],["HYPER","HYPO","ORTHO"]],
        nraOptions:[[1,2,3,4,5,6,7,8,9],[.00,.25,.50,.75]],
        praOptions:[[1,2,3,4,5,6,7,8,9],[.00,.25,.50,.75]],
        ratioOptions:[["1:1","1:2","1:3","1:4","1:5","1:6"]],
        vergenceOptions:[[10,20,30,40,50],[0,1,2,3,4,5,6,7,8,9],["*"]],
        vOptions:[[10,20],[0,1,2,3,4,5,6,7,8,9],["HYPER","HYPO","ORTHO"]],
        pachOptions:[["+","-"],["1","2","3","4","5","6","7","8","9"]],
        // pachymetryOptions:[["+","-"],["1","2","3","4","5","6","7","8","9"]],
        tensionOptions:[[10,20,30],[0,1,2,3,4,5,6,7,8,9]],
        adjOptions:[[10,20,30],[0,1,2,3,4,5,6,7,8,9]],

        //pupils
        sizeInLightOptions:[[1,2,3,4,5,6,7],[.00,.5]],
        sizeInDarkOptions:[[1,2,3,4,5,6,7],[.00,.5]],
        reactionOptions:[[1,2,3,4,5,6,7]],
        mGunnOptions:[['+','-']],
        // eom
        npcOptions: [[10,20,30,40,50],[0,1,2,3,4,5,6,7,8,9]],
        // covertest
        unilateralOptions:[[10,20,30,40],[0,1,2,3,4,5,6,7,8,9],['Esotropia','Exotropia']],
        alternatingOptions :[[10,20,30,40],[0,1,2,3,4,5,6,7,8,9],['Alternating Esophoria','Alternating Exophoria','Esophoria','Exophoria','Intermittent Alternating']],
        
        // biomicroscopy
        lidOptions: [["+1" ,"+2" ,"+3" ,"+4"], ["Blepharitis", "Chalazion", "Districhiasis", "GPC", "Hordeolum", "Meibomianitis", "Trichiasis"]],
        conjunctivaOptions: [["+1" ,"+2" ,"+3" ,"+4"], ["Chemosis", "Injection", "Pinguecula", "Pterygium"]],
        corneaOptions: [["+1" ,"+2" ,"+3" ,"+4"], ["Clear", "Dystrophy", "KP", "Neovascularization", "Opacities"]],
        acOptions: [["+1" ,"+2" ,"+3" ,"+4"], ["Cells", "Flare", "D&Q"]],
        lensOptions: [["+1" ,"+2" ,"+3" ,"+4"], ["ACC", "ACIOL", "BRUNESCENT", "Clear", "NSC", "PCC", "PCIOL", "PSC"]],
        angleOptions: [["+1" ,"+2" ,"+3" ,"+4"]],
        tbutOptions: [[1 ,2 ,3 ,4, 5, 6, 7, 8]],
        tvolOptions: [[5 ,10 ,15, 20]],
        /////
        quantityOptions:[[1,2,3],['ggt']],
        meridianOptions:[[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180],[0,1,2,3,4,5,6,7,8,9]],
        powerHOptions:[["30","40","50"],[".00",".12",".25",".37",".50",".62",".75",".87"]],
        powerVOptions:[["90D","78D","20D","SUPER 66"],["DO","MIO","BIO"]],
        bcOptions:[[10],[0,1,2,3,4,5,6,7,8,9],[.00,.10,.20,.30,.40,.50,.60,.70,.80,.90]],
        diaOptions:[[10],[0,1,2,3,4,5,6,7,8,9],[.00,.10,.20,.30,.40,.50,.60,.70,.80,.90]],
      };
    },
  };
  