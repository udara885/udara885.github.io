import React from "react"
import Socials from "./Socials"
import ToastSuccess from "./ToastSuccess"

const Form = () =>
{
    const [ submit, setSumbit ] = React.useState( false )
    
    const onSubmit = async ( event ) =>
    {
        event.preventDefault()
        const formData = new FormData( event.target )

        formData.append( "access_key", "d39fdf8d-753d-4957-b6c9-0def0c3345c9" )

        const object = Object.fromEntries( formData )
        const json = JSON.stringify( object )

        const res = await fetch( "https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        } ).then( ( res ) => res.json() )

        if ( res.success )
        {
            console.log( "Success", res )
            setSumbit(true)
            document.getElementById( "contact-form" ).reset()
            setTimeout( () => { setSumbit( false ) }, 5000)
        }
    }


  return (
      <form id="contact-form" onSubmit={onSubmit} className="flex flex-col items-start gap-5 self-stretch">
          <input type="text" name="name" className="flex h-14 py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="Your name" autoComplete="true" required/>
          <input type="text" name="email" className="flex h-14 py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="Your Email" autoComplete="true"required/>
          <textarea type="text" name="message" className="flex h-[8.75rem] py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="Your message" required />
          <div className="flex gap-5">
              <button type="submit" className="bg-black text-white font-medium rounded px-4 py-3 flex items-center justify-center">Get In Touch</button>
              { submit && <ToastSuccess /> }
          </div>
          <Socials />
      </form>
  )
}

export default Form