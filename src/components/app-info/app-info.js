import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in company X</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The following employees will receive the bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo; 