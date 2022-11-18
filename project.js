const form=document.getElementById("form")
const email=document.getElementById("email")
const password=document.getElementById("password")
const erorsmall=document.getElementById("Erorsmall")

form.addEventListener("submit",function(event){
    event.preventDefault() //az refresh avali jelogiri mikone
    
    checkinputs()
    })
    
    const checkinputs=function(){
        const emailValue=email.value.trim()
        const passwordValue=password.value.trim()

        if(emailValue===""){
            setEror(email,"emalil ra vared konid")
        }
            else{
                setSuccess(email)
            }
        
        
        if(passwordValue===""){
            setEror(password,"password ra vared lonid")
        }
        
        else{
            setSuccess(password)
        }
    }
    

    const setEror=(input,message)=>{
        const formcontrol=input.parentElement
        const small=formcontrol.querySelector("small")
        email.style.borderColor="red"
        password.style.borderColor="red"
      erorsmall.style.color="red"
        small.innerText=message
    }

    const setSuccess=function(input){
        const formcontrol= input.parentElement
        const small= formcontrol.querySelector("small")
        email.style.borderColor="lightgreen"
        password.style.borderColor="lightgreen"
        small.innerText=""

    
    }