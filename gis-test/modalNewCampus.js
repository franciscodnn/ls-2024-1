export function modalNewCampus() {
    return `
    <button type="button" class="btn btn-secondary position-absolute top-0 end-0 my-3 mx-5 z-3 rounded-circle"
    data-bs-toggle="modal" data-bs-target="#staticBackdrop">+</button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Novo Campus</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form id="modalNewCampus">
                <div class="mb-3">
                <label for="titulo-campus" class="form-label">Título do Campus</label>
                <input type="text" class="form-control" id="titulo-campus" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                <label for="lat-campus" class="form-label">Latitude</label>
                <input type="text" class="form-control" id="lat-campus">
                </div>
                <div class="mb-3">
                <label for="lng-campus" class="form-label">Longitude</label>
                <input type="text" class="form-control" id="lng-campus">
                </div>
                <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
            </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" id="addCampus" data-bs-dismiss="modal">Adicionar</button>
            </div>
        </div>
        </div>
    </div>
    `;
}
