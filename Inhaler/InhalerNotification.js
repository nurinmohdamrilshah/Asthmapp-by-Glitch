// reference: https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce
// reference: https://www.makeuseof.com/send-push-notifications-with-javascript/


        for (let i = 0; i <= Inhaler.getAllInhalers().length; i++) {
            if (Inhaler.getInhaler(i).isExpired()) {
                new Notification(Inhaler.getInhaler(i).getName() + " is Expired!", {
                    body: "Remember to get a new one soon from your local pharmacy."
                })
            }

            for (let j = 0; j <= Inhaler.getInhaler(i).getAllDoses().length; i++) {
                let thisDose = Inhaler.getInhaler(i).getDose(j);
                new Notification(Inhaler.getInhaler(i).getName() + "Intake!", {
                    body: "Based on your dosage, we recommend this inhaler intake of maximum "
                        + thisDose.getMaxDose() + "mg, which is around " + (thisDose.getMaxDose() / 5) + " puffs."
                    //showTrigger : new TimestampTrigger(thisDose.getReminderTime())
                })
            }


            if (Inhaler.getInhaler(i).isOverused()) {
                new Notification(Inhaler.getInhaler(i).getName() + " is Overused!", {
                    body: "It is recommended to space out this inhaler intake according to dose."
                })
            }
            if (Inhaler.getInhaler(i).isAlmostEmpty()) {
                new Notification("Warning:" + Inhaler.getInhaler(i).getName() + " Almost Run Out!", {
                    body: "Remember to get a new one soon from your local pharmacy."
                })
            }
        }

