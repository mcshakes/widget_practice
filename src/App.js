import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";


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
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
    )
}

export default App;