let emailCollector = document.getElementById('emailCollector')
emailCollector.addEventListener('submit', event => {
  event.preventDefault()

  let ourFormData = new FormData(event.target)
  let userFirstName = ourFormData.get('firstName')
  let updateHtmlContent = `            <h2 class="formTitle">Congratulations, ${userFirstName}!</h2>
  <p class="formSubtitle">register today</p>
  <p class="formDesc">
    You're on your way to becoming a BBQ master!

  </p>
`
let ourMainContent = document.getElementById('mainContent')
ourMainContent.innerHTML = updateHtmlContent
})