const form=document.getElementById("form")
const email=document.getElementById("email")
const password=document.getElementById("password")


form.addEventListener("submit",function(event){
    event.preventDefault() //az refresh avali jelogiri mikone
    
    checkinputs()
    })
    
    const checkinputs=function(){
        const emailValue=email.value.trim()
        const passwordValue=password.value.trim()

        if(emailValue===""){
            setEroremail(email,"Enter Email")
        }
            else{
                setSuccessemail(email)
            }
        
        
        if(passwordValue===""){
            setErorpassword(password,"Enter Password")
        }
        
        else{
            setSuccesspassword(password)
        }
    }
    

    const setEroremail=(input,message)=>{
        const formcontrol=input.parentElement
        const small=formcontrol.querySelector("small")
        email.style.borderColor="red"
        small.style.color="red"
        small.innerText=message
    }

    const setSuccessemail=function(input){
        const formcontrol= input.parentElement
        const small= formcontrol.querySelector("small")
        email.style.borderColor="rgb(0, 255, 0)"  
        small.innerText=""

    
    }



    const setErorpassword=(input,message)=>{
        const formcontrol=input.parentElement
        const small=formcontrol.querySelector("small")
        password.style.borderColor="red"
        small.style.color="red"
        small.innerText=message
    }

    const setSuccesspassword=function(input){
        const formcontrol= input.parentElement
        const small= formcontrol.querySelector("small")
        password.style.borderColor="rgb(0, 255, 0)"
        small.innerText=""

    
    }