const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password2=document.getElementById("password2")


form.addEventListener("submit",function(event){
    event.preventDefault() //az refresh avali jelogiri mikone
    
    checkinputs()
    })
    
    const checkinputs=function(){
        const usernameValue=username.value.trim()
        const emailValue=email.value.trim()
        const passwordValue=password.value.trim()
        const password2Value=password2.value.trim()

        if(usernameValue===""){
            setErorusername(username,"Enter Username")
        }
            else{
                setSuccessusername(username)
            }

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

        if(password2Value===""){
            setErorpassword2(password2,"Enter Confirm Password")
        }
            else if(passwordValue!==password2Value){
                setErorpassword2(password2,"Those passwords didnt match.Try again")
            }

            
                else{
                    setSuccesspassword2(password2)
                }
    
            }
    
    

    const setErorusername=(input,message)=>{
        const formcontrol=input.parentElement
        const small=formcontrol.querySelector("small")
        username.style.borderColor="red"
   small.style.color="red"
        small.innerText=message
    }

    const setSuccessusername=function(input){
        const formcontrol= input.parentElement
        const small= formcontrol.querySelector("small")
        username.style.borderColor="rgb(0, 255, 0)"
        small.innerText=""

    
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



        
    const setErorpassword2=(input,message)=>{
        const formcontrol=input.parentElement
        const small=formcontrol.querySelector("small")
        password2.style.borderColor="red"
        small.style.color="red"
        small.innerText=message
    }

    const setSuccesspassword2=function(input){
        const formcontrol= input.parentElement
        const small= formcontrol.querySelector("small")
        password2.style.borderColor="rgb(0, 255, 0)"
        small.innerText=""

    
    }