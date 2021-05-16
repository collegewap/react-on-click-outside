import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  return (
    <div className="wrapper">
      <button className="button" onClick={() => setIsMenuOpen(true)}>
        Click Me
      </button>
      {isMenuOpen && (
        <ul className="list" ref={ref}>
          <li className="list-item">dropdown option 1</li>
          <li className="list-item">dropdown option 2</li>
          <li className="list-item">dropdown option 3</li>
          <li className="list-item">dropdown option 4</li>
        </ul>
      )}
    </div>
  );
}

export default App;
