const register = document.getElementById('login_btn')
register.addEventListener('submit', registration())
async function registration(event){
    event.preventDefault();
    const url = document.baseURI+''
    const formEvent = event.currentTarget
				try {
					const formData = new FormData(formEvent);
					const regist = await sendUserInfo({ url, formData });
                    console.log(regist);
                    loginToView();
				} catch (error) {
					console.log(error);
				}
}
    
async function sendUserInfo({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(plainFormData);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}

const skip = document.getElementById('skip_btn')
skip.addEventListener('click', skipToView())

function skipToView(){
    const url = document.baseURI+'app/flip/'
    console.log(url)
    fetch(url).then(
        function(response){
            console.log(response)
            return response.json();
        }
    ).then(
        function(result){
            console.log(result);
            document.getElementById('').innerHTML = 'Result: ';
    })
}

function loginToView(){
    const url = document.baseURI+'api/get/us'
    console.log(url)
    fetch(url).then(
        function(response){
            console.log(response)
            return response.json();
        }
    ).then(
        function(result){
            console.log(result);
            document.getElementById('api/get/state/:state').innerHTML = 'Result: '
    })
}