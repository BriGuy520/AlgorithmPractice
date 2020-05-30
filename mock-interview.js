// Figure out the times two individuals can schedule a meeting. 

// Sample Data: 
// [['9:00', '10:30'], ['12:00', '13:00'], [16:00, '18:00]]
// ['9:00', '20:00']

// [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
// ['10:00', '18:30]

// Sample Output:
// [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]


const employee1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']];
const employee2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']];
const employee1AvailableSchedule = ['9:00', '20:00'];
const employee2AvailableSchedule = ['10:00', '18:30'];

function parseAvailableTime(employeeSch){
  let newArr = [];
  employeeSch.foreach((time, idx) => {
    if( idx % 2 === 0){
      newArr.push(time[1]);
    } else {
      newArr.push(time[0]);
    }
  })
}

let employee1AvailableTime = parseAvailableTime(employee1);

console.log(employee1AvailableTime);

