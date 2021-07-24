import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/ducks/reducerProducts/action"
import { ReducerProduct } from "../../store/ducks/reducerProducts/types"

import "./FornProduct.css";

const FormProduct = () => {
  const dispatch = useDispatch();
  const verifica = useSelector((state: ReducerProduct) => state.product.aa)

  const inputTitle = useRef<HTMLInputElement>(null)
  const inputPrice = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLInputElement>(null)
  const InputImage = useRef<HTMLInputElement>(null)

  const cleanForm = () => {
    if (inputTitle && inputTitle.current) {
      inputTitle.current.value = ""
    }

    if (inputPrice && inputPrice.current) {
      inputPrice.current.value = ""
    }

    if (inputDescription && inputDescription.current) {
      inputDescription.current.value = ""
    }

    if (InputImage && InputImage.current) {
      InputImage.current.value = ""
    }
  };

  const register = () => {
    interface Input {
      title: string | undefined;
      price: string | undefined;
      description: string | undefined;
      image: string | undefined;
    }
    const requisicao: Input = {
      title: inputTitle.current?.value,
      price: inputPrice.current?.value,
      description: inputDescription.current?.value,
      image: InputImage.current?.value,
    };

    if (requisicao.title !== "" || requisicao.price !== "" || requisicao.description !== "" || requisicao.image !== "")
     {
        let dados = JSON.parse(localStorage.getItem('produto') || '[]')
        dados.push({
          title: requisicao.title,
          price: inputPrice.current?.value,
          description: inputDescription.current?.value,
          image: InputImage.current?.value,
        })

        localStorage.setItem('produto', JSON.stringify(dados))
        dispatch(getProducts(!verifica))
        cleanForm()
      }
  }

  return (
    <div className="form">
      <p>Cadastrar Produto</p>

      <input type="text" placeholder="titulo" ref={inputTitle} />
      <input type="text" placeholder="preço" ref={inputPrice} />
      <input
        type="text"
        placeholder="Digite uma descrição"
        ref={inputDescription}
      />
      <input type="text" placeholder="Cole a url da imagem" ref={InputImage} />

      <button onClick={register}>Cadastrar</button>
    </div>
  );
};

export default FormProduct
