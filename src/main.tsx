import { createRoot } from "react-dom/client";

import AppQueryClientProvider from 'providers/QueryClientProvider'
import App from "./App";
import "./index.scss";

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppQueryClientProvider>
    <App />
  </AppQueryClientProvider>
);
