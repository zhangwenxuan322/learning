import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import Table from './Table'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users')
  const [displayList, setDisplayList] = useState([])

  useEffect(() => {
    const url = API_URL + reqType
    const fetchList = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch')
        const tmpList = await response.json()
        setDisplayList(tmpList)
      } catch (err) {
        console.error(err.message)
      }
    }
    fetchList()
  }, [reqType])

  const handleClick = (e) => {
    setReqType(e.target.textContent)
  }

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* for part a */}
      {/* <List displayList={displayList} /> */}
      <Table displayList={displayList} />
    </div>
  );
}

export default App;
