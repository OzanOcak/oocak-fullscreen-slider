import { createRoot } from "@wordpress/element";
import App from "./App";
import "./styles/admin.css";

const root = document.getElementById("oocakfs-root");
if (root) {
  // Read the pages list from the inline JSON script tag.
  const pagesEl = document.getElementById("oocakfs-pages-data");
  if (pagesEl && window.OOCAKFS) {
    try {
      window.OOCAKFS.pages = JSON.parse(pagesEl.textContent);
    } catch (e) {
      window.OOCAKFS.pages = [];
    }
  }

  const sliderId = parseInt(root.dataset.sliderId, 10) || 0;
  createRoot(root).render(<App sliderId={sliderId} />);
}
