export function Home(){
    let user = sessionStorage.getItem('user') || 'Guest';
    return (
        <div>
            <h3>Welcome {atob(user)}</h3>
        </div>
    )
}