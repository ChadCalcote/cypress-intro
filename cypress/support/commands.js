Cypress.Commands.add("createDefaultTodos", () => {
    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'
    const ENTER_KEY = '{enter}'

    // Prints to console in test runner
    let cmd = Cypress.log({
        name: "create default todos",
        consoleProps() {
            return {
                "Inserted Todos": [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
            }
        }
    })
    // { log: false } removes logs in the test body
    cy.get(".new-todo", { log: false })
        .type(`${TODO_ITEM_ONE}${ENTER_KEY}`, { log: false })
        .type(`${TODO_ITEM_TWO}${ENTER_KEY}`, { log: false })
        .type(`${TODO_ITEM_THREE}${ENTER_KEY}`, { log: false })

    // put list elements into a variable, set on our Cypress.log, end it
    cy.get(".todo-list li", { log: false }).then((listItems) => {
        cmd.set( { el: listItems }).snapshot().end()
    })
})