/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 13:58:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:17:41
 * @Description:无状态组件
 * @Email: uvdream@163.com
 */
import React from "react";
import { Input, Button, List } from "antd";
const ToDoListUi = props => {
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Input
          placeholder="请输入新增内容"
          style={{ width: "250px", marginRight: "20px" }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.clickBtn}>
          新增
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
// class ToDoListUi extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{ margin: "10px" }}>
//           <Input
//             placeholder="请输入新增内容"
//             style={{ width: "250px", marginRight: "20px" }}
//             onChange={this.props.changeInputValue}
//             value={this.props.inputValue}
//           />
//           <Button type="primary" onClick={this.props.clickBtn}>
//             新增
//           </Button>
//         </div>
//         <div style={{ margin: "10px", width: "300px" }}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => {
//                   this.props.deleteItem(index);
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default ToDoListUi;
