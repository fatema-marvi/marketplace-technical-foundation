# marketplace-technical-foundation
This document outlines the technical foundation for the Marketplace project, including routes, API endpoints, and order processing flow.
Technology Stack
**Frontend:** Next.js
**Backend:** Sanity CMS
**Third-Party APIs:**
- Product listing: `/products`
- Product details: `/products/{product_id}`
**Sanity API Endpoints:**
- **Customer Schema (`/customer`)**: Create (POST), Get (GET), Update (PUT), Delete (DELETE)
- **Order Schema (`/order`)**: Create (POST), Get (GET), Update (PUT), Delete (DELETE)
- **Cart Schema (`/cart`)**: Create (POST), Get (GET), Update (PUT), Delete (DELETE)
Workflow
Homepage (`/`)
•	Fetch and display product listings from a third-party API.
•	User can navigate to individual product pages.
Product Page (`/products/{product_id}`)
•	Fetch and display detailed product information.
•	Option to add product to cart.
Cart Page (`/cart`)
•	Display user's shopping cart.
•	Allows adding, editing, and removing items.
•	Stores data in the Cart Schema (Sanity CMS).
Checkout Page (`/checkout`)
•	Allows users to enter customer details and review order.
•	Displays order total and a confirm button.
•	**Backend Actions:**
•	- Create a new customer record in Sanity.
•	- Create a new order record in Sanity.
•	- Assign **Shipping ID** upon successful checkout.
Order Processing
•	Once an order is placed, the system assigns a **Shipping ID**.
•	Order status updates:
•	1. **Processing** → Order received.
•	2. **Shipped** → Order dispatched, assign **Tracking ID**.
•	3. **Delivered** → Order successfully delivered.
Order Tracking (`/order/{order_id}`)
•	Users can track their order using the **Tracking ID**.
•	Fetches order details and current status from the Order Schema in Sanity.
Data Schemas
Product Schema (Sanity)
•	`product_id`: Unique identifier
•	`name`: Product name
•	`image`: Product image URL
•	`price`: Product price
•	`description`: Product description
•	`stock`: Available stock count
Customer Schema (Sanity)
•	`customer_id`: Unique identifier
•	`name`: Customer's name
•	`email`: Email address
•	`address`: Shipping address
•	`phone`: Contact number
Order Schema (Sanity)
•	`order_id`: Unique identifier
•	`customer_id`: Associated customer
•	`items`: List of products purchased
•	`total_price`: Total amount
•	`status`: Processing | Shipped | Delivered
•	`shipping_id`: Unique shipping identifier
•	`tracking_id`: Tracking number assigned after dispatch
Diagram
Below is a high-level flow diagram illustrating the route workflow:

+-----------+     +----------------+     +------------+     +-----------+
| Homepage  | --> | Product Page   | --> | Cart Page  | --> | Checkout  |

