import React, { PureComponent } from "react";
import "./App.css";
import { loadAllItems, loadPromotions } from "./datbase";
const items = loadAllItems();
const chargeitems = loadPromotions();

class Product extends PureComponent {
  constructor(pros) {
    super(pros), (this.state = {});
  }

  chargeImformation = chargeitems => {
    items.forEach(item => {
      if (item.concat(chargeitems)) return chargeitems.type;
    });
  };

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>名称</th>
              <th>单位</th>
              <th>单价</th>
              <th>优惠信息</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <tr key={item.barcode}>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                  <td onChange="chargeImformation()" />
                  <button>添加购物车</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Product;
