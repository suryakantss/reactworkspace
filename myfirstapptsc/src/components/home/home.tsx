export function Home(){
    let user = sessionStorage.getItem('user') || 'Guest';
    return (
        <div>
            <h3>Welcome {user}</h3>
        </div>
    )
}