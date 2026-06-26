# 🏦 Bank Account Manager

מערכת לניהול חשבונות בנק הרצה ב-Terminal.

---

## 🎯 נושאים לתרגול

- Variables
- Conditions
- Loops
- Functions
- Arrays
- Objects
- Array Methods
- Factory Functions
- Closures
- Modules (Import / Export)

---

## 👤 מבנה לקוח

- **id** — מזהה ייחודי
- **fullName** — שם מלא
- **accountType** — סוג חשבון
- **balance** — יתרה
- **isActive** — האם החשבון פעיל

**סוגי חשבונות:** Regular · Premium · Student

---

## ⚙️ פעולות המערכת

**Create Customer** — יצירת לקוח חדש
קלט: שם, סוג חשבון, יתרה התחלתית

**Show Customers** — הצגת כל הלקוחות

**Deposit** — הפקדת כסף
קלט: מזהה לקוח, סכום

**Withdraw** — משיכת כסף
קלט: מזהה לקוח, סכום

**Search Customer** — חיפוש לקוח
קלט: מזהה או שם

**Close Account** — סגירת חשבון
קלט: מזהה לקוח

**Show Statistics** — הצגת סטטיסטיקות

---

## 📋 פירוט פעולות

### 1. Create Customer

בדיקות חובה:
- שם לא ריק
- יתרה מספרית וגדולה מ-0
- סוג חשבון תקין

```
✅ Customer created successfully
```

---

### 2. Show Customers

יש להציג: ID · Name · Account Type · Balance · Status

---

### 3. Deposit

בדיקות חובה:
- לקוח קיים
- חשבון פעיל
- סכום גדול מ-0

```
✅ Deposit completed successfully
```

---

### 4. Withdraw

בדיקות חובה:
- לקוח קיים
- חשבון פעיל
- סכום גדול מ-0
- יתרה מספקת

```
✅ Withdraw completed successfully
❌ Withdraw failed: insufficient balance
```

---

### 5. Search Customer

חיפוש לפי ID או שם — **case-insensitive**

---

### 6. Close Account

לאחר סגירה: אין הפקדה · אין משיכה

```
✅ Account closed successfully
```

---

### 7. Show Statistics

```
===== Statistics =====
Total Customers:  5
Active Accounts:  4
Total Money:      25000
Average Balance:  5000
Highest Balance:  12000
```

---

## 📌 דרישות JavaScript

### Array Methods — חובה לפחות 4

- **find()** — חיפוש לקוח בודד
- **filter()** — סינון לקוחות לפי תנאי
- **map()** — עיבוד ושינוי מערך לקוחות
- **reduce()** — חישוב סטטיסטיקות

### String Methods — חובה לפחות 2

- **trim()** — ניקוי רווחים מהקלט
- **toLowerCase()** — חיפוש לא רגיש לאותיות

### Factory Function

יש ליצור `createCustomer()` שמחזירה אובייקט לקוח חדש.

### Closure

יש ליצור Closure ליצירת מזהים אוטומטיים: 1, 2, 3, ...

---

## 📁 מבנה קבצים

חלוקה לפי שיקול דעת — חובה קובץ ראשי שמריץ הכל.

---

## ⭐ בונוס

- **Transfer Money** — העברת כסף בין חשבונות
- **Save To JSON** — שמירת נתונים לקובץ JSON
- **Read From JSON** — טעינת נתונים מקובץ JSON
- **Console Menu** — תפריט אינטראקטיבי עם readline