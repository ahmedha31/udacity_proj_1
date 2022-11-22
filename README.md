# Udacity project 1: Image processing api

## Description

This project is a simple image processing api. It is a part of the Udacity Advanced Full-Stack Web Development .

## Installation

1. Clone the repository
2. Install the dependencies
3. Run the server

## Usage

1. run "npm run start" to start the server after building the project
2. go to <http://localhost:3000/api/images?image={filename}&width={width}&height={height>}
3. example: <http://localhost:3000/api/image?image=fjord&width=1000&height=1000>
4. filemame must be a valid image file in the src/images folder without the extension
5. if width or height is not specified, the image will return with the original size
6. if width or height is specified, the image will return with the specified size
7. if width or height is used before, the image will return from the cache
8. if width or height is not used before, the image will return from the src/images folder in the specified size and save to the cache

## Testing

1. run  "$ npm run test"
2. you should see the test results

### - Test cases

1. test if the server is running
2. test if the server returns the original image
3. test if the server returns the image with the specified size
4. test if resize finction work

## Dependencies

- express
- sharp
- fs
- typescript
- jasmine (for testing)
- supertest (for testing)
