// THIS FUNCTION IS FOR PRINTING DATE ON GATEPASS
const d = new Date();
const currdate = d.toDateString();
document.getElementById("curr_date").innerHTML = currdate;
document.getElementById("now_date").innerHTML = currdate;
document.getElementById("today_date").innerHTML = currdate;

let count = 5;
function applymedicalleave(){
    var table = document.getElementById("medical_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = count--;
    cell2.innerHTML = document.getElementById("date_from").value;
    cell3.innerHTML = document.getElementById("date_to").value;
    cell4.innerHTML = "Pending";
    window.alert("Successfully Applied")
}
// THIS FUNCTION IS TO APPEND GATEPASS DETAILS IN THE HISTORY
function applygatepass(){
    var table = document.getElementById("gatepass_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = currdate;
    cell2.innerHTML = document.getElementById("from_date").value;
    cell3.innerHTML = document.getElementById("to_date").value;
    cell4.innerHTML = "Pending";
    window.alert("Successfully Applied")
}

function applycheckout(){
    if(confirm("Are you sure you want to check out") == true){
        window.alert("Checkout Request Successfully Registered");
    };
}

function discontinue(){
    if(confirm("Are you sure you want to discontinue") == true){
        window.alert("Discontinue Request Successfully Registered");
    };
}
function submitfeedback(){
    window.alert("Thank you for the Feedback");
}
function submit_suggestion(){
        window.alert("Thank You for your Suggestion");
    };

function teacher_PIJ(){
    document.getElementById("teacher_name").innerHTML = "Dr. Aakash Sinha"
}
function teacher_FSD(){
    document.getElementById("teacher_name").innerHTML = "Dr. Preeti Sharma";
}
function teacher_DevOps(){
    document.getElementById("teacher_name").innerHTML = "Dr. Piyush Saxena"
}
function teacher_SD(){
    document.getElementById("teacher_name").innerHTML = "Mr. Amanpreet Singh";
}
function teacher_BC(){  
    document.getElementById("teacher_name").innerHTML = "Ms. Harsimran Kaur"
}
function teacher_ES(){
    document.getElementById("teacher_name").innerHTML = "Ms. Ishita Gupta";
}




// FUNCTION TO DISPLAY MARKS ACCORDING TO SEMESTER
function marks_sem1(){
    const show_marks_section = document.getElementById("sem_1_marks");
    const all_marks_pages = document.getElementsByClassName("marks_sections");
    for(let i=0;i<all_marks_pages.length;i++){
        all_marks_pages[i].style.display = "none";
    }
    document.getElementById("marks_text").style.display = "none";
    show_marks_section.style.display = "block";
}
function marks_sem2(){
    const show_marks_section = document.getElementById("sem_2_marks");
    const all_marks_pages = document.getElementsByClassName("marks_sections");
    for(let i=0;i<all_marks_pages.length;i++){
        all_marks_pages[i].style.display = "none";
    }
    document.getElementById("marks_text").style.display = "none";
    show_marks_section.style.display = "block";
}
function marks_sem3(){
    const show_marks_section = document.getElementById("sem_3_marks");
    const all_marks_pages = document.getElementsByClassName("marks_sections");
    for(let i=0;i<all_marks_pages.length;i++){
        all_marks_pages[i].style.display = "none";
    }
    document.getElementById("marks_text").style.display = "none";
    show_marks_section.style.display = "block";
}
function marks_sem4(){
    const show_marks_section = document.getElementById("sem_4_marks");
    const all_marks_pages = document.getElementsByClassName("marks_sections");
    for(let i=0;i<all_marks_pages.length;i++){
        all_marks_pages[i].style.display = "none";
    }
    document.getElementById("marks_text").style.display = "none";
    show_marks_section.style.display = "block";
}
function marks_sem5(){
    const show_marks_section = document.getElementById("sem_5_marks");
    const all_marks_pages = document.getElementsByClassName("marks_sections");
    for(let i=0;i<all_marks_pages.length;i++){
        all_marks_pages[i].style.display = "none";
    }
    document.getElementById("marks_text").style.display = "none";
    show_marks_section.style.display = "block";
}




// FUNCTIONS FOR DISPLAYING PERSONAL INFO
function show_personal_details(){
    const show_section = document.getElementById("personal_details");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_academic_details(){
    const show_section = document.getElementById("academic_details");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_apply_leave(){
    const show_section = document.getElementById("apply_leave");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}

// FUNCTIONS FOR DISPLAYING ACADEMIC Info
function show_marks(){
    const show_section = document.getElementById("academic_marks");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_attendance(){
    const show_section = document.getElementById("academic_attendance");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_timetable(){
    const show_section = document.getElementById("academic_timetable");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_reportcard(){
    const show_section = document.getElementById("academic_reportcard");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}


// FUNCTIONS FOR DISPLAYING HOSTEL INFO
function show_hostel_details(){
    const show_section = document.getElementById("hostel_details");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_hostel_fee_payment(){
    const show_section = document.getElementById("hostel_fee_payment");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_gatepass(){
    const show_section = document.getElementById("hostel_gatepass");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_checkout(){
    const show_section = document.getElementById("hostel_checkout");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}


// FUNCTIONS FOR DISPLAYING TRANSPORT INFO
function show_transport_details(){
    const show_section = document.getElementById("transport_details");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_transport_fee_payment(){
    const show_section = document.getElementById("transport_fee_payment");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_discontinue(){
    const show_section = document.getElementById("transport_discontinue");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}

// FUNCTIONS FOR DISPLAYING FEE AND PAYMENT
function show_academic_fee(){
    const show_section = document.getElementById("academic_fee");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_fines_and_dues(){
    const show_section = document.getElementById("fines_and_dues");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_fee_payment_history(){
    const show_section = document.getElementById("fee_payment_history");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}

// FUNCTIONS FOR DISPLAYING SURVEYS AND FORMS
function show_faculty_feedback(){
    const show_section = document.getElementById("faculty_feedback");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}
function show_suggestions(){
    const show_section = document.getElementById("suggestions");
    const all_pages = document.getElementsByClassName("main_page");
    for(let i = 0;i < all_pages.length;i++){
        all_pages[i].style.display = "none";
    }
    show_section.style.display = "flex";
}