import { FormEvent, useCallback, useRef } from 'react';

import { Form } from '../styles/pages/About'


const about: React.FC = () => {

  const nameinputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    console.log(nameinputRef.current?.value)

  }, []);

  return (
    <Form>
      <div className="App">

        <form
          onSubmit={handleSubmit}
        >
          <input
            ref={nameinputRef}
            type="text"
            placeholder="Digite seu nome"
          />
          <button>aceita termos</button>
          <button type="submit">Enviar</button>
        </form>

      </div>
    </Form>
  )
};

export default about;
