import React, {useState, useEffect} from  "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    console.log(results)

    useEffect(() => {
        // console.log("RUN AFTER EVERY CHANGE to "term" AND AT INITIAL RENDER")
        const fetchWikiData = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            })

            setResults(data)
        }
        //  above params form => ?action=query&list=search&format=json&srsearch=programming

        if (term) {
            fetchWikiData();
        }
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label >Enter search Term</label>
                    <input 
                        type="text" 
                        className="input"
                            onChange ={e => setTerm(e.target.value)}
                        />
                </div>
            </div>
        </div>

    )
}

export default Search;