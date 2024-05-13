import React from 'react';
import { Menu } from 'antd';
import styles from "./Menu.module.scss"
const { SubMenu } = Menu;

interface MenuItem {
  key  : string;
  label: string;
  value: string;
}

interface MenuBarProps {
  menuItems          : MenuItem[];
  width              : string;
  selectedItem       : MenuItem;
  handleMenuItemClick: (item: MenuItem) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ menuItems, width, selectedItem, handleMenuItemClick }) => {

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[selectedItem?.key || '11']}
      style={{ width: width, height: 37 }}
      className={styles.mainMenu}
      onClick={(e) => {
        const clickedItem = menuItems.find((item) => item.key === e.key);
        if (clickedItem) {
          handleMenuItemClick(clickedItem);
        }
      }}
    >
      <SubMenu key="1" title={selectedItem ? selectedItem.value : 'Default Title'} className={styles.subMenu}>
        {menuItems.map((item) => (
          <Menu.Item key={item.key} className={styles.item}>
            <span onClick={() => handleMenuItemClick(item)}>{item.label}</span>
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
};

export default MenuBar;
