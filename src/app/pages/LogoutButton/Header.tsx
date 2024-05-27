import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css'; // CSS-Datei für Styles

const Header: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Hier kannst du deine Logout-Logik einfügen (z.B. Token entfernen, API-Call, etc.)
    // localStorage.removeItem('token'); // Beispiel für das Entfernen eines Tokens
    // Nach dem Logout zur Login-Seite weiterleiten
    history.push('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Meine Seite</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
