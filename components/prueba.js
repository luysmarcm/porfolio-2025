'use client'

import { useEffect } from 'react';

export default function Prueba() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.gethearth.com/script.js";
    script.id = "hearth-script";
    script.setAttribute('data-orgid', '49438');
    script.setAttribute('data-partner', 'monarca-life-improvement');
    script.setAttribute('data-orgUuid', '9acc99cb-c1be-46fa-9ec8-2ea54a8e0b62');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe id="hearth-lead-capture-widget"></iframe>
  );
}