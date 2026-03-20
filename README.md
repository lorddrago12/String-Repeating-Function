# 🔁 String Repeating Function

A simple JavaScript utility function that repeats a given string a specified number of times.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔁 String Repetition | Repeats any string `n` number of times |
| 🛡️ Edge Case Handling | Returns an empty string if the number is `<= 0` |
| ⚡ Lightweight | Pure JavaScript, no dependencies |

---

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/lorddrago12/String-Repeating-Function.git
cd String-Repeating-Function
```

### Run the Function
```bash
node repeatString.js
```

---

## ⚙️ How It Works

The function loops `num` times, appending the string to a result variable on each iteration.
```javascript
function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3));  // "abcabcabc"
console.log(repeatStringNumTimes("hi", 0));   // ""
console.log(repeatStringNumTimes("hi", -2));  // ""
```

---

## 🤝 How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
