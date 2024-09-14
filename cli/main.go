package main

import "github.com/charmbracelet/huh"

func createBlogPost() {
    form := huh.NewForm(
        huh.NewGroup() {
            huh.NewInput().Title("What should the slug be?").Value()
        }
    )
}