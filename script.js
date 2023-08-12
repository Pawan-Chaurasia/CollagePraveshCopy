const a1 = document.getElementById('choosebox-1');
const b1 = document.getElementById('move1'); 
a1.addEventListener('mouseover',() => {
    b1.classList.add('design');  
})
a1.addEventListener('mouseleave',() => {
    b1.classList.remove('design');  
})

const a2 = document.getElementById('choosebox-2');
const b2 = document.getElementById('move2'); 
a2.addEventListener('mouseover',() => {
    b2.classList.add('design');  
})
a2.addEventListener('mouseleave',() => {
    b2.classList.remove('design');  
})
const a3= document.getElementById('choosebox-3');
const b3 = document.getElementById('move3'); 
a3.addEventListener('mouseover',() => {
    b3.classList.add('design');  
})
a3.addEventListener('mouseleave',() => {
    b3.classList.remove('design');  
})
const a4= document.getElementById('choosebox-4');
const b4 = document.getElementById('move4'); 
a4.addEventListener('mouseover',() => {
    b4.classList.add('design');  
})
a4.addEventListener('mouseleave',() => {
    b4.classList.remove('design');  
})
const a5 = document.getElementById('choosebox-5');
const b5 = document.getElementById('move5'); 
a5.addEventListener('mouseover',() => {
    b5.classList.add('design');  
})
a5.addEventListener('mouseleave',() => {
    b5.classList.remove('design');  
})
const a6 = document.getElementById('choosebox-6');
const b6 = document.getElementById('move6'); 
a6.addEventListener('mouseover',() => {
    b6.classList.add('design');  
})
a6.addEventListener('mouseleave',() => {
    b6.classList.remove('design');  
})
const a7 = document.getElementById('newsbox-7');
const b7 = document.getElementById('data7'); 
a7.addEventListener('mouseover',() => {
    b7.innerText="Click here for More News ➡"; 
    a7.classList.add('newsbrief');   
})
a7.addEventListener('mouseleave',() => {
    a7.classList.remove('newsbrief');  
    b7.innerText="More ➡";
})
const a8 = document.getElementById('newsbox-1');
const b8 = document.getElementById('data1'); 
a8.addEventListener('mouseover',() => {
    b8.innerText="The official mock test for candidates appearing for the CUSAT CAT 2023 computer based test is now available."; 
    a8.classList.add('newsbrief');   
})
a8.addEventListener('mouseleave',() => {
    a8.classList.remove('newsbrief');  
    b8.innerText="CUSAT CAT 2023: Official Mock Test";
})
const a9 = document.getElementById('newsbox-2');
const b9 = document.getElementById('data2'); 
a9.addEventListener('mouseover',() => {
    b9.innerText="Cochin University of Science and Technology has released the Admit Card for CUSAt CAT 2023 examination. The candidates who had successfully submitted their application form can download their hall ticket."; 
    a9.classList.add('newsbrief');   
})
a9.addEventListener('mouseleave',() => {
    a9.classList.remove('newsbrief');  
    b9.innerText="CUSAT CAT 2023: Admit Card Released";
})
const a10 = document.getElementById('newsbox-3');
const b10 = document.getElementById('data3'); 
a10.addEventListener('mouseover',() => {
    b10.innerText="IIITH UGEE 2023:Admit CArd Released. IIIT Hyderabad has released the admit Cards for candidates appearing in IIITH UGEE 2022 examination."; 
    a10.classList.add('newsbrief');   
})
a10.addEventListener('mouseleave',() => {
    a10.classList.remove('newsbrief');  
    b10.innerText="IIITH UGEE 2023: Admit Card Released";
})
const a11 = document.getElementById('newsbox-4');
const b11 = document.getElementById('data4'); 
a11.addEventListener('mouseover',() => {
    b11.innerText="The State Common Entrance Test Cell,Government of Maharashtra has made available the facility to edit one's particulars in the Application Form for MHT-CET 2023 examination."; 
    a11.classList.add('newsbrief');   
})
a11.addEventListener('mouseleave',() => {
    a11.classList.remove('newsbrief');  
    b11.innerText="MHT CET 2023: Application Correction Facility (Open)";
})
const a12 = document.getElementById('newsbox-5');
const b12 = document.getElementById('data5'); 
a12.addEventListener('mouseover',() => {
    b12.innerText="Candidates applying for JEE Main 2023 exam are provided with an opportunity to modify their Category in the Online Application Form."; 
    a12.classList.add('newsbrief');   
})
a12.addEventListener('mouseleave',() => {
    a12.classList.remove('newsbrief');  
    b12.innerText="JEE Main 2023: Category Correction Facility";
}) 
const a13 = document.getElementById('newsbox-6');
const b13 = document.getElementById('data6'); 
a13.addEventListener('mouseover',() => {
    b13.innerText="MAHE has opened the slot booking portal for Manipal Entrance Test(MET)2023 Examination. The candidates are advised to book their test slot as early as possible."; 
    a13.classList.add('newsbrief');   
})
a13.addEventListener('mouseleave',() => {
    a13.classList.remove('newsbrief');  
    b13.innerText="MET 2023: Slot Booking";
})

const a14 = document.getElementById('right-arrow-2'); 
const b14 = document.getElementById('college-slide-1');
const c14 = document.getElementById('college-slide-2');
a14.addEventListener('click',() => {
    b14.style.left="-1000%";   
    c14.style.left="0px"
})
const a15 = document.getElementById('right-arrow-4'); 
const b15 = document.getElementById('college-slide-2');
const c15 = document.getElementById('college-slide-3');
a15.addEventListener('click',() => {
    b15.style.left="-1000%";   
    c15.style.left="0px"
})
const a16 = document.getElementById('left-arrow-3'); 
const b16 = document.getElementById('college-slide-2');
const c16 = document.getElementById('college-slide-1');
a16.addEventListener('click',() => {
    b16.style.left="-1000%";   
    c16.style.left="0px"
})
const a17 = document.getElementById('left-arrow-5'); 
const b17 = document.getElementById('college-slide-3');
const c17 = document.getElementById('college-slide-2');
a17.addEventListener('click',() => {
    b17.style.left="-1000%";   
    c17.style.left="0px"
})







const a99 = document.getElementById('nav-toggle');
const b99 = document.getElementById('top-nav-right');
a99.addEventListener('click',() => {
    b99.classList.toggle('active');      
})
    