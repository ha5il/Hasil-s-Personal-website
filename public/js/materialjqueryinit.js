$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip();
    $('.modal').modal();
    $('select').formSelect();
    // change colour
    changeColour();
    setfootertext();
    $('#changecolourbtn').click(function() {
        // convert everything back to teal and call changeColour
        var currentColour = $('#changecolourbtn').data('currentcolour');
        var currentColourText = $('#changecolourbtn').data('currentcolourtext');
        $(document).find('.' + currentColourText).addClass('teal-text').removeClass(currentColourText);
        $(document).find('.' + currentColour).addClass('teal').removeClass(currentColour);
        changeColour();
    });
    if ($('#newContact').length > 0) {
        contactScript('forcontact');
    }
    $(".myloader").delay(100).fadeOut(1400);
});

function changeColour() {
    switch (Math.floor(Math.random() * 14) + 1) {
        case 1:
            $(document).find('.teal-text').addClass('green-text').removeClass('teal-text');
            $(document).find('.teal').addClass('green').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'green');
            $('#changecolourbtn').data('currentcolourtext', 'green-text');
            break;
        case 2:
            $(document).find('.teal-text').addClass('red-text').removeClass('teal-text');
            $(document).find('.teal').addClass('red').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'red');
            $('#changecolourbtn').data('currentcolourtext', 'red-text');
            break;
        case 3:
            $(document).find('.teal-text').addClass('purple-text').removeClass('teal-text');
            $(document).find('.teal').addClass('purple').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'purple');
            $('#changecolourbtn').data('currentcolourtext', 'purple-text');
            break;
        case 4:
            $(document).find('.teal-text').addClass('deep-purple-text').removeClass('teal-text');
            $(document).find('.teal').addClass('deep-purple').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'deep-purple');
            $('#changecolourbtn').data('currentcolourtext', 'deep-purple-text');
            break;
        case 5:
            $(document).find('.teal-text').addClass('blue-text').removeClass('teal-text');
            $(document).find('.teal').addClass('blue').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'blue');
            $('#changecolourbtn').data('currentcolourtext', 'blue-text');
            break;
        case 6:
            $(document).find('.teal-text').addClass('indigo-text').removeClass('teal-text');
            $(document).find('.teal').addClass('indigo').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'indigo');
            $('#changecolourbtn').data('currentcolourtext', 'indigo-text');
            break;
        case 7:
            $(document).find('.teal-text').addClass('light-green-text').removeClass('teal-text');
            $(document).find('.teal').addClass('light-green').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'light-green');
            $('#changecolourbtn').data('currentcolourtext', 'light-green-text');
            break;
        case 8:
            $(document).find('.teal-text').addClass('lime-text').removeClass('teal-text');
            $(document).find('.teal').addClass('lime').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'lime');
            $('#changecolourbtn').data('currentcolourtext', 'lime-text');
            break;
        case 9:
            $(document).find('.teal-text').addClass('yellow-text').removeClass('teal-text');
            $(document).find('.teal').addClass('yellow').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'yellow');
            $('#changecolourbtn').data('currentcolourtext', 'yellow-text');
            break;
        case 10:
            $(document).find('.teal-text').addClass('amber-text').removeClass('teal-text');
            $(document).find('.teal').addClass('amber').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'amber');
            $('#changecolourbtn').data('currentcolourtext', 'amber-text');
            break;
        case 11:
            $(document).find('.teal-text').addClass('orange-text').removeClass('teal-text');
            $(document).find('.teal').addClass('orange').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'orange');
            $('#changecolourbtn').data('currentcolourtext', 'orange-text');
            break;
        case 12:
            $(document).find('.teal-text').addClass('deep-orange-text').removeClass('teal-text');
            $(document).find('.teal').addClass('deep-orange').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'deep-orange');
            $('#changecolourbtn').data('currentcolourtext', 'deep-orange-text');
            break;
        case 13:
            $(document).find('.teal-text').addClass('brown-text').removeClass('teal-text');
            $(document).find('.teal').addClass('brown').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'brown');
            $('#changecolourbtn').data('currentcolourtext', 'brown-text');
            break;
        case 14:
            $(document).find('.teal-text').addClass('blue-grey-text').removeClass('teal-text');
            $(document).find('.teal').addClass('blue-grey').removeClass('teal');
            $('#changecolourbtn').data('currentcolour', 'blue-grey');
            $('#changecolourbtn').data('currentcolourtext', 'blue-grey-text');
            break;
        default:
            $('#changecolourbtn').data('currentcolour', 'teal');
            $('#changecolourbtn').data('currentcolourtext', 'teal-text');
            break;
    }
}

function setfootertext() {
    var footertext = null;
    switch (Math.floor(Math.random() * 10) + 1) {
        case 1:
            footertext = 'May be its mine bad-luck<br>Or yours not to get me <br>But I still have hope <br>Of being yours';
            break;
        case 2:
            footertext = 'If you know that I am genius <br>Then know that you made me genius <br>Everyone don\'t accept me as genius <br>Because they aren\'t genius to belief me as genius';
            break;
        case 3:
            footertext = 'Life for me is just a result of experiments being performed by far more developed creatures.';
            break;
        case 4:
            footertext = 'Dream big! But not so big that it becomes a mess, and you may never reach reality.';
            break;
        case 5:
            footertext = 'Dreaming of getting you <br>I loosed everything <br>Cheerfulness of smile <br>And all the dreams of life';
            break;
        case 6:
            footertext = 'Give me another Chance <br>Then, You will Get <br> Less than I Gain...';
            break;
        case 7:
            footertext = 'When I was small I felt like a Superhero as my father threw me up in the air.<br>Now after reaching this success peak I unmask - Real Superhero made me Superhero!';
            break;
        case 8:
            footertext = 'Congratulations to your mom and dad for birth of a sweet child!<br>Sorry that I couldn\'t wish them when you were born.';
            break;
        case 9:
            footertext = 'I will miss you not because you taught me,<br>not because you helped me on all steps of education;<br>but only because you made me a leader to lead as an perfect Electrical Engineer.';
            break;
        case 10:
            footertext = 'Oh great!<br>I never recognized Sunshine shining me, within me.';
            break;
    }
    $('#footertext').html(footertext);
}

function contactScript(value) {
    var config = {
        apiKey: "AIzaSyAaUlZseMqo8WSNev4EYK2D8Iz5_JBabqU",
        authDomain: "x8-red-freedom-c.firebaseapp.com",
        databaseURL: "https://x8-red-freedom-c.firebaseio.com",
        projectId: "x8-red-freedom-c",
        storageBucket: "x8-red-freedom-c.appspot.com",
        messagingSenderId: "769046266086"
    };
    firebase.initializeApp(config);
    var b = firebase.database().ref("Job Offer Form");
    $("#newContact").submit(function(config) {
        var c = $("#name").val(),
            d = $("#email").val(),
            e = $("#city").val(),
            g = $("#country").val(),
            h = $("#jobFor").val(),
            i = $("#timeFor").val(),
            j = $("#message").val(),
            f = { name: c, email: d, city: e, country: g, jobFor: h, timeFor: i, message: j };
        return b.push(f).then(function(config) {
            var instance = M.Modal.getInstance(modalhire);
            instance.close();
            M.toast({ html: 'Enquiry Submitted!', classes: 'rounded' })
        }), !1
    })
}