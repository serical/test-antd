import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";
import {Button} from "antd";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <Button size={"large"} type={"primary"}>click me</Button>
            <Button size={"large"} type={"primary"}>click me</Button>
            <Button size={"large"} type={"primary"}>click me</Button>
            <Button size={"large"} type={"primary"}>click me</Button>
            <Button size={"large"} type={"primary"}>click me</Button>
        </div>
    )
}

export default App
