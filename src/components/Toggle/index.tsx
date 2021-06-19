import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('mudou')}
    />
    <ToggleLabel>dark</ToggleLabel>
  </Container>
);

export default Toggle;
