// instancia classe GitHub
const github = new Github;

// instancia classe Ui
const ui = new Ui

// campo de busca
const searchUser = document.getElementById('searchUser');

// event listener do campo de busca
searchUser.addEventListener('keyup', (e) => {
    // pega texto no campo de busca
    const userText = e.target.value;

    if (userText !== '') {
        // faz requisicao HTTP
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // mostra alerta
                ui.showAlert('Perfil não encontrado', 'alert alert-danger');
            } else {
                // mostra profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // limpa profile se campo de busca estiver vazio
        ui.clearProfile();
    }
})