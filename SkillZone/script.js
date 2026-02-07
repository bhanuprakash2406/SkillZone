function navBar(){
    let main = document.getElementById('main');
    main.classList.toggle('active');
}
const form = document.getElementById('form')
const uname = document.getElementById('username')
const email = document.getElementById('email')
const msg = document.getElementById('message')
const btn = document.getElementById('btnn')
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    validation()
    
})
function validation(){
    const newname = uname.value.trim()
    const newmail = email.value.trim()
    const newmsg = msg.value.trim()
    // username check
    if(newname === ""){
        setError(uname,"Invaild Full Name");
    }
    else if(newname.length<6){
        setError(uname,"Minimum 6 Characters")
    }
    else{
        setSuccesss(uname)
    };
    //emailId Checking
    if(newmail===''){
        setError(email,'Email cannot be empty')
    }  
    else if(!emailCheck(newmail)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
    }
    //massage checking
    if(newmsg === ""){
        setError(msg, "Please Enter The Message")
    }
    else{
        setSuccesss(msg)
    }

    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}

   