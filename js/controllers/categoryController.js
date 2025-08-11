import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/categoryService.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const tableBody = document.querySelector("#categoriesTable tbody"); //Tbody - Cuerpo de la tabla
    const form = document.getElementById("categoryForm"); //Formulario dentro del modal
    const modal = new bootstrap.Modal(document.getElementById("categoryModal")); //Modal
    const lblModal = document.getElementById("categoryModalLabel"); //Título del modal
    const btnAdd = document.getElementById("btnAddCategory"); //Botón para abrir el modal

    init(); //Este método permite cargar las categorías en la tabla

    //Acción cuando el boyón de Agregar Nueva categoria es presionado se abre el modal
    btnAdd.addEventListener("click", ()=>{
        form.reset();
        form.categoryId.value = ""; //No enviamos ID, ya que estamos agregando
        lblModal.textContent = "Agregar categoría"
        modal.show();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault(); //Evitamos que el formulario se envíe al hacer "submit"
    });
});
