$(document).ready(function () {
    $('button[name="sub2"]').click(function (event) {
        event.preventDefault(); 

        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var txtarea = $('#txtarea').val();


        
        if (fname === '' || lname === '' || phone === '' || email === '' || txtarea === '') {
            alert('Please fill out all fields');
            return false;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        if (!$('input[name="gender"]:checked').length) {
            alert('Please select your gender');
            return false;
        }

        if ($('#select').val() === '0') {
            alert('Please select your education level');
            return false;
        }

        var datalistValue = $('#datalist').val();
        console.log("Selected value from datalist:", datalistValue);

        
        if (!datalistValue.trim()) {
            alert('Please select or enter a valid reason for contacting');
            return false;
        }



        var isChecked = false;
        $('input[name="exam"]').each(function () {
            if ($(this).prop('checked')) {
                isChecked = true;
                return false; 
            }
        });

        if (!isChecked) {
            alert('Please select at least one exam');
            return false;
        }







        $('form[name="form"]').submit();
    });
});