function check_valid() {
    var valid = true;

    if (document.getElementById('fname').value == "") {
        alert("Please Enter Your First Name.");
        valid = false;
        return false;
    }

    if (document.getElementById('lname').value == "") {
        alert("Please Enter Your Last Name.");
        valid = false;
        return false;
    }

    if (document.getElementById('phone').value == "") {
        alert("Please Enter Your Phone Number.");
        valid = false;
        return false;
    }

    if (document.getElementById('email').value == "") {
        alert("Please Enter Your Email.");
        valid = false;
        return false;
    }

    if (document.getElementById('txtarea').value == "") {
        alert("Please Type Your Message.");
        valid = false;
        return false;
    }
   
    if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
        alert('Please select a gender');
        valid = false;
        return false;
    }

    var checks = [];

    if (document.getElementById('c++').checked) {
        checks.push('c++');
    }
    if (document.getElementById('python').checked) {
        checks.push('python');
    }
    if (document.getElementById('c#').checked) {
        checks.push('c#');
    }
    if (document.getElementById('javascript').checked) {
        checks.push('javascript');
    }

    if (!(checks.length > 0)) {
        alert('Please Select at Least One Exam');
        valid = false;
        return false;
    }

    

    if (!(document.getElementById('select').selectedIndex > 0)) {
        alert('Please Select Your Education Level');
        valid = false;
        return false;
    }

    if (document.getElementById('datalist').value.trim() == "") {
        alert('Please Select The Reason For Contacting');
        valid = false;
        return false;
    }

    if (valid) {
        return true;
    }

}
