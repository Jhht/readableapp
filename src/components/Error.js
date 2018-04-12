import React from 'react';
import { Link } from 'react-router-dom'

const Error = ({name}) => (
 <div><p>Error 404 :( </p>
 <Link to={`/`}> Back home</Link></div>
);

export default Error;