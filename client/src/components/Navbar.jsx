function Navbar() {
    return (
        <div className="navbar">
            <h1>PERN-CRUD-To-Do</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/tasks">Show Tasks</a>
                </li>
                <li>
                    <a href="/new">New Task</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;