package main

import "github.com/charmbracelet/huh"

var (
    burger       string
    toppings     []string
    sauceLevel   int
    name         string
    instructions string
    discount     bool
)

func createBlogPost() {
    form := huh.NewForm(
        huh.NewGroup() {
            huh.NewInput().Title("What should the slug be?").Value()
        }
    )
}