import * as React from "react";
import App from "../components/App";
import GraphQLProveedor from "../components/GraphQLProveedor";
import Seccion from "../components/Seccion";

import { useRouter } from "next/router";
import { GraphQL, GraphQLProvider } from "graphql-react";

const Proyecto = () => {
  const router = useRouter();

  return (
    <App>
      <Seccion
        claseSeccion={"header"}
        claseHeading={"main-heading"}
        claseSub={"main-subtitle"}
        titulo={router.query.titulo}
      />
      <div id="projects" className="section grey">
        <div className="w-container">
          <div className="divider grey"></div>
          <GQL repoString={router.query.titulo} />
        </div>
      </div>
    </App>
  );
};

export default Proyecto;

// GraphQL cliente
const graphql = new GraphQL();
const GQL = ({ queryString, repoString }) => {
  return (
    <GraphQLProvider graphql={graphql}>
      <GraphQLProveedor
        token={process.env.NEXT_PUBLIC_GITHUB_TOKEN}
        queryString="LAB-Smart-Machines"
        repoString={repoString}
      />
    </GraphQLProvider>
  );
};
