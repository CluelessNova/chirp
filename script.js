function addDiv() {
    //create a new P tag, save it in a variable
    let theNewDiv = document.createElement("div");
    //add a class to our new div element
    //Checks if dark mode is on
    let darkMode = document.getElementById("mode");
    if (darkMode.className === "mode ON"){
        theNewDiv.classList.add("auto-div");
        theNewDiv.classList.add("darkAuto-div");
    } else {
    theNewDiv.classList.add("auto-div");
    }
    //set the text inside the div
    theNewDiv.innerHTML = document.getElementById("textInput").value;
    
    //find the right tag to add the div to
    //we used an id of "content-area" for 
    //the place where we want to add the chirp
    let theContentArea = document.getElementById("content-area");

    //add the new div to that tag
    theContentArea.appendChild(theNewDiv);
}

function addImage() {
    //create a new P tag, save it in a variable
    let theNewDiv = document.createElement("div");
    //add a class to our new div element
    theNewDiv.classList.add("auto-div");
    
    //create image tag to put into the div
    theImgTag = "<img src='" + document.getElementById("imgInput").value + "' width = 100 height = 100>";

    //set the text inside the div
    theNewDiv.innerHTML = theImgTag;
    
    //find the right tag to add the div to
    //we used an id of "content-area" for 
    //the place where we want to add the twit
    let theContentArea = document.getElementById("content-area");

    //add the new div to that tag
    theContentArea.appendChild(theNewDiv);
}

$( ".change" ).on("click", function() {

    // check for dark mode class
    if( $( ".right-col" ).hasClass( "darkRight-col" )) {
        $( ".right-col" ).removeClass( "darkRight-col" );
        $( ".change" ).text( "OFF" );
    } else {
        $( ".right-col" ).addClass( "darkRight-col" );
        $( ".change" ).text( "ON" );
    }
    if( $( ".left-col" ).hasClass( "darkLeft-col" )) {
        $( ".left-col" ).removeClass( "darkLeft-col" );
        $( ".change" ).text( "OFF" );
    } else {
        $( ".left-col" ).addClass( "darkLeft-col" );
        $( ".change" ).text( "ON" );
    }
    if( $( ".auto-div" ).hasClass( "darkAuto-div" )) {
        $( ".auto-div" ).removeClass( "darkAuto-div" );
        $( ".change" ).text( "OFF" );
    } else {
        $( ".auto-div" ).addClass( "darkAuto-div" );
        $( ".change" ).text( "ON" );
    }

    // check is dark mode is on/off
    if( $( ".mode" ).hasClass( "ON" )) {
        $( ".mode" ).removeClass( "ON" );
        $( ".mode" ).addclass( "OFF" );
    } else {
        $( ".mode" ).removeClass( "ON" );        
        $( ".mode" ).addClass( "ON" );
    }
});
