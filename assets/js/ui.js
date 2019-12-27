class Ui {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_URL}" target="_blank" class="btn btn-primary btn-block mb-3">Ver perfil</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge mb-1 badge-primary">Repositórios públicos: ${user.public_repos}</span>
                        <span class="badge mb-1 badge-secondary">Gists públicos: ${user.public_gists}</span>
                        <span class="badge mb-1 badge-success">Seguidores: ${user.followers}</span>
                        <span class="badge mb-1 badge-info mb-3">Seguindo: ${user.following}</span>
                        <ul class="list-group">
                            <li class="list-group-item">Empresa: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Local: ${user.location}</li>
                            <li class="list-group-item">Membro desde: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Últimos repositórios</h3>
            <div id="repos"></div>
        `;
    }

    showAlert(message, className){
        // cria div com alerta
        const div = document.createElement('div');
        // adiciona clases na div
        div.className = className;
        // adiciona texto na div
        div.appendChild(document.createTextNode(message));
        // pega elemento pai
        const containerAlerta = document.querySelector('.searchContainer');
        // pega campo de busca
        const search = document.querySelector('.search');
        // insere o alerta
        containerAlerta.insertBefore(div, search);
    }
    
    clearProfile(){
        this.profile.innerHTML = '';
    };
}