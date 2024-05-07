import { useEffect, useState } from "react"

export const Files = () => {
  const [allDocs, setAllDocs] = useState<{ id: number; name: string; created_at: string }[]>([]);
  const [shouldRerender, setShouldRerender] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setAllDocs(data));
  }, [shouldRerender]);

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const docName = e.currentTarget.name;

    function downloadFile(url: string, fileName: string) {
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    await fetch(`http://localhost:3000//public/files/${docName}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        
        downloadFile(url, docName); 
        window.URL.revokeObjectURL(url);
      });
  }

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
