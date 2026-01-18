import { useEffect } from 'react';

export default function ThemeToggle({ dark, setDark }) {

  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [dark]);

  return (
    <div style={{ padding: '20px', border: '1px solid' }}>
      <h2>Theme Toggle SPA</h2>
      <p>Current Theme: <b>{dark ? "Dark" : "Light"}</b></p>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}