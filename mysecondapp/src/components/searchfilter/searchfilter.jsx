export function SearchFilter() {
    let cities = ['Pune', 'Mumbai', 'Chennai','Mangoan','Margaon','Panipat'];
    return (
        <div>
            <h3>Search Filter</h3>
            <input list="cit" name="demo" id="demo" />
           <datalist id="cit">
                {cities.map(c => <option value={c} key={c} />)}
            </datalist>
        </div>
    )
}