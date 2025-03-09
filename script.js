
// Toggling Course Type
document.getElementById(`theoryRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.remove(`hidden`);
    document.getElementById(`infoLab`).classList.add(`hidden`);
    document.getElementById(`gradeSheetLab`).classList.add(`hidden`);
    document.getElementById(`Ani1`).classList.remove(`hidden`);
   
});

document.getElementById(`LabRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.add(`hidden`);
    document.getElementById(`infoLab`).classList.remove(`hidden`);
    document.getElementById(`gradeSheet`).classList.add(`hidden`);
    document.getElementById(`Ani1`).classList.remove(`hidden`);
   
   

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
    else{

        let Attendance = parseFloat(document.getElementById(`LabAttendence`).value);
        let labPerformance = parseFloat(document.getElementById(`LabPer`).value);
        let labReport = parseFloat(document.getElementById(`LabRep`).value);
        let Project = parseFloat(document.getElementById(`Project`).value);

        if(Attendance >100 || labPerformance > 25 || labReport >25 || Project>40){
            alert("invalid Input, Fill up Carefully");
            return;
        }

        Attendance = (10 * Attendance) / 100;

        let totalMarks = Attendance + labPerformance + labReport + Project;

        document.getElementById('TM').innerText = totalMarks;
        const Points = document.getElementById('Points');
        const Grade = document.getElementById('Grade');

        if(totalMarks < 39){
            Points.innerText = '0.00';
            Grade.innerText = 'F'
        }
        else if(totalMarks <= 44){
            Points.innerText = '2.00';
            Grade.innerText = 'D'

        }
        else if(totalMarks <= 49){
            Points.innerText = '2.25';
            Grade.innerText = 'C'

        }
        else if(totalMarks <= 54){
            Points.innerText = '2.50';
            Grade.innerText = 'C+'

        }
        else if(totalMarks <= 59){
            Points.innerText = '2.75';
            Grade.innerText = 'B-'

        }
        else if(totalMarks <= 64){
            Points.innerText = '3.00';
            Grade.innerText = 'B'

        }
        else if(totalMarks <= 69){
            Points.innerText = '3.25';
            Grade.innerText = 'B+'

        }
        else if(totalMarks <= 74){
            Points.innerText = '3.50';
            Grade.innerText = 'A-'

        }
        else if(totalMarks <= 79){
            Points.innerText = '3.75';
            Grade.innerText = 'A'

        }
        else if(totalMarks >79){
            Points.innerText = '4.00';
            Grade.innerText = 'A+'

        }



        document.getElementById(`Ani1`).classList.add(`hidden`);
        document.getElementById(`gradeSheetLab`).classList.remove(`hidden`);


    }
    
})








