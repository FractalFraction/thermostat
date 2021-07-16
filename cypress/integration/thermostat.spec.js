describe('Thermostat home page', () => { 
  it('shows a title', () => {
    cy.visit('/')
    // change the assertion to expect a message you want
    // see it fail, and then update your html file to make it pass.
    cy.get("#title").should('contain', 'The Best Thermometer in the World')
  })

  it('when button clicked then temp increases by 1 ', () => {
    cy.visit('/')
    cy.get("#button-up").click()
    cy.get("#message").should('contain', '21')
  })

  it('when button clicked then temp decrease by 1 ', () => {
    cy.visit('/')
    cy.get("#button-down").click()
    cy.get("#message").should('contain', '19')
  })

  it('when the reset button is clicked then temp goes to the default value ', () => {
    cy.visit('/')
    cy.get("#button-reset").click()
    cy.get("#message").should('contain', '20')
  })

    it('when the power saving button is clicked the text changes to off', () => {
    cy.visit('/')
    cy.get("#button-ps").click()
    cy.get("#button-ps").should('contain', 'Power Saving: Off')
  })

    it('when the power saving button is clicked twice the text changes to on', () => {
    cy.visit('/')
    cy.get("#button-ps").click()
    cy.get("#button-ps").click()
    cy.get("#button-ps").should('contain', 'Power Saving: On')
  })

    it('when the power saving button is clicked twice the text changes to on', () => {
    cy.visit('/')
    cy.get("#button-ps").click()
    cy.get("#button-ps").click()
    cy.get("#button-ps").should('contain', 'Power Saving: On')
  })

    it('check the usage is visible', () => {
    cy.visit('/')
    cy.get("#usage").should('contain', 'medium-usage')
  })

  it('check the usage goes to high', () => {
    cy.visit('/')
    cy.get("#button-ps").click()
    for (let i = 0; i < 10; i++){
      cy.get("#button-up").click()
    }
    cy.get("#usage").should('contain', 'high-usage')
  })

  it('check the usage goes to low', () => {
    cy.visit('/')
    for (let i = 0; i < 10; i++){
      cy.get("#button-down").click()
    }
    cy.get("#usage").should('contain', 'low-usage')
    cy.get("#usage").should
  })

})

describe('Search box and API calls tests', ()=>{

  it('When I visit the page, it contains a search box and can be typed into', ()=>{
    cy.visit('/')
    cy.get("#search-box")
    cy.get("#search-box").type('Tokyo')
    cy.get("#search-box").val()
  })

  it('When I hit enter in my search box, check the correct request to the API is made', ()=>{
    const weatherAPI = "http://api.openweathermap.org/data/2.5/weather*"
    cy.visit('/')
    cy.intercept(weatherAPI , {fixture: 'weather.json'})
    cy.get("#search-box").type('Tokyo')
    //Something else like submit or select 
    cy.get("#weather").should('contain','The temperature is 27.53')
  })

  // Need a test that checks the search box has been submitted 
  // and return the relevent url from the search box
    it('When I hit enter in my search box, check the correct request to the API is made', ()=>{
    const weatherAPI = "http://api.openweathermap.org/data/2.5/weather*"
    cy.visit('/')
    cy.intercept(weatherAPI , {fixture: 'weather.json'})
    cy.get("#search-box").type('Tokyo')
    //Something else like submit or select 
    cy.get("#search-box").trigger('keypress',)
  })


})
