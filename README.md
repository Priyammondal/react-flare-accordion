# react-flare-accordion

A **highly configurable** and **lightweight** React accordion component with customizable animations and icons.

## 🚀 Features
- **Custom Icons**: Pass your own expand/collapse icons.
- **Animations**: Easily configure animation effects.
- **Dynamic Data**: Accepts an array of objects with `title` and `content`.
- **Minimal & Fast**: Small bundle size with zero dependencies.

---

## 📦 Installation

```sh
npm install react-flare-accordion
```

or

```sh
yarn add react-flare-accordion
```

---

## 🛠️ Usage

### Basic Example

```jsx
import React from 'react';
import useAccordion from 'react-flare-accordion';

const App = () => {
  const [Accordion] = useAccordion([
    { title: 'First Item', content: 'This is the first content' },
    { title: 'Second Item', content: 'This is the second content' },
    { title: 'Third Item', content: 'This is the third content' },
  ]);

  return <Accordion />;
};

export default App;
```

---

## 🎨 Custom Icons & Animation

You can pass **custom icons** (React components or images) and an **animation type**:

```jsx
import { FaPlus, FaMinus } from 'react-icons/fa';

const [Accordion] = useAccordion(
  [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
  ],
  {
    animation: 'fade',
    icons: {
      collapse: <FaPlus />,
      expand: <FaMinus />,
    },
  }
);
```

---

## 🔧 API Reference

### `useAccordion(data, options)`

#### **Parameters:**
- **`data`** *(array)* - List of accordion items. Each item must have:
  ```js
  { title: "Your Title", content: "Your Content" }
  ```
- **`options`** *(object, optional)* - Additional configurations:
  - `icons` *(object)* - Custom icons for expand/collapse.
    ```js
    { collapse: <CustomCollapseIcon />, expand: <CustomExpandIcon /> }
    ```
  - `animation` *(string)* - Animation effect (default: `'rotate'`).

#### **Returns:**
- **`[AccordionComponent, setAccordionData]`**
  - `AccordionComponent`: The rendered accordion.
  - `setAccordionData(newData)`: Function to update accordion items dynamically.

---

## 🔄 Dynamically Updating Data

You can update the accordion items using `setAccordionData`:

```jsx
const [Accordion, setAccordionData] = useAccordion([]);

useEffect(() => {
  setAccordionData([
    { title: 'New Item 1', content: 'Updated content' },
  ]);
}, []);
```

---

## 🌟 License

This project is licensed under the **MIT License**. Feel free to use and modify it.

---

## 📢 Contributing

If you find any bugs or have suggestions, feel free to **open an issue** or **submit a pull request**!

---

### ⭐ If you find this package useful, please give it a star on GitHub!

