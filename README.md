# 🛍️ ShopEase

ShopEase is a full-stack e-commerce web application where users can browse products, create an account, log in, and manage their shopping cart — all in a clean and simple interface.

---

## 🚀 Features

- 🔐 User Registration & Login with **JWT Authentication**
- 🛒 Add to Cart & Manage Cart Items
- 📦 Browse Products fetched from FakeStoreAPI
- 🖥️ Server-side rendered UI using EJS templates

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Backend    | Node.js, Express.js |
| Database   | MongoDB             |
| Auth       | JWT (JSON Web Token)|
| Templating | EJS                 |
| API        | FakeStoreAPI        |

---

## 📸 Screenshots


![Screenshot 1](https://raw.githubusercontent.com/sheikhsulaiman1/ShopEase/main/Screenshot%20(43).png)
![Screenshot 2](https://raw.githubusercontent.com/sheikhsulaiman1/ShopEase/main/Screenshot%20(44).png)
![Screenshot 3](https://raw.githubusercontent.com/sheikhsulaiman1/ShopEase/main/Screenshot%20(45).png)
![Screenshot 4](https://raw.githubusercontent.com/sheikhsulaiman1/ShopEase/main/Screenshot%20(46).png)
![Screenshot 5](https://raw.githubusercontent.com/sheikhsulaiman1/ShopEase/main/Screenshot%20(47).png)
---

## ⚙️ Installation

1. Clone the repository
```bash
   git clone https://github.com/sheikhsulaiman1/ShopEase.git
   cd ShopEase
```

2. Install dependencies
```bash
   npm install
```

3. Create a `.env` file in the root and add:
```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
```

4. Run the app
```bash
   node app.js
```

5. Open your browser and go to `http://localhost:3000`

---

## 📁 Project Structure
```
ShopEase/
├── controller/
├── middleware/
├── model/
├── public/
├── routes/
├── views/
├── app.js
└── package.json
```

---

## 🙋‍♂️ Author

**Sheikh Sulaiman**
- GitHub: [@sheikhsulaiman1](https://github.com/sheikhsulaiman11)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
