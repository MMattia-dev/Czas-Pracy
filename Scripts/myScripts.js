
function loadFirst() {
    var element = document.getElementById("text-navbar-middle");
    var i = element.offsetWidth / 2;
    var leftCalc = "calc(50% - " + i + "px)";
    element.style.left = leftCalc;
    $(element).animate({ opacity: 1 }, 200);
};

window.onload = function () {
    loadFirst();



    var g = 1;
    $('.days div').each(function () {
        if (!$(this).hasClass("prev-date") && !$(this).hasClass("next-date")) {
            $(this).attr('id', 'dayID_' + g++);
            $(this).attr('onclick', 'show_sidenav_right()');
        }
    });

};

$(document).ready(function () {

    //let keysPressed = {};
    //var ctrl = KeyboardEvent.ctrl;

    //if (ctrl.keysPressed) {
    //    alert();
    //}

    


    $('.days div').mouseover(function () {
        var id = this.id;

        $('#' + id).click(function () {
            

            $('.days div').css('background-color', 'white');
            $(this).css('background-color', 'rgba(238,167,68,0.9)');


            //if () {

            //}
            //else {

            //}
        });
    });

    $('.worker').click(function () {

        $('.worker').css('background-color', 'white');
        $(this).css('background-color', 'rgba(238,167,68,0.9)');
        //$(this).toggleClass("t");

        //alert(this.textContent);
        var e = document.getElementById("WorkName_id");
        e.innerText = this.textContent;

        loadFirst();
    });
    
/*background-color: darkgrey;*/

    /*rgba(238,167,68,0.9);*/


});

var boo = false;
function show_sidenav_right(){
    //if (boo) {
    //    $('.sidenav-right').animate({ 'width': 'toggle' }, 300);
    //}
    //else {
    //    $('.sidenav-right').animate({ 'width': 'toggle' }, 300);

    //}

    //boo = !boo;

    if (!boo) {
        $('.sidenav-right').animate({ 'width': 'toggle' }, 200);
        boo = true;


        setTimeout(function () {
            $('#sidenav_right_ID').fadeIn(200);
        }, 200);
    }
    
    
};



var bool_ = false;
function show_sidenav() {
    //$('.sidenav').animate({ 'width': 'toggle' }, 400);
    //$('.sidenav-icon').toggleClass("change-icon");

    //$('#show_depart').fadeToggle(200);
    //$('#lock').fadeToggle(200);
    if (bool_) {
        $('.sidenav').animate({ 'width': 'toggle' }, 300);
        $('.sidenav-icon').toggleClass("change-icon");
        $('#show_depart').fadeOut(100);
        $('#lock').fadeOut(100);
        $('#showAll').fadeOut(100);
    }
    else {
        $('.sidenav').animate({ 'width': 'toggle' }, 200);
        $('.sidenav-icon').toggleClass("change-icon");
        setTimeout(function () {
            $('#show_depart').fadeIn(100);
            $('#lock').fadeIn(100);
            $('#showAll').fadeIn(100);
        }, 200);
    }
    bool_ = !bool_;
};

function toggle_navbar_toggle(){
    $('.navbar-toggle').toggleClass("color");
};

function lock_click() {
    //var element = document.getElementById("show_depart");
    //setTimeout(function () {
        
        

    //}, 1000);
    //$(element).animate({ opacity: 1 }, 200);

    //element.fadeIn("fast");

    
};

function showAll_click() {
    swipe_workers1();
    swipe_workers2();
    swipe_workers3();
    swipe_workers4();
};



function workerClick() {
    //var Worker_name = document.getElementsByClassName("worker").textContent; //WorkName_id

    ////const div = document.querySelector("WorkName_id");
    ////div.textContent = 'mmm';
    //alert(Worker_name);
};


var bool_1 = false;
function swipe_workers1() {
    $('#it').slideToggle("fast");


    var element = document.getElementById("plus1");
    if (bool_1) {
        element.style.backgroundImage = 'url("../../Content/images/plus-symbol-button.png")';
    }
    else {
        element.style.backgroundImage = 'url("../../Content/images/calculation-operations-minus-sign.png")';
    }
    bool_1 = !bool_1;
};

var bool_2 = false;
function swipe_workers2() {
    $('#ok').slideToggle("fast");


    var element = document.getElementById("plus2");
    if (bool_2) {
        element.style.backgroundImage = 'url("../../Content/images/plus-symbol-button.png")';
    }
    else {
        element.style.backgroundImage = 'url("../../Content/images/calculation-operations-minus-sign.png")';
    }
    bool_2 = !bool_2;
};

var bool_3 = false;
function swipe_workers3() {
    $('#ew').slideToggle("fast");


    var element = document.getElementById("plus3");
    if (bool_3) {
        element.style.backgroundImage = 'url("../../Content/images/plus-symbol-button.png")';
    }
    else {
        element.style.backgroundImage = 'url("../../Content/images/calculation-operations-minus-sign.png")';
    }
    bool_3 = !bool_3;
};

var bool_4 = false;
function swipe_workers4() {
    $('#mag').slideToggle("fast");


    var element = document.getElementById("plus4");
    if (bool_4) {
        element.style.backgroundImage = 'url("../../Content/images/plus-symbol-button.png")';
    }
    else {
        element.style.backgroundImage = 'url("../../Content/images/calculation-operations-minus-sign.png")';
    }
    bool_4 = !bool_4;
};




