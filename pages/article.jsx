import React from 'react'

const f = (props) => {
  {console.log(props.titulo)}
  return <div>{JSON.stringify(props,null,2)}</div>
}

f.getInitialProps = context => {
  return context.query;
}

export default f;