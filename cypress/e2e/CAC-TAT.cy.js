describe('Central de Atendimento ao Cliente TAT   ', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('Axé', 100)
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Pascoal Ribeiro')
    cy.get('#email').type('teste.teste@teste.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Pascoal Ribeiro')
    cy.get('#email').type('teste.teste')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('campo telefone continua vazio quando preenchido com um valor não-numérico', () => {
    cy.get('#phone')
      .type('Matheus')
      .should('have.value', '')
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Pascoal Ribeiro')
    cy.get('#email').type('teste.teste@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Matheus')
      .should('have.value', 'Matheus')
      .clear('#firstName')
      .should('have.value', '')
    cy.get('#lastName')
      .type('Pascoal Ribeiro')
      .should('have.value', 'Pascoal Ribeiro')
      .clear('#lastName')
      .should('have.value', '')
    cy.get('#email')
      .type('teste.teste@teste.com')
      .should('have.value', 'teste.teste@teste.com')
      .clear('#email')
      .should('have.value', '')
    cy.get('#open-text-area')
      .type('teste')
      .should('have.value', 'teste')
      .clear('#open-text-area')
      .should('have.value', '')
  })
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('envia formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })
  it('seleciona um produto (youtube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })
  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })
  it.only('marca cada tipo de atendimento"', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  })

})