import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let imgUrl = "bye"
const giphyApi = "Z6mC3DHfYxVRHUIGgbryF1g1H3VwN1AE"
const searchTerm = "ryan+gosling"
const unsuccessful = document.createElement("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/100px-Red_X.svg.png"
const successful = () => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${giphyApi}`
    fetch(url).then(res => res.json()).then(content => {
        console.log("hello", content.data[0].url);
        return imgUrl = (content.data[0].url)
    })

}
successful();

ReactDOM.render(
    <React.StrictMode>
        <App
            successful = {imgUrl}
            unsuccessful = {unsuccessful}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
