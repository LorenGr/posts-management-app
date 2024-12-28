# Posts Management App

This project is an Angular application for managing posts. It includes various components, pipes, and directives to provide a rich user experience.

## Components

### HeaderComponent

The `HeaderComponent` is responsible for displaying the header of the application. It includes a search input, a button to create new posts, and a color selector to change the primary color of the application.

### PostsListComponent

The `PostsListComponent` displays a list of posts. It includes pagination and filtering functionality to manage and view posts efficiently.

### CreatePostButtonComponent

The `CreatePostButtonComponent` includes a button to open a dialog for creating a new post. It uses Angular Material's dialog component to provide a form for entering post details.

### CreatePostDialogComponent

The `CreatePostDialogComponent` is a dialog component that provides a form for creating a new post. It includes input fields for the post title and body.

### ColorSelectorComponent

The `ColorSelectorComponent` includes a color picker that allows users to change the primary color of the application. It updates the `--color-primary` CSS variable dynamically.

## Pipes

### TruncatePipe

The `TruncatePipe` is used to truncate long text to a specified length. It adds ellipses (`...`) to indicate that the text has been truncated.

### NewBadgePipe

The `NewBadgePipe` is used to add a "New" badge to new posts. It returns a `span` with a `new-badge` class to apply custom styles.

## Directives

### HighlightDirective

The `HighlightDirective` is used to highlight parts of a string that match a search term. It dynamically applies a background color to the matching parts of the text.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

