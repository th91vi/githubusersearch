class Github {
    constructor(){
        this.client_id = '4cc698d5f0c78ca2d764';
        this.client_secret = 'ee98e071e07e6b6850bacb2f1a72ad675207b031';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        console.log(profile);

        return {
            // ES6 permite que as 2 linhas comentadas abaixo funcionem de maneira igual a linha funcional
            // profile: profileData
            // profile: profile
            profile
        }
    }
}