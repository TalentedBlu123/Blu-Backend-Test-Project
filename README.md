# Test Project

Backend Test Project

## Target

1. Setup a Node.js server: Create a simple Node.js server using Express.js.
2. Database: Use MongoDB to create a database with a single collection named 'users'. Each 'user' document should contain the following fields: 'username', 'email', and 'password'.
3. API Endpoints: Create the following REST API endpoints:
   - GET /users: Fetch all users from the 'users' collection.
   - POST /users: Add a new user to the 'users' collection. This endpoint should accept JSON data in the format: `{ "username": "example", "email": "example@email.com", "password": "example" }`.
   - GET /users/:username: Fetch a single user by their username.
   - DELETE /users/:username: Delete a user by their username.
4. Hosting: Deploy your application to a cloud-based hosting service (AWS or Google Cloud Platform).

## Submission:

1. The URL of the hosted API.
2. A link to the GitHub repository containing your code.
3. A brief document explaining your design choices and any challenges you faced.

## Development

1. `npm install` - install server dependencies
2. `npm run dev` - run backend
