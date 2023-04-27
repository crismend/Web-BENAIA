// formulario principla
const $form = document.querySelector('#form')
const $buttonMailtoP = document.querySelector('#formPrincipal')

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formdata = new FormData(event.currentTarget)
    $buttonMailtoP.setAttribute('href', `mailto:servidorfiel42@gmail.com?subject= ${formdata.get('name')} ${formdata.get('lasname')} ${formdata.get('email')} &body= ${formdata.get('message')}`)
    $buttonMailtoP.click()
    $form.reset()
})










