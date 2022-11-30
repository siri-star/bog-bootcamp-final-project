import '../styles/globals.css'
import { useEffect } from 'react';
import { useState } from "react";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <div>Title</div>
  );
} 



function Example() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
  
}

export default MyApp
