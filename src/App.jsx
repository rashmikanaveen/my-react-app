import React, { useEffect, useState } from 'react';

function App() {
  const [config, setConfig] = useState(null);
  const [client, setClient] = useState('custom1'); // Switch between custom1 and custom2
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    // Add the query parameter for the specific client
    const apiUrl = `${baseUrl}?client=${client}`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.error("Error fetching AWS config:", err));
  }, [client]);

  return (
    <main className="app-shell">
      <section className="config-card">
        <h1>App Config (from AWS)</h1>

        <div className="button-row">
          <button
            className={client === 'custom1' ? 'btn active' : 'btn'}
            onClick={() => setClient('custom1')}
          >
            Load Custom 1
          </button>
          <button
            className={client === 'custom2' ? 'btn active' : 'btn'}
            onClick={() => setClient('custom2')}
          >
            Load Custom 2
          </button>
        </div>

        {config ? (
          <div className="config-details">
            <p>
              <strong>Support Email:</strong> {config.support_email}
            </p>
            <p>
              <strong>Support Phone:</strong> {config.support_phone}
            </p>
          </div>
        ) : (
          <p className="loading-text">Loading configuration...</p>
        )}
      </section>
    </main>
  );
}

export default App;