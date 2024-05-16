import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className="header">
                <nav className="header_nav">
                    <Link to={`/upload`} className="header_link">Upload</Link>
                    <Link to={`/files`} className="header_link">Files</Link>
                </nav>
            </div>
        </>
    )
}
