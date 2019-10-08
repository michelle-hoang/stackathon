import React from 'react';
import { render } from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Root from '../client/components/Root';

render(<Root />, document.getElementById('app'));
