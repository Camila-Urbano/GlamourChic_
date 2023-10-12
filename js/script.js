document.addEventListener("DOMContentLoaded", function () 
{
    const reviewForm = document.getElementById("review-form");
    const reviewList = document.getElementById("review-list");

    // Función para guardar los comentarios en el almacenamiento local
    function saveComment(name, comment) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({ name, comment });
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    // Función para cargar los comentarios desde el almacenamiento local
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.forEach((entry) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${entry.name}:</strong> ${entry.comment}`;
            reviewList.appendChild(listItem);
        });
    }

    // Cargar los comentarios al cargar la página
    loadComments();

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const commentInput = document.getElementById("comment");

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name.trim() === "" || comment.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Guardar el comentario en el almacenamiento local
        saveComment(name, comment);

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${name}:</strong> ${comment}`;
        reviewList.appendChild(listItem);

        nameInput.value = "";
        commentInput.value = "";

        const alerta = document.querySelector(".alerta");
        const aceptar = document.querySelector(".agregar_mensaje");
        
        alerta.style.display = "grid";

        aceptar.onclick = () =>
        {
            alerta.style.display = "none";
        }

    });
});
