import { useEffect, useState } from "react"

export const Files = () => {
  const [allDocs, setAllDocs] = useState<{ id: number; name: string; created_at: string }[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setAllDocs(data));
  }, [allDocs]);

  return (
    <>
      <div className="container">
        <div className="files">Files</div>
      </div>
    </>
  )
}
