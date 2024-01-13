//setting up for add inhaler function
    const addInhalerBtn = document.getElementById("applyBtn");
    const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    const newInhalerPreventionBtn = document.getElementById("preventionBtn");

    const newInhalerName = document.getElementById("newInhalerName");
    const newInhalerDose = document.getElementById("newInhalerVolume");
    const newInhalerExpDate = document.getElementById("newInhalerExpDate");
    let newInhalerType = "Type Unknown";
    let newInhaler = 0;

    newInhalerCrisisBtn.addEventListener('click', function () {
        let newInhalerType = "Crisis";
    })
    newInhalerPreventionBtn.addEventListener('click', function () {
        let newInhalerType = "Prevention";
    })
    addInhalerBtn.addEventListener('click', function () {
        let newInhaler = new Inhaler(newInhalerName,newInhalerDose,50,newInhalerExpDate,newInhalerType);
    })

    const newInhalerDoseBtn = document.getElementById("addReminderBtn");
    let newInhalerDailyDose = 0; //pending id??
    let newInhalerNightlyDose = 0; //pending id??
    let newInhalerWeeklyDose = 0; //pending id??

    newInhalerDoseBtn.addEventListener('click', function () {
        newInhaler.setPrescriptions(newInhalerDailyDose,newInhalerNightlyDose,newInhalerWeeklyDose);
    })

//setting up for add intake function
    const addIntakeBtn = document.getElementById("addIntakeBtn");
    const newIntakeTime = document.getElementById("intakeTimeVar");
    const newIntakePuffs = document.getElementById("nbPuffsVar");
    const selectInhaler1Btn = document.getElementById("inhaler1Btn");
    const selectInhaler2Btn = document.getElementById("inhaler2Btn");
    let newIntakeInhaler = 0;

    selectInhaler1Btn.addEventListener('click', function () {
        newIntakeInhaler = Inhaler.getInhaler(0);
    })
    selectInhaler2Btn.addEventListener('click', function () {
        newIntakeInhaler = Inhaler.getInhaler(1);
    })
    addIntakeBtn.addEventListener('click', function () {
        newIntakeInhaler.addIntake(new Date(new Date().toDateString()),newIntakeTime,newIntakePuffs);
        newIntakeInhaler.checkDose()
    })

    //setting up for inhalers list (My Inhaler)

    const setFavBtn = document.getElementById("FavBtn"); //need to be more specific to which inhaler, assumed as inhaler1
    let favInhaler = Inhaler.getInhaler(0); //set first inhaler added as default favourite

    setFavBtn.addEventListener('click', function () {
        favInhaler = Inhaler.getInhaler(0);
    })

    //setting up for quick add intake
    const quickIntakeBtn = document.getElementById("quickIntakeBtn");

    quickIntakeBtn.addEventListener('click', function () {
        let quickIntakeDate = new Date();
        let quickIntakeTime = quickIntakeDate.getTime();
        favInhaler.addIntake(quickIntakeDate.toDateString(),quickIntakeTime,1,favInhaler); //default number of puff is one
        favInhaler.checkDose();
    })