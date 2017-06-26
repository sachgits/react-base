import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const <%= name %>Model = Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const <%= name %>Collection = Record({ data: Map() });

function setInitialState(initialState) {
  return initialState.<%= name %> = new <%= name %>Collection({
    data: generateImmutable( initialState.<%= name %>.data, <%= name %>Model )
  });
}

export { <%= name %>Model, <%= name %>Collection, setInitialState };
