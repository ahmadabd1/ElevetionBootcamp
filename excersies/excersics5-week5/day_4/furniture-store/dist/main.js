


const ShowPrice = function () {
    let input = $("#data-input").val()
    let newDiv = $("#display").empty()

    $.get(`priceCheck/${input}`, function (Data) {
        newDiv = `<p>{price : ${Data.price}} </p>`
        $("#showPrice").append(newDiv)
    })


}
const buyItem = function () {
    let buyInput = $("#buy-data-input").val()
    let newDiv = $("#display").empty()

    $.get(`buy/${buyInput}`, function (Data) {
        if (typeof Data == "string") {
            newDiv = `<p>${Data}</p>`
            $("#buyItem").append(newDiv)
        } else {
            newDiv = `<p>Congratulations, you've just bought ${Data.name} for ${Data.price}. There are ${Data.inventory} left now in the store. </div>`
            $("#buyItem").append(newDiv)
        }
    })
}