import { useEffect, useState } from "react"

export const Files = () => {
  const [allDocs, setAllDocs] = useState<{ id: number; name: string; created_at: string }[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setAllDocs(data));
  }, []);

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    fetch('http://localhost:3000/files', {
      method: 'GET',
      headers: {
        'id': e.currentTarget.value,
        'name': e.currentTarget.name,
      }
    })
      .then(res => res.blob())
      .then(console.log);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'id': e.currentTarget.value,
        'name': e.currentTarget.name,
      }
    };
    fetch('http://localhost:3000/', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
  }

  return (
    <>
      <div className="container">
        <div className="files">
          <table className="files_table">
            <thead>
              <th>ID</th>
              <th>File name</th>
              <th>Date</th>
              <th colSpan={2}>Actions</th>
            </thead>
            <tbody>
              {allDocs.map((doc) => {
                const { id, name, created_at } = doc
                return (
                  <tr className="files_tablerow">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{created_at.slice(0, 10)}</td>
                    <td><button type="submit" onClick={handleDownload} className="files_btn">Download</button></td>
                    <td><button value={id} name={name} type="submit" onClick={handleDelete} className="files_btn">Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
