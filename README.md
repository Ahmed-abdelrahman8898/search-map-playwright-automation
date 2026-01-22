# Playwright Search-Map Automation Framework

A sample test for the HealthyCloud Search Map, designed using:

- ✅ Playwright + TypeScript
- ✅ Page Object Model (POM)
- ✅ Dynamic/Randomized Filtering
- ✅ Rich Failure Artifacts
- ✅ CI/CD with GitHub Actions

  
[![Node 20](https://img.shields.io/badge/node-20-blue.svg)]()
[![Playwright](https://img.shields.io/badge/Playwright-blue.svg)]()
[![TypeScript](https://img.shields.io/badge/Typescript-green.svg)]()
[![CI](https://github.com/Ahmed-abdelrahman8898/search-map-playwright-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/Ahmed-abdelrahman8898/search-map-playwright-automation/actions)
---

## 1️⃣ Project Goals

- **Zero-Flakiness Locators:** Avoids brittle IDs; uses stable label-to-container relationship mapping.
- **Dynamic Coverage:** Uses randomization to ensure the filter works for all age groups and methods, not just one.
- **Visual Evidence:** Automatically captures video and DOM traces when a test fails.
- **Generic Architecture:** One method handles all dropdowns (Alter, Verfahren, Ort, etc.).
---

## 2️⃣ Tech Stack

| Component | Tool |
| :--- | :--- |
| **Language** | TypeScript |
| **Test Runner** | Playwright Test |
| **Browser** | Google Chrome |
| **Design Pattern** | Page Object Model (POM) |
| **Build Tool** | Maven |
| **Reporting** | Playwright HTML Reporter |
| **CI/CD** | GitHub Actions |
| **Artifacts** | Screenshots, Videos, & Trace Viewer |

---

## 3️⃣ Architecture

```text
search-map-playwright
│
├── tests/
│   └── map-filter.spec.ts  
│
├── pages/
│   └── SearchMapPage.ts    
│
├── test-results/             
├── playwright.config.ts     
└── package.json
└── .github
    └── workflows
        └── ci.yml
```

# 4️⃣ Framework Highlights

### ⭐ Smart Generic Locators
Instead of hardcoding IDs like b4-b1-OptionsContainer, we use a Parent-Filter strategy:
- We anchor to the exact label (e.g., "Alter").
- We find the sibling .dropdown-container.
- This ensures the test never clicks the wrong dropdown.

### ⭐ Randomized Data Selection
To improve test coverage, the framework:
- Opens the dropdown.
- Counts the available options dynamically.
- Randomly picks an option (skipping "Alle"). This ensures we test different data paths on every run

### ⭐ Failure Recording
The playwright.config.ts is configured to keep:
- Screenshots: The exact moment of failure.
- Videos: The full interaction flow.
- Traces: A full "Time-Machine" view of the DOM and Network logs.

---

## 5️⃣ Running Tests Locally

### ✅ Prerequisites
- Node.js (v18+)
- Chrome installed

### ✅ Run Tests

**Bash**  
```bash
npx playwright test
```

## 6️⃣ CI/CD Pipeline (GitHub Actions)

### Triggers
- ✅ Runs manually  
- ✅ Runs on schedule 

### Artifacts Uploaded
- Playwright built in report  

## ✅ 7️⃣ Key Benefits

- ✅ Clean architecture  
- ✅ Easy to extend  
- ✅ Human-like flows reduce flakiness  
- ✅ Randomness improves coverage  

