
// Toggling Course Type
document.getElementById(`theoryRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.remove(`hidden`);
    document.getElementById(`infoLab`).classList.add(`hidden`);
});

document.getElementById(`LabRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.add(`hidden`);
    document.getElementById(`infoLab`).classList.remove(`hidden`);

});






const LabAttendence = parseFloat(document.getElementById(`LabAttendence`).value);
const LabPer = parseFloat(document.getElementById(`LabPer`).value);
const LabRep = parseFloat(document.getElementById(`LabRep`).value);
const Project = parseFloat(document.getElementById(`Project`).value);


document.getElementById(`GradCalBtn`).addEventListener(`click`,function(){

    const cur = document.querySelector(`.hidden`).id;
    
    
    if(cur != "infoTheory"){

        let Attendance = parseFloat(document.getElementById(`Attendance`).value);
        let Assignments = parseFloat(document.getElementById(`Assignments`).value);
        let Presentation = parseFloat(document.getElementById(`Presentation`).value);
        let Quiz = parseFloat(document.getElementById(`Quiz`).value);
        let Mid = parseFloat(document.getElementById(`Mid`).value);

        if(Attendance >100 || Assignments > 5 || Presentation >8 || Quiz > 15 || Mid > 25){
            alert("invalid Input, Fill up Carefully");
            return;
        }

        Attendance = (7 * Attendance) / 100;

        let totalMarks = Attendance + Assignments + Presentation + Quiz + Mid;

        // 4.00
        const ap = document.getElementById(`G4.00`);
        if(80 - totalMarks > 0) ap.innerText = (80 - totalMarks).toFixed(2);

        //3.75
        const a = document.getElementById(`G3.75`);
        if(75 - totalMarks > 0) a.innerText = (75 - totalMarks).toFixed(2);

        //3.50
        const am = document.getElementById(`G3.50`);
        if(70 - totalMarks > 0) am.innerText = (70 - totalMarks).toFixed(2);;

        //3.25
        const bp = document.getElementById(`G3.25`);
        if(65 - totalMarks > 0) bp.innerText = (65 - totalMarks).toFixed(2);;

        //3.00
        const b = document.getElementById(`G3.00`);
        if(60 - totalMarks > 0) b.innerText = (60 - totalMarks).toFixed(2);;

        //2.75
        const bm = document.getElementById(`G2.75`);
        if(55 - totalMarks > 0) bm.innerText = (55 - totalMarks).toFixed(2);;

        //2.50
        const cp = document.getElementById(`G2.50`);
        if(50 - totalMarks > 0) cp.innerText = (50 - totalMarks).toFixed(2);;

        //2.25
        const c = document.getElementById(`G2.25`);
        if(45 - totalMarks > 0) c.innerText = (45 - totalMarks).toFixed(2);;

        //2.00
        const cm = document.getElementById(`G2.00`);
        if(40 - totalMarks > 0) b.innerText = (40 - totalMarks).toFixed(2);;


        document.getElementById(`Ani1`).classList.add(`hidden`);
        document.getElementById(`gradeSheet`).classList.remove(`hidden`);

        
        
        
        
    }
    
})








