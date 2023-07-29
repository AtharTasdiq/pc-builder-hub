import {
    FacebookFilled,
    LinkedinFilled,
    GoogleSquareFilled,
    TwitterSquareFilled,
  } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const {  Content, Footer } = Layout;
  import styles from "@/styles/Home.module.css";
  import Link from "next/link";
import CategoryDropdown from "../Dropdown";
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';
import logoPic from '@/assets/images/pcLogo.png';


const imageStyle = {
  height: "100px",
  width: "100px",
  objectFit: "contain",
};
  
//   const RootLayout = ({ children }) => {
    

//     const { SubMenu } = Menu;
// const { Text } = Typography;

//   const [current, setCurrent] = useState('mail');
//   const [visible, setVisible] = useState(false);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   const handleClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };
   
//     const { data: session } = useSession();
    
//     return (

//       <Layout>
//       <header
    //   style={{
    //   justifyContent: "space-between",
    //   alignItems: "center",
    //   textAlign:"center"
    //   //   padding: "20px 10px",
    //   //   background: "black",
    // }}
//       >
        
//       <div style={{
//         width: '220px',
//         height: '100px',
//         margin: '16px 24px 16px 0',
//         background: 'rgba(255, 255, 255, 0.3)'
//       }}>
//         <a > <Image style={imageStyle} src={logoPic} alt="logo" /></a>
//       </div>
//           <>
//             <Button className={Customstyles.menubtn} type="primary" shape="circle" icon={<MenuOutlined />} onClick={showDrawer}></Button>
//             <Drawer title={<img src={logoPic} alt="logo" />} placement="right" onClose={onClose} visible={visible}>
//               <div style={{ display: 'flex', flexDirection: "column" }}>
//                 <Button type="text" href="/finances" icon={<EuroOutlined />}>Finances</Button>
//                 <Button type="text" href="/sante" icon={<HeartOutlined />}>Santé</Button>
//                 <Button type="text" href="/mathematiques" icon={<CalculatorOutlined />}>Mathématiques</Button>
//                 <Button type="text" href="/autres" icon={<BarsOutlined />}>Autres</Button>
//               </div>
//             </Drawer>
//           </>
//       <div>
//           <Menu className={Customstyles.bigmenu}
//             onClick={handleClick}
//             selectedKeys={[current]}
//             mode="horizontal"
//             overflowedIndicator={<MenuOutlined />}
//           >
//             <Menu.Item key="pc-builder" icon={<EuroOutlined />}>
//               <Link href="/pc-builder"> Finances </Link>
//             </Menu.Item>
//             <Menu.Item key="santé" icon={<HeartOutlined />}>
//               <Link href="/sante">  Santé </Link>
//             </Menu.Item>
//             <Menu.Item key="apmathsp" icon={<CalculatorOutlined />}>
//               <Link href="/mathematiques">   Mathématiques </Link>
//             </Menu.Item>
//             <Menu.Item key="autres" icon={<BarsOutlined />}>
//               Autres
//             </Menu.Item>


//           </Menu>
//       </div>
//       </header>

//       <Content
//           style={{
//             minHeight: "100vh",
//           }}
//         >
//           {children}
//         </Content>




//     <Footer
//           style={{
//             textAlign: "center",
//             paddingTop:"100px",
//           }}
//         >
//           <div className={styles.line}></div>
//           <h2
//             style={{
//               fontSize: "28px",
//             }}
//           >
//             PC Builder Hub
//           </h2>
//           <p className={styles.social_icons}>
//             <Link href="https://www.facebook.com/AtharTasdiq" target="_blank">
//               <FacebookFilled />
//             </Link>
//             <Link href="www.twitter.com" target="_blank">
//               <TwitterSquareFilled />
//             </Link>
//             <Link href="https://google.com" target="_blank">
//               <GoogleSquareFilled />
//             </Link>
//             <Link href="https://www.linkedin.com/in/athar-tasdiq-2615231b8/" target="_blank">
//               <LinkedinFilled />
//             </Link>
//           </p>
//           PC Builder Hub ©2023 Created by Atahar Ali Khan
//         </Footer>
//         </Layout>
    

    
//     //   <Layout>
//     //  <header>
//     //   style={{
//     //     display: "flex",
//     //     justifyContent: "space-between",
//     //     alignItems: "center",
//     //     padding: "20px 10px",
//     //     background: "black",
//     //   }}
//     // >
//     //   <div className="brand-logo">
//     //     <h1>
//     //       <Link href="/">
//     //         <button
//     //           type="button"
//     //           style={{
//     //             color: "white",
//     //             backgroundColor: "#404040",
//     //             padding: "5px 10px",
//     //             borderRadius: "3px",
//     //           }}
//     //         >
//     //           PC BUILDER HUB
//     //         </button>
//     //       </Link>
//     //     </h1>
//     //   </div>

      // <nav>
      //   <ul className="menu">
      //     <li>
      //       <Link href="/pc-builder">
      //         <button type="button" className="menu-button">PC Builder</button>
      //       </Link>
      //     </li>
      //     <li>
      //       <CategoryDropdown />
      //     </li>
      //     <li>
      //       <Link href="/contact">
      //         <button type="button" className="menu-button">Contact Us</button>
      //       </Link>
      //     </li>
      //     <li>
      //       {session?.user ? (
      //         <button onClick={() => signOut()} className="menu-button" style={{ background: "#1890ff" }}>
      //           Logout
      //         </button>
      //       ) : (
      //         <Link href="/login">
      //           <button type="button" className="menu-button">Login</button>
      //         </Link>
      //       )}
      //     </li>
      //   </ul>
      // </nav>

