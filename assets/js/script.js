import altImg from '../modules/altImg.js';
let contentWrapper = document.querySelector('.root');
let sortedBy = document.getElementById('sortedBy');
console.log(sortedBy);

let marks = [];
const students = [
    { id: 1, imgUrl:`assets/img/img2.jpg`, stName: 'Amit Sharma', Marks: 90 ,},
    { id: 2, imgUrl:`assets/img/img2.jpg`, stName: 'Riyash Sharma', Marks: 92, },
    { id: 3, imgUrl:`assets/img/img2.jpg`, stName: 'Amit Joshi', Marks: 65, },
    { id: 4, imgUrl:`assets/img/img2.jpg`, stName: 'Neha Verma', Marks: 55, },
    { id: 5, imgUrl:`assets/img/img2.jpg`, stName: 'Raj Singh', Marks: 75, },
    { id: 6, imgUrl:`assets/img/img2.jpg`, stName: 'Kunal Mehra', Marks: 40, },
    { id: 7, imgUrl:`assets/img/img2.jpg`, stName: 'Kunal Mehra', Marks: 32, },
    { id: 8, imgUrl:`assets/img/img2.jpg`, stName: 'Kunal Mehra', Marks: 22, },
    { id: 9, imgUrl:`assets/img/img2.jpg`, stName: 'Kunal Mehra', Marks: 22, },
    { id: 10, imgUrl:`assets/img/img2.jpg`, stName: 'Kunal Mehra', Marks: 2,},
];
students.forEach(function(student){
    if(student.Marks >= 90){
        student.Grade = 'A+'
    }else if(student.Marks < 90 && student.Marks > 70){
        student.Grade = 'B+'
    }else if(student.Marks < 70 && student.Marks > 40){
        student.Grade = 'C+'
    }else if(student.Marks < 40 && student.Marks >= 33){
        student.Grade = 'D+'
    }else{
        student.Grade = 'E+'
    }
    if(student.Grade == 'A+'){
        student.Result = 'Pass';
    }else if(student.Grade == 'B+'){
        student.Result = 'Pass';
    }else if(student.Grade == 'C+'){
        student.Result = 'Pass';
    }else if(student.Grade == 'D+'){
        student.Result = 'Pass';
    }else{
        student.Result = 'Fail';
    }
    // marks.push(student.Marks);
})

function cardstemp(name,rollNo, marks, grade, result){
    let element = document.createElement('tr');
    element.innerHTML += `
                            <td>${rollNo ? rollNo : 'John Doe'}</td>
                            <td>${name ? name : '#xx'}</td>
                            <td>${marks ? marks : '#xx'}</td>
                            <td>${grade ? grade : '#xx'}</td>
                            <td>${result ? result : '#xx'}</td>
                        `;
    contentWrapper.append(element)
}

document.getElementById('select').addEventListener('change', function(){
    let selectValue = this.value;
    contentWrapper.innerHTML = ``;
    let listToRender = [];
    if(selectValue == "Marks"){
        listToRender = students.slice().sort((a,b)=> b.Marks -  a.Marks);
        sortedBy.textContent = selectValue;
    }else if(selectValue == "Grade"){
        sortedBy.textContent = selectValue;
        listToRender = students.slice().sort((a, b) => a.Grade.localeCompare(b.Grade));
        console.log(students.slice().sort((a,b)=> b.Grade -  a.Grade));
    }else if(selectValue == "Name"){
        sortedBy.textContent = selectValue;
        listToRender = students.slice().sort((a, b) => a.stName.localeCompare(b.stName));
    }else{
        sortedBy.textContent = selectValue;
        listToRender = students;
    }
    console.log(listToRender);

    for(let i = 0; students.length > i; i++){
        cardstemp(
            // listToRender[i].imgUrl,
            listToRender[i].stName,
            listToRender[i].id,
            listToRender[i].Marks,
            listToRender[i].Grade,
            listToRender[i].Result
        )}
    });


    for(let i = 0; students.length > i; i++){
        cardstemp(
            // students[i].imgUrl,
            students[i].stName,
            students[i].id,
            students[i].Marks,
            students[i].Grade,
            students[i].Result
        )};
altImg;