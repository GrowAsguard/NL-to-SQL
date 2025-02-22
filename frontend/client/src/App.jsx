// src/App.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    // State variables
    const [nlQuery, setNlQuery] = useState('');
    const [relevantTables, setRelevantTables] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [uploadedSchema, setUploadedSchema] = useState(null);

    const insertText = async (event) => {
        event.preventDefault();
        const response = await axios.get('http://localhost:5000/render');
        document.getElementById('insert').innerHTML = response.data;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setRelevantTables([]);

        try {
            const response = await axios.post('http://localhost:5000/api/relevant-tables', {
                nl_query: nlQuery,
                schema: uploadedSchema,
            });
            setRelevantTables(response.data.relevantTables);
        } catch (err) {
            setError(err.message || 'Failed to fetch relevant tables');
            console.error("Frontend error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSchemaUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const parsedSchema = JSON.parse(e.target.result);
                    setUploadedSchema(parsedSchema);
                } catch (parseError) {
                    setError('Error parsing uploaded JSON schema file.');
                    setUploadedSchema(null);
                }
            };
            reader.onerror = () => {
                setError('Error reading uploaded schema file.');
                setUploadedSchema(null);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>

        <div className='container'>
            <h1>Database Table Analyzer</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={nlQuery}
                    onChange={(e) => setNlQuery(e.target.value)}
                    placeholder="Enter your natural language query"
                    style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
                >
                    {loading ? 'Analyzing...' : 'Analyze Query'}
                </button>
            </form>

            <input type="file" accept=".json" onChange={handleSchemaUpload} style={{ marginBottom: '20px' }} />

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {relevantTables.length > 0 && (
                <div>
                    <h2>Relevant Tables:</h2>
                    <ul>
                        {relevantTables.map((table, index) => (
                            <li key={index}>{table}</li>
                        ))}
                    </ul>
                </div>
            )}
            </div>
        </div>
    );
}

export default App;