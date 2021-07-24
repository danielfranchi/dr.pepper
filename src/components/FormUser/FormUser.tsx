import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../store/ducks/reducerUser/action"
import { ReducerUser } from "../../store/ducks/reducerUser/types"

import "./FormUser.css";

const FormUser = () => {
  const dispatch = useDispatch();

  const verifica = useSelector((state: ReducerUser) => state.user.aa);

  const inputName = useRef<HTMLInputElement>(null);
  const inputEndereco = useRef<HTMLInputElement>(null);
  const inputMail = useRef<HTMLInputElement>(null);
  const inputTelefone = useRef<HTMLInputElement>(null);
  const inputCpf = useRef<HTMLInputElement>(null);

  const cleanUser = () => {
    if (inputMail && inputMail.current) {
      inputMail.current.value = ""
    }

    if (inputEndereco && inputEndereco.current) {
      inputEndereco.current.value = ""
    }

    if (inputName && inputName.current) {
      inputName.current.value = ""
    }

    if (inputTelefone && inputTelefone.current) {
      inputTelefone.current.value = ""
    }

    if (inputCpf && inputCpf.current) {
      inputCpf.current.value = ""
    }
  };

  const registerUser = () => {
  
    interface Input {
      name: string | undefined;
      endereco: string | undefined;
      email: string | undefined;
      telefone: string | undefined;
      cpf: string | undefined;
    }
    const requisicao: Input = {
      name: inputName.current?.value,
      endereco: inputEndereco.current?.value,
      email: inputMail.current?.value,
      telefone: inputTelefone.current?.value,
      cpf: inputCpf.current?.value,
    };

    if (requisicao.email !== "" || requisicao.endereco !== "" || requisicao.name !== "" || requisicao.telefone !== "" || requisicao.cpf !== "")
      {
        let dados = JSON.parse(localStorage.getItem('aa') || '[]')
        dados.push({
          name: requisicao.name,
          endereco: inputEndereco.current?.value,
          email: inputMail.current?.value,
          telefone: inputTelefone.current?.value,
          cpf: inputCpf.current?.value,
        })

        localStorage.setItem('aa', JSON.stringify(dados))
        dispatch(getUser(!verifica))
        cleanUser()
      }
  }

  return (
    <div className="form">
      <p>Cadastrar Usuario</p>
      <input type="text" placeholder="nome" ref={inputName} />
      <input type="text" placeholder="endereço" ref={inputEndereco} />
      <input type="email" placeholder="e-mail" ref={inputMail} />
      <input type="text" placeholder="telefone" ref={inputTelefone} />
      <input type="text" placeholder="cpf" ref={inputCpf} />

      <button onClick={registerUser}>Cadastrar</button>
    </div>
  );
};

export default FormUser
