//crating afunction named createClassRoom
function createClassRoom(numberOfStudents) {
    const students = [];
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
    //loop from 0 to numbersOfStudents  that passes the number of iteration + 1 to studentSeat and adds its return value to the "students" array
    for (let i = 0; i < numberOfStudents; i++) {
      const seatNumber = i + 1;
      students.push(studentSeat(seatNumber));//using .push() method to add new items to the end of the "students" array
    }
    return students;
  }
  const classRoom = createClassRoom(10);
  
    