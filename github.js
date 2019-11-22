class Github{
    constructor(){
        this.client_id = '111d44906cadba75d1e2';
        this.client_secret = '2dc6d2c1ecd200bb6a1561618e851808c1b3ef2b';
        this.repos_count=5;
        this.repos_sort ='created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);        
        
        const profile =await profileResponse.json();
        const repos =await repoResponse.json();        
        return{
            profile,         //profile:profile
            repos
        }
    }
}