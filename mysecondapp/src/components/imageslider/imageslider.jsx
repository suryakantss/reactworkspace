import './imageslider.css';
import { useState } from "react"

export function ImageSlider() {
    let [index, setIndex] = useState(0);
   
    let images = [
        { id: '1', name: 'Scenary', url: 'sc.jpeg' },
        { id: '2', name: 'Village', url: 'village.jpeg' },
        { id: '3', name: 'Sun Set', url: 'sunset.jpeg' },
        { id: '4', name: 'Moon', url: 'moon.jpeg' },
    ]
    
    function next() {
        if (index == 3) {
            setIndex(0);
            return;
        }
       
        setIndex(index + 1);
       
    }
    function prev() {
        if (index == 0) {
            setIndex(3);
            return;
        }

        setIndex(index - 1);
       
    }
    return (
        <div>
            <h3>Slider</h3>
            <table>
                <thead>
                    <tr><th colSpan="3">{images[index].name}</th></tr>
                    <tr>
                        <th><button onClick={prev}>Prev</button></th>
                        <th><div> <img src={images[index].url}></img></div></th>
                        <th><button onClick={next}>Next</button></th>
                    </tr>
                    <tr><th colSpan="3">{images[index].id}</th></tr>
               
                </thead>
            </table>
        </div>
    )
}