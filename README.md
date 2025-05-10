# Green Mart Product Entry – Test Case (React + TypeScript + Vite)

A frontend-only solution for a fullstack developer test case using **React**, **TypeScript**, and **Vite**. This project implements a product input form for *Green Mart* where users can dynamically manage product details and associated categories with image uploads.

## 🚀 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- No backend or database – all state is handled client-side only

---

## ✅ Features Implemented

- Add up to **5 products**, each with:
  - 📝 Product Name (text input)
  - 📄 Product Description (textarea)
  - ➕/❌ Add & Remove buttons
- Each product can have up to **3 categories**, each with:
  - 🖼️ Image uploader (JPG/JPEG/PNG only)
  - 🗑️ Delete image with confirmation modal
  - 🏷️ Category name (text input for better context)
- ✨ Auto-hide add buttons & show "maximum input" notification after limits
- 💡 User-friendly layout and visual feedback for all actions

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Developer Notes

- The test case did not require a backend or persistent storage — this is a frontend-only implementation with state held in memory.
- I added some enhancements for clarity and better UX:
  - Product description field, as referenced in the Objective section of the test case.
  - Category name field to give meaningful context to uploaded images.

## 👁️Demo
- https://greenmart-product-entry.vercel.app/

## 📸 Screenshot

- https://prnt.sc/njfKkBfx_KC0

## ✅ Status
✅ Completed and fully functional according to test requirements.
