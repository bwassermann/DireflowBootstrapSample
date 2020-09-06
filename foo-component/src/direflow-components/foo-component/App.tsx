import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import customBootstrapStyles from './custom.bootstrap.min.css'
import { Form } from 'react-bootstrap';

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<IProps> = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('my-event');
    dispatch(event);
  };

  const renderSampleList = props.sampleList.map((sample: string) => (
    <div key={sample} className='sample-text'>
      → {sample}
    </div>
  ));

  return (
    <Styled styles={customBootstrapStyles} >
      <div className='app'>
       <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>
      </Form>
      </div>
      </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Foo Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

export default App;
