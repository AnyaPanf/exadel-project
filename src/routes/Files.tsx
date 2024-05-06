import { useEffect, useState } from "react"

export const Files = () => {
  const [allDocs, setAllDocs] = useState<{ id: number; name: string; created_at: string }[]>([])
  const [shouldRerender, setShouldRerender] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setAllDocs(data));
  }, [shouldRerender]);

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    fetch('http://localhost:3000/files', {
      method: 'GET',
      // headers: {
      //   'id': e.currentTarget.value,
      //   'name': e.currentTarget.name,
      // }
    })
      .then(res => res.blob())
      .then(console.log);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const docId = e.currentTarget.value;
    const docName = e.currentTarget.name;
    const res = await fetch(`http://localhost:3000/${docId}/${docName}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      setShouldRerender(!shouldRerender)
    }
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
