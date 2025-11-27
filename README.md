# SauceDemo Visual Testing with Playwright & Applitools

This project demonstrates **visual regression testing** for the SauceDemo web application  
using **Playwright (TypeScript)** and **Applitools Eyes**.

It showcases how visual testing can detect UI changes, layout shifts, incorrect styling,  
and missing elements that traditional automation often misses.

## 🚀 Tech Stack

- **Playwright (TypeScript)**
- **Applitools Eyes**
- **Node.js**

---

## 🎯 Features Tested (SauceDemo)

This project includes a suite of visual tests covering core flows of SauceDemo:

### ✔ Login Page  
- Valid login UI   
- Layout & component visibility  

### ✔ Inventory Page  
- Product grid layout  
- Menu UI  
- Cart icon state  

### ✔ Add to Cart Flow  
- Add/remove cart item button  
- Cart number badge visibility  
- Product detail page layout  

### ✔ Checkout Flow  
- Checkout information page  
- Overview summary page  
- Final order completion page  

Each test uses **Applitools Eyes** to capture screenshots and compare them against the baseline.

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/saucedemo-visual-testing.git
cd saucedemo-visual-testing
```

### 2️⃣ Install dependencies

```bash
npm install
npx playwright install
```

### 3️⃣ Export your Applitools API key

```bash
export APPLITOOLS_API_KEY=YOUR_KEY      # macOS / Linux
set APPLITOOLS_API_KEY=YOUR_KEY        # Windows
```

---

## ▶️ Running all tests

```bash
npx playwright test
```

After execution, Applitools will generate a dashboard link containing:

- Baseline images  
- Visual diffs  
- Cross-browser comparison results  

## 📸 Sample Visual Testing Scenarios

### ⭐ Login Page
- Validate UI components  
- Validate error message layout  
- Validate styling & alignment  

### ⭐ Inventory Page
- Validate product card structure  
- Detect missing images/icons  
- Compare layouts across browsers  

### ⭐ Add to Cart
- Detect incorrect button states  
- Validate cart badge updates  

### ⭐ Checkout Pages
- Detect alignment issues  
- Validate summary sections  

---

## 🏁 Conclusion

This project demonstrates how visual testing with **Applitools + Playwright** can significantly improve UI quality by automatically catching visual bugs that functional tests overlook.

It serves as an ideal portfolio project, POC, or training resource for mastering visual testing.
