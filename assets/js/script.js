import altImg from '../modules/altImg.js';
let contentWrapper = document.getElementById('root');
let selectTag = document.getElementById('select');
console.log(selectTag.children);

const students = [
    { id: 1, imgUrl:`assets/img/img2.png`, stName: 'Amit Sharma', Marks: 90 , Grade: 85 },
    { id: 2, imgUrl:`assets/img/img2.png`, stName: 'Riyash Sharma', Marks: 92, Grade: 85 },
    { id: 3, imgUrl:`assets/img/img2.png`, stName: 'Amit Joshi', Marks: 76, Grade: 85 },
    { id: 4, imgUrl:`assets/img/img2.png`, stName: 'Neha Verma', Marks: 59, Grade: 85 },
    { id: 5, imgUrl:`assets/img/img2.png`, stName: 'Raj Singh', Marks: 48, Grade: 85 },
    { id: 6, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 7, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 8, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 9, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 10, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 11, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 12, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
    { id: 13, imgUrl:`assets/img/img2.png`, stName: 'Kunal Mehra', Marks: 48, Grade: 85 },
];



let marks = [];
students.forEach(function(student){
    if(student.Marks < 90){
        student.Grade = 'B+'
    }else{
        student.Grade = 'A+'
    }
    marks.push(student.Marks);
})



function cardstemp(imgurl, name,rollNo, marks, grade){
    let element = document.createElement('div');
    element.classList.add('cardItem');
    element.innerHTML = `<div class="card">
                            <img src="${imgurl ? imgurl: 'assets/img/img1.png'}" alt="mohd-anas">
                            <h4>Name : ${name ? name : 'John Doe'}</h4>
                            <h4>Roll No : ${rollNo ? rollNo : 'XX'}</h4>
                            <h4>Total Marks : ${marks ? marks: 0}</h4>
                            <h4>Grade : ${grade ? grade : 'E+'}</h4>
                        </div>`;
    contentWrapper.appendChild(element);
    return imgurl, name, marks, grade;
}
function test(){
    return 1;
}
function sortbymarks(){
    return 0;
}

// sortbymarks();
// test();

if(test() == 5){
    for(let i = 0; students.length > i; i++){
        cardstemp(students[i].imgUrl,students[i].stName,students[i].id,students[i].Marks,students[i].Grade);
    }
}else if(sortbymarks() == 5){
    students = students.slice().sort((a,b)=> a.Marks -  b.Marks);
    console.log(students);
    
    for(let i = 0; students.length > i; i++){
        cardstemp(students[i].imgUrl,students[i].stName,students[i].id,students[i].Marks,students[i].Grade);
    }
}
altImg;