import { useEffect, useState } from "react";

import { Storage } from '@plasmohq/storage';

const storage = new Storage({ area: 'local' });

export default function NewTab() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const initContent = async () => {
      const status = await storage.get('status');

      setContent(status);
    };

    initContent();
  }, []);

  return <span>{content}</span>;
}
