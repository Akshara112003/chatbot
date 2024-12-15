let context = {}; // To track user selections

function getBotResponse(input) {
    // Convert input to lowercase for case-insensitive matching
    const lowerInput = input.toLowerCase();

    // main topics
    if (lowerInput === "admission") {
        return "Please enter a topic: <br> 1. Rules <br> 2. About Us <br> 3. Programs <br> 4. Programs Offered <br> 5. Application Form <br> 6. Admission Process <br> 7. Counselling Help <br> 8. Clarification on Admission Procedure";
    } else if (lowerInput === "rules") {
        context.topic = "rules"; 
        return "Please choose a subtopic: <br> 1. General Instructions <br> 2. Instruction Manual <br> 3. General Rules";
    } else if (lowerInput === "about us") {
        context.topic = "about us";
        return "Please choose a subtopic: <br> 1. About SNS Arts <br> 2. Placements";
    } else if (lowerInput === "programs") {
        context.topic = "programs"; 
        return "Please choose a subtopic: <br> 1. UG Program <br> 2. PG Program";
    } else if (lowerInput === "programs offered") {
        context.topic = "programs offered"; 
        return "Please choose a subtopic: <br> 1. Commerce Studies <br> 2. Computer Studies <br> 3. Arts and Science Studies <br> 4. Professional Studies";
    } else if (lowerInput === "application form") {
        context.topic = "application form"; 
        return "Please choose a subtopic: <br> 1. UG <br> 2. PG";
    } else if (lowerInput === "admission process") {
        context.topic = "admission process"; 
        return "Get to know about the Admission process & Procedure by clicking this link! " +
               "<a href='https://drsnsrcas.ac.in/admissionsdrsnsrcas/#block60720' target='_blank'>View Admission Process and Procedure</a>";
    } else if (lowerInput === "help") {
        context.topic = "help"; 
        return "Get Counselling help by clicking this link! <br> Re-direct to WhatsApp: " +
               "<a href='https://api.whatsapp.com/send?phone=919025394535' target='_blank'>View Admission Process and Procedure</a>";
    } else if (lowerInput === "clarification") {
        context.topic = "clarification"; 
        return "To get Clarification on Admission Procedure, contact us: <br> 75300 93725, <br> 75300 93726";
    }
    
    //subtopics based on context
    if (context.topic === "rules") {
        if (input === "1") {
            return "Get the general instructions on Admission Brochure by clicking this link! " +
                   "<a href='https://snsgroups.com/brochure/' target='_blank'>View General Instructions</a>";
        } else if (input === "2") {
            return "Get the Instruction Manual to be carried out by the applicants by clicking this link! " +
                   "<a href='https://drsnsrcas.ac.in/admissionsdrsnsrcas/#block45106' target='_blank'>View Instruction Manual</a>";
        } else if (input === "3") {
            return "Get to know about the Rules to be followed by clicking this link! " +
                   "<a href='https://drsnsrcas.ac.in/pgadmissionsdrsnsrcas/' target='_blank'>View General Rules</a>";
        }
    } else if (context.topic === "about us") {
        if (input === "1") {
            return "Get to know About Us by clicking this link! " +
                   "<a href='https://drsnsrcas.ac.in/#block44136' target='_blank'>View About Us</a>";
        } else if (input === "2") {
            return "Get to know about Placements at SNS by clicking this link! " +
                   "<a href='https://drsnsrcas.ac.in/placementdrsnsrcas/' target='_blank'>View Placements</a>";
        }
    } else if (context.topic === "programs") {
        if (input === "1") {
            return "Click here to get the Application form for Undergraduate Programme " +
                   "<a href='https://drsnsrcas.ac.in/#programmes' target='_blank'>UG Application Form</a>";
        } else if (input === "2") {
            return "Click here to get the Application form for Postgraduate Programme " +
                   "<a href='https://drsnsrcas.ac.in/#block44196' target='_blank'>PG Application Form</a>";
        }
    } else if (context.topic === "programs offered") {
        if (input === "1") {
            return "Click here to get to know about Commerce Studies " +
                   "<a href='https://drsnsrcas.ac.in/#programmes/#block66706' target='_blank'>Commerce Studies</a>";
        } else if (input === "2") {
            return "Click here to get to know about Computer Studies " +
                   "<a href='https://drsnsrcas.ac.in/#programmes/#block64834' target='_blank'>Computer Studies</a>";
        } else if (input === "3") {
            return "Click here to get to know about Arts and Science Studies " +
                   "<a href='https://drsnsrcas.ac.in/#programmes/#block64836' target='_blank'>Arts and Science Studies</a>";
        } else if (input === "4") {
            return "Click here to get to know about Professional Studies " +
                   "<a href='https://drsnsrcas.ac.in/#programmes/#block64840' target='_blank'>Professional Studies</a>";
        }
    } else if (context.topic === "application form") {
        if (input === "1") {
            return "Click here to get the Application form for Undergraduate Programme " +
                   "<a href='https://drive.google.com/file/d/1t7OJ_csyDN3U3ZFcUiK8G1jbSS5OBviz/view' target='_blank'>UG Application Form</a>";
        } else if (input === "2") {
            return "Click here to get the Application form for Postgraduate Programme " +
                   "<a href='https://drive.google.com/file/d/12EPYdLMAZ1F2_sYtD17gLPS6EKFJNVBo/view' target='_blank'>PG Application Form</a>";
        }
    }

}  



//HARD RESPONSES
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}



    // Simple responses
    if (input == "hello") {
        return "How can I assist you today? You can type 'admission' to see the admission options.";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
