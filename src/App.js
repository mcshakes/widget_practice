import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: "What is love?",
        content: "A man made construct"
    },
    {
        title: "Why use React?",
        content: "Cool, I guess..."
    },
    {
        title: "What happens after death?",
        content: "Nothing..."
    }
]

const App = () => {
    return (
        <div>
            <br />
            <Accordion items={items}/>
        </div>
    )
}

export default App;