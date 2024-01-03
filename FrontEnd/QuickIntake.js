//setting up for quick add intake
    const cancelBtn = document.getElementById("cancelBtn");
    let favInhalerName = document.getElementById("favInhalerName");

    favInhalerName.textContent = Inhaler.favInhaler.getName();

    cancelBtn.addEventListener('click', function () {
            Inhaler.favInhaler.removeLastIntake();
    })
