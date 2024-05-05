# Online Store Backend

This is the backend application for an online store built with Node.js and Express.js. It provides APIs for user authentication, managing products, orders, and stock.

## Features

- User authentication (register, login)
- CRUD operations for products
- CRUD operations for orders
- CRUD operations for stock management

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs for password hashing
- jsonwebtoken for generating JWT tokens

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/online-store-backend.git
   ```

2. Install dependencies:

   ```
   cd online-store-backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_uri
     SECRET_KEY=your_secret_key_for_jwt
     ```

4. Start the server:

   ```
   npm start
   ```

## API Documentation

### Authentication

- `POST /api/auth/register`: Register a new user.
  - Body: `{ "username": "username", "email": "email@example.com", "password": "password" }`
- `POST /api/auth/login`: Login with existing credentials.
  - Body: `{ "email": "email@example.com", "password": "password" }`

### Products

- `POST /api/products`: Create a new product.
  - Body: `{ "name": "Product Name", "description": "Product Description", "price": 10.99, "quantity": 100 }`
- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get product by ID.
- `PATCH /api/products/:id`: Update product by ID.
- `DELETE /api/products/:id`: Delete product by ID.

### Orders

- `POST /api/orders`: Create a new order.
  - Body: `{ "products": ["product_id1", "product_id2"], "customer": "customer_id" }`
- `GET /api/orders`: Get all orders.
- `GET /api/orders/:id`: Get order by ID.
- `PATCH /api/orders/:id`: Update order by ID.
- `DELETE /api/orders/:id`: Delete order by ID.

### Stock

- `POST /api/stocks`: Add new stock entry.
  - Body: `{ "product": "product_id", "quantity": 100 }`
- `GET /api/stocks`: Get all stock entries.
- `GET /api/stocks/:id`: Get stock entry by ID.
- `PATCH /api/stocks/:id`: Update stock entry by ID.
- `DELETE /api/stocks/:id`: Delete stock entry by ID.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