//     //   <style jsx>{`
//     //     header {
//     //       display: flex;
//     //       justify-content: space-around;
//     //       align-items: center;
//     //       padding: 0 10px;
//     //       background: transparent;
//     //     }

//     //     .brand-logo {
//     //       h1 {
//     //         margin: 0;
//     //       }
//     //     }

//     //     .menu {
//     //       list-style-type: none;
//     //       display: flex;
//     //       margin: 0;
//     //       padding: 0;
//     //       font-size: 18px;
//     //     }

//     //     .menu li {
//     //       margin: 0 10px;
//     //     }

//     //     .menu-button {
//     //       color: black;
//     //       font-size: 18px;
//     //       background-color: white;
//     //       padding: 10px 20px;
//     //       border-radius: 3px;
//     //       border: none;
//     //       cursor: pointer;
//     //     }

//     //     @media (max-width: 768px) {
//     //       .menu {
//     //         flex-direction: column;
//     //         font-size: 16px;
//     //       }

//     //       .menu li {
//     //         margin: 5px 0;
//     //       }
//     //     }
//     //   `}</style>
//     // </header>
  
//     //     <Content
//     //       style={{
//     //         minHeight: "100vh",
//     //       }}
//     //     >
//     //       {children}
//     //     </Content>
//     //   </Layout>
//     );
//   };
//   export default RootLayout;





import { useState, useEffect } from "react";
import { Modal, Tabs, Dropdown } from "antd";
import {
  HomeFilled,
  LockFilled,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const RootLayout = (props) => {
  const router = useRouter();
  const [menuMode, setMenuMode] = useState("inline");
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  const { data: session } = useSession();
  const showMainMenu = () => {
    return (
      <Menu
        mode={menuMode}
        defaultSelectedKeys={["Home"]}
        style={menuMode === "inline" ? { width: "100vw" } : { padding: "0 50px", background: "transparent" }}
        onClick={() => setMenuVisible(false)}
      >
        {menuMode === "inline" && (
          <Menu.Item
            key="close"
            style={{ textAlign: "right" }}
            onClick={() => setMenuVisible(false)}
          >
            <CloseOutlined />
          </Menu.Item>
        )}
        <Menu.Item key="Home">
            <Link href="/pc-builder">
              <Button type="button" className="menu-button">PC Builder</Button>
            </Link>
        </Menu.Item>
        <Menu.Item key="Home">
        <CategoryDropdown />
        </Menu.Item>
        <Menu.Item key="Home">
            <Link href="/contact">
              <Button type="button" className="menu-button">Contact Us</Button>
            </Link>
        </Menu.Item>
        <Menu.Item key="Home">
            {session?.user ? (
              <Button onClick={() => signOut()} className="menu-button">
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button type="button" className="menu-button">Login</Button>
              </Link>
            )}
        </Menu.Item>

        

        

        {props.menuList &&
          props.menuList.map((menu, index) => {
            return menu.child.length > 0 ? (
              <SubMenu key={index} title={menu.caption}>
                {menu.child.map((child, childIndex) => {
                  return (
                    <Menu.Item key={child.caption + childIndex}>
                      <Link href={child.url}>
                        <a>{child.caption}</a>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={index}>
                <Link href={menu.url ? menu.url : ""}>
                  <a>{menu.caption}</a>
                </Link>
              </Menu.Item>
            );
          })}
        {showLoginMenu()}
      </Menu>
    );
  };

  const showLoginMenu = () => {
  };

  const checkWindowSize = () => {
    if (window.innerWidth > 599) {
      setMenuMode("horizontal");
    } else {
      setMenuMode("inline");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, [menuMode, setMenuMode]);

  return (

    <Layout>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      textAlign:"center",
      //   padding: "20px 10px",
    }}>
      <Link href="/" > <Image style={imageStyle} src={logoPic} alt="logo" /></Link>
      {menuMode === "inline" ? (
        <Dropdown overlay={showMainMenu()} visible={menuVisible}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick();
            }}
          >
            <MenuOutlined style={{ margin: "20px" }} />
          </a>
        </Dropdown>
      ) : (
        showMainMenu()
      )}
    </div>


        <Content
          style={{
            minHeight: "100vh",
          }}
        >
          {props.children}
        </Content>

       <Footer
          style={{
            textAlign: "center",
            paddingTop:"100px",
          }}
        >
          <div className={styles.line}></div>
          <h2
            style={{
              fontSize: "28px",
            }}
          >
            PC Builder Hub
          </h2>
          <p className={styles.social_icons}>
            <Link href="https://www.facebook.com/AtharTasdiq" target="_blank">
              <FacebookFilled />
            </Link>
            <Link href="www.twitter.com" target="_blank">
              <TwitterSquareFilled />
            </Link>
            <Link href="https://google.com" target="_blank">
              <GoogleSquareFilled />
            </Link>
            <Link href="https://www.linkedin.com/in/athar-tasdiq-2615231b8/" target="_blank">
              <LinkedinFilled />
            </Link>
          </p>
          PC Builder Hub ©2023 Created by Atahar Ali Khan
        </Footer>
    </Layout>
  );
};

export default RootLayout;



