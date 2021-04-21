import React, {useState, useEffect} from  "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term])

    useEffect(() => {
        const fetchWikiData = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm
                }
            })

            setResults(data.query.search)
        };

        if (debouncedTerm) {
            fetchWikiData()
        }
        
    }, [debouncedTerm]);

    // useEffect(() => {
    //     const fetchWikiData = async () => {
    //         const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
    //             params: {
    //                 action: "query",
    //                 list: "search",
    //                 origin: "*",
    //                 format: "json",
    //                 srsearch: debouncedTerm
    //             }
    //         })

    //         setResults(data.query.search)
    //     };

    //     if (term && !results.length) { 
    //         fetchWikiData()
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 fetchWikiData();
    //             }
    //         }, 1000);
    
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
        
    // }, [term, results.length]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`} 
                        className="ui button">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

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

            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>

    )
}

export default Search;