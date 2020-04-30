// select the elements
const leaveReminderBtn = document.querySelector('#leaveReminderBtn');
const viewRemindersSection = document.querySelector('#viewRemindersSection');
const here = document.querySelector('#here');
const yourRemindersSection = document.querySelector('#yourRemindersSection');
const leaveReminderSection = document.querySelector('#leaveReminderSection');
const newReminderSection = document.querySelector('#newReminderSection');
const leaveNewReminderBtn = document.querySelector('#leaveNewReminderBtn');
const sendNewReminderBtn = document.querySelector('#sendNewReminderBtn');
const input = document.querySelector('input');
const leaveAnotherReminderBtn = document.querySelector('#leaveAnotherReminderBtn');
const viewRemindersList = document.querySelector('ol');

// initialize empty array
let reminders = [];

// loop through the array and list out on page
const listReminders = (array) => {
    reminders = [];
    console.log(reminders);
    for (let item of array) {
        let li = document.createElement('LI');
        viewRemindersList.appendChild(li);
        li.textContent = item;
        // viewRemindersList.innerHTML += `<li>${item}</li>;
    }   
};

// reset the array and delete items
const deleteReminders = () => {
    const listItems = document.querySelectorAll('li');
    for(let item of listItems){
        viewRemindersList.removeChild(item);
    }
};

deleteRemindersBtn.addEventListener('click', () => {
    deleteReminders();
});

// when we click the leave reminder button : do this
leaveReminderBtn.addEventListener('click', () => {
    input.style.display = 'none';
    viewRemindersSection.style.display = 'block';
    leaveAnotherReminderBtn.style.display = 'block';
    leaveReminderBtn.style.display = 'none';
    reminders.push(input.value);
    input.value = '';
});

// when we click the Here text : do this
here.addEventListener('click', () => {
    yourRemindersSection.style.display = 'block';
    newReminderSection.style.display = 'block';
    leaveReminderSection.style.display = 'none';
    leaveReminderButtons.style.display = 'none';
    viewRemindersSection.style.display = 'none';
    listReminders(reminders);
    console.log('')
});

// when we click the Send New Reminder button : do this
sendNewReminderBtn.addEventListener('click', () => {
    leaveReminderSection.style.display = 'block';
    leaveReminderButtons.style.display = 'block';
    input.style.display = 'block';
    yourRemindersSection.style.display = 'none';
    newReminderSection.style.display = 'none';
    leaveAnotherReminderBtn.style.display = 'none';
    leaveReminderBtn.style.display = 'block';

});

// when we click the Leave Another Reminder button : do this
leaveAnotherReminderBtn.addEventListener('click', () => {
    leaveReminderSection.style.display = 'block';
    viewRemindersSection.style.display = 'none';
    input.style.display = 'block';
    leaveAnotherReminderBtn.style.display = 'none';
    leaveReminderBtn.style.display = 'block';

});
