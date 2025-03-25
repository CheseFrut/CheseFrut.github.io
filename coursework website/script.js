// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
    
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
        
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) { 
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
        
            // Call our function and pass any params we received
            fn(...params);
        });

    } 
    };


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

function sendEmail() {
    
    const form = document.getElementById("Form");
    var forename = form.elements["forename-input"].value;

    var surname = form.elements["surname-input"].value;

    var pronouns = form.elements["pronouns-input"].value;

    var reasonsForJoining = form.elements["reason-for-joining-input"].value;

    var address = form.elements["address-input"].value;

    var email = form.elements["email-input"].value;

    var phoneNumber = form.elements["phone-input"].value;

    var replyViaPhoneCall = form.elements["reply-via-phone-call-input"].checked;

    var replyViaSMS = form.elements["reply-via-phone-message-input"].checked;

    var replyViaEmail = form.elements["reply-via-email-input"].checked;

    var contactMeVia = "𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗺𝗲 𝗩𝗶𝗮: "

    if(replyViaPhoneCall) {
        contactMeVia += "A Phone Call"
    }

    if(replyViaSMS) {
        contactMeVia += " | A Message On My Phone"
    }

    if(replyViaEmail) {
        contactMeVia += " | An Email"
    }
    contactMeVia += ". "

    var body ="𝗡𝗮𝗺𝗲: \n" + 
    forename+" " + surname + "\n\n𝗥𝗲𝗮𝘀𝗼𝗻𝘀 𝗳𝗼𝗿 𝗷𝗼𝗶𝗻𝗶𝗻𝗴: \n" + 
    reasonsForJoining + "\n\n𝗠𝘆 𝗽𝗿𝗼𝗻𝗼𝘂𝗻𝘀: \n" + 
    pronouns + "\n\n𝗛𝗼𝗺𝗲 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: \n" + 
    address + "\n\n𝗘𝗺𝗮𝗶𝗹: \n" +
    email + "\n\n𝗣𝗵𝗼𝗻𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: \n" +
    phoneNumber + "\n\n" + contactMeVia +
    "\n\nIf you have a ​̳.​̳𝚙​̳𝚍​̳𝚏​̳  of a certificate of web-design or similar, please attach it to this email.\n\n\n\nThis is an official prewritten email. Please do not change anything you see here.";

    if(!(replyViaPhoneCall || replyViaSMS || replyViaEmail)) {
        alert("You have to select a way to contact us")
        return false;
    }
    else {
        var url = "mailto:applications@hotbeansweb.co.uk?subject="+forename+"+"+surname+": "+"Application"+"&body="+encodeURIComponent(body);
        open(url);
    }  
}
