    var popupclose = document.getElementById("closeBtn");
    if (popupclose) {
        popupclose.addEventListener("click", function (e) {
            var popup = e.currentTarget.parentNode;
            function isOverlay(node) {
                return !!(node && node.classList && node.classList.contains("popup-overlay"));
            }
            while (popup && !isOverlay(popup)) {
                popup = popup.parentNode;
            }
            if (isOverlay(popup)) {
                popup.style.display = "none";
            }
        });
    }

    var popupaddIntakeBtn = document.getElementById("addIntakeBtn");
    if (popupaddIntakeBtn) {
        popupaddIntakeBtn.addEventListener("click", function (e) {
            var popup = e.currentTarget.parentNode;
            function isOverlay(node) {
                return !!(node && node.classList && node.classList.contains("popup-overlay"));
            }
            while (popup && !isOverlay(popup)) {
                popup = popup.parentNode;
            }
            if (isOverlay(popup)) {
                popup.style.display = "none";
            }
        });
    }

    const addIntakeBtn = document.getElementById("addIntakeBtn");
    const newIntakeTime = document.getElementById("intakeTimeVar");
    const newIntakePuffs = document.getElementById("nbPuffsVar");
    const inhalerSection = document.getElementById("pickInhaler");
    let newIntakeInhaler = 0;

    inhaler1 = new Inhaler('main',50,'01 Jan 1970 00:00:00 GMT','Crisis')
    function createSelectInhalerBtn(inhaler){
        let selectInhalerBtn;
        selectInhalerBtn = document.createElement('button');
        selectInhalerBtn.className = 'selectInhaler';
        selectInhalerBtn.addEventListener('click', function () {
            newIntakeInhaler = inhaler;
        })
        selectInhalerBtn.id = 'select'+inhaler.getName()
        let divBtn = document.createElement('div')
        let name = document.createElement('name');
        name.textContent = inhaler.getName(); //reference:https://www.tutorialspoint.com/how-to-append-data-to-div-element-using-javascript
        divBtn.appendChild(name)
        divBtn.appendChild(inhaler.getName())
        selectInhalerBtn.appendChild(divBtn)
        inhalerSection.appendChild(selectInhalerBtn);
    }
    for (let i=0;i<Inhaler.getAllInhalers().length;i++){
        createSelectInhalerBtn(Inhaler.getInhaler(i))
    }




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


