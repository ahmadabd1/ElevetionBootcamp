$("button").on("click", function () {
    const procID = $(this).closest("div").attr("id")
    const cpID = $(this).closest(".computer").data().id
    const pies = $(this).closest(".computer").find("p").text()
    const obj ={
        "data-id":cpID
    }
    const textG = $(this).closest(".computer").find(".generator").text()
    if ($(this).attr('class') === "generator") {
        console.log("Processor ID: " + procID)
        console.log("Computer's data-id: " + cpID )
        console.log("BUS: " + $(this).closest(".computer").find(".BUS").text())
    }else{
   
    
    console.log("The generator text : " + textG )
    console.log("the MB" +$(this).closest(".computer").find(".MB").text())
    console.log("Both QR: " +$(this).closest(".computer").find("span").text() )
    }

    })