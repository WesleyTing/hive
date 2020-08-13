// Dropdown Menu
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');

const mql = window.matchMedia('(min-width: 700px)');

mql.addListener(removeTransition);

function removeTransition(e){
	if(e.matches){
		body.classList.remove('show');
		nav.classList.remove('activated');
	}
}

body.addEventListener('click', function(e){

	if(e.target.classList.contains('bar') ||
	   e.target.classList.contains('button-content') ||
	   e.target.classList.contains('btn-menu')){
		return
	}else{
		body.classList.remove('show');
	}
});

btnMenu.addEventListener('mousedown', function(e){
    e.preventDefault();
});

btnMenu.addEventListener('click', function(){
	body.classList.toggle('show');
	if(!nav.classList.contains('activated')){
		nav.classList.add('activated');
	}
});



// Change Nav Bar Color On Scroll
$(window).scroll(function () {
	if ($(window).scrollTop() >= 500) {
	$('header').css('background','black');
	} else {
	$('header').css('background','transparent');
	}
	});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 500) {
	$('nav').css('background','black');
	} else {
	$('nav').css('background','transparent');
	}
	});

// Form Validation
$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            full_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please fill out your name.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});











    
