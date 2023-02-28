function App() {
  const { useState, useEffect } = React;
  const [fact, setFact] = useState('');

  async function fetchData() {
    try {
      const response = await axios.get('https://meowfacts.herokuapp.com/');
      setFact(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <h1>Meow Facts</h1>
      <img src="./cats.gif" className="cats" alt="cats"/>
      <blockquote class="blockquote"><p>{fact}</p></blockquote>
      <button type="button" class="btn btn-primary" onClick={fetchData}>New Fact</button>
    </div>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
