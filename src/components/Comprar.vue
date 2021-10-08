<template>
  <div class="container col-md-10" >
      <br><br>
      <h1>Lista de productos</h1>
      <br><br>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Producto</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Añadir</th>
        </tr>
      </thead>
      <tbody>

        <tr >
          <td>
            <img
             src="../assets/productos/galleta.jpg"
              height="200"
              width="150"
            />
          </td>
          <td>Galletas</td>
          <td>Deliciosas galletas caseras de chocolate, vainilla, limón  y fresa </td>
          <td>$2000</td>
          <td><select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
          </select></td>
          <td>
            <button class="btn btn-primary" type="submit" v-on:click="añadir"  >Añadir</button>
          </td>
        </tr>

        <tr >
          <td>
            <img
             src="../assets/productos/gogurt.jpg"
              height="200"
              width="150"
            />
          </td>
          <td>Gogurt</td>
          <td>Gogurt en bolsa de 250 ml, sabores a fresa, mora, melocoton y frutos rojos </td>
          <td>$700</td>
          <td><select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
          </select></td>
          <td>
            <button class="btn btn-primary">
              Añadir
            </button>
          </td> 
        </tr>

        <tr >
          <td>
            <img
             src="../assets/productos/huevos.jpg"
              height="200"
              width="150"
            />
          </td>
          <td>Huevos</td>
          <td>Panal de huevos criollos blanco tipo A1</td>
          <td>$10000</td>
          <td><select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
          </select></td>
          <td>
            <button class="btn btn-primary">
              Añadir
            </button>
          </td>
        </tr>

        <tr >
          <td>
            <img
             src="../assets/productos/harina.jpg"
              height="200"
              width="150"
            />
          </td>
          <td>Harina</td>
          <td>Harina de trigo por 500 gr</td>
          <td>$4000</td>
          <td><select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
          </select></td>
          <td>
            <button class="btn btn-primary">
              Añadir
            </button>
          </td>
        </tr>
        
        <tr >
          <td>
            <img
             src="../assets/productos/escoba.jpg"
              height="200"
              width="150"
            />
          </td>
          <td>Escobas y traperos</td>
          <td>Escobas y traperos en material PET 100% reciclado</td>
          <td>$8000</td>
          <td><select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
          </select></td>
          <td>
            <button class="btn btn-primary">
              Añadir
            </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  
</script>