import { useEffect, useState } from "react"

import { useSelector } from "react-redux"
import { ReducerUser } from "../../store/ducks/reducerUser/types"

import "./UserList.css";

const UserList = () => {
  const verifica = useSelector((state: ReducerUser) => state.user.aa);

  const [ users, setUsers] = useState([])
  const [ remove, setRemove] = useState(false)

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('aa') || '[]'))
  }, [])

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('aa') || '[]'))
  }, [remove, verifica])


  const removeUser = (id: any) => {
      const dd = users.filter((item: any) => {
        return id !== item.cpf
      })

      localStorage.setItem('aa', JSON.stringify(dd))
      setRemove(!remove)
    };

  return (
    <div className="home">
      <div className="beers-list">
        {
          ((users !== undefined)) &&
            users.map((item: any, index: any) => (
              <div key={index} className="beer">
                <h3>{item.name}</h3>
                <span>{item.email}</span>
                <small><strong>{item.endereco}</strong></small>
                <span>{item.telefone}</span>
                <span>{item.cpf}</span>
                <br />
                <button onClick={() => removeUser(item.cpf)}>Remover</button>
              </div>
          ))
        }
      </div>
    </div>
  );
};

export default UserList
