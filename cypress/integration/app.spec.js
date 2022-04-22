describe("React TodoMVC", () => {
    // Create Reusable Variables
    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'
    const ENTER_KEY = '{enter}'

    beforeEach(() => {
        // must first visit application
        cy.visit("http://localhost:8888")
    })

    it("adds a single todo", () => {
        // code necessary for test to run
        // get element by class name, type in it, and press Enter
        cy.get(".new-todo").type("Buy Milk{enter}")
        // Get the first li child element of the .todo-list
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
    })

    it("adds three todos", () => {
        cy.createDefaultTodos().as("todos")
        // Grab the alias
        cy.get("@todos").should("have.length", 3)
    })

    it('should append new items to the bottom of the list', () => {
        cy.createDefaultTodos()

        cy.get(".todo-count").contains("3 items left")
    })

    it('does NOT display the footer or the to-do list when there are no todos', () => {
        cy.get(".footer").should("not.exist")
        cy.get(".todo-list").should("not.exist")
    })
})

