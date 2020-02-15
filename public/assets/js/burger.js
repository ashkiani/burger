$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let burger_name = $("#newBurger").val().trim();
        if (burger_name != "") {
            let newBurger = {
                burger_name: $("#newBurger").val().trim(),
                devoured: 0
            };
    
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("Added new burger");
                // Reload the page to get the updated burger list.
                location.reload();
            });
        }

    });

    $(".btnEat").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".btnTrash").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})