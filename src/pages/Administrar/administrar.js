import { React, useState } from "react";
import Menu from "../../components/menu";
import * as model from "../../service/model";

function Administrar(){
  const [progressPorcent, setPorgessPorcent] = useState(0);

  /*const handleProductChange = (event) => {
  }*/

  return (
    <div>
      <Menu />
      <h1> Entrei no administrador </h1>

      </div>
    );
}
export default Administrar;