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
            <h3 class="page-heading mb-3">Últimos 5 repositórios</h3>
            <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url} target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge mb-1 badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge mb-1 badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge mb-1 badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });

        // exibe reposit[orios no HTML
        document.getElementById('repos').innerHTML = output;
    }

    // showAlert(message, className){
    //     // cria div com alerta
    //     const div = document.createElement('div');
    //     // adiciona clases na div
    //     div.className = className;
    //     // adiciona texto na div
    //     div.appendChild(document.createTextNode(message));
    //     // pega elemento pai
    //     const containerAlerta = document.querySelector('.searchContainer');
    //     // pega campo de busca
    //     const search = document.querySelector('.search');
    //     // insere o alerta
    //     containerAlerta.insertBefore(div, search);
    // }

    showAlert(message, className) {
        this.profile.innerHTML = `<div class="${className}">${message}</div>`;
        setTimeout(() => {
          this.clearAlert();
        }, 2000);
    } 

    clearAlert() {
        this.profile.innerHTML = "";
    }
    
    clearProfile(){
        this.profile.innerHTML = '';
    };
}