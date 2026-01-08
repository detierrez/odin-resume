import { useState } from "react";
import { useIsEditing } from "./IsEditingContext";

export default function Header({ contact: initialContact }) {
  const [contact, setContact] = useState(initialContact);
  const isEditing = useIsEditing();

  function handleUpdateContact(event) {
    const newValue = event.target.value;
    const key = event.target.dataset.key;

    const updated = { ...contact, [key]: newValue };
    setContact(updated);
  }

  const placeholders = {
    author: "Full name...",
    website: "www.mywebsite.com",
    email: "my@email.com",
    phone: "+555-5555-5555",
  };

  function scaffoldField(placeholder, key) {
    return isEditing ? (
      <input
        type="text"
        placeholder={placeholder}
        data-key={key}
        value={contact[key]}
        onChange={handleUpdateContact}
      />
    ) : (
      <span>{contact[key]}</span>
    );
  }

  return (
    <header>
      {Object.entries(placeholders).map(([key, placeholder]) => {
        const field = (
          <>
            {key === "email" && "Email: "}
            {key === "phone" && "Phone: "}
            {scaffoldField(placeholder, key)}
          </>
        );
        
        return key === "author" ? (
          <h1 key={key} className={key}>{field}</h1>
        ) : (
          <div key={key} className={key}>{field}</div>
        );
      })}
    </header>
  );
}
