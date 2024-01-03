class Dosage{
    constructor(time){
        this.reminderTime = Date.parse(time);
        this.maxPuffAllowed = 2;
    }
    getReminderTime(){
        return this.reminderTime
    }
    getMaxDose(){
        return this.maxPuffAllowed*5
    }
}

class Intake{
    static allIntakes=[]
    constructor(intakeTime, puffs, whichInhaler){
        this.timestamp = Date.parse(intakeTime);
        this.puffTaken = puffs; // 1 puff is 100mg
        this.inhaler = whichInhaler
        Intake.allIntakes.push(this)
    }

    getTime(){
        return this.timestamp.toLocaleString()
    }
    getPuffs(){
        return this.puffTaken
    }
    forWhichInhaler(){
        return this.inhaler.getName()
    }
    static getAllIntakes(){
        return Intake.allIntakes;
    }
    static getIntake(index){
        return Intake.allIntakes[index]
    }
}

class Inhaler{
    static inhalers = [];
    static favInhaler = null;

    constructor(inhalerName,vol,expDate,type){
        this.volume = vol;
        this.name = inhalerName;
        this.expiryDate = Date.parse(expDate);
        this.type = type;

        this.dose =  [];
        this.allIntakes = [];
        Inhaler.inhalers.push(this);
    }
    getAllInhalerIntakes(){
        return this.allIntakes
    }

    getExpDate(){
        return this.expiryDate
    }

    isExpired(){
        return this.getExpDate() < Date.now();
    }
    getName(){
        return this.name
    }

    setDose(intakeTime){
        this.dose.push(new Dosage(intakeTime));
        let now = Date.now();
        // setting next dose using for loop
        for (let i = 0; i >= this.getAllDoses().length();i++){
            let doses = this.getAllDoses();
            let allDiff = [];
            if (doses(i).getTime()>now.getTime()){
                let diff = doses(i).getTime()-now.getTime();
                allDiff.push(diff);
                if (allDiff.min() === diff){
                    this.nextDose = doses(i);
                }
            }
            else this.dose.splice(i,1)
        }
    }

    getDose(index){
        return this.dose(index);
    }

    getAllDoses(){
        return this.dose
    }

    getType(){return this.type;}


    addIntake(time,puff){
        this.lastIntake = new Intake(time,puff,this);
        this.allIntakes.push(this.lastIntake);
        this.lastIntakeTime = this.lastIntake.getTime();

        //if (this.lastIntakeTime<(this.nextDose.getTime()-3600000)){}
        this.volume = this.volume - (this.lastIntake.getPuffs()*5);
        //this.isAlmostEmpty();
    }

    removeLastIntake(){
        this.allIntakes.slice(0, -1)
        this.lastIntake = this.allIntakes[0];
        this.lastIntakeTime = this.lastIntake.getTime();
        this.volume = this.volume + (this.lastIntake.getPuffs()*5);
    }

    isOverused(){ //intake is earlier by 1 hour or more
        return this.getLastIntakeTime() < (this.getNextDoseTime() - 3600000);
    }

    getLastIntakeTime(){
        return this.lastIntakeTime
    }

    getNextDoseTime(){
        return this.nextDose.getReminderTime().toLocaleTimeString()
    }

    isAlmostEmpty(){
        return this.volume < 10;
    }

    static getInhaler(index){
        return Inhaler.inhalers[index];
    }
    static getFavInhaler(){
        return Inhaler.favInhaler
    }

    static getAllInhalers(){
        return Inhaler.inhalers;
    }
    setFav(){
        Inhaler.favInhaler=this;
    }

}
