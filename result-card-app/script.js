function form_validation(){

    var eng=document.querySelector(".input_fields_eng").value;
    if (eng == "") {
        swal("Error!", "Number of English subject must be enter");
        return false;
    }
    if (eng<0 || eng>100 ) {
        swal("Error!","Subject English Number must be between 0 and  100");
        return false;
    }

    var math=document.querySelector(".input_fields_math").value;
    if (math == "") {
        swal("Error!","Number of math subject must be enter");
        return false;
    }
    if (math<0 || math>100 ) {
        swal("Error!","Subject Maths Number  must be between 0 and 100");
        return false;
    }

    var chem=document.querySelector(".input_fields_chem").value;
    if (chem == "") {
        swal("Error!","Number of chem subject must be enter");
        return false;
    }
    if (chem<0 || chem>100 ) {
        swal("Error!","Subject Chemistry Number must be between 0 and 100");
        return false;
    }

    var urdu=document.querySelector(".input_fields_urdu").value;
    if (urdu == "") {
        swal("Error!","Number of urdu subject must be enter");
        return false;
    }
    if (urdu<0 || urdu>100 ) {
        swal("Error!"," Subject Urdu Number must be between 0 and 100");
        return false;
    }

    var phy=document.querySelector(".input_fields_phy").value;
    if (phy == "") {
        swal("Error!","Number of physics subject must be enter");
        return false;
    }
    if (phy<0 || phy>100 ) {
        swal("Error!","Subject Physics Number must be between 0 and 100");
        return false;
    }

    var bio=document.querySelector(".input_fields_bio").value;
    if (bio == "") {
        swal("Error!","Number of biology subject must be enter");
        return false;
    }
    if (bio<0 || bio>100 ) {
        swal("Error!","Subject Biology Number must be between 0 and 100");
        return false;
    }
    return true
}

document.querySelector(".result_button").addEventListener("click",marks)
function marks(){
    if(form_validation() != false) { 
    var obtained_marks=0;
    var eng=parseInt(document.querySelector(".input_fields_eng").value);
    var math=parseInt(document.querySelector(".input_fields_math").value);
    var chem=parseInt(document.querySelector(".input_fields_chem").value);
    var urdu=parseInt(document.querySelector(".input_fields_urdu").value);
    var phy=parseInt(document.querySelector(".input_fields_phy").value);
    var bio=parseInt(document.querySelector(".input_fields_bio").value);
   
    obtained_marks=eng+math+chem+urdu+phy+bio;
    document.getElementById("addition").value = obtained_marks

    var persentage=((obtained_marks/600)*100).toFixed(2)
    document.getElementById("persentage").value = persentage

    var element = document.getElementById("display_result");
    element.classList.remove("display_result");

    if(persentage>=90 && persentage<=100){
    document.getElementById("grade").value = "A+"}

    else if(persentage>=80 && persentage<90){
        document.getElementById("grade").value = "A-"}

    else if(persentage>=70 && persentage<80){
        document.getElementById("grade").value = "B+"}

    else if(persentage>=60 && persentage<70){
        document.getElementById("grade").value = "B-"}

    else if(persentage>=50 && persentage<60){
        document.getElementById("grade").value = "C"}

    else{
        document.getElementById("grade").value = "Fail"}
        
}



}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    if(form_validation() != false) { 
  modal.style.display = "block";
}}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}