# Resonate challenge

## Installation and Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/bettermode-post-list-clone.git
   cd bettermode-post-list-clone
   ```

2. **Install dependencies**:

   ```sh
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

3. **Run the application**:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Build the application**:

   ```sh
   npm run build
   # or
   yarn build
   ```


## Tech Stack
- **TypeScript**
- **React**
- **Vite**
- **Axios**
- **React-query**

## Project Structure

src/
├── api/
│ ├── queryKeys.ts
│ ├── users.ts
│ └── users.type.ts
├── components/
│ ├── CardRowItem
│ ├── ContactCard
│ └── ContactsList
├── providers/
│ └── QueryClientProvider.tsx
├── services/
│ ├── config.ts
│ └── queryClient.ts
├── App.tsx
├── main.tsx
└── global.d.ts
