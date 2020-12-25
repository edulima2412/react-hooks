import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store";
import { login, numberAdd2 } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, 'Eduardo')}>
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'numberMult7' })}>
            *7
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'numberSplit25' })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'convertNumber' })}>
            Converter
          </button>
          <input type="number" className="input" onChange={(e) => dispatch({ type: 'addNumber', number: e.target.value })} />
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
