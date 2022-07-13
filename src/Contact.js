import ContactFuter from "./ContactFuter";


function Contact(){
const textParContact= 'Если вы хотите узнать условия съемки, \n доступность вашей даты или у вас есть любой \n другой вопрос , - напишите мне, и я отвечу вам \n в течение 24 часов.'
return( 
<div className="contact">

    <div className="container">
   
           <div className="block-contact">
                  <div className="block-contact__center">
                        <h2 className='block-contact__heading'>Всегда на связи с вами</h2>
                   </div>

                    <div className="block-contact__center">
                           <p className="block-contact__par">{textParContact}</p>
                   </div>


             <form action="https://formspree.io/f/{form_id}" method="post">
                   <input type="hidden" name="_language" value="ru"/>
                  <input className="input" type='text' placeholder="name"></input>
                 <input className="input"type='email' placeholder="E-mail"></input>
                 <textarea className="input textarea"type='text' placeholder="message"></textarea>
                  <button className="input btnContact" type="submit">Send</button>
                  </form>    
        </div>
        </div>

        <ContactFuter/>
</div>


)
}
export default Contact;