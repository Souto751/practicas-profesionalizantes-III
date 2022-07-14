class FormView{
	constructor(){

	}

	login(user, password){
        return fetch('./login.php', {
            method: 'post',
            body: JSON.stringify({
                user,
                password
            })
        }).then(res => res.json());
	}
}

export default FormView;