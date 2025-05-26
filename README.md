# Hogwarts Houses Frontend

This is a React/Next.js frontend application that displays a list of Hogwarts houses fetched from a backend API. <br>
Users can search houses by name using a simple search filter.

---

## Features

- Fetches house data from backend API (`http://localhost:5000/houses`)
- Displays house details including name, founder, animal, traits, and more
- Client-side search filter to find houses by name instantly
- Responsive and clean UI with house cards

---

## Technologies Used

- React 18 / Next.js 13 (app router)
- TypeScript for type safety
- Tailwind CSS for styling
- Fetch API for data requests

---

## Project Structure

- `app/page.tsx` — Main page component that fetches houses and manages search filtering
- `components/HouseCard.tsx` — Displays detailed info about a single house
- `services/api.ts` — API helper functions to fetch houses from backend

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Backend API running locally on `http://localhost:5000/houses`

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/hogwarts-houses-frontend.git
   cd hogwarts-houses-frontend

2. Usage

Use the search input on the main page to filter houses by name.<br>
The house cards display key information such as founder, animal, house colors, and traits.
Customization

To add more search fields or filters, update the filtering logic in app/page.tsx. <br>
To customize house card display, edit components/HouseCard.tsx.

3. API

The frontend expects the backend to return house data in this format:
```
[
  {
    "id": "uuid",
    "name": "Gryffindor",
    "houseColours": "Scarlet and gold",
    "founder": "Godric Gryffindor",
    "animal": "Lion",
    "element": "Fire",
    "ghost": "Nearly-Headless Nick",
    "commonRoom": "Gryffindor Tower",
    "heads": [
      { "id": "uuid", "firstName": "Minerva", "lastName": "McGonagall" }
    ],
    "traits": [
      { "id": "uuid", "name": "Courage" },
      { "id": "uuid", "name": "Bravery" }
    ]
  }
]
```

...

## Note on Data Scale

The provided example data shows a few houses, but the actual backend may contain **hundreds of houses**.<br>
This frontend is designed to handle large datasets efficiently and render all houses correctly and dynamically.

---

## How to Extend the Project

To prepare this app for future extensions (e.g., pagination, advanced filtering, lazy loading), here are some key areas designed for easy growth:

1. **Pagination / Infinite Scrolling:**

   - Currently, all houses are fetched and rendered at once.
   - To improve performance with large data, implement server-side or client-side pagination.
   - You can add page state and fetch houses in chunks, loading more as the user scrolls.

2. **Advanced Filtering:**

   - The current filter is a simple search by house name.
   - You can add filters based on traits, founder, element, or other house attributes.
   - Filters can be combined with logical operators (AND/OR) for complex queries.

3. **Debounced Search:**

   - Integrate debouncing to limit the number of API calls when users type quickly.
   - Use libraries like `use-debounce` or implement custom debounce logic.

4. **Server-Side Filtering:**

   - Move filtering logic from frontend to backend to reduce payload sizes.
   - Pass filter parameters via API queries to get only the needed subset of houses.

5. **Caching and State Management:**

   - For a smoother UX, consider caching house data in a global state store (like Redux or React Context).
   - This prevents refetching on navigation or filter changes.

6. **Loading and Error States:**

   - Add user-friendly loading spinners or skeleton UI components during data fetches.
   - Display error messages on failed requests to improve usability.

7. **UI/UX Enhancements:**

   - Add sorting options (by name, founder, or number of traits).
   - Improve trait display with icons or colors.
   - Make house cards collapsible or expandable for detailed views.

---

## Summary

This project is structured to keep concerns separated (API fetching, UI components, filtering logic), making it easy to add features and optimizations as needed. <br>
The current setup lays a solid foundation for scaling and enhancing the user experience for large datasets.

---
