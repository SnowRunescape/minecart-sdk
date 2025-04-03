# Minecart SDK

The **Minecart SDK** is a JavaScript/TypeScript library that simplifies the integration of the **Minecart API** into your website or application. It provides structured data access and streamlined interactions for e-commerce functionalities tailored to Minecraft servers.

## 🚀 Features

- Retrieve store details and customization options.
- Fetch news, rules, teams, categories, servers, and products.
- Manage payment gateways and coupon codes.
- Create and manage payments with multiple gateways.

---

## 📦 Installation

To install the SDK, use **npm** or **yarn**:

```sh
npm i minecart-sdk
# or
yarn add minecart-sdk
```

---

## 🔧 Usage

### Importing the SDK

```ts
import { minecart } from "minecart-sdk";
```

### Setting the API Key

Before making any requests, set the API key:

```ts
minecart.setApiKey("your-api-key-here");
```

### Fetch Store Information

```ts
const store = await minecart.store.get();
console.log(store.name); // Outputs the store name
```

### Fetching News

```ts
const news = await minecart.news.all();
console.log(news);
```

### Fetching Product List with Filters

```ts
const products = await minecart.products.all({ category: 2 });
console.log(products);
```

### Creating a Payment

```ts
const payment = await minecart.payment.create({
  gateway: "PayPal",
  username: "Player123",
  items: [{ id: 1, amount: 2 }],
  coupon: "SUMMER2025",
  email: "player@example.com",
});

console.log(payment.url); // Redirect URL for payment
```

---

## 📜 API Reference

### Store
- `minecart.store.get()`: Fetches the store details.
- `minecart.store.rum()`: (Reserved for future use)

### News
- `minecart.news.all()`: Fetches all news articles.

### Rules
- `minecart.rules.all()`: Fetches all server rules.

### Teams
- `minecart.team.all()`: Fetches all teams and members.

### Categories
- `minecart.categories.all()`: Fetches all product categories.

### Servers
- `minecart.servers.all()`: Fetches all available servers.

### Products
- `minecart.products.all(filters?)`: Fetches all products with optional filtering.

### Coupons
- `minecart.coupons.get(coupon)`: Retrieves coupon details by code.

### Gateways
- `minecart.gateways.all()`: Fetches available payment gateways.

### Payments
- `minecart.payment.create(props)`: Creates a new payment request.

---

## 🤝 Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, feel free to open an **issue** or submit a **pull request**.

---

## 🛡️ License

Minecart SDK is made available under the MIT License (MIT). Please see the [License File](https://github.com/SnowRunescape/minecart-sdk/blob/master/LICENSE) for more information.

---

## 📞 Support

For questions or support, feel free to open an issue on GitHub or reach out to the Minecart team.

---

**Happy coding! 🎮**

