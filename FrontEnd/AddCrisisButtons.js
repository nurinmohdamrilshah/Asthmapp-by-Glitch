// function configureButtonInteractions() {
//     const symptomButtons = document.querySelectorAll('.symptomButton');
//     const allergenButtons = document.querySelectorAll('.allergenButton');
//     const locationButtons = document.querySelectorAll('.locationButton');
//     const resolutionButtons = document.querySelectorAll('.resolutionButton');
//
//     // Toggle state when symptom buttons are clicked
//     symptomButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const symptom = this.value;
//             const currentState = this.classList.contains('true');
//             // Toggle the selected class and update button text
//             this.classList.toggle('true', !currentState);
//             this.classList.toggle('false', currentState);
//         });
//     });
//
//     // Toggle state when allergen buttons are clicked
//     allergenButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const allergen = this.value;
//             const currentState = this.classList.contains('true');
//             // Toggle the selected class and update button text
//             this.classList.toggle('true', !currentState);
//             this.classList.toggle('false', currentState);
//         });
//     });
//
//     // Toggle state when location buttons are clicked
//     locationButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const location = this.value;
//             const currentState = this.classList.contains('true');
//             // Toggle the selected class and update button text
//             this.classList.toggle('true', !currentState);
//             this.classList.toggle('false', currentState);
//         });
//     });
//
//     // Toggle state when resolution buttons are clicked
//     resolutionButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const resolution = this.value;
//             const currentState = this.classList.contains('true');
//             // Toggle the selected class and update button text
//             this.classList.toggle('true', !currentState);
//             this.classList.toggle('false', currentState);
//         });
//     });
// }
//
// export default configureButtonInteractions